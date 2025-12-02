'use client';

import { useRouter } from "next/navigation"; // Importado para navegação
import styles from './page.module.css';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'; 
import api from '@/services/api'; 

export default function Cadastro() {
    // Inicialização do useRouter
    const router = useRouter(); 
    
    // Estado inicial com os campos do formulário
    const [dados, setDados] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        tipo_usu: 1, 
        telefone: ''
    });

    // Função para atualizar o estado conforme o usuário digita
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDados((prev) => ({ ...prev, [name]: value }));
    };

    // Função de validação
    function handleValida() {
        let validado = true;
        
        if (dados.nome === '' || dados.email === '' || dados.senha === '' || dados.telefone === '') {
            alert('Todos os campos obrigatórios (Nome, E-mail, Senha e Telefone) devem ser preenchidos!');
            validado = false;
        } else if (dados.senha !== dados.confirmarSenha) {
            alert('A Senha e a Confirmação de Senha não coincidem!');
            validado = false;
        } else if (dados.tipo_usu < 1) { 
            alert('Selecione um Tipo de Usuário válido!');
            validado = false;
        }
        
        return validado;
    }

    // Função para enviar os dados de cadastro para a API (POST)
    async function handleCadastro() {
        const validado = handleValida();
        
        if (validado === true) {
            try {
                const response = await api.post('/usuarios', {
                    nome: dados.nome,
                    email: dados.email,
                    senha: dados.senha,
                    tipo_usu: dados.tipo_usu,
                    telefone: dados.telefone
                });
                
                // Trata o sucesso
                if (response.data.sucesso === true) {
                    // Mensagem de sucesso ANTES do redirecionamento
                    alert('Cadastro realizado com sucesso! Você será redirecionado para a tela inicial.'); 
                    
                    // Redireciona para /home
                    router.push('/home'); 
                } else {
                    alert('Erro no cadastro: ' + response.data.mensagem);
                }

            } catch (error) {
                // Tratamento de Erro Robusto
                if (error.response) {
                    const mensagem = error.response.data.mensagem || 'Erro na requisição da API.';
                    const detalhes = error.response.data.dados || 'Sem detalhes específicos do erro.';
                    
                    alert(`Ocorreu um erro:\n${mensagem}\nDetalhes: ${detalhes}`);
                    
                } else {
                    alert('Erro de conexão: Verifique se a API está ativa e a configuração do axios.\n' + error.message);
                }
            }
        }
    }

    return (
        <div className={styles.body}>
            <div className={styles.cadastroContainer}>
                <Image className={styles.img} src="/usu.png" alt="Usuário" width={130} height={130} />
            
                <h1 className={styles.title}>Cadastre-se</h1>

                {/* --- CAMPOS DE ENTRADA --- */}
                
                <input
                    type="text"
                    placeholder="Nome completo"
                    name="nome"
                    value={dados.nome}
                    onChange={handleChange}
                    className={styles.input}
                />
                
                <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={dados.email}
                    onChange={handleChange}
                    className={styles.input}
                />
                
                <input
                    type="text"
                    placeholder="Telefone"
                    name="telefone"
                    value={dados.telefone}
                    onChange={handleChange}
                    className={styles.input}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    name="senha"
                    value={dados.senha}
                    onChange={handleChange}
                    className={styles.input}
                />
                
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    name="confirmarSenha"
                    value={dados.confirmarSenha}
                    onChange={handleChange}
                    className={styles.input}
                />
                
                <input 
                    type="hidden" 
                    name="tipo_usu" 
                    value={dados.tipo_usu} 
                />

                {/* Botão de Cadastro que chama a função handleCadastro */}
                <button onClick={handleCadastro} className={styles.cadastroBtn}>
                    Cadastrar
                </button>
                
            </div>
        </div>
    );
}