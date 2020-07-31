import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    const { value } = event.target;
    setValue(event.target.getAttribute('name'), value);
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      //   ? 'http://localhost:8080/categorias'
      //   : 'https://ceolinflix.herokuapp.com/categorias';

      fetch(URL).then(async (response) => {
        if (response.ok) {
          const categoriass = await response.json();
          setCategorias(categoriass);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();

          setCategorias([...categorias, values]);

          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria:"
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor:"
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>Cadastrar</Button>

        {categorias.length === 0 && (
          <div>
            <p />
            Loading...
          </div>
        )}
      </form>

      <ul>
        {categorias.map((categoria) => {
          return <li key={`${categoria.id}`}>{categoria.titulo}</li>;
        })}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
