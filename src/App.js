import React from 'react';
import logoFaculdade from './img/ri_1.png';
import img1 from './img/ri_2.png';
import img2 from './img/ri_3.png';
import img3 from './img/ri_4.png';
import img4 from './img/ri_5.png';
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
  const computacaoQuânticaHist = "Várias novas tecnologias de computação surgiram, sendo a computação quântica a que exige a maior mudança de paradigma por parte dos desenvolvedores. Na década de 1950, as pesquisas sobre computação quântica começaram com base nas leis da física e da mecânica quântica no domínio da computação. A computação quântica começou a tomar forma no início dos anos 1980, quando o famoso físico Paul Benioff propôs um modelo inspirado nas máquinas desenvolvidas por Alan Turing, considerado por muitos o pai da ciência da computação. Essa técnica foi posteriormente proposta por Richard Feynman e Yuri Manin para justificar o uso de sistemas quânticos em computadores e, como tal, os sistemas quânticos forneceriam maior poder de processamento e juntos levariam a avanços científicos significativos capazes de processos mais complexos. Em 1985, o físico israelense David Deutsch, da Universidade de Oxford, descreveu o primeiro computador quântico, a máquina quântica de Turing, a qual ele simulava outro computador quântico."
  const computacaoQuânticaHist1 = "Em 1994, o professor de matemática aplicada, Peter Shor desenvolveu o Algoritmo de Shor, capaz de fatorar grandes números numa velocidade muito superior à dos computadores convencionais."
  const computacaoQuânticaHist2 = "Em 1996, Lov Grover, cientista informático indiano, desenvolveu o Speedup, o primeiro algoritmo para pesquisa de base de dados quânticos. Em 1999, no Instituto de Tecnologia Massachusetts, foram construídos os primeiros protótipos de computadores quânticos utilizando montagem térmica. Em 2007, a empresa canadense D-Wave desenvolveu o Orion, um processador quântico de 16 qubits que realiza tarefas do mundo real. Em 2011, a D-Wave lançou o D-Wave One, um computador quântico comercial, com processador de 128 bits. No entanto, ainda não é completamente autônomo e precisa ser usado em conjunto com computadores convencionais. Em 2017, a D-Wave Systems lançou no comércio o 2000Q, um computador quântico de 2000 qubits ao qual o anterior tinha 1.000 qubits."
  const computacaoQuânticaHist3 = "Guilherme Tosi, um físico brasileiro que em 2017, juntamente com uma equipe da Universidade de Nova Gales do Sul, na Austrália, inventou uma nova arquitetura radical para a computação quântica, baseada em ‘flip-flop qubits’ que pode ser usada em um novo tipo de computador quântico tornando possível a fabricação de processadores quânticos em larga escala, sendo com menor custo e mais acessível, sem a necessidade da colocação precisa dos átomos de silício no processador."
  const computacaoQuânticaHist4 = "Destarte, apesar desses sucessos, alguns dos sistemas mais simples eram inviáveis através da modelagem com a mecânica quântica. Isso ocorre porque a simulação de sistemas de algumas dezenas de partículas interativas exige mais potência computacional do que qualquer computador convencional consegue fornecer em milhares de anos."
  const popularizou = "Nos últimos 70 anos a humanidade ficou cada vez mais dependente dos computadores, se tornando uma ferramenta necessária para realizar tarefas do dia a dia. Como se tornou necessário e cada vez mais o processamento sendo mais exigidos surge um problema quanto a limitação físico da velocidade de processamento dos computadores atuais. Computador clássico, como é chamado os computadores atuais, utiliza componentes eletrônicos para representar bits que são as menores unidades de informação existentes. Um bit só pode ter dois valores 0 ou 1, sendo de extrema eficiência para cálculos em série. Existe um tamanho mínimo que um transístor pode processar e vai chegar uma hora em que o processador vai estar super lotado, não conseguindo realizar as operações mais rápidas. Com isso chegamos ao limite físico da computação, a lei de moore."
  const problemas = "A maior dificuldade na construção de computadores quânticos é a alta incidência de erros. Um dos motivos do erro é o próprio ambiente: os efeitos do ambiente no computador quântico podem fazer com que os qubits mudem. Esses podem levar a inconsistências no sistema, invalidando todos os erros de cálculo. Ironicamente, outra dificuldade é a implicação de um dos princípios da mecânica quântica que torna a computação quântica interessante em primeiro lugar. A física quântica afirma que o ato de medir ou observar um sistema quântico é a superposição de estados. Isso significa que, se os dados forem lidos durante a execução do programa em um computador quântico, todo o processamento será perdido. Então a maior dificuldade é conseguir corrigir erros sem realmente medir o sistema. Isto é conseguido através da coerência de fase. Esta técnica permite a correção de erros sem prejudicar o sistema. Para fazer isso, a RMN foi usada para replicar um bit de informação quântica dos três spins nucleares da molécula de tricloroetileno. Basicamente, esta técnica utiliza a observação indireta para realizar a correção de erros e manter a consistência do sistema. Diante de todas essas dificuldades, a importância do experimento conduzido pela IBM é óbvia: os cientistas conseguiram superar todos esses contratempos e implementar o algoritmo de Shor na prática em um computador quântico."
  const conclusao = "Para realizar a maioria dos cálculos matemáticos, editar texto ou navegar na Internet, os computadores atuais (baseados na arquitetura Von Neumann) são a melhor solução. Na verdade, os processadores atuais são muito eficientes na execução dessas tarefas. No entanto, em áreas como a inteligência artificial, torna-se interessante a utilização de outros tipos de computadores e arquiteturas. Por exemplo, em algoritmos de reconhecimento de imagem ou processamento de fala, a execução sequencial e o armazenamento de dados da arquitetura von Neumann (que funciona bem para outras aplicações) tornam-se restrições que acabam limitando o desempenho desses sistemas. Para esse tipo de aplicação, um computador com poder de processamento paralelo suficiente para facilitar o reconhecimento de padrões (princípio geral para resolver esses problemas) torna-se mais interessante. Dentre as várias alternativas, os computadores quânticos se consideram a opção mais promissora, justamente porque a computação quântica é a que mais se diferencia da arquitetura de von Neumann, com poderosas capacidades de processamento paralelo. Portanto, os computadores quânticos não serão usados para resolver problemas que os computadores clássicos resolveram efetivamente. A computação quântica será aplicada a problemas para os quais ainda não existem soluções eficazes, como inteligência artificial e criptografia."
  const referenciaBibliografica = "AQUINO, Renata. O futuro da computação é híbrido e quântico; entenda essa viagem. tecmasters.Disponível em: https://tecmasters.com.br/futuro-computacao-hibrido-quantico/. Acesso em: 20 abr. 2022."
  const referenciaBibliografica1 ="ARQUITETURA DE VON NEUMANN. In: WIKIPÉDIA, a enciclopédia livre. Flórida: Wikimedia Foundation, 2021. Disponível em: https://pt.wikipedia.org/w/index.php?title=Arquitetura_de_von_Neumann&oldid=62550550. Acesso em: 20 abr. 2021."
  const referenciaBibliografica2 ="COMPUTADOR QUÂNTICO. In: WIKIPÉDIA, a enciclopédia livre. Flórida: Wikimedia Foundation, 2022. Disponível em: https://pt.wikipedia.org/w/index.php?title=Computador_Qu%C3%A2ntico&oldid=63538837. Acesso em: 15 abr. 2022."
  const referenciaBibliografica3 ="DAVID DEUTSCH. In: WIKIPÉDIA, a enciclopédia livre. Flórida: Wikimedia Foundation, 2022. Disponível em: https://en.wikipedia.org/wiki/David_Deutsch. Acesso em: 28 abr. 2022."
  const referenciaBibliografica4 ="GREENE, Tristan. Os 4 sistemas de computador do futuro (e para que os usaremos). thenextweb. Disponível em: https://thenextweb.com/news/4-computer-systems-future-what-well-use-them-for. Acesso em: 20 abr. 2022." 
  const referenciaBibliografica5 ="HELERBROCK, Rafael. 'O que é computação quântica?' Brasil Escola. Disponível em: https://brasilescola.uol.com.br/o-que-e/fisica/o-que-e-computacao-quantica.htm. Acesso em 17 de maio de 2022."
  const referenciaBibliografica6 ="LEI DE MOORE. In: WIKIPÉDIA, a enciclopédia livre. Flórida: Wikimedia Foundation, 2021. Disponível em: https://pt.wikipedia.org/w/index.php?title=Lei_de_Moore&oldid=61757784. Acesso em: 2 ago. 2021."
  const referenciaBibliografica7 ="MÁQUINA DE TURING. In: WIKIPÉDIA, a enciclopédia livre. Flórida: Wikimedia Foundation, 2022. Disponível em: https://pt.wikipedia.org/w/index.php?title=M%C3%A1quina_de_Turing&oldid=63181456. Acesso em: 28 abr. 2022."
  const referenciaBibliografica8 ="RODRIGUES, Camila. Um olhar atento para a Computação Quântica: Revista Empreende. Disponível em: https://revistaempreende.com.br/2020/01/28/computacao-quantica-um-olhar-atento-para-a-computacao-quantica/. Acesso em 17 de maio de 2022."
  return (
    <div>
      <div className='master'>
        <div className='titulo'>
          <img src={logoFaculdade} alt="Logo Faculdade" />
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
          <p>{computacaoQuânticaHist}</p>
          <figure>
            <img src={img1} alt="Representação artística de uma máquina de Turing" />
            <figcaption><strong>Imagem 1:</strong> Representação artística de uma máquina de Turing.</figcaption>
          </figure>
          <br></br>
          <p>{computacaoQuânticaHist1}</p>
          <br></br>
          <figure>
            <figcaption><strong>Tabela 1:</strong> tabela de comparação de tempo da fatoração do algoritmo de Shor e por Falgoritmo clássico.</figcaption>
            <br></br>
            <img src={img2} alt="Representação artística de uma máquina de Turing" />
          </figure>
          <br></br>
          <p>{computacaoQuânticaHist2}</p>
          <br></br>
          <figure >
            <br></br>
            <div className='img'>
              <img className='img3' src={img3} alt="Representação artística de uma máquina de Turing" />
              <img className='img3' src={img4} alt="Representação artística de uma máquina de Turing" />
            </div>
            <br></br>
            <figcaption><strong>Imagem 2:</strong> ilustração do 2000Q da empresa D-Wave Systems.</figcaption>
          </figure>
          <br></br>
          <p>{computacaoQuânticaHist3}</p>
          <p>{computacaoQuânticaHist4}</p>
          <div className='texto'>
            <h3>2.2 Como se popularizou</h3>
            <p>{popularizou}</p>
          </div>
          <div className='texto'>
            <h3>2.3 Problemas</h3>
            <p>{problemas}</p>
          </div>
          <div className='texto'>
            <h3>Conclusão</h3>
            <p>{conclusao}</p>
          </div>
          <div className='referencia'>
            <h3>Referência</h3>
            <h4>{referenciaBibliografica}</h4>
            <h4>{referenciaBibliografica1}</h4>
            <h4>{referenciaBibliografica2}</h4>
            <h4>{referenciaBibliografica3}</h4>
            <h4>{referenciaBibliografica4}</h4>
            <h4>{referenciaBibliografica5}</h4>
            <h4>{referenciaBibliografica6}</h4>
            <h4>{referenciaBibliografica7}</h4>     
            <h4>{referenciaBibliografica8}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
