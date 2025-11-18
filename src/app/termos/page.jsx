"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";


export default function termos() {

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <Link  href={'/home'}
          className={styles.backButton}
        >
          <Image src="/voltar.png" alt="Voltar" width={130} height={124} priority />
        </Link>
        <Image src="/logo.png" alt="Logo BLUVA" width={180} height={180} priority />
        <span>BLUVA</span>
      </div>

      <div className={styles.container}>
        <p className={styles.sm}>Termos de uso e Politica de privacidade:</p>

       <div className={styles.texto}>
       <div className={styles.boxTexto}>

      <p> </p>

     </div>
     </div>
      </div>
    </div>
  );
}
