import Botao from "./Botao";

export default function Menu({setProduto})
{
    const api1 = "https://ranekapi.origamid.dev/json/api/produto/tablet";

    const api2 = "https://ranekapi.origamid.dev/json/api/produto/smartphone";

    const api3 = "https://ranekapi.origamid.dev/json/api/produto/notebook";

    return (
        <div>
            <Botao texto="Produto 1" api={api1} setProduto={setProduto} />
            <Botao texto="Produto 2" api={api2} setProduto={setProduto} />
            <Botao texto="Produto 3" api={api3} setProduto={setProduto} />
        </div>
    );
}