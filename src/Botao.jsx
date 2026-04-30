export default function Botao({texto, api, setProduto})
{
    async function buscarProduto(api)
    {
        const dadosProduto = await fetch(api);
        return await dadosProduto.json();
    }

    async function definirProduto(api)
    {
        setProduto('carregando');

        const produto = await buscarProduto(api);
        setProduto(produto);
    }

    return (
        <button onClick={
            () => {definirProduto(api);}
        }>{texto}</button>
    );
}