import React from 'react';
import CampoForm from '../components/campo_form';



function CriarPost(){
    
    
    


    return (
        <>
        <div className="container--criar">
            <div className="container">
                <div className="conteudo">




                    <CampoForm tipo="beneficios" placeholder="digite os beneficios do vegetal"/>




                    <button className="adicionar">enviar</button>
                </div>

            </div>
        </div>
        </>
    )
}

export default CriarPost;