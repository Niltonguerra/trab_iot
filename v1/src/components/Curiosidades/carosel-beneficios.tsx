
import '../../assets/css/main.css';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import '../../assets/css/main.css';

// import required modules
import { Mousewheel, Pagination,Autoplay } from 'swiper/modules';

export default function CaroselBeneficios() {
  return (
    <div className='beneficios' >
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={false}
        pagination={{
          clickable: true,
        }}

        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}

        modules={[Mousewheel, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='curiosidades img' src="../../../public/img/carrotEarth.jpg" alt="cenoura" />
            
            <div className='modal'>
              
              <div className='text'>
              <h4 className='titulo'> Saúde Visual</h4>

              <p className='conteudo'>
              As cenouras são ricas em betacarotenos, que são convertidos em vitamina A no corpo. 
              A vitamina A é essencial para a saúde dos olhos, incluindo a visão noturna e a saúde da retina.
              </p>

            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <img className='curiosidades img' src="../../../public/img/carrotEarth.jpg" alt="cenoura" />
            
            <div className='modal'>
              
              <div className='text'>
              <h4 className='titulo'>Antioxidantes</h4>

              <p className='conteudo'>
              Cenouras contêm antioxidantes como o betacaroteno e a vitamina C, que ajudam a combater 
              os danos causados pelos radicais livres, auxiliando na prevenção de doenças crônicas.
              </p>

            </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <img className='curiosidades img' src="../../../public/img/carrotEarth.jpg" alt="cenoura" />
            
            <div className='modal'>
              
              <div className='text'>
              <h4 className='titulo'> Saúde da Pele</h4>

              <p className='conteudo'>
              Os antioxidantes presentes nas cenouras também contribuem para a saúde da pele, 
              ajudando a prevenir o envelhecimento precoce e mantendo a pele saudável.
              </p>

            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <img className='curiosidades img' src="../../../public/img/carrotEarth.jpg" alt="cenoura" />
            
            <div className='modal'>
              
              <div className='text'>
              <h4 className='titulo'> Melhoria da Imunidade</h4>

              <p className='conteudo'>
              A vitamina C encontrada nas cenouras desempenha um papel importante no fortalecimento do sistema 
              imunológico, auxiliando na proteção contra infecções.
              </p>

            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <img className='curiosidades img' src="../../../public/img/carrotEarth.jpg" alt="cenoura" />
            
            <div className='modal'>
              
              <div className='text'>
              <h4 className='titulo'> Saúde Cardiovascular:</h4>

              <p className='conteudo'>
              Os antioxidantes e fibras das cenouras podem ajudar a reduzir o risco de doenças cardiovasculares, 
              regulando os níveis de colesterol e a pressão arterial.
              </p>

            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <img className='curiosidades img' src="../../../public/img/carrotEarth.jpg" alt="cenoura" />
            
            <div className='modal'>
              
              <div className='text'>
              <h4 className='titulo'> Digestão</h4>

              <p className='conteudo'>
              Cenouras são ricas em fibras alimentares, que são benéficas para a saúde digestiva, 
              promovendo a regularidade intestinal e a saúde do trato gastrointestinal.
              </p>

            </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <img className='curiosidades img' src="../../../public/img/carrotEarth.jpg" alt="cenoura" />
            
            <div className='modal'>
              
              <div className='text'>
              <h4 className='titulo'> Hidratação</h4>

              <p className='conteudo'>
              Devido ao seu alto teor de água, as cenouras podem ajudar na hidratação do corpo, 
              especialmente em climas quentes ou durante a prática de atividades físicas.
              </p>

            </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <img className='curiosidades img' src="../../../public/img/carrotEarth.jpg" alt="cenoura" />
            
            <div className='modal'>
              
              <div className='text'>
              <h4 className='titulo'> Regulação do Açúcar no Sangue</h4>

              <p className='conteudo'>
              O consumo de cenouras pode ajudar a regular os níveis de açúcar no sangue devido ao seu 
              teor de fibras e baixo índice glicêmico.
              </p>

            </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <img className='curiosidades img' src="../../../public/img/carrotEarth.jpg" alt="cenoura" />
            
            <div className='modal'>
              
              <div className='text'>
              <h4 className='titulo'> Cuidado com os Dentes</h4>

              <p className='conteudo'>
              Roer cenouras cruas pode ajudar a estimular a produção de saliva, o que é benéfico para a
              saúde bucal e pode auxiliar na prevenção da cárie dentária.
              </p>

            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <img className='curiosidades img' src="../../../public/img/carrotEarth.jpg" alt="cenoura" />
            
            <div className='modal'>
              
              <div className='text'>
              <h4 className='titulo'> Promoção da Saciedade</h4>

              <p className='conteudo'>
              As fibras presentes nas cenouras podem ajudar a promover a saciedade, o que pode ser útil 
              para o controle do peso.
              </p>

            </div>
            </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
