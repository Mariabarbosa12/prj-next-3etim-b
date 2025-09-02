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
        <Link href={'./perfiltecn'}
          className={styles.backButton}
        >
          <Image
            src="/voltar.png"
            alt="Voltar"
            width={24}
            height={24}
            priority
          />
        </Link>

        <Image src="/logoredonda.png" alt="Logo BLUVA" width={30} height={30} priority />
        <span>BLUVA</span>
      </div>

      <div className={styles.container}>
        <div className={styles.titulo}>CONTATOS</div>

        <div className={styles.contato}>
          <Image src="/usu.png" alt="Ícone usuário" width={45} height={45} />
          <Link href="/chat" className={styles.apelido}>
            @Usuario123
          </Link>
          
        </div>
      </div>
    </div>
  );
}
