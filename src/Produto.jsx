export default function Produto({produto})
{
    return (
        <div>
            <h1>{produto.nome}</h1>
            <p>R$ {produto.preco}</p>
            <p>{produto.vendido ? 'Vendido' : 'Disponivel'}</p>
            <div>
                <img src={produto.fotos[0].src} alt={produto.fotos[0].alt} />
            </div>
            <p>{produto.descricao}</p>
        </div>
    );
}