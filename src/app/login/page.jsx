"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles.body}>
    <main className={styles.loginContainer}>
      <Image src="/usu.png" alt="Usuário" width={480} height={480} />
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Nome de usuário ou e-mail"
        id="usuario"
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Senha"
        id="senha"
        className={styles.input}
      />

      <Link href={'/home'} className={styles.loginBtn}>
          <label >Entrar</label>
        </Link>

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
