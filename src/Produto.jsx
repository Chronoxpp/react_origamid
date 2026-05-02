export default function Produto({produto})
{
    return (
        <div>
            <h1>{produto.nome}</h1>
            <p>R$ {produto.preco}</p>
        </div>
    );
}