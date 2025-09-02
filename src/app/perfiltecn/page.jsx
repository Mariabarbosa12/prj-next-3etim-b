"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function PerfilTecnico() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Image src="/logo.png" alt="BLUVA logo" width={100} height={30} />
        <span>BLUVA</span>
      </header>

      <main className={styles.container}>
        <h2 className={styles.h2}>PERFIL DO TÉCNICO</h2>

        <section className={styles.cccontainer}>
          <div className={styles.infoSection}>
            <div className={styles.perfilInfo}>
              <Image
                src="/usu.png"
                alt="Foto de Perfil"
                width={120}
                height={120}
                className={styles.profileImage}
              />
              <div>
                <span>APELIDO:</span>
                <input className={styles.perfilInput} type="text" value="@Técnico123" disabled />
              </div>
            </div>

            <div className={styles.inputInfo}>
              <label>
                <span>NOME:</span>
                <input type="text" value="Joana Lima" disabled />
              </label>
              <label>
                <span>EMAIL:</span>
                <input type="text" value="joanali@email.com" disabled />
              </label>
              <label>
                <span>NÚMERO DE TELEFONE:</span>
                <input type="text" value="(11) 91234-1138" disabled />
              </label>
              <label>
                <span>SENHA:</span>
                <input type="password" value="******" disabled />
              </label>
            </div>
          </div>

          <div className={styles.buttonSection}>
            <button>ALTERAR FOTO DE PERFIL</button>
            <button>ALTERAR APELIDO</button>
            <button>ALTERAR DADOS PESSOAIS</button>
            <button>EXCLUIR CONTA</button>
            <button>SAIR DA CONTA</button>

            <Link href={'/mensagens'}>
              <button className={styles.greenButton}>IR PARA CONTATOS</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
