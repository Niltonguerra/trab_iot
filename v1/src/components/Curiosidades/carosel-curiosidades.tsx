import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import '../../assets/css/main.css';



// import required modules
import { Scrollbar,Autoplay } from 'swiper/modules';

export default function CaroselCuriosidades() {
  return (   


      <div className='curiosidades'>

      <h2 className='text-titulo'>Curiosidades</h2>
      <Swiper
        scrollbar={{
          hide: true,
        }}

        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}

        modules={[Scrollbar,Autoplay]}
        className="mySwiper"
      >
        

        <SwiperSlide>
          <div className='curiosidades slideCard'>
            <img className='curiosidades img' src="../../../public/img/carrot.jpg" alt="cenoura" />
            <div className="text">
              <h4>Variedade de Cores</h4> <br></br>
              <p className='curiosidades slideCard conteudo'> 
                Embora a cenoura alaranjada seja a mais comum, elas também podem ser encontradas em outras cores, 
                como roxo, amarelo e branco. Essas variações de cor têm diferentes compostos antioxidantes e nutrientes.
              </p>

            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide>
          <div className='curiosidades slideCard'>
          <img className='curiosidades img' src="../../../public/img/carrot.jpg" alt="cenoura" />
          
          <div className="text">
            <h4>Origem</h4> <br></br>
            <p> 
            As cenouras têm uma longa história de cultivo, com origens que remontam a cerca de 5.000 anos na 
            região que hoje é o Afeganistão. Elas eram originalmente cultivadas por suas folhas e sementes, em 
            vez de suas raízes.
              </p>

            </div>
          </div>
        </SwiperSlide>

                <SwiperSlide>
          <div className='curiosidades slideCard'>
          <img className='curiosidades img' src="../../../public/img/carrot.jpg" alt="cenoura" />
          <div className="text">
            <h4>Vitamina A Rica</h4> <br></br>
            <p> 
            Cenouras são conhecidas por serem uma excelente fonte de vitamina A, 
            que é importante para a saúde da visão, crescimento celular e imunidade.
              </p>

            </div>
          </div>
        </SwiperSlide>

                <SwiperSlide>
          <div className='curiosidades slideCard'>
          <img className='curiosidades img' src="../../../public/img/carrot.jpg" alt="cenoura" />
          <div className="text">
            <h4>Nutrientes e Benefícios</h4> <br></br>
            <p> 
            Além da vitamina A, cenouras contêm fibras, vitamina K, potássio e antioxidantes 
            como o betacaroteno. Esses nutrientes podem ajudar a manter a saúde ocular, a pele e o sistema imunológico.
              </p>

            </div>
          </div>
        </SwiperSlide>

                <SwiperSlide>
          <div className='curiosidades slideCard'>
          <img className='curiosidades img' src="../../../public/img/carrot.jpg" alt="cenoura" />
          <div className="text">
            <h4>Ajuda à Visão</h4> <br></br>
            <p> 
            Embora a ideia de que cenouras melhoram a visão seja parcialmente um mito, elas contêm betacaroteno, 
            que é convertido em vitamina A no corpo e pode contribuir para a saúde ocular.
              </p>

            </div>
          </div>
        </SwiperSlide>

                <SwiperSlide>
          <div className='curiosidades slideCard'>
          <img className='curiosidades img' src="../../../public/img/carrot.jpg" alt="cenoura" />
          <div className="text">
            <h4>Lenda da Vitamina A</h4> <br></br>
            <p> 
            Durante a Segunda Guerra Mundial, os britânicos promoveram a ideia de que seus pilotos de caça tinham uma visão 
            excepcional devido ao consumo de cenouras, como forma de esconder o uso de radares para localização de aeronaves 
            inimigas.
              </p>

            </div>
          </div>
        </SwiperSlide>

                <SwiperSlide>
          <div className='curiosidades slideCard'>
          <img className='curiosidades img' src="../../../public/img/carrot.jpg" alt="cenoura" />
          <div className="text">
            <h4>Versatilidade na Culinária</h4> <br></br>
            <p> 
            Cenouras podem ser consumidas cruas, cozidas, assadas, em sopas, purês e 
            até mesmo em sucos. Sua doçura natural as torna um ingrediente versátil em várias receitas.
              </p>

            </div>
          </div>
        </SwiperSlide>

                <SwiperSlide>
          <div className='curiosidades slideCard'>
          <img className='curiosidades img' src="../../../public/img/carrot.jpg" alt="cenoura" />
          <div className="text">
            <h4>Cenouras Baby</h4> <br></br>
            <p> 
            Cenouras baby são variedades jovens e pequenas da raiz. Elas são frequentemente colhidas antes de 
            atingirem o tamanho total e são adoradas por seu sabor adocicado e tamanho conveniente.
              </p>

            </div>
          </div>
        </SwiperSlide>

                <SwiperSlide>
          <div className='curiosidades slideCard'>
          <img className='curiosidades img' src="../../../public/img/carrot.jpg" alt="cenoura" />
          <div className="text">
            <h4>Valor Nutricional das Folhas</h4> <br></br>
            <p> 
            As folhas verdes da cenoura também são comestíveis e nutritivas, 
            mas muitas vezes são negligenciadas. Elas contêm nutrientes como vitamina K, cálcio e ferro.
              </p>

            </div>
          </div>
        </SwiperSlide>

                <SwiperSlide>
          <div className='curiosidades slideCard'>
          <img className='curiosidades img' src="../../../public/img/carrot.jpg" alt="cenoura" />
          <div className="text">
            <h4>Armazenamento Duradouro</h4> <br></br>
            <p> 
            Cenouras podem ser armazenadas por um longo período, especialmente se mantidas em um local 
            fresco e úmido. Isso é possível devido à pele protetora que cobre a raiz
              </p>

            </div>
          </div>
        </SwiperSlide>

                <SwiperSlide>
          <div className='curiosidades slideCard'>
          <img className='curiosidades img' src="../../../public/img/carrot.jpg" alt="cenoura" />
          <div className="text">
            <h4>Agricultura Sustentável</h4> <br></br>
            <p> 
            Cenouras são consideradas um cultivo sustentável, pois podem ser cultivadas durante grande 
            parte do ano e podem ser armazenadas sem perder muitos nutrientes.
              </p>

            </div>
          </div>
        </SwiperSlide>

                <SwiperSlide>
          <div className='curiosidades slideCard'>
          <img className='curiosidades img' src="../../../public/img/carrot.jpg" alt="cenoura" />
          <div className="text">
            <h4>Crescimento Subterrâneo</h4> <br></br>
            <p> 
            A parte comestível da cenoura é a raiz, que cresce abaixo do solo. 
            Elas são cultivadas em diferentes tamanhos e formatos, dependendo da variedade.
              </p>

            </div>
          </div>
        </SwiperSlide> 

        

      </Swiper>
      </div>
      
    

  );
}
