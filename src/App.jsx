import React from "react";
import Menu from "./Menu";
import Produto from "./Produto";

export default function App()
{
  const [produto, setProduto] = React.useState(null);

    function obterProdutoLocal(id)
    {
      return JSON.parse(window.localStorage.getItem(id));
    }

    React.useEffect(
      ()=>
      {
        setProduto(obterProdutoLocal("produto"));
      },
      []
    );

  return (
    <>
      <h1>Preferência: {produto && produto.nome}</h1>
      <Menu setProduto={setProduto} obterProdutoLocal={obterProdutoLocal} />
      {produto && <Produto produto={produto} />}
    </>
  );
}