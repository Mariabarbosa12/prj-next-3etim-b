
import styles from "./page.module.css";

export default function entrada() {
  return (
      <main className={styles.conteudo}>
        <nav className={styles.nave}>
          <Image src="/documentoImagem/logo.png" alt="Logo" width={180} height={180} />

          <ul className={styles.ulMenu}>
            <li className={styles.liMenu}><a href="#item" className={styles.aMenu}>🏠︎ Início</a></li>
            <li className={styles.liMenu}><a href="#item" className={styles.aMenu}>🗒Agenda</a></li>
            <li className={styles.liMenu}><a href="#item" className={styles.aMenu}>📄Publicações</a></li>
            <li className={styles.liMenu}><a href="#item" className={styles.aMenu}>☀ Rede de apoio</a></li>
            <li className={styles.liMenu}><a href="#item" className={styles.aMenu}>≡ Psicólogo</a></li>
          </ul>
        </nav>

        <section className={styles.entradaSite}>
          <figure className={styles.imgPrincipal}>
            <Image src="/documentoImagem/psicologo.png" alt="Imagem de um psicólogo e paciente" width={600} height={600} />
          </figure>

          <div className={styles.descricao}>
            <p>
            Este é um espaço para psicólogos e para quem busca cuidar da saúde mental.
        Possui: conteúdos sobre bem-estar, acesso a profissionais, valores de consulta e ferramentas exclusivas para
        acompanhar atendimentos.
        Explore, aprenda e cuide de você!
            </p>
            <button className={styles.saberMais}>Saber mais!</button>
          </div>
        </section>

        <section className={styles.ajudaItem}>
          {[1, 2, 3, 4].map(num => (
            <div className={styles.ajudaImg} key={num}>
              <Image src={`/documentoImagem/imagemAjuda${num}.png`} alt={`Ajuda ${num}`} width={350} height={500} />
            </div>
          ))}
        </section>

        <section className={styles.areaContatos}>
          <h2 className={styles.subTitulo}><strong>Conheça nossos profissionais:</strong></h2>
          <p>Nossos profissionais são altamente qualificados...</p>

          <div className={styles.listaContatos}>

            <div className={styles.contatoPsicologo}>
              <Image src="/documentoImagem/mulher1.png" alt="Psicóloga 1" width={350} height={350} />
              <p><strong>LETÍCIA ALMEIDA FERREIRA</strong><br />Estado: São Paulo (SP)<br />CRP: 06/12345</p>
              <p>Ansiedade generalizada<br />Transtorno do pânico<br />Relacionamentos amorosos</p>
              <button className={styles.contatoBotao}>Sobre</button>
            </div>

            <div className={styles.contatoPsicologo}>
              <Image src="/documentoImagem/homem1.png" alt="Psicóloga 1" width={350} height={350} />
              <p><strong>RAPHAEL TORRES ALMEIDA</strong> <br /> Estado: Minas Gerais (MG) <br /> CRP: CRP: 04/67890</p>
              <p>Conflitos familiares <br /> Depressão <br />Comunicação não violenta <br /> Luto</p>
              <button className={styles.contatoBotao}>Sobre</button>
            </div>

            <div className={styles.contatoPsicologo}>
              <Image src="/documentoImagem/mulher2.png" alt="Psicóloga 1" width={350} height={350} />
              <p><strong>CAMILA RIBEIRO NUNES</strong><br />Estado: Rio Grande do Sul (RS)<br />CRP: 07/13579</p>
              <p>Psicologia infantil<br />Transtorno de déficit de atenção<br />Desenvolvimento emocional na adolescência</p>
              <button className={styles.contatoBotao}>Sobre</button>
            </div>

            <div className={styles.contatoPsicologo}>
              <Image src="/documentoImagem/homem2.png" alt="Psicóloga 1" width={350} height={350} />
              <p><strong>BRUNO FEREIRA COSTA</strong><br />Estado: Bahia (BA)<br />CRP: 03/24680</p>
              <p>Estresse no trabalho<br />Burnout<br />Orientação profissional <br /> Saúde mental </p>
              <button className={styles.contatoBotao}>Sobre</button>
            </div>


          </div>
        </section>

        <section className={styles.artigos}>
          <h2 className={styles.subTitulo}><strong>Encontre informações de especialistas:</strong></h2>

          <div className={styles.itemArtigos}>

            <Image src="/documentoImagem/iconeImagemProvisorio.png" width={400} height={400}/>
            <p>Como Cuidar da Saúde Mental no Dia a Dia: Pequenas Ações, Grandes Resultados.</p>
          </div>
        </section>

        <footer className={`${styles.siteFooter} ${styles.rodape}`}>
          <div className={styles.footerContainer}>
            <p className={styles.footerQuote}>
              “Refúgio Interior: onde a mente encontra serenidade e o coração encontra paz.”
            </p>

            <div className={styles.footerSections}>
              <div className={styles.footerBox}>
                <h3>Sobre</h3>
                <p>Refúgio Interior é um espaço dedicado ao bem-estar...</p>
              </div>

              <div className={styles.footerBox}>
                <h3>Redes Sociais</h3>
                <ul>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">YouTube</a></li>
                </ul>
              </div>

              <div className={styles.footerBox}>
                <h3>Contato</h3>
                <p>Email: contato@refugiointerior.com</p>
                <p>Telefone: (00) 0000-0000</p>
              </div>
            </div>

            <hr />
            <p className={styles.footerCopy}>
              &copy; 2025 Refúgio Interior. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>
  );
}
