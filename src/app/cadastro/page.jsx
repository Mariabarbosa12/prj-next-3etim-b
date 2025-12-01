'use client';
import styles from './page.module.css';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'; // 1. Importar useState para gerenciar o estado do formulário
import api from '@/services/api'; // 2. Importar o módulo da API

export default function Cadastro() {
    // 3. Estado inicial com os campos que serão enviados para a API.
    // Note: Adicionei tipo_usu e telefone, pois seu backend os exige.
    const [dados, setDados] = useState({
        nome: '', // No frontend era 'nomeUsuario', mas o backend espera 'nome'
        email: '',
        senha: '',
        confirmarSenha: '',
        tipo_usu: 1, // Exemplo: 1 para tipo de usuário padrão (pode ser ajustado)
        telefone: ''
    });

    // 4. Função para atualizar o estado conforme o usuário digita [cite: 330]
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDados((prev) => ({ ...prev, [name]: value }));
    };

    // 5. Função de validação [cite: 349]
    function handleValida() {
        let validado = true;
        
        if (dados.nome === '' || dados.email === '' || dados.senha === '' || dados.telefone === '') {
            alert('Todos os campos obrigatórios (Nome, E-mail, Senha e Telefone) devem ser preenchidos!');
            validado = false;
        } else if (dados.senha !== dados.confirmarSenha) {
            alert('A Senha e a Confirmação de Senha não coincidem!');
            validado = false;
        } else if (dados.tipo_usu < 1) { // Garante que tipo_usu é válido
            alert('Selecione um Tipo de Usuário válido!');
            validado = false;
        }
        
        return validado;
    }

    // 6. Função para enviar os dados de cadastro para a API (POST)
    async function handleCadastro() {
        const validado = handleValida();
        
        if (validado === true) {
            try {
                // A chamada POST envia os dados para a API na rota '/usuarios' (exemplo)
                const response = await api.post('/usuarios', {
                    nome: dados.nome,
                    email: dados.email,
                    senha: dados.senha,
                    tipo_usu: dados.tipo_usu,
                    telefone: dados.telefone
                });
                
                // Trata o sucesso
                if (response.data.sucesso === true) {
                    alert('Cadastro realizado com sucesso!');
                    // Você pode adicionar um redirecionamento aqui, se desejar
                } else {
                    // Trata um sucesso=false, caso a API retorne status 200, mas sucesso=false
                    alert('Erro no cadastro: ' + response.data.mensagem);
                }

            } catch (error) {
                // Tratamento de Erro Robusto para evitar 'undefined'
                if (error.response) {
                    const mensagem = error.response.data.mensagem || 'Erro na requisição da API.';
                    const detalhes = error.response.data.dados || 'Sem detalhes específicos do erro.';
                    
                    alert(`Ocorreu um erro:\n${mensagem}\nDetalhes: ${detalhes}`);
                    
                } else {
                    // Erro de rede (servidor fora do ar, CORS, etc.)
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
                
                {/* Nome de usuário (mudado o 'id' e 'name' para 'nome' para o backend) */}
                <input
                    type="text"
                    placeholder="Nome completo"
                    name="nome"
                    value={dados.nome}
                    onChange={handleChange}
                    className={styles.input}
                />
                
                {/* E-mail */}
                <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={dados.email}
                    onChange={handleChange}
                    className={styles.input}
                />
                
                {/* Telefone (Adicionado pois o backend exige) */}
                 <input
                    type="text"
                    placeholder="Telefone (ex: 11999998888)"
                    name="telefone"
                    value={dados.telefone}
                    onChange={handleChange}
                    className={styles.input}
                />

                {/* Senha */}
                <input
                    type="password"
                    placeholder="Senha"
                    name="senha"
                    value={dados.senha}
                    onChange={handleChange}
                    className={styles.input}
                />
                
                {/* Confirme a senha */}
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    name="confirmarSenha"
                    value={dados.confirmarSenha}
                    onChange={handleChange}
                    className={styles.input}
                />
                
                {/* Oculto: Tipo de Usuário (Pode ser um select se houver mais opções) */}
                {/* Aqui, o valor é fixo '1' como exemplo, mas você pode adicionar um campo se necessário */}
                <input 
                    type="hidden" 
                    name="tipo_usu" 
                    value={dados.tipo_usu} 
                />

                {/* O Link foi substituído por um <button> que executa a função de POST */}
                <button onClick={handleCadastro} className={styles.cadastroBtn}>
                    Cadastrar
                </button>
                
            </div>
        </div>
    );
}