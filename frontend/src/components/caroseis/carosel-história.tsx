import { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import '../../assets/css/main.css';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



export default function CaroselHistoria(props) {



        const [numero, setNumero] = useState(3);
      
        const atualizarNumero = () => {
          if (window.innerWidth < 800 && window.innerWidth > 737 ) {
            setNumero(2); // Atualizar para um número menor se a largura for menor que 768 pixels
          } else if(window.innerWidth < 737){
            setNumero(1); // Voltar ao número inicial se a largura for maior ou igual a 768 pixels
          }else{
            setNumero(3);
          }
    };
      
        useEffect(() => {
          atualizarNumero(); // Chamar a função inicialmente para definir o valor com base no tamanho da tela
      
          window.addEventListener('resize', atualizarNumero); // Ouvir o evento de redimensionamento da tela
          return () => {
            window.removeEventListener('resize', atualizarNumero); // Remover o ouvinte quando o componente é desmontado
          };
        }, []);

    

    return (
    <div className="historia">


    <h2 className='text-titulo'>{props.topico.nomeTopico}</h2>

    <p className='curiosidades slideCard conteudo'> 
    {props.topico.descricaoTopico}
    
    </p>


    <Swiper
        slidesPerView={numero}
        spaceBetween={10}
        freeMode={true}
        pagination={{
            clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
    >





{props.topico && props.topico.subTopico.map((SubTopico, index) => (
  <div key={index+SubTopico.nomesubTopico}>
        <SwiperSlide>
            <div className='container'>
            <img className='container img' src={props.topico.foto.imagem_grande.url} alt={"img"+props.topico.nomeTopico} />


            <div className='modal'>
                <div className='text'>
                    <div className='titulo'>{SubTopico.nomesubTopico}</div>
                    <div className='conteudo'> 
                        {SubTopico.descricaosubTopico}
                    </div>
                </div>
            </div>
                
            </div>

        </SwiperSlide>
        </div>
))}


      </Swiper>


    </div>
  );
}
