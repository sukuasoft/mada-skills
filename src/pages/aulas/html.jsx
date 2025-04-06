import Navbar from "../../components/navbar";
import '../../styles/aula-html.css'

export default function AulaHtml (){
    return (<>
      
      <Navbar />
        {/*Inicio do sidebar*/}
    <p className="saber"> Mais detalhes sobre o curso</p>
    <hr className="line" />
    <img src="/images/html.png" alt="" className="html" />
    <div >
        <h3 className="logo">HTML(HyperText Markup Laguange)</h3>
        <p className="significado">
            Criada em 1991 por Tim Berners-Lee, é
            uma linguagem de marcaçãode hipertexto
            É a linguagem padrão para criar páginas web. 
            HTML define a estrutura do conteúdo da página,
            permitindo que os desenvolvedores organizem texto,
            imagens e outros elementos.
        </p>
    </div>
    <button className="start" id="start">Começar agora</button>
    <div className="sidebar">
        <h3 className="tutoriais">Tópicos de HTML</h3>        
        <div> <h3 align="center">Introdução</h3></div>
        
        <div className="origem"onclick="origem()">Origem</div>
            <div id="origem">
                        <h1 align="center">Origem</h1>
                <p>
                    O HTML foi criado por Tim Berners-Lee, um cientista da computação britânico, em 1991. Ele foi o mesmo visionário que concebeu a World Wide Web enquanto trabalhava no CERN (Organização Europeia para a Pesquisa Nuclear). A ideia era fornecer uma maneira simples de compartilhar documentos científicos entre os pesquisadores, independentemente de suas plataformas de hardware ou localização.
                </p>
                
                
                        <h3 align="center">Linha do Tempo do HTML</h3> 
                <p>
                    1991: Primeira proposta de HTML por Tim Berners-Lee. Os primeiros documentos HTML eram escritos para navegadores iniciais, como o WorldWideWeb (também desenvolvido por Berners-Lee).<br /><br />
                    1995 - HTML 2.0: Esta foi a primeira padronização oficial do HTML, desenvolvida pela IETF (Internet Engineering Task Force). Incorporou recursos utilizados em navegadores pioneiros como Mosaic e Netscape.<br /><br />
                    1997 - HTML 3.2 e 4.0: Em 1997, o HTML foi transferido para o W3C (World Wide Web Consortium), a organização responsável pelo desenvolvimento de padrões da web. O HTML 4.0 trouxe suporte para tabelas, scripts e estilos (CSS), preparando o terreno para a web moderna.<br/><br/>
                    1999 - HTML 4.01: Foi uma pequena revisão da versão 4.0, corrigindo alguns problemas e melhorando a compatibilidade entre navegadores.<br/><br/>
                    2008 - HTML5 (até hoje): O HTML5 foi desenvolvido para lidar com as crescentes demandas da web moderna, como suporte a multimídia (áudio e vídeo) e dispositivos móveis.
                </p><br />
                            <h3 align="center">Versões de HTML</h3>
                <p>
                    A primeira versão oficial do HTML foi muito básica e continha apenas 18 elementos. Esses elementos permitiam a estruturação simples de documentos com links, parágrafos, listas e cabeçalhos.
                </p><br /> 

                <p> 
                     Ele abandonou alguns elementos antigos e obsoletos, priorizando acessibilidade e interoperabilidade entre dispositivos.
                </p><br/> 
                
                
                <p>
                    A versão HTML5 se tornou a base da web atual, incorporando APIs avançadas para jogos, streaming e outras experiências interativas.Impacto e Legado
                    O HTML transformou completamente a maneira como o conhecimento é compartilhado e consumido. Graças à sua simplicidade e flexibilidade, ele se tornou um pilar da internet moderna. Junto com CSS e JavaScript, o HTML forma a "trindade" do desenvolvimento web, permitindo a criação de páginas dinâmicas e interativas.
                </p><br /> 
                <p>  
                O HTML desempenhou um papel central e revolucionário na evolução da web, moldando a maneira como o mundo interage com informações digitais. A influências de HTML incluem:
                </p> <br/>
                <h4>1. Democratização da Informação</h4>
                Antes do HTML, o acesso à informação digital era restrito a sistemas fechados e especialistas. Com o HTML, tornou-se possível compartilhar conteúdo facilmente em uma rede global. Qualquer pessoa com acesso à internet e um navegador podia visualizar páginas da web.

                Ele ofereceu simplicidade: mesmo sem conhecimento técnico profundo, qualquer pessoa podia criar documentos e disponibilizá-los online.

                <h4>2. Base da Web Interligada</h4>
                O recurso de hipertexto introduzido pelo HTML permitiu a criação de links entre documentos e sites, formando a base da World Wide Web como conhecemos hoje.

                Essa interconectividade transformou a internet em uma vasta teia de conhecimento acessível globalmente.

                <h4>3. Fundamento para Interatividade</h4>
                HTML, em conjunto com CSS e JavaScript, criou a base para páginas interativas. Enquanto o HTML fornecia a estrutura, o CSS estilizou o conteúdo, e o JavaScript trouxe dinamismo.

                Elementos como formulários, vídeos e áudio no HTML evoluíram para tornar a web uma plataforma interativa para negócios, educação e entretenimento.

                <h4> 4. Universalidade e Padrões</h4>
                Por ser uma linguagem universal, o HTML funcionava de forma consistente em diferentes dispositivos e navegadores. Essa padronização foi crucial para a acessibilidade global.

                Ele também incentivou a colaboração internacional para definir padrões, liderada pelo W3C, promovendo interoperabilidade na web.

                <h4>5. Alavanca para a Web Moderna</h4>
                A introdução do HTML5 foi especialmente transformadora, atendendo às necessidades modernas como:

                Suporte nativo para multimídia (vídeo, áudio).

                Melhor desempenho em dispositivos móveis.

                Integração de APIs para experiências como geolocalização, jogos e streaming.

                <h4>6. Inovação Contínua</h4>
                O HTML abriu as portas para o surgimento de tecnologias e frameworks avançados (como React e Angular), que dependem de sua estrutura base para criar experiências complexas e ricas na web.

                O HTMl também permitiu o crescimento de plataformas de aprendizado e ferramentas de trabalho remoto, que hoje são indispensáveis.

                O HTML transformou a web em um espaço acessível, dinâmico e inovador. Ele não apenas moldou o que a web é hoje, mas continua evoluindo para atender às necessidades do futuro.

                O HTML5 trouxe uma série de inovações que transformaram a web, tornando-a mais acessível, eficiente e interativa. Dessas inovaçãações incluem:
                </div>
       
        
            
                <div  className="definicao"onclick="definicao()">Definição</div>
                     <div id="definicao"> 
                        <h3>Definição</h3>
                            <p>
                                O HTML transformou a web em um espaço acessível, dinâmico e inovador. Ele não apenas moldou o que a web é hoje, mas continua evoluindo para atender às necessidades do futuro.
                            </p><br />
                            HTML, sigla para HyperText Markup Language, é uma linguagem de marcação usada para estruturar e organizar o conteúdo de páginas da web. Em outras palavras, o HTML fornece o "esqueleto" de um site, permitindo que desenvolvedores definam elementos como títulos, parágrafos, imagens, links, tabelas e muito mais.

                            <p>Por si só, o HTML não controla a aparência visual das páginas (essa tarefa é frequentemente atribuída ao CSS) nem adiciona interatividade complexa (o que é feito pelo JavaScript). No entanto, ele é fundamental porque organiza o conteúdo de forma lógica e semântica para navegadores e usuários. É a base sobre a qual quase todos os sites são construídos!</p>
                    </div>  
               
              <div  className="estrutura"onclick="estrutura()">Estrutura Básica</div>

                <div  className="editores"onclick="editores()">Editores de texto</div>

                <div className="tags" onclick="tags()">Tags Básicas</div>

                <div  className="sintaxe"onclick="sintaxe()">Sintaxes</div>

                
                <div> <h3 align="center">Estrutura e conteúdo</h3></div>
                <div  className="listas"onclick="listas()">Listas</div>
                <div  className="tabelas"onclick="tabelas()">Tabelas</div>
                <div  className="link"onclick="links()">Links</div>
                <div  className="imagens" onclick="imagens()">Iamgens</div>
                <div  className="textos"onclick="textos()">Formatação de Textos</div>
                <div  className="semantica"onclick="semantica()">Elementos Semânticos</div>

            

                <div><h3 align="center">Interatividade e Estilo</h3></div>
                <div  className="formularios"onclick="formularios()">Formulários</div>
                <div  className="atributos"onclick="atributos()">Atributos globais</div>
                <div  className="css"onclick="css()">Introdução ao CSS</div>
                <div  className="navegação"onclick="navegação()">Estrutura de Navegação</div>
                <div  className="multimidia"onclick="multimidia()">Elementos Multimédia</div>
                <div  className="responsividade"onclick="responsividade()">HtML e Responsividade</div>



                <div> <h3 align="center">Prática e Projetos</h3></div>
                <div  className="pag"onclick="pag()">Criação de Página Web</div>
                <div className="fullform"onclick="fullform()">Formulário Completo</div>
                <div  className="blog"onclick="blog()">Estrutura de Blog</div>
                <div  className="multipage"onclick="multipage()">Navegação MultiPágina</div>
                <div  className="basico"onclick="basico()">HtML + CSS Básico</div>
                <div  className="projeto"onclick="projeto()">Mini-Projeto Final</div>
    </div>
        </>
    )
}