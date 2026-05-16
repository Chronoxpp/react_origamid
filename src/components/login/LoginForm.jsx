import React from "react";
import {Link} from "react-router-dom";
import Input from "./../forms/Input.jsx";
import Button from "../forms/Button.jsx";
import useForm from "../../hooks/useForm.js";
import {TOKEN_POST} from "../../api.js";

export default function LoginForm()
{
  const username = useForm();
  const password = useForm();

  React.useEffect(async () =>
    {
      const token = localStorage.getItem("token");
      if (token)
        await getUser(token);
    }
  );

  async function getUser(token)
  {
    const {url, options} = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
  }

  async function handleSubmit(e)
  {
    e.preventDefault();

    if (username.validate() && password.validate())
    {
      const {url, options} = TOKEN_POST({
        username: username.value,
        password: password.value
      });

      const response = await fetch(url, options);

      const json = await response.json();

      window.localStorage.setItem("token", JSON.stringify(json.token));
      await getUser(json.token);
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