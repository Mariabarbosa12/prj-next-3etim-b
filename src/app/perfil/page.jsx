"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Perfil() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Link  href={'/home'}
          className={styles.backButton}
        >
          <Image src="/voltar.png" alt="Voltar" width={30} height={24} priority />
        </Link>
        <Image src="/logo.png" alt="BLUVA logo" width={100} height={30} />
        <span>BLUVA</span>
      </header>

      <main className={styles.container}>
        <h2 className={styles.sm}>PERFIL DO USUÁRIO</h2>

        <section className={styles.cccontainer}>
          <div className={styles.infoSection}>
            <div className={styles.perfilInfo}>
              <Image
                src="/usu.png"
                alt="Foto de Perfil"
                width={160}
                height={160}
                className={styles.profileImage}
              />
              <div >
                <span>APELIDO:</span>
                <input className={styles.perfilInput} type="text" value="@Usuário123" disabled />
              </div>
            </div>

            <div className={styles.inputInfo}>
              <label>
                <span>NOME:</span>
                <input type="text" value="João Silva" disabled />
              </label>
              <label>
                <span>EMAIL:</span>
                <input type="text" value="joao.silva@email.com" disabled />
              </label>
              <label>
                <span>TELEFONE:</span>
                <input type="text" value="(11) 91234-5678" disabled />
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
          </div>
        </section>
      </main>
    </div>
  );
}
