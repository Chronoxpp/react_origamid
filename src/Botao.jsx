export default function Botao({texto, api, setProduto, obterProdutoLocal})
{
    let ID_PRODUTO_LOCAL = "produto";
    
    return (
        <button 
            onClick={() => exibirProduto(texto, api)}
        >
            {texto}
        </button>
    );

    async function exibirProduto(texto, api)
    {
        const produto = await obterProduto(texto, api);
        salvarProdutoLocalmente(ID_PRODUTO_LOCAL, produto);
        setProduto(produto);
    }

    async function obterProduto(nome, api)
    {
        let produto = null; 

        produto = obterProdutoLocal(ID_PRODUTO_LOCAL);
        if(produto && produto.nome === nome) return produto;

        const response = await fetch(api);
        produto = await response.json();
        return produto;
    }

    function salvarProdutoLocalmente(id, produto)
    {
        window.localStorage.setItem(id, JSON.stringify(produto));
    }
}