import styles from './page.module.css';

export default function cadastro() {
  return (
    <div className={styles.body}>
      <div className={styles.cadastroContainer}>
        <img
          className={styles.icon}
          src="/usu.png"
          alt="Ícone de usuário"
        />
        <h1 className={styles.title}>Cadastre-se</h1>

        <input
          type="text"
          placeholder="Nome de usuario"
          id="nomeUsuario"
          className={styles.input}
        />
        <input
          type="email"
          placeholder="E-mail"
          id="email"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Senha"
          id="senha"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          id="confirmarSenha"
          className={styles.input}
        />

        <button
          className={styles.cadastroBtn}
          onClick={() => (window.location.href = '/home/home')}
        >
          Cadastre-se
        </button>
      </div>
    </div>
  );
}
