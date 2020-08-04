import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

import URL from '../../../config';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch(`${URL}/categorias`).then(async (response) => {
      if (response.ok) {
        const categories = await response.json();
        setCategorias(categories);
        return;
      }
      throw new Error('Não foi possível pegar os dados');
    });
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

          clearForm(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria:"
          name="titulo"
          type="text"
          value={values.titulo}
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
