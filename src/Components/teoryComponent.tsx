import React from "react";

import "../Styles/teoryComponent.css"

export const TeoryComponent = () =>{
    return(
        <div id="teoria" className="teoryComponent">
            <h2 data-aos="fade-right" className="title">Teoria</h2>
            <h3 className="subtitle">Probabilidad de eventos independientes</h3>
            <div className="content-Teory">
                <div className="textDesc">
                <p className="text">La probabilidad de ocurrencia de dos eventos independientes es igual al producto de las probabilidades de suceder de cada evento por separado. <br /><br />
                    <span className="formula">P(A n B) = P(A) * P(B)</span><br /><br />
                    Esta es la llamada Regla del Producto o Regla de la Multiplicación en teoría de la probabilidad. Es una regla muy utilizada para calcular la probabilidad de la intersección de dos eventos independientes.</p>
                </div>
            </div>
        </div>
    );
}