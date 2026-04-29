import Menu from "./Menu";
import PaginaDoSite from "./PaginaDoSite";
import TituloPagina from "./TituloPagina";
import Produto from "./Produto";

export default function Produtos({produtos})
{
    let listaProdutos = null;
    listaProdutos = produtos.map(
        (produto, id) =>
        {
            return (
                <Produto key={id} nome={produto.nome} dados={produto.propriedades} />
            ); 
        }
    );

    return (
        <div>
            <TituloPagina titulo="Produtos" />
            
            <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                {listaProdutos}
            </div>
        </div>
    );
}