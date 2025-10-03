'use client';
import Link from 'next/link';
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

        <p className={styles.p}>
       SEJA BEM-VINDO!
      </p>

        <Link href={'/login'} className={styles.button}>
          <label className={styles.txtButton}>Prosseguir</label>
        </Link>

      </div>
    </div>
  );
}