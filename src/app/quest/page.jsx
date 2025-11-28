"use client";

import styles from "./page.module.css";
import Link from "next/link";


export default function quest() {

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <Link  href={'/home'}
          className={styles.backButton}
        >
          <img src="/voltar.png" alt="Voltar" />
        </Link>
          <img src="/logo.png" alt="Logo BLUVA" />
        <span>BLUVA</span>
      </div>

      <div className={styles.container}>
       <p className={styles.sm}> ADICIONE UM NOVO LOCAL!</p>

        
       <p className={styles.txt}> NOME DO LOCAL:</p>
       <input
        type="text"
        placeholder="Nome do local"
        id="campo"
        className={styles.input}
      />

       <p className={styles.txt}> ID DO LOCAL DESEJADO:</p>
       <input
        type="text"
        placeholder="Identidade do local"
        id="local"
        className={styles.input}
      />
       <p className={styles.txt}> STATUS DO LOCAL DESEJADO:</p>
       <input
        type="text"
        placeholder="Status do local"
        id="status"
        className={styles.input}
      />
      
      <button className={styles.button}>Cadastrar!</button>

      </div>
    </div>
  );
}
