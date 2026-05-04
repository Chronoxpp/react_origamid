import React from "react";

export default function Pergunta({
    pergunta, 
    respostas,
    handleSubmit,
    resposta,
    setResposta,
})
{
    function onChange(e)
    {
        const opcao = e.target;

        setResposta(opcao.id);
    }

    const listaDeRespostas = respostas.map(
        (opcao, index)=>
            {
                return (
                    <div key={index}>
                        <label htmlFor={opcao}>{opcao}</label>
                        <input type="radio" value={opcao} checked={resposta === opcao} id={opcao} onChange={onChange} />
                    </div>
                );
            }
    );

    return (
        <form onSubmit={handleSubmit}>
            <p>{pergunta}</p>
            {listaDeRespostas}

            <button>Enviar resposta</button>
        </form>
    );
}