// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

export default function App()
{
  let produtosAprovados = produtos.filter(
    (produto) => 
    {
      const preco = Number(produto.preco.replace('R$ ', ''));

      return preco > 1500;
    }
  );

  function renderCores(cores)
  {
    const listaCores = cores.map(
      (cor) => 
      {
        return (
          <li style={{backgroundColor: cor, color: "white"}}>{cor}</li>
        );
      }
    );

    return (
      <ul>
        {listaCores}
      </ul>
    );
  }

  const pagina = produtosAprovados.map(
    (produto) =>
    {
      return (
        <div>
          <h1>{produto.nome}</h1>
          <p>{produto.preco}</p>
          {renderCores(produto.cores)}
        </div>
      );
    }
  );

  return (
    <section>
      {pagina}
    </section>
  );
};
