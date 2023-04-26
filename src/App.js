import React from 'react';
import logoFaculdade from './img/ri_1.png';
import './App.css';

function App() {
  const titulo = 'COMPUTAÇÃO E TECNOLOGIA QUÂNTICA';
  const autor = 'Edimar Pereira Batista';
  const orientadora = 'Vitória dos Santos Godoy';
  const resumo = 'A computação quântica estuda a ciência das teorias e propriedades da mecânica quântica introduzida pela Ciência da Computação. Na computação clássica o computador é baseado na arquitetura de Von Neumann diferenciando o processador e memória destacados por um barramento de comunicação, sendo seu processamento sequencial. Porém, os computadores atuais possuem limitações, na qual não existem computadores com potência ou velocidade de processamento suficientes para suportar uma “inteligência artificial avançada", por exemplo. Dessa forma surge, portanto, a necessidade da criação de um computador alternativo dos usuais que resolvesse problemas mais complexos. Sob este viés, sempre houve um crescimento constante na velocidade de processamento dos computadores. No entanto, essa evolução tem certas limitações, sendo impossível aumentar essa velocidade, por isso, é necessária uma grande revolução na computação para quebrar essa barreira. Deste modo, a pesquisa em computação quântica se torna muito importante, e a cada dia há a necessidade de desenvolver uma máquina extremamente eficiente. Nesse artigo, será abordado o tema computação e tecnologia quântica, sendo baseado a partir da análise da arquitetura atual dos computadores com suas limitações e concomitantemente a estrutura da computação quântica.'
  const introducao1 = "A ciência que estuda o desenvolvimento de algoritmos e softwares, denominada computação quântica, é fundamentada em informações processadas por sistemas quânticos, como átomos, fótons ou partículas subatômicas. Diferindo dos computadores clássicos, os computadores quânticos operam de acordo com as leis de probabilidade da física quântica."
  const introducao2 = "A computação quântica decorre de um conjunto de problemas complexos, na qual o processamento atual advém da insuficiência da computação clássica, que é cada vez mais desafiada à medida que o tamanho do sistema cresce. A computação quântica decorre de sua capacidade de processar todas as permutações de n bits simultaneamente por meio de circuitos lógicos, tornando trivial o problema de tentativa e erro da computação tradicional."
  const introducao3 = "É proporcionado, pela computação quântica, uma nova realidade a fim de promover um crescente e desenvolvimento tecnológico no âmbito da criação de softwares e hardwares, possibilitando deste modo, vislumbrar um futuro com computadores mais ágeis e realizando tarefas mais complexas.";
  const computacaoClassica1 = "Os computadores como os conhecemos hoje são baseados na arquitetura Von Neumann. Esta ferramenta distingue claramente os elementos de processamento e armazenamento de informações, ou seja, com um processador e memória separados por um barramento de comunicação. Mais especificamente, há duas características que se destacam sobre os recursos especiais dos computadores von Neumann: memória e métodos de processamento. As palavras de memória podem conter tanto instruções como dados. O processamento, por sua vez, é sequencial e pode conter desvio condicional ou incondicional. A incorporação dessas características no computador é o que temos na prática, ou seja, a existência do contador de programa (cada incremento instruções) e memória principal (contendo programas executáveis e seus dados). Estas são as duas características mais importantes da arquitetura de von Neumann; elas definem não apenas o computador em si, mas tudo relacionado a ele, desde um algoritmo bem desenhado até a eficiência que podemos resolver certos problemas."
  const computacaoClassica2 = "Apesar da maioria dos computadores, esta forma de organizar os aplicativos é muito eficiente para os computadores modernos. Pode haver uma maneira melhor de matemática, editar texto, não realizar soluções de dados ou acessar a Internet; os computadores von Neumann são a melhor máquina para essas tarefas. No entanto, para alguns campos específicos, como uma inteligência artificial, que pode exigir um novo instrumento computacional. Na verdade, o programa de inteligência artificial mais avançado do mundo ainda está longe de alcançar esse objetivo, como a inteligência humana."
  const leidemorore1 = "Uma das características mais famosas da computação é chamada de Lei de Moore. A lei exige que a velocidade do computador dobre a cada 18 meses. Isso significa que os computadores dobram de velocidade a cada 1,5 anos. Esta lei se mantém desde o primeiro computador, em 1981."

  return (
    <div>
      <div className='master'>
        <div className='titulo'>
          <img className='logo-faculdade' src={logoFaculdade} alt="Logo Faculdade" />
          <h1>{titulo}</h1>
          <h3>{autor}</h3>
          <p>Orientadora: {orientadora}</p>
        </div>
        <div className='texto'>
          <h3>Resumo</h3>
          <p>{resumo}</p>
        </div>
        <div className='texto'>
          <h3>Introdução</h3>
          <p>{introducao1}</p>
          <p>{introducao2}</p>
          <p>{introducao3}</p>
        </div>
        <div className='texto'>
          <h3>1. Computação clássica/tradicional</h3>
          <p>{computacaoClassica1}</p>
          <p>{computacaoClassica2}</p>
        </div>
        <div className='texto'>
          <h3>1.1 A Lei de Moore</h3>
          <p>{leidemorore1}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
