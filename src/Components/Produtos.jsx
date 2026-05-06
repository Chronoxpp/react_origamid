import React from 'react';
import styles from './Produtos.module.css';
import { Link } from 'react-router-dom';
import Head from './Head';

export default function Produtos()
{
    const [produtos, setProdutos] = React.useState(null);
    
    React.useEffect(
        () => 
        {
            fetch("https://ranekapi.origamid.dev/json/api/produto")
            .then(
                r => r.json() 
            )
            .then(
                json => setProdutos(json)
            );
        }, []
    );

    if (produtos === null) return null;

    return (
        <section className={`${styles.Produtos} animeLeft`}>
            <Head title={`Ranek`} description={"Descricão do site Ranek"} />
            {produtos.map(
                produto => (
                <Link to={`produto/${produto.id}`} key={produto.id}>
                    <h1 className={styles.Nome}>{produto.nome}</h1>
                    <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                </Link>
            ))}
        </section>
    );
}