'use client';
import { useState, useRef, useEffect } from "react";
import styles from "./page.module.css";

export default function chat() {
  const [mensagens, setMensagens] = useState([
    { texto: "Ola", lado: "direita" },
    { texto: "OI", lado: "esquerda" },
  ]);
  const [input, setInput] = useState("");
  const mensagensRef = useRef(null);

  function enviarMensagem() {
    const texto = input.trim();
    if (!texto) return;

    setMensagens((msgs) => [...msgs, { texto, lado: "direita" }]);
    setInput("");
  }

  useEffect(() => {
    if (mensagensRef.current) {
      mensagensRef.current.scrollTop = mensagensRef.current.scrollHeight;
    }
  }, [mensagens]);

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <button
          className={styles.backButton}
          onClick={() => {}}
          aria-label="Voltar"
        >
          <img src="/voltar.png" alt="Voltar" />
        </button>
        <img src="/logo.png" alt="Logo BLUVA" />
        <span>BLUVA</span>
      </div>

      <div className={styles.contatoChat}>
        <div className={styles.cabecalhoChat}>Nome Sobrenome</div>

        <div className={styles.mensagensChat} id="mensagens" ref={mensagensRef}>
          {mensagens.map((msg, i) => (
            <div
              key={i}
              className={
                msg.lado === "direita"
                  ? styles.msgDireita
                  : styles.msgEsquerda
              }
            >
              {msg.texto}
            </div>
          ))}
        </div>

        <div className={styles.entradaChat}>
          <input
            type="text"
            id="input-chat"
            placeholder="Digite sua dúvida..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") enviarMensagem();
            }}
          />
          <button onClick={enviarMensagem} aria-label="Enviar mensagem">
            <img src="/enviar.png" alt="Enviar" />
          </button>
        </div>
      </div>
    </div>
  );
}
