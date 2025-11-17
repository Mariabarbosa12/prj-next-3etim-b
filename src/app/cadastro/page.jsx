'use client';
import styles from './page.module.css';
import Image from "next/image";
import Link from "next/link";


export default function cadastro() {
  return (
    <div className={styles.body}>
      <div className={styles.cadastroContainer}>
     <Image className={styles.img} src="/usu.png" alt="Usuário" width={500} height={500} />
    
        <h1 className={styles.title}>Cadastre-se</h1>

        <input
          type="text"
          placeholder="Nome de usuario"
          id="nomeUsuario"
          className={styles.input}
        />
        <input
          type="email"
          placeholder="E-mail"
          id="email"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Senha"
          id="senha"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          id="confirmarSenha"
          className={styles.input}
        />
<Link href={'/home'} className={styles.cadastroBtn}>
          <label >Cadastrar</label>
        </Link>
      </div>
    </div>
  );
}
