import Navbar from "../components/navbar";
import "../styles/home.css";

export default function Home() {
  return (
    <>
        <Navbar />
      <img src="/images/lunifusco.webp" className="lunimage" alt="" />
      <div className="home">
        <p>
          <span className="mada">MADA</span>
          <span className="skills">SKILLS</span>
          <br />
          Cresça, Codifique Seus Sonhos e Realize Seu Pontecial
          <br />
          Construa o Amanhã com Habilidades de Hoje
        </p>
        <button className="bb1">Ver Cursos</button>
      </div>

      <section className="beneficio">
        <div>
          <i data-feather="code"></i>
          <h3>Cursos Interativos</h3>
          <p>Conteúdo atualizado e projetos reais</p>
        </div>

        <div>
          <h3>Adquira Habilidades</h3>
          <p>Não perca a tua chance de ser um profissional nesta área</p>
        </div>

        <div>
          <h3>Conteúdo Exclusivo</h3>
          <p>Aprenda com matérias atualizadas</p>
        </div>

        <div>
          <h3>Acesso 24/7</h3>
          <p>Estude quando e onde quiser</p>
        </div>
      </section>
      <div className="allcarrossel">
        <div className="imagens">
          <img src="/images/studo.jpg" alt="" />
          <img src="/images/estudo3.jpg" alt="" />
          <img src="/images/stu0.jpg" />
          <img src="/images/studo6.jpg" alt="Imagem1" />
          <img src="/images/studo7.jpg" />
          <img src="/images/OIP (1).jpg" />
        </div>
      </div>
      <button type="submit" className="sobrenos">
        Sobre Nós
      </button>
      <div className="bolhas">
        {/*<!-- Cria os indicadores (bolinhas) -->*/}
        <span className="bolha active"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
      </div>

      <script src="index.js"></script>
      {/*<!--incicio do card-->*/}
      <h2 className="destaque">Cursos em Destaque</h2>
      <div className="cards">
        <div className="card" id="card">
          <img src="/images/html grey.png" alt="" />
          <hr />
          <div className="conteudo">
            <h1
              style={{
                color: "rgb(213, 60, 4)",
              }}
            >
              {" "}
              <abbr title="Hypertext Markup Laguange">HTML</abbr>
            </h1>
            <br />
            <p>
              Linguagem de Marcação de Hipertexto responsável pela parte
              estrutural de uma página web.
            </p>
            <button
              style={{
                backgroundColor: "rgb(213, 60, 4)",
              }}
              className="more"
              id="aulahtml"
            >
              Saber mais
            </button>
          </div>
        </div>
        {/*<!--FIm do card-->
        <!--incicio do card-->*/}
        <div className="card">
          <img src="/images/css grey.jpg" alt="" />
          <hr />
          <div className="conteudo">
            <h1>
              {" "}
              <abbr title="Cascading Style Sheet">CSS</abbr>
            </h1>
            <br />
            <p>
              Folha de Estilo em Cascata Linguagem de estilo responsável pela
              estética de páginas HTML.
            </p>
            <button className="more">Saber mais</button>
          </div>
        </div>
        {/*<!--FIm do card-->
        <!--incicio do card-->*/}
        <div className="card">
          <img src="/images/js grey.jpg" alt="" />
          <hr />
          <div className="conteudo">
            <h1
              style={{
                color: "rgb(214, 214, 43)",
              }}
            >
              JavaScript
            </h1>{" "}
            <br />
            <p>
              Linguagem de programação de camada dinâmica usada para adicionar
              interatividade num site.
            </p>
            <button
              style={{
                color: "rgb(214, 214, 43)",
              }}
              className="more"
            >
              Saber mais
            </button>
          </div>
        </div>
        {/*    <!--Fim do card-->*/}
      </div>

      <div className="percentagem">
        <section className="stats">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>200+</h3>
              <p>Empresas Parceiras</p>
            </div>

            <div className="stat-item">
              <h3>98%</h3>
              <p>Satisfação dos Alunos</p>
            </div>

            <div className="stat-item">
              <h3>300k</h3>
              <p>Horas de Conteúdo</p>
            </div>
          </div>
        </section>
      </div>

      <section className="allcoment">
        <div className="allcomentcontrol">
          <div className="allcomentdiv">
            <p>
              "Consegui meu primeiro emprego como programador graças a essa
              plataforma!"
            </p>
            <h4>Bernabé Cristóvão</h4>
          </div>

          <div className="allcomentdiv">
            <p>
              "O suporte ao aluno é impressionante, e os projetos são muito
              práticos me ajudaram muito."
            </p>
            <h4>Lucílio Evanilson</h4>
          </div>

          <div className="allcomentdiv">
            <p>
              "Melhor plataforma que já vi, me ajudou muito no desenvolvimento
              do meu projeto escolar"
            </p>
            <h4>Jairo Buto</h4>
          </div>
        </div>
      </section>
      <div className="pergunta">
        <h2>Perguntas Frequententes</h2>
        <br />
        <br />
        <a href="index.html">Por que preciso aprender Programação Web?</a>
        <hr />
        <br />
        <a href="#">Quanto tempo eu levaria para aprender a programar?</a>
        <hr />
        <br />
        <a href="#">
          Esta Plataforma me ajudaria mesmo a ter habilidades em Programação
          Web?
        </a>
        <br />
      </div>
      {/*    <!--inicio do footer--> */}
      <div className="footerdiv">
        <footer>
          <div className="inline">
            <div className="block">
              <img src="/images/madafoot.jpg" alt="" className="madas" />
              <p>Construa o Manhã com Habilidades de Hoje!!!</p>
            </div>
            <div className="block">
              <h1>Contactos</h1>
              <a href="">Telefone: 935 55 500</a>
              <a href="">Email: ninafaustino992@gmail.com</a>
              <nav>
                <a href="">
                  <img src="/images/face.webp" alt="" className="iconf" />
                </a>
                <a href="">
                  <img src="/images/whats.webp" alt="" className="iconf" />
                </a>
                <a href="">
                  <img src="/images/insta.webp" alt="" className="iconf" />
                </a>
                <a href="">
                  <img src="/images/youtube.png" alt="" className="iconf" />
                </a>
              </nav>
            </div>

            <div className="block">
              <h1>Links rápidos</h1>
              <a href="">Sobre nós</a>
              <a href="biblioteca2.html">Cursos</a>
              <a href="">Exercícios</a>
            </div>
            <div className="block">
              <h1>Membro da plataforma</h1>
              <a href="login.html">Fazer Login</a>
              <a href="cadastro.html">Cadastrar</a>
            </div>
          </div>
          <div>
            <hr />
            <p>
              &copy;2025 Todos os Direitos Reservados. <span>MADASKILLS</span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
