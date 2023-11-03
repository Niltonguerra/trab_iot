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



export default function CaroselHistoria() {



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
        <SwiperSlide>
            <div className='container'>
            <img className='container img' src="/images/carrotplant.jpg" alt="cenoura" />


            <div className='modal'>
                <div className='text'>
                    <div className='titulo'>Origem na Ásia</div>
                    <div className='conteudo'> 
                        As cenouras são cultivadas há milênios. Acredita-se que sua origem remonta ao Afeganistão e às regiões circundantes. 
                        As primeiras cenouras não se assemelhavam muito às variedades modernas; elas eram provavelmente mais finas e roxas.
                    </div>
                </div>
            </div>
                
            </div>

        </SwiperSlide>


        <SwiperSlide>
            <div className='container'>
            <img className='container img' src="/images/carrotplant.jpg" alt="cenoura" />


            <div className='modal'>
                <div className='text'>
                    <div className='titulo'>Cultivo na Europa</div>
                    <div className='conteudo'> 
                        As cenouras foram gradualmente introduzidas em diferentes partes do mundo. No início, as cenouras eram mais valorizadas 
                        por suas folhas e sementes do que pela raiz. Os romanos e os gregos antigos conheciam e consumiam cenouras.
                    </div>
                </div>
            </div>
                
            </div>

        </SwiperSlide>

        <SwiperSlide>
            <div className='container'>
            <img className='container img' src="/images/carrotplant.jpg" alt="cenoura" />


            <div className='modal'>
                <div className='text'>
                    <div className='titulo'>Evolução das Cores</div>
                    <div className='conteudo'> Inicialmente, as cenouras eram de cores variadas, incluindo branco, amarelo e roxo. 
                        A cenoura alaranjada que conhecemos hoje é o resultado de cruzamentos seletivos feitos na Holanda no século XVII. 
                        A seleção foi feita para homogeneizar a cor laranja em homenagem à Casa de Orange-Nassau, uma família real holandesa.
                    </div>
                </div>
            </div>
                
            </div>

        </SwiperSlide>

        <SwiperSlide>
            <div className='container'>
            <img className='container img' src="/images/carrotplant.jpg" alt="cenoura" />


            <div className='modal'>
                <div className='text'>
                    <div className='titulo'>Popularização</div>
                    <div className='conteudo'> 
                        A variedade de cenoura alaranjada rapidamente se tornou popular, não apenas por seu sabor, mas também por suas 
                        propriedades nutricionais. A cor alaranjada é devida aos carotenoides, especialmente ao betacaroteno, que é convertido em vitamina 
                        A no organismo
                    </div>
                </div>
            </div>
                
            </div>

        </SwiperSlide>


        <SwiperSlide>
            <div className='container'>
            <img className='container img' src="/images/carrotplant.jpg" alt="cenoura" />


            <div className='modal'>
                <div className='text'>
                    <div className='titulo'>Nutrição e Saúde</div>
                    <div className='conteudo'> 
                        As cenouras são conhecidas por serem 
                        ricas em antioxidantes, fibras, vitaminas e minerais. O betacaroteno é especialmente importante 
                        para a saúde dos olhos e da pele.
                    </div>
                </div>
            </div>
                
            </div>

        </SwiperSlide>

        <SwiperSlide>
            <div className='container'>
            <img className='container img' src="/images/carrotplant.jpg" alt="cenoura" />


            <div className='modal'>
                <div className='text'>
                    <div className='titulo'>Cultivo Global</div>
                    <div className='conteudo'>
                        Hoje, as cenouras são cultivadas em todo o mundo, em uma variedade de climas e solos.
                        Elas são uma parte essencial da culinária e podem ser consumidas cruas, cozidas, em sopas, saladas, 
                        sucos e muito mais.
                    </div>
                </div>
            </div>
                
            </div>

        </SwiperSlide>


        <SwiperSlide>
            <div className='container'>
            <img className='container img' src="/images/carrotplant.jpg" alt="cenoura" />


            <div className='modal'>
                <div className='text'>
                    <div className='titulo'>Cenoura na Cultura Pop</div>
                    <div className='conteudo'> 
                        A cenoura também tem um lugar na cultura popular. Ela é frequentemente associada à ideia de melhorar a visão 
                        (graças ao betacaroteno) e é um alimento popular para personagens de desenhos animados, como o coelho 
                        Pernalonga da Warner Bros.
                    </div>
                </div>
            </div>
                
            </div>

        </SwiperSlide>








      </Swiper>


    </div>
  );
}
