import React from "react";

import "../Styles/biblioComponent.css"

export const BiblioComponent = () =>{
    return(
        <div id="bibliografia" className="biblioComponent">
            <div className="title">
                <h2 >Bibliografia</h2>
            </div>
            <div className="links">
                <a href="https://drive.google.com/file/d/0B_2tTMG4oaixUlBQenZmeHB6bWM/view?resourcekey=0-AF5V_DIxP97koYUifA9Gbw" rel="noopener"> "Probabilidad y aplicaciones estadisticas" Paul L. Meyer </a>
                <a href="https://es.scribd.com/document/346818969/Solucionario-Probabilidad-Paul-l-Meyer" rel="noopener">Solucionario "Probabilidad y aplicaciones estadisticas" Paul L. Meyer </a>
            </div>
            <div className="title">
                <h2 >PDF</h2>
            </div>
            <div className="links">
                <a href="https://drive.google.com/file/d/1naijeoh2fopmjHXS7CWSsdEgIClVFQXW/view?usp=share_link "> PDF - Analisis Teorico del ejercicio</a>
            </div>
        </div>
        
    );
}