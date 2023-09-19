
import '../assets/css/main.css';
import '../assets/css/noscript.css';
import CaroselCuriosidades from "../components/caroseis/carosel-curiosidades";
import CaroselBeneficios from "../components/caroseis/carosel-beneficios";
import CaroselHistoria from "../components/caroseis/carosel-história";
import CaroselReceitas from "../components/caroseis/carosel-receitas";
import FormularioProduct from "../components/formulario";



function Productseguranca() {
   
  return (
    <>


{/* <!-- Sidebar --> */}
		
			<section id="sidebar">
				<div className=" inner ">
					<nav>
						<ul>
							<li><a href="#intro">Curiosidades</a></li>
							<li><a href="#one">Benéficios</a></li>
							<li><a href="#two">História</a></li>
							<li><a href="#three">Receitas</a></li>
							<li><a href="#four">formulário</a></li>
						</ul>
					</nav>
				</div>
			</section>
		
		{/* <!-- Wrapper --> */}
			<div id="wrapper">

				{/* <!-- Intro --> */}
					<section id="intro" className="wrapper style1 fullscreen fade-up">
						<div className="inner">
							<CaroselCuriosidades/>
						</div>
						<br></br><br></br>
					</section>

				{/* <!-- One --> */}
					<section id="one" className="wrapper style2 spotlights">
					<div className="inner">
						<CaroselBeneficios/>
					</div>
					</section>

				{/* <!-- Two --> */}
					<section id="two" className="wrapper style3 fade-up">
						<div className="inner">
							<CaroselHistoria/>
						</div>
					</section>


				{/* <!-- Three --> */}
					<section id="three" className="wrapper style1 fade-up">
						<CaroselReceitas/>
					</section>



				{/* <!-- four --> */}
					<section id="four" className="wrapper style1 fade-up">
					<div className="inner">
							<FormularioProduct/>
						</div>
					</section>

			</div>

		{/* <!-- Footer --> */}
			<footer id="footer" className="wrapper style1-alt">
				<div className="inner">
					<ul className="menu">
						<li>&copy;by Nilton Dionisio Guerra.</li><li>Design: Nilton Dionisio Guerra</li>
					</ul>
				</div>
			</footer>






    </>
    )





}

export default Productseguranca;
