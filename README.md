# Desenvolvimento avançado com JavaScript ES6

Ministrado por Celso Henrique da Silva

## Funções avançadas do ES6

- Arrow functions (=>)

  Não posso gerar um objeto com uma função construtora usando arrow function, por causa do this.

  Arrow functions não sofrem elevação/suspensão (hoisting) e por isso devemos definir a expressão de função antes de usá-la.

  Antigamente para usar determinados contextos, definíamos um `bind` ou uma variável para guardar o contexto desejado.

  Arrow function possui o contexto de execução.

- Default function arguments
  Argumentos padrões podem ser definidos, mas precisamos ter atenção sobre a ordem de referência.

  Lazy evaluation é uma estratégia de avaliação que `atrasa a avaliação de uma expressão` até que seu valor seja necessário e que também evita avaliações repetidas.

- Enhanced Object Literals

  O aprimoramento literal de objeto é usado para agrupar variáveis do escopo global e transformá-la em objetos javascript.

  Sendo assim, não precisamos usar a palavra-chave `function`, também podemos usar a sintaxe abreviada, `suprimindo a chave`, caso a chave e valor possuam o mesmo nome.

  Além disso, podemos usar variáveis para definir as chaves do objeto ao criar um objeto. Antigamente, você teria que criar o objeto inteiro primeiro e depois adicionar as chaves dinâmicas.

## Conceitos de Rest, Spread Operator e Destructuring

- Rest operator

  O operador rest é usado para colocar o restante de alguns valores específicos fornecidos pelo usuário em uma matriz Javascript.

  Descrevemos ele com os `...`.

  Em uma função, temos a palavra `arguments`, que fica encarregada de alocar as n valores que passamos como argumento.

  Você só pode o rest operator antes do último parâmetro em uma definição de função.

  Usando o arrow function, o `arguments` não funciona, ou seja é lido como uma variável não foi definida.

  O rest também é usado em conjunto com outros argumentos declarados, neste caso, geralmente nomeamos com `...rest`.

- Spread operator

  O operador spread permite copiar rapidamente todo ou parte de um array ou objeto existente para outro array ou objeto, ele é usado frequentemente em combinação com a desestruturação.

  Os objetos literais não são elementos iteráveis, não sendo possível adicionar o spread operator, apenas construímos novos objetos.

  O operador spread faz cópias profundas de dados se os dados não estiverem aninhados, caso contrário, o operador de propagação criará uma cópia rasa dos dados aninhados, o que permite alterações nos valores "filhos" originalmente copiados.

- Destructuring assignment

  A atribuição de desestruturação é uma expressão que torna possível descompactar valores de arrays ou propriedades de objetos em variáveis distintas.

  Podemos fazer a desestruturação de arrays, objetos, objetos dentro de arrays, arrays dentro de objetos, e em funções.

## Generators

- Symbols

  É um tipo de dado criado como uma maneira de gerar um identificador único, evitar colisões de nomes, símbolos podem aparecer como Objetos porque possuem métodos, mas não são (são primitivos), eles são imutáveis e únicos.

  É uma forma de adicionar uma propriedade e controlar se deseja ou não retornar esse novo valor (manter, de certa forma, privada).

  Não podem ser criados pela palavra `new`, eles podem ter uma descrição para fins de registro.

  Símbolo global “well-known” ou símbolos conhecidos são propriedades de símbolo atribuídas ao objeto global Symbol e servem para adicionar alguns comportamentos personalizados como o iterator que é utilizado para iterar itens em arrays e strings.

- Iterators

  É uma interface usado quando o objeto precisa ser iterado, ele fornece o método next() para acessar cada um dos valores que o objeto contém.

  O método next retorna um objeto com duas propriedades, `done` e `value`.

  Um array e uma String já possuem iterators por natureza.

- Generators

  É um tipo especial de função que podem ser executadas, pausadas, continuadas em diferentes estágios da sua execução graças a palavra reservada `yield`.

  Existem bibliotecas que lidam com operações assíncronas, tornando-as mais parecidas com operações síncronas, cuidando do controle de fluxo e do estado da aplicação.
  Ex: biblioteca `co` e `redux-saga`.

## Promises e Fetch

- Callbacks
  É uma função passada como argumento para outra função, que é então invocado dentro da função externa para completar algum tipo de ação.

  Quando os callbacks estão aninhados empilhados um abaixo do outro formando uma estrutura de pirâmide chamamos de `callback hell`, se refere, geralmente uma prática ineficaz de escrever código de forma assíncrona.

- Promises

  É um objeto que representa a eventual conclusão ou falha de uma operação assíncrona e seu valor resultante.
  Possui os estados `pending`, `fulfilled` e `reject`.

  Pending: é o estado inicial.

  Fulfilled: é a operação concluída con sucesso

  Reject: é a operação com falha.

  Quando uma dessas opções de estado ocorre, os manipuladores associados enfileirados pelo método `then` de uma promise são chamados.

  Para o caso de falhas, usamos o método `catch`;

  Podemos usar o método `Promise.all(iterable)` que retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas.

  Se qualquer uma das promises passadas falhar, o resto das promises serão rejeitadas.

  O método `Promise.race(iterable)` é semelhante ao `all`, porém ele retorna uma promise que resolve ou rejeita assim que uma das promises no iterável resolver ou rejeitar, com o valor ou razão daquela promise. Promise que se estabelece primeiro.

- XMLHttpRequest

  Para consumir APIs e arquivos antigamente, usava-se o XMLHttpRequest.

  Ele é um objeto que fornece a funcionalidade para transferir dados entre um cliente e um servidor.

  Porém lidar com callbacks com chamadas assíncronas era complicado, com o risco de cair na prática do callback hell.

  Pensando nisso surgiu o fetch API.

- Fetch

  Fetch API fornece uma interface para buscar recursos mais poderoso, flexível fácil e lógica para buscar recursos de forma assíncrona do que o XMLHttpRequest.

- Async/Await

  A partir do ES7, temos outra maneira, mais enxuta, de lidar com promises, chamamos de `syntactic sugar`.

- EventEmitter

  É uma classe de um módulo do NodeJS é usada para lidar com eventos. E, também nos ajuda a criar um padrão de `publish-subscribe` ou publicação/assinatura, de modo que ocorra uma comunicação assíncrona de serviços.

  Este objeto, expõe os métodos `on`, `emit`, `once`:

  Emit: é usado para acionar um evento.

  On: é usado para adicionar uma função de retorno de chamada que será executada quando o evento for acionado.

  Once: adiciona um ouvinte único.

  - EventTarget

  No browser, usamos o eventEmitter que é a propriedade da interface `Event` que faz referência ao objeto para o qual o evento foi despachado, ou seja, retorna o elemento onde ocorreu (foi acionado) o evento. Essa propriedade de destino é somente leitura.

## Automação de testes em JS

- Conceito

  Podemos usar diversas abordagens para testes como os testes automatizados e manuais.

  - Testes automatizados:

    - Testes unitários;
    - Testes integrados (uso de funções,métodos ou classes em conjunto)
    - Testes funcionais (end-to-end/ black box - integração entre sistemas simulando um usuário)

  - Testes manuais e automatizados:

    - Testes de usabilidade
    - Testes de aceitação do usuário
    - Protótipos
    - Testes funcionais
    - Exemplos
    - Alpha e Beta

  - Ferramentas de teste

    - Testes de carga e performance
    - Teste de segurança

- TDD

  Significa `Teste Driven Development` e é um dos pilares do Extreme Programming, conhecido como Desenvolvimento orientado a testes.

  Consiste em testar e refatorar em pequenos ciclos, onde você escreve o teste antes do código, faz o mesmo passar e refatorar o código.

  Escrita do teste -> Escrita do código -> Refatoração

  - Vantagens:

    - Feedback rápido;
    - Maior segurança em alterações e novas funcionalidades;
    - Código mais limpo;
    - Produtividade.

- BDD

  Significa `Behavior Driven Development`, ou desenvolvimento orientado a comportamento, é uma técnica de desenvolvimento ágil, que visa integrar regras de negócio com linguagem de programação.

  - Seus pilares são:

    - Testes
    - Documentação
    - Exemplos.

    O teste de código é uma descrição do comportamento esperado.

  - Vantagens:

    - Compartilhamento de conhecimento
    - Documentação dinâmica.
    - Visão do todo

- Mocha

  É um framework de teste popular em JavaScript, ele organiza casos de teste e executa-os.

  Possui abordagem descritiva, com princípios do bdd, representando funcionalidade com regras de negócio.

  Usado para teste nodeJs e no browser.

- Chai

  É uma biblioteca de asserção BDD/TDD para node e o navegador que pode ser emparelhado com qualquer estrutura de teste javascript mais descritivo do que o mocha.

  Exemplificamos com o `expect(someTest).to.equal(value)` ao invés de `assert.equal(someTest, value)`;

- Sinon

  É uma biblioteca JavaScript que fornece espiões, stubs e simulações de teste independentes.

  O método spy do sinon cria uma função ou intercepta a execução de uma outra função afim de obter dados sobre como a mesma foi invocada.

  Possui a capacidade de criar mocks de servidor, garantir chamadas http com retornos específicos.

- Outros

Como exemplo, temos outras bibliotecas utilizadas como o Jest, Jasmine, Enzyme, Cypress, QUnit e o Karma.

## Tratamento e Exceções

- Identificação de erros
  Com o auxílio do try/catch, o objeto `Error`, podemos definir e obter exceções customizados.

- Debugging

  Podemos usar a ferramenta de desenvolvedor (devtools) para encontrar possíveis erros.

  Usamos os `break-points` ou os pontos de parada enquanto executamos a depuração da aplicação ou usamos a palavra `debugger` na linha de código que deseja fazer o ponto de parada e o Chrome irá parar no local desejado.

  Outro método para encontrar as falhas, é a utilização do `console.log` para conseguir mais informações, além do log, podemos usar o `console.warn`, `console.error`, `console.trace`, `console.group/console.groupEnd`.

  Da aba styles no devtools posso aplicar ou remover estilos para depurar a aplicação.
