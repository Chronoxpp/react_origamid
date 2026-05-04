import React from "react";
import Pergunta from "./Pergunta";

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];


export default function App()
{
  const [respostas, setRespostas] = React.useState([]);
  const [resposta, setResposta] = React.useState(null);

  function handleSubmit(e)
  {
    e.preventDefault();

    if (! resposta) return;

    setRespostas([...respostas, resposta]);

    setResposta(null);
  }

  const respostasCorretas = perguntas.filter(
    (pergunta, index) => pergunta.resposta === respostas[index]
  );

  return (
    <>
      <h1>Quiz</h1>
      {
        respostas.length <= 3 

        ? <p>Pergunta {respostas.length + 1} de {perguntas.length}</p> 
        
        : <p>Quiz finalizado, resultado: acertou {respostasCorretas.length} de {perguntas.length}</p>
      }

      {
        respostas.length <= 3 &&

        <Pergunta
          pergunta={perguntas[respostas.length].pergunta}
          respostas={perguntas[respostas.length].options} 
          handleSubmit={handleSubmit}
          resposta={resposta}
          setResposta={setResposta}
        />
      }
    </>
  );
}