'use client';
import styles from './page.module.css';

export default function entrada() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.iconButton}>
          <img
            className={styles.imgl}
            src="/logoredonda.png"
            alt="Logo BLUVA"
          />
          <h1 className={styles.titulo}>BLUVA</h1>
        </div>

        <select id="tipoUsuario" className={styles.select}>
          <option value="">Selecione</option>
          <option value="usuario">Usuário</option>
          <option value="tecnico">Técnico</option>
        </select>

        <button
          className={styles.button}
          onClick={() => {}}
        >
          Prosseguir
        </button>
      </div>
    </div>
  );
}