import React from 'react';

import { Carousel as CauroselCustomized } from 'react-responsive-carousel';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import dadosIniciais from '../../../db.json';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <CauroselCustomized emulateTouch showArrows autoPlay>
        {dadosIniciais.categorias[Math.floor(Math.random() * 5)].videos.map(
          (video) => {
            return (
              <BannerMain
                videoTitle={video.titulo}
                url={video.url}
                videoDescription={video.descricao}
              />
            );
          }
        )}
      </CauroselCustomized>

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

      <Carousel category={dadosIniciais.categorias[5]} />

      <Footer />
    </div>
  );
}

export default Home;
