
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


import '../../assets/css/main.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function CaroselReceitas() {
  return (
    <div className='receitas'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='container'>

              <img className='container img' src="/images/carrot-cake.jpg" alt="cenoura" />


            <div className='modal'>
 

                <div className='text'>
                    <div className='titulo'>Bolo de Cenoura com Cobertura de Chocolate</div>
                    <div className='conteudo'> 
                        Modo de premaro:

                        0.Descasque e rale as cenouras.<br/>
                        1.Em uma tigela, misture farinha de trigo, açúcar, fermento, sal e canela.<br/>
                        2.Adicione as cenouras raladas, óleo e ovos à mistura seca. Misture bem.<br/>
                        3.Despeje a massa em uma forma untada e asse em forno preaquecido a 180°C por cerca de 35-40 minutos.<br/>
                        4.Enquanto o bolo assa, prepare a cobertura de chocolate derretendo chocolate e creme de leite em banho-maria.<br/>
                        5.Depois que o bolo esfriar, cubra com a cobertura de chocolate.<br/>
                    </div>
                </div>
            </div>
                
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='container'>

              <img className='container img' src="/images/carrot-cake.jpg" alt="cenoura" />


            <div className='modal'>
 

                <div className='text'>
                    <div className='titulo'>Sopa Cremosa de Cenoura com Gengibre</div>
                    <div className='conteudo'> 
                        Modo de premaro:<br/>
                        0.Descasque e corte as cenouras em rodelas.<br/>
                        1.Em uma panela, refogue cebola e alho em azeite. Adicione as cenouras e gengibre ralado.<br/>
                        2.Cubra com caldo de legumes e cozinhe até que as cenouras estejam macias.<br/>
                        3.Use um mixer de mão para triturar a sopa até ficar cremosa.<br/>
                        4.Tempere com sal, pimenta e um toque de creme.<br/>
                        5.Sirva quente, decorada com folhas de coentro ou salsinha.<br/>
                    </div>
                </div>
            </div>
                
            </div>
        </SwiperSlide>
        
        
        
        
        <SwiperSlide>
            <div className='container'>

              <img className='container img' src="/images/carrot-cake.jpg" alt="cenoura" />


            <div className='modal'>
 

                <div className='text'>
                    <div className='titulo'>Cenouras Assadas com Ervas</div>
                    <div className='conteudo'> 
                        Modo de premaro:<br/>

                        0.Descasque e rale as cenouras.<br/>
                        1.Misture as cenouras com azeite, alecrim, alho picado, sal e pimenta.<br/>
                        2.Adicione as cenouras raladas, óleo e ovos à mistura seca. Misture bem.<br/>
                        3.Espalhe as cenouras em uma assadeira e leve ao forno preaquecido a 200°C por cerca de 20-25 minutos, virando ocasionalmente.<br/>

                    </div>
                </div>
            </div>
                
            </div>
        </SwiperSlide>



        <SwiperSlide>
            <div className='container'>

              <img className='container img' src="/images/carrot-cake.jpg" alt="cenoura" />


            <div className='modal'>
 

                <div className='text'>
                    <div className='titulo'>Salada de Cenoura e Maçã</div>
                    <div className='conteudo'> 
                        Modo de premaro:<br/>

                        0.Descasque e rale as cenouras.<br/>
                        1.Corte maçãs em cubos.<br/>
                        2.Em uma tigela, misture as cenouras raladas, maçãs, nozes picadas e passas.<br/>
                        3.Em outra tigela, prepare o molho misturando iogurte, suco de limão, mel e sal.<br/>
                        4.Regue a salada com o molho e misture bem.<br/>
                    </div>
                </div>
            </div>
                
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='container'>

              <img className='container img' src="/images/carrot-cake.jpg" alt="cenoura" />


            <div className='modal'>
 

                <div className='text'>
                    <div className='titulo'>Cenouras Glaceadas com Mel</div>
                    <div className='conteudo'> 
                        Modo de premaro:<br/>

                        0.Descasque e rale as cenouras.<br/>
                        1.Cozinhe as cenouras em água até ficarem macias. Escorra.<br/>
                        2.Em uma frigideira, derreta manteiga e acrescente mel, canela e uma pitada de sal.<br/>
                        3.Adicione as cenouras cozidas à frigideira e cozinhe até que estejam revestidas e caramelizadas.<br/>
                    </div>
                </div>
            </div>
                
            </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
}
