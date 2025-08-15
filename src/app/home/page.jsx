"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isOn, setIsOn] = useState(true);

  function togglePower() {
    setIsOn((prev) => !prev);
  }

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Image src="/logo.png" alt="Logo BLUVA" width={50} height={50} />
        <span>BLUVA</span>
      </header>

      <main className={styles.container}>
        <div className={styles.sensorCards}>
          <div className={styles.card}>
            <h3>UMIDADE</h3>
            <Image src="/umidade.png" alt="Umidade" width={65} height={65} />
            <p>100%</p>
          </div>

          <div className={styles.card}>
            <h3>TEMPERATURA</h3>
            <Image src="/temperatura.png" alt="Temperatura" width={65} height={65} />
            <p>100%</p>
          </div>
        </div>

        <div className={styles.buttonRow}>
          <Link href="/grafico/grafico">
            <button className={styles.iconButton}>
              <Image src="/gota.png" alt="Gráfico" width={40} height={40} />
            </button>
          </Link>

          <Link href="/perfil/perfil">
            <button className={styles.iconButton}>
              <Image src="/user.png" alt="Perfil" width={40} height={40} />
            </button>
          </Link>

          <Link href="/chat/chat">
            <button className={styles.iconButton}>
              <Image src="/ajuda.png" alt="Ajuda" width={40} height={40} />
            </button>
          </Link>

          <button
            className={`${styles.iconButton} ${isOn ? "" : styles.off}`}
            onClick={togglePower}
            aria-pressed={isOn}
            aria-label="Botão ligar/desligar"
          >
            <Image src="/liga.png" alt="Power" width={40} height={40} />
          </button>
        </div>
      </main>
    </div>
  );
}
