"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // API pública Open-Meteo (umidade real de Tupã-SP)
  const API_UMIDADE =
    "https://api.open-meteo.com/v1/forecast?latitude=-21.9333&longitude=-50.5167&current=relative_humidity_2m";

  // Endereço do ESP32 (somente para controle da bomba)
  const API_ESP = "http://192.168.0.150";

  const [isOn, setIsOn] = useState(false);
  const [umidadeAr, setUmidadeAr] = useState("--");
  const [temperatura] = useState("—");
  const [modoManual, setModoManual] = useState(false);
  const [nivelMinimo, setNivelMinimo] = useState(30);

  const locais = [{ id: 1, nome: "Estufa Principal" }];
  const [localSelecionado, setLocalSelecionado] = useState(locais[0]);

  function handleChangeLocal(e) {
    const id = parseInt(e.target.value);
    const local = locais.find((l) => l.id === id);
    setLocalSelecionado(local);
  }

  // 🔥 BUSCAR UMIDADE REAL DE TUPÃ (API OPEN-METEO)
  useEffect(() => {
    const interval = setInterval(() => {
      fetch(API_UMIDADE)
        .then((r) => r.json())
        .then((data) => {
          if (data?.current?.relative_humidity_2m !== undefined) {
            setUmidadeAr(data.current.relative_humidity_2m + "%");
          }
        })
        .catch(() => {});
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // 🔥 BUSCA ESTADO DO ESP32 (APENAS bomba + modo)
  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`${API_ESP}/data`)
        .then((r) => r.json())
        .then((data) => {
          setIsOn(data.bomba);
          setModoManual(data.manual);
        })
        .catch(() => {});
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // 🔥 Alternar modo automático/manual
  function toggleModoManual() {
    fetch(`${API_ESP}/manual`);
    setModoManual((prev) => !prev);
  }

  // 🔥 Ligar/desligar a bomba
  function togglePower() {
    fetch(`${API_ESP}/toggle`);
    setIsOn((prev) => !prev);
  }

  // 🔥 Alterar nível mínimo de acionamento
  function alterarNivelMinimo(e) {
    const novoValor = e.target.value;
    setNivelMinimo(novoValor);
    fetch(`${API_ESP}/setnivel?valor=${novoValor}`);
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

          <Link href="/quest">
            <button className={styles.iconBut}>
              <Image src="/plus.png" alt="Mais" width={15} height={15} />
            </button>
          </Link>
        </div>

        {/* Sensores usando API pública */}
        <div className={styles.sensorCards}>
          <div className={styles.card}>
            <h3 className={styles.cardTxt}>UMIDADE</h3>
            <Image src="/umidade.png" alt="Umidade" width={100} height={100} />
            <p>{umidadeAr}</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTxt}>TEMPERATURA</h3>
            <Image src="/temperatura.png" alt="Temperatura" width={100} height={100} />
            <p>{temperatura}</p>
          </div>
        </div>

        {/* Controle de nível mínimo */}
        <div className={styles.cardNivel}>
          <h3 className={styles.cardNxt}>Nível mínimo (%)</h3>
          <input
            type="range"
            min="0"
            max="100"
            value={nivelMinimo}
            onChange={alterarNivelMinimo}
            className={styles.slider}
          />
          <p>{nivelMinimo}%</p>
        </div>

        {/* Botões */}
        <div className={styles.buttonRow}>
          <Link href="/termos">
            <button className={styles.iconButton}>
              <Image src="/engre.png" alt="Termos" width={75} height={75} />
            </button>
          </Link>

          <Link href="/perfil">
            <button className={styles.iconButton}>
              <Image src="/user.png" alt="perfil" width={75} height={75} />
            </button>
          </Link>

          <Link href="/chat">
            <button className={styles.iconButton}>
              <Image src="/ajuda.png" alt="Modo" width={75} height={75} />
            </button>
          </Link>

          <button className={styles.iconButton} onClick={toggleModoManual}>
            <p className={styles.txt}>{modoManual ? "Manual" : "Auto"}</p>
          </button>

          <button
            className={`${styles.iconButtonG} ${isOn ? "" : styles.off}`}
            onClick={togglePower}
            aria-label="Botão ligar/desligar"
          >
            <Image src="/liga.png" alt="Power" width={70} height={70} />
          </button>
        </div>
      </main>
    </div>
  );
}
