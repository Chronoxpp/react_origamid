// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// // Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva
import React from "react";

export default function App()
{
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [rua, setRua] = React.useState('');
  const [numero, setNumero] = React.useState('');
  const [bairro, setBairro] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [estado, setEstado] = React.useState('');
  
  const [usuarioFoiCadastrado, setUsuarioFoiCadastrado] = React.useState(false);

  return (
    <>
      <h1>Cadastro de usuário</h1>

      <form onSubmit={cadastrarUsuario}>
        <label htmlFor="nome">Nome</label>
        <input 
          type="text" 
          id="nome" 
          value={nome} 
          onChange={event => setNome(event.target.value)} 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email"
          value={email} 
          onChange={event => setEmail(event.target.value)}
        />

        <label htmlFor="senha">Senha</label>
        <input 
          type="password" 
          id="senha"
          value={senha} 
          onChange={event => setSenha(event.target.value)}  
        />
        
        <label htmlFor="cep">CEP</label>
        <input 
          type="text" 
          id="cep" 
          value={cep}
          onChange={event => setCep(event.target.value)}
        />

        <label htmlFor="rua">Rua</label>
        <input 
          type="text" 
          id="rua" 
          value={rua}
          onChange={event => setRua(event.target.value)}
        />

        <label htmlFor="numero">Numero</label>
        <input 
          type="text" 
          id="numero" 
          value={numero}
          onChange={event => setNumero(event.target.value)}
        />

        <label htmlFor="bairro">Bairro</label>
        <input 
          type="text" 
          id="bairro" 
          value={bairro}
          onChange={event => setBairro(event.target.value)}
        />

        <label htmlFor="cidade">Cidade</label>
        <input 
          type="text" 
          id="cidade" 
          value={cidade}
          onChange={event => setCidade(event.target.value)}
        />

        <label htmlFor="estado">Estado</label>
        <input 
          type="text" 
          id="estado" 
          value={estado}
          onChange={event => setEstado(event.target.value)}
        />

        <button>Cadastrar</button>
        {usuarioFoiCadastrado && <p>Cadastrado realizado!</p>}
      </form>
    </>
  );

  async function cadastrarUsuario(event)
  {
    event.preventDefault();
    const form = {
      nome: nome,
      email: email,
      senha: senha,
      cep: cep,
      rua: rua,
      numero: numero,
      bairro: bairro,
      cidade: cidade,
      estado: estado
    };

    const apiCadastroUsuario = 'https://ranekapi.origamid.dev/json/api/usuario';

    const json = JSON.stringify(form);

    const response = await fetch(
      apiCadastroUsuario,
      {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: json
      }
    );

    if(response.ok) setUsuarioFoiCadastrado(true);
  }
}