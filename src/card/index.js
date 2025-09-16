import Image from 'next/image';
import Link from "next/link";

import styles from './index.module.css';

export default function Card({ prod }) {
    return (
        <Link href={`/mensagens/mensagem${prod.id}`} className={styles.card}>
            <div className={styles.contato}>
          <Image src="/usu.png" alt="Ícone usuário" width={45} height={45} />
          <Link href="/chat" className={styles.apelido}>
            @Usuario123
          </Link>
          
        </div> 
        </Link>
    );
}