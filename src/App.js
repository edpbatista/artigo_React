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
  const leidemorore2 = "Em 1971, a Intel lançou o primeiro microprocessador 4004, que possuía apenas 4 bits e 2300 transistores, operando a uma velocidade de 400 KHz (quilohertz, não megahertz). Naquela época, a tecnologia de fabricação atingia densidade de 10 mícrons. Atualmente, o processador mais avançado da Intel é o Core i9-12900 KS, que opera a 5.50 GHz e possui 30 bilhões de transistores."
  const leidemorore3 = "Este é um ponto que merece destaque, pois nos leva a mais conclusões importantes sobre a computação numérica desde o primeiro computador digital até hoje. Nunca houve uma revolução com tanta significância na computação. O que aconteceu nos últimos 50 anos é, na verdade, uma simples evolução tecnológica. Computadores menores e mais rápidos apareceram, tecnologia desenvolvida do tubo ao transistor e, finalmente, ao microchip. É uma evolução impressionante e surpreendentemente rápida. No entanto, nunca houve um computador mais poderoso computacionalmente. Tudo o que o Pentium fez, o XT fez (XT era o nome da IBM para o primeiro computador pessoal com o chip 8086; o IBM PC original veio com o 8088, uma versão mais barata do 8086). A computação evoluiu em termos de velocidade, mas não em termos de poder computacional. Em outras palavras, os cálculos do Pentium são mais rápidos, mas ele não faz nenhum cálculo que o 8086 não faz."
  const leidemorore4 = "Mais cedo ou mais tarde, a tecnologia digital atingirá seus limites. Você chegará ao ponto em que não poderá aumentar a velocidade do processador. Isso exigirá mudanças no próprio computador ou a descoberta de uma tecnologia totalmente nova. Para modificar um computador, pelo menos a arquitetura von Neumann deve ser alterada. As mudanças arquitetônicas envolvem a reorganização de elementos de um computador de forma a melhorar sua funcionalidade; em outras palavras, removendo algumas das limitações implícitas na arquitetura de von Neumann."
  const leidemorore5 = "Existem vários esquemas de computação não convencionais em estudo. Atualmente. Alguns até envolvem o uso de moléculas de DNA (ácido ADN). Entre as várias alternativas aos computadores digitais, a mais interessante e promissora são os computadores quânticos. A próxima parte deste artigo explicará conceitos básicos sobre computação quântica, marcos mais importantes descritos conhecimento disso."
  const computacaoQuantica1 = "Um computador quântico combina o poder da computação clássica e quântica. Os computadores quânticos atuais correspondem ao modelo híbrido: computadores clássicos que controlam processadores quânticos.";
  const computacaoQuantica2 = "Os bits são a unidade básica de informação e existem na computação clássica. A tecnologia quântica é baseada em qbits (ou qubits). Destarte, enquanto o bit possui apenas os valores 1 ou 0, em uma estrutura binária, a computação quântica pode assumir um dos dois ou até mesmo uma combinação deles, levando a um desempenho considerável de desempenho por parte das máquinas. Desse modo, é uma máquina que consegue realizar um número superior de cálculos e lidar com problemas que são insolúveis para os computadores atuais."
  const computacaoQuantica3 = "Enquanto a computação clássica segue a essa lógica binária, a versão quântica trabalha de modo diferente. Os qubits podem ocupar dois estados ao mesmo tempo, habilidade essa conhecida como superposição. Enquanto os computadores clássicos usam chips à base de silício, os computadores quânticos usam sistemas quânticos, como átomos, íons, fótons ou elétrons."
  const computacaoQuantica4 = "A mecânica quântica é considerada como 'sistema operacional' do universo. Ela descreve como se comportam a natureza, como reações químicas, reações biológicas e formações de material, envolvendo interações quânticas de corpos. Deste modo, os computadores quânticos são dispositivos mecânicos quânticos controláveis que usam as propriedades da física quântica para realizar cálculos. Para algumas tarefas computacionais, a computação quântica fornece aumento de velocidade exponencial."
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
          <p>{leidemorore2}</p>
          <p>{leidemorore3}</p>
          <p>{leidemorore4}</p>
          <p>{leidemorore5}</p>
        </div>
        <div className='texto'>
          <h3>2. Computação e tecnologia quântica</h3>
          <p>{computacaoQuantica1}</p>
          <p>{computacaoQuantica2}</p>
          <p>{computacaoQuantica3}</p>
          <p>{computacaoQuantica4}</p>
        </div>
        <div className='texto'>
          <h3>2.1 Formação da tese da ciência quântica para computadores</h3>
          <p>{computacaoQuantica1}</p>
          <p>{computacaoQuantica2}</p>
          <p>{computacaoQuantica3}</p>
          <p>{computacaoQuantica4}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
