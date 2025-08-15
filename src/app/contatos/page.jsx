"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Contatos() {
  const router = useRouter();

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <button
          className={styles.backButton}
          onClick={() => {}}
          aria-label="Voltar"
        >
          <Image
            src="/voltar.png"
            alt="Voltar"
            width={24}
            height={24}
            priority
          />
        </button>

        <Image src="/logo.png" alt="Logo BLUVA" width={30} height={30} priority />
        <span>BLUVA</span>
      </div>

      <div className={styles.container}>
        <div className={styles.titulo}>CONTATOS</div>

        <div className={styles.contato}>
          <Image src="/usu.png" alt="Ícone usuário" width={45} height={45} />
          <Link href="/chat/chat" className={styles.apelido}>
            @Usuario123
          </Link>
          
        </div>
      </div>
    </div>
  );
}
