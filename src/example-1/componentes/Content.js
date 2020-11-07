import React from 'react';

//components
import Banner from './Banner';
import Drawings from './Drawings';
import Footer from './Footer';

function Content(props){
    return (
        <div className="container padding-bottom-1">
            <Banner />
               
            <div className="column-1 background-gray padding-1 mode-dark profile" style={{
                margin: "0 8px"
            }}>
                <p className="line-normal text-align-center">
                    Hola! me llamo libardo y desde hace tiempo dibujo, me atrae el estilo
                    manga y anime. No suelo dibujar muy a seguido, sólo cuando me apatece
                    y me siento cómodo al dibujar. <br/>
                    Hice esta página para mostrar algunos de mis dibujos, para recibir
                    recomendaciones y mejorar junto con ustedes
                </p>
            </div>

            <Drawings />
            <Footer />
        </div>
    );
}

export default Content;