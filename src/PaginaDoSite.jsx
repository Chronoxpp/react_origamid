import Menu from "./Menu";
import Home from "./Home";
import Produtos from "./Produtos";

export default function PaginaDoSite({nome, dados = null})
{
    let pagina = null;
    if (nome === 'Home')
        pagina = <Home />
    else if(nome === 'Produtos')
        pagina = <Produtos produtos={dados}/>

    return (
        <>
            <Menu />
            {pagina}
        </>
    );
}