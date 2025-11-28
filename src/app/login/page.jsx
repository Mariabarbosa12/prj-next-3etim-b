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
      console.log(`/login?email=${email}&senha=${senha}`);
      const response = await api.get(`/login?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`);
      console.log('Login response:', response?.data);

      // Se o backend retornar um campo de erro, exibir; caso contrário assumir sucesso com status 200
      if (response?.data && response.data.error) {
        setErrorMsg(response.data.error || 'Login ou senha incorretos.');
      } else if (response?.status === 200) {
        // redireciona para /home ao obter sucesso
        router.push('/home');
      } else {
        setErrorMsg('Login ou senha incorretos.');
      }

    } catch (error) {
      console.error('Erro no login:', error);
      setErrorMsg('Login ou senha incorretos.');
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
