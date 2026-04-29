export default function({nome, dados})
{
    return(
        <div style={{border: "2px solid #333", padding: "8px"}}>
            <p>{nome}</p>
            <ul>
                {dados.map(
                    (propriedade, id) =>
                    {
                        return <li key={id}>{propriedade}</li>
                    }
                )}
            </ul>
        </div>
    );
}