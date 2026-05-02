// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global
import React from "react";
import { GlobalContext } from "./GlobalContext";

export default function App()
{
  const globalContext = React.useContext(GlobalContext);

  const api = "https://ranekapi.origamid.dev/json/api/produto/";

  salvarProdutosEmContexto(api);

  return (
    <>
      <h1>App</h1>
    </>
  );

  async function salvarProdutosEmContexto(api)
  {
    const produtos = await obterProdutos(api);

    globalContext.produtos = produtos;
  }

  async function obterProdutos(api)
  {
    const response = await fetch(api);
    const produtos = await response.json();

    return produtos
  }
}