import Home from './Home';
import PaginaDoSite from './PaginaDoSite';
import Produtos from './Produtos';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];


export default function App()
{
  const pathname = window.location.pathname;

  let nomePagina = pathname === '/' ? 'Home' : 'Produtos';
  
  return (
      <PaginaDoSite nome={nomePagina} dados={(nomePagina === 'Produtos') && produtos} />
  );
};
