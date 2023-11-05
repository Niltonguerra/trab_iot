
import '../../assets/css/main.css';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import '../../assets/css/main.css';

// import required modules
import { Mousewheel, Pagination,Autoplay } from 'swiper/modules';

export default function CaroselBeneficios(props:any) {
  return (
    <div className='beneficios' >


      <h2 className='text-titulo'>{props.topico.nomeTopico}</h2>

      <p className='curiosidades slideCard conteudo'> 
      {props.topico.descricaoTopico}
        
      </p>

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


{props.topico && props.topico.subTopico.map((SubTopico:any, index:number) => (
          <div key={index+SubTopico.nomesubTopico}>
        <SwiperSlide>
            <img className='curiosidades img' src={props.topico.foto.imagem_grande.url} alt={"img"+props.topico.nomeTopico} />
            
            <div className='modal'>
              
              <div className='text'>
              <h4 className='titulo'> {SubTopico.nomesubTopico}</h4>

              <p className='conteudo'>
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
