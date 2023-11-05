
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


import '../../assets/css/main.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function CaroselReceitas(props:any) {
  return (
    <div className='receitas'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >




















{/* ingredientes: */}



        <SwiperSlide>
            <div className='container'>

              <img className='container img' src={props.receita.foto.imagem_grande.url} alt={"img"+props.receita.ingredientes.nome} />


            <div className='modal'>

                <div className='text'>
                    <div className='titulo'>{props.receita.nome}</div>
                    <div className='conteudo'> 
                        
                    <br/>
                        ingredientes:<br/>
                        {props.receita && props.receita.ingredientes.map((ingred:any, index:number) => (
                          <div key={index+ingred.nome}>
                              {ingred.nome}<br/>
                          </div>
                        ))}

                    <br/>
                    tempo de preparo: {props.receita.tempoDePreparo} 
                    
                    </div>
                </div>
            </div>
                
            </div>
        </SwiperSlide>






{/* modo de preparo */}


{props.receita && props.receita.modoDePreparo.map((passo:any, index:number) => (
  <div key={index+passo.passos}>
    <SwiperSlide>
        <div className='container'>

          <img className='container img' src={props.receita.foto.imagem_grande.url} alt={"img"+props.receita.modoDePreparo.passos} />


        <div className='modal'>

            <div className='text'>
                <div className='titulo'>Passo {index}: </div>
                <div className='conteudo'> 
                {passo.passos}

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
