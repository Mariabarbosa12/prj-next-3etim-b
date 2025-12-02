"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link"; 

import api from "@/services/api";

export default function Login() { 

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin() {
        setErrorMsg("");
        if (!email || !senha) {
            setErrorMsg("Preencha e-mail e senha.");
            return;
        }
        try {
            setLoading(true);
            
            // A chamada GET envia email e senha via query parameters para a API
            const response = await api.get(`/login?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`);

            // O backend retorna status 403 com a mensagem de erro
            if (response?.status === 200 && response?.data?.sucesso) {
                // Sucesso: salva dados retornados pela API no localStorage para identificar usuário
                try {
                    const userData = response.data.dados || null;
                    if (userData) {
                        // chave: 'user' — pode ser alterada se preferir outro nome
                        localStorage.setItem('user', JSON.stringify(userData));
                        // também armazenamos um flag simples
                        localStorage.setItem('isLogged', 'true');
                    }
                } catch (e) {
                    console.warn('Não foi possível salvar dados no localStorage:', e);
                }
                // Redireciona para home
                router.push('/home');
            } else if (response?.data?.mensagem) {
                // Captura mensagem de erro do backend se disponível (ex: "E-mail ou senha inválidos.")
                setErrorMsg(response.data.mensagem);
            } else {
                // Mensagem genérica se a API retornar algo inesperado
                 setErrorMsg('Login ou senha incorretos.');
            }

        } catch (error) {
            // Este bloco captura erros de rede ou status 4xx/5xx lançados pelo Axios
            if (error.response && error.response.data && error.response.data.mensagem) {
                 setErrorMsg(error.response.data.mensagem);
            } else {
                console.error('Erro no login:', error);
                setErrorMsg('Login ou senha incorretos.');
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={styles.body}>
            <main className={styles.loginContainer}>
                <Image className={styles.img} src="/usu.png" alt="Usuário" width={130} height={130} />
                <h1>Login</h1>

                <input
                    type="text"
                    placeholder="Nome de usuário ou e-mail"
                    id="usuario"
                    className={styles.input}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    id="senha"
                    className={styles.input}
                    onChange={(event) => setSenha(event.target.value)}
                />

                <div style={{ marginTop: '0.75rem' }}>
                    <button
                        className={styles.loginBtn}
                        onClick={handleLogin}
                        disabled={loading}
                        style={{ cursor: loading ? 'wait' : 'pointer' }}
                    >
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                </div>

                {errorMsg && (
                    <p style={{ color: 'crimson', marginTop: '0.75rem' }}>{errorMsg}</p>
                )}

                <p style={{ marginTop: '0.75rem' }}>
                    Não tem uma conta?{' '}
                    <Link href="/cadastro">
                        <label className={styles.link}>Cadastre-se</label>
                    </Link>
                </p>
            </main>
        </div>
    );
}