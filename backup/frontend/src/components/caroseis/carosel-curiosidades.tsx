
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import '../../assets/css/main.css';


// tipagem
import {Curiosidade} from '../../types/typesReceitas'


// import required modules
import { Scrollbar,Autoplay } from 'swiper/modules';
import { SubTopico } from '../../types/typesAlimentos';










const CaroselCuriosidades: React.FC<Curiosidade> = (props) => {
  return (   


      <div className='curiosidades'>

      <h2 className='text-titulo'>{props.topico.nomeTopico}</h2>

      <p className='curiosidades slideCard conteudo'> 
              {props.topico.descricaoTopico}
                
              </p>

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
        


{props.topico && props.topico.subTopico.map((SubTopico, index) => (

  <div key={index+SubTopico.nomesubTopico}>

    <SwiperSlide>
      <div className='curiosidades slideCard'>

        <img className='curiosidades img' src={props.topico.foto.imagem_grande.url} alt={"img"+props.topico.nomeTopico} />
        

        <div className="text">
        <h4>{SubTopico.nomesubTopico}</h4> <br></br>

        <p className='curiosidades slideCard conteudo'> 

        {SubTopico.descricaosubTopico}

        </p>

        </div>

      </div>

    </SwiperSlide>
  </div>
))}  



        

      </Swiper>
      </div>
      
    

  );
}
export default CaroselCuriosidades;