import React from "react";
import Menu from "./Menu";
import Produto from "./Produto";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

export default function App()
{
  const [produto, setProduto] = React.useState(null);

  let elemento;
  if (! produto)
  {
    elemento = <p>Escolha um produto!</p>
  }
  else if(produto === 'carregando')
  {
    elemento = <p>Carregando, aguarde</p>
  }
  else if(produto)
  {
    elemento = <Produto produto={produto} />
  }

  return (
    <>
      <Menu setProduto={setProduto} />

      {elemento}
    </>
  );
};
