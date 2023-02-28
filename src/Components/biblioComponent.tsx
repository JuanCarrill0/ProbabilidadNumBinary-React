import React from "react";

import "../Styles/biblioComponent.css"

export const BiblioComponent = () =>{
    return(
        <div id="bibliografia" className="biblioComponent">
            <div className="title">
                <h2 data-aos="fade-right">Bibliografia</h2>
            </div>
            <div className="links">
                <a href="https://drive.google.com/file/d/0B_2tTMG4oaixUlBQenZmeHB6bWM/view?resourcekey=0-AF5V_DIxP97koYUifA9Gbw" rel="noopener"> Ejercicio 3.13 Pagina 51 - "Probabilidad y aplicaciones estadisticas" Paul L. Meyer <br></br></a>
                <a href="https://es.scribd.com/document/346818969/Solucionario-Probabilidad-Paul-l-Meyer" rel="noopener">Solucionario "Probabilidad y aplicaciones estadisticas" Paul L. Meyer <br /></a>
                <a href="https://es.wikipedia.org/wiki/Distribuci%C3%B3n_binomial"> Distribución Binomial</a>
            </div>
        </div>
    );
}