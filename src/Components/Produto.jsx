import React from 'react';
import styles from './Produto.module.css';
import { useParams } from 'react-router-dom';
import Head from './Head';

export default function Produto()
{
    const {id} = useParams();

    const [produto, setProduto] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(
        () => 
        {
            async function fetchProduto(url)
            {
                try{
                    setLoading(true);
                    const response = await fetch(url);
                    const json = await response.json();
                    setProduto(json);
                } catch (error) {
                    setError('Um erro ocorreu!');
                } finally {
                    setLoading(false);
                }
            }

            fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
        }, [id]
    );

    if (loading) return <div className="Loading"></div>;
    if (error) return <p>{error}</p>;
    if (! produto) return null;

    return (
        <section className={styles.Produto + " animeLeft"}>
            <Head title={`Ranek | ${produto.nome}`} description={"Ranek | " + produto.descricao} />

            <div>
                {produto.fotos.map(foto => <img key={foto.src} src={foto.src} alt={foto.titulo} />)}
            </div>
            
            <div>
                <h1>{produto.nome}</h1>
                <span className={styles.Preco}>{produto.preco}</span>
                <p className={styles.Descricao}>{produto.descricao}</p>
            </div>
        </section>
    );
}