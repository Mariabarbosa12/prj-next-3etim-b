import styles from './page.module.css';
import { useRouter } from 'next/router';

export default function Entrada() {
  const router = useRouter();

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
          onClick={() => router.push('/login/login')}
        >
          Prosseguir
        </button>
      </div>
    </div>
  );
}

