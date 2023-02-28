import React from "react";

import "../Styles/teoryComponent.css"

import funcionProbabilidad from "../Assets/FuncionDeProbabilidad.png"
import combinacion from "../Assets/Combinacion.png"
import funcionAcumulada from "../Assets/FuncionDistribucionAcumulada.png"

export const TeoryComponent = () =>{
    return(
        <div id="teoria" className="teoryComponent">
            <h2 data-aos="fade-right" className="title">Teoria</h2>
            <h3 className="subtitle">Distribución Binonmial</h3>
            <div className="content-Teory">
                <div className="textDesc">
                <p className="text">En teoría de la probabilidad y estadística, la distribución binomial o distribución binómica es una distribución de probabilidad discreta que cuenta el número de éxitos en una secuencia de 
                 n ensayos de Bernoulli independientes entre sí con una probabilidad fija 
                 p de ocurrencia de éxito entre los ensayos. Un experimento de Bernoulli se caracteriza por ser dicotómico, esto es, solo dos resultados son posibles, a uno de estos se le denomina “éxito” y tiene una probabilidad de ocurrencia 
                 p y al otro se le denomina “fracaso” y tiene una probabilidad q=1-p </p>
                </div>
                <h3 className="subtitle">Formula</h3>
                <div className="textForm">
                    <div className="asideForm-1">
                        <p className="text"> La función de probabilidad está dada por :</p>
                        <img data-aos="zoom-in" src={funcionProbabilidad} alt="" />
                    </div>
                    <div className="asideForm-2">
                        <p className="text">Donde : </p>
                        <img data-aos="zoom-in" src={combinacion} alt="" />
                    </div>
                    <div className="asideForm-3">
                        <p className="text"> La función de probabilidad de distribución acumulada está dada por:</p>
                        <img data-aos="zoom-in" src={funcionAcumulada} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}