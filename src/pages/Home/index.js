import React, { useEffect, useState } from 'react';

import { Carousel as CauroselCustomized } from 'react-responsive-carousel';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import PageDefault from '../../components/PageDefault';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([
    {
      categorias: [
        {
          id: '',
          titulo: '',
          cor: '',
          link_extra: {
            text: '',
            url: '',
          },
        },
      ],
      videos: [
        {
          id: '',
          categoriaId: '',
          titulo: '',
          url: '',
        },
      ],
    },
  ]);

  useEffect(() => {
    categoriasRepository
      .getAllCategoriesWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      });
  }, []);

  return (
    <PageDefault paddingAll={10}>
      {dadosIniciais.length === 0 && <div>Loading...</div>}

      <CauroselCustomized emulateTouch showArrows autoPlay>
        {dadosIniciais[
          Math.floor(Math.random() * dadosIniciais.length)
        ].videos.map((video) => {
          return (
            <BannerMain
              key={video.titulo}
              videoTitle={video.titulo}
              url={video.url}
              videoDescription={video.descricao}
            />
          );
        })}
      </CauroselCustomized>

      {dadosIniciais.map((categoria) => {
        return (
          <div key={categoria.id}>
            <Carousel category={categoria} />
          </div>
        );
      })}
    </PageDefault>
  );
}

export default Home;
