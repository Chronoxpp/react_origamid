import React from "react";

const types = {
  email: {
    regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/
    ,
    message: "Preencha um email válido"
  }
}

export default function useForm(type)
{
  const [value, setValue] = React.useState("");
  const [erro, setErro] = React.useState("");

  function validate(value)
  {
    if(! type) return;

    if(value.length === 0)
    {
      setErro("Preencha um valor");
      return false;
    }
    else if(types[type] && ! (types[type].regex.test(value)))
    {
      setErro(types[type].message);
      return false;
    }
    else
    {
      setErro("");
      return true;
    }
  }

  function onChange({target})
  {
    if (erro)
      validate(target.value);

    setValue(target.value);
  }

  return (
    {
      value,
      setValue,
      onChange,
      erro,
      validate: () => validate(value),
      onBlur: () => validate(value),
    }
  );
}