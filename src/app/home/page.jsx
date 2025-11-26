
"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isOn, setIsOn] = useState(true);

  // Dados simulados (substitua pelo que vem do banco)
  const locais = [
    { id: 1, nome: "Estufa 1", umidade: "85%", temperatura: "24°C" },
    { id: 2, nome: "Estufa 2", umidade: "70%", temperatura: "22°C" },
    { id: 3, nome: "Laboratório", umidade: "60%", temperatura: "20°C" },
  ];

  const [localSelecionado, setLocalSelecionado] = useState(locais[0]);

  function togglePower() {
    setIsOn((prev) => !prev);
  }

  function handleChangeLocal(e) {
    const id = parseInt(e.target.value);
    const local = locais.find((l) => l.id === id);
    setLocalSelecionado(local);
  }

  return (
    <div className={styles.body}>
      <header className={styles.header}>
         <img src="/logo.png" alt="Logo BLUVA" />
        <span>BLUVA</span>
      </header>

      <main className={styles.container}>
        {/* Select de locais */}
        <div className={styles.localSelect}>
          <select onChange={handleChangeLocal} value={localSelecionado.id}>
            {locais.map((local) => (
              <option key={local.id} value={local.id}>
                {local.nome}
              </option>
            ))}
          </select>
        </div>

        {/* Sensores alterados conforme o local */}
        <div className={styles.sensorCards}>
          <div className={styles.card}>
            <h3 className={styles.cardTxt}>UMIDADE</h3>
            <Image src="/umidade.png" alt="Umidade" width={100} height={100} />
            <p>{localSelecionado.umidade}</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTxt}>TEMPERATURA</h3>
            <Image src="/temperatura.png" alt="Temperatura" width={100} height={100} />
            <p>{localSelecionado.temperatura}</p>
          </div>
        </div>

        <div className={styles.buttonRow}>
          <Link href="/termos">
            <button className={styles.iconButton}>
              <Image src="/engre.png" alt="Termos" width={90} height={90} />
            </button>
          </Link>

          <Link href="/perfil">
            <button className={styles.iconButton}>
              <Image src="/user.png" alt="Perfil" width={90} height={90} />
            </button>
          </Link>

          <Link href="/chat">
            <button className={styles.iconButton}>
              <Image src="/ajuda.png" alt="Ajuda" width={90} height={90} />
            </button>
          </Link>

          <button
            className={`${styles.iconButtonG} ${isOn ? "" : styles.off}`}
            onClick={togglePower}
            aria-pressed={isOn}
            aria-label="Botão ligar/desligar"
          >
            <Image src="/liga.png" alt="Power" width={90} height={90} />
          </button>
        </div>
      </main>

    </div>
  );
}
