// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

import React from "react";

export default function App()
{
  const [cores, setCores] = React.useState([]);

  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  function handleChange({ target }) 
  {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) 
  {
    console.log("checked", cor, cores, cores.includes(cor));
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map(
        (cor)=>
        {
          return (
            <div key={cor}>
              <label>
                <input
                  type="checkbox"
                  value={cor}
                  checked={handleChecked(cor)}
                  onChange={handleChange}
                />
                {cor}
              </label>
            </div>
          );
        }
      )}

      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
}