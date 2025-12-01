"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import api from "@/services/api";
import Card from "@/componentes/mensagens/card";

export default function Home() {
  const [isOn, setIsOn] = useState(true);
  const [locais, setLocais] = useState([]);
  const [localSelecionado, setLocalSelecionado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listarLocais();
  }, []);

  async function listarLocais() {
    try {
      const response = await api.get("/locais/listar");

      if (response.data.sucesso === true) {
        const locApi = response.data.dados;
        setLocais(locApi);
        setLocalSelecionado(locApi[0]);
      } else {
        alert(response.data.mensagem);
      }

    } catch (error) {
      alert("Erro ao conectar com a API");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

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
        {loading ? (
          <div className={styles.loading}>Carregando...</div>
        ) : locais.length > 0 ? (
          <>
            <div className={styles.localSelect}>
              <select onChange={handleChangeLocal} value={localSelecionado?.id}>
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

            <div className={styles.sensorCards}>
              <div className={styles.card}>
                <h3 className={styles.cardTxt}>UMIDADE</h3>
                <Image src="/umidade.png" alt="Umidade" width={100} height={100} />
                <p>{localSelecionado?.umidade}</p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTxt}>TEMPERATURA</h3>
                <Image src="/temperatura.png" alt="Temperatura" width={100} height={100} />
                <p>{localSelecionado?.temperatura}</p>
              </div>
            </div>
          </>
        ) : (
          <h1>Não foi possível carregar os locais</h1>
        )}

        <div className={styles.buttonRow}>
          <Link href="/termos">
            <button className={styles.iconButton}>
              <Image src="/engre.png" alt="Termos" width={80} height={80} />
            </button>
          </Link>

          <Link href="/perfil">
            <button className={styles.iconButton}>
              <Image src="/user.png" alt="Perfil" width={80} height={80} />
            </button>
          </Link>

          <Link href="/chat">
            <button className={styles.iconButton}>
              <Image src="/ajuda.png" alt="Ajuda" width={80} height={80} />
            </button>
          </Link>

          <button
            className={`${styles.iconButtonG} ${isOn ? "" : styles.off}`}
            onClick={togglePower}
          >
            <Image src="/liga.png" alt="Power" width={80} height={80} />
          </button>
        </div>
      </main>
    </div>
  );
}
