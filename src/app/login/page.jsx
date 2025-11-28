"use client";

import { useState } from "react";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link"; 

import api from "@/services/api";

export default function Login() { 

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  async function handleLogin() {
    try {
      console.log(`/login?email=${email}&senha=${senha}`);
      
      const response = await api.get(`/login?email=${email}&senha=${senha}`);
      console.log('Login bem-sucedido:', response.data);

    } catch (error) {
      console.error('Erro no login:', error);
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

      {/* <Link href={'/home'} className={styles.loginBtn}>
          <label >Entrar</label>
        </Link> */}

      <div>
        <span
          onClick={() => handleLogin()}
        >Login</span>
      </div>

      <p>
        Não tem uma conta?{" "}
        <Link href="/cadastro">
          <label className={styles.link}>Cadastre-se</label>
        </Link>
      </p>
    </main>
    </div>
  );
}
