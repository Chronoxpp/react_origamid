import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg'
import Head from './Head';

export default function Contato()
{
    return (
        <section className={`${styles.Contato} animeLeft`}>
            <Head title="Ranek | Contato" description="Entre em contato" />
            <img src={foto} alt="Contato" />

            <div>
                <h1>Entre em contato</h1>

                <ul className={styles.Dados}>
                    <li>emailDeContato@Email.com</li>
                    <li>(11) 1234-5678</li>
                    <li>Endereço: Rua Exemplo, 123 - São Paulo/SP</li>
                </ul>
            </div>
        </section>
    );
}