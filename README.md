![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Styled Components](https://img.shields.io/badge/styled--components-%23DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


# Calculadora React

Aplicação web de uma calculadora simples desenvolvida com React e styled-components.

A calculadora permite realizar operações de soma, subtração, multiplicação, divisão e porcentagem. Também possui suporte a números decimais, troca de sinal, exclusão do último caractere (`C`) e limpeza completa (`CE`).

O visor possui duas linhas: a linha superior exibe a operação concluída após o uso de `=`, enquanto a linha principal exibe a expressão em edição ou o resultado calculado.

## Tecnologias

- React
- styled-components
- Create React App (npx create-react-app calculadora)

## Estrutura do projeto

```text
src/
├── App.js
├── global.js
├── index.js
├── styles.js
├── components/
│   ├── Buttons/
│   │   ├── index.js
│   │   └── styles.js
│   ├── Calculator/
│   │   └── index.js
│   ├── Display/
│   │   ├── index.js
│   │   └── styles.js
│   └── Keypad/
│       ├── index.js
│       └── styles.js
├── hooks/
│   └── useCalculator.js
└── utils/
    └── calculator.js
```

### Responsabilidades principais

- `App.js`: inicializa o hook da calculadora e compõe a aplicação.
- `components/Calculator`: reúne o visor e o teclado.
- `components/Display`: exibe a operação e o valor atual.
- `components/Keypad`: organiza os botões e seus eventos.
- `components/Buttons`: componente reutilizável dos botões.
- `hooks/useCalculator.js`: controla o estado e as ações da calculadora usando `useReducer`.
- `utils/calculator.js`: contém as operações matemáticas e a formatação dos resultados.
- `global.js` e `styles.js`: estilos globais e estrutura visual da página.

## Como executar

Instale as dependências do projeto:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Depois, acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Outros comandos

Gerar uma versão otimizada para produção:

```bash
npm run build
```

Executar os testes:

```bash
npm test
```
