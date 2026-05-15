import React from "react";
import {Link} from "react-router-dom";
import Input from "./../forms/Input.jsx";
import Button from "../forms/Button.jsx";
import useForm from "../../hooks/useForm.js";

export default function LoginForm()
{
  const username = useForm();
  const password = useForm();

  function handleSubmit(e)
  {
    e.preventDefault();

    if (username.validate() && password.validate())
    {
      fetch(
        "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({username, password})
        }
      ).then(res =>
      {
        console.log(res)
        return res.json();
      }).then( json =>
        console.log(json)
      )
    }
  }

  return (
    <section>
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
        <Input
          name="username"
          label="Usuario"
          type="text"
          {...username}
        />
        <Input
          name="password"
          label="Senha"
          type="password"
          {...password}
        />

        <Button>Entrar</Button>
      </form>

      <Link to="/login/criar" >Cadastro</Link>
    </section>
  );
}