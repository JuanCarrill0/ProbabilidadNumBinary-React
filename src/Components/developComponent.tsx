import React from "react";

import "../Styles/developComponent.css"
import Paso1 from "../Assets/Paso1.png"
import Paso2 from "../Assets/Paso2.jpg"
import Paso3 from "../Assets/Paso3.jpg"
import Paso4 from "../Assets/Paso4.jpg"


export const DevelopComponent = () =>{
    return(
        <div className="developComponent" id="desarrollo" >
            <h2 data-aos="fade-right" className="title">Desarrollo de Procedimientos</h2>
            <div className="contentDevelop">
                <div className="aside-left">
                    <p className="text">  <strong>Paso 1:</strong> Identificando los siguientes sucesos</p>
                    <img className="image1" data-aos="zoom-in" src={Paso1} alt="" />
                    <p className="text"> <strong>Paso 2</strong> Sabiendo que los sucesos para cada digito son independientes, identificamos una posible solución por medio de la función de probabilidad por distribución acumulada</p>
                    <img className="image2" data-aos="zoom-in" src={Paso2} alt="" />
                </div>
                <div className="aside-right">
                    <p className="text"><strong>Paso 3:</strong> Implementamos la función de distribucion acumulada por medio de la distribucion binomial acorde a las necesidades de nuestro problema, las cuales es indicar la suma de probabilidades que existen tales que un numero binario de n digitos sea erroneo</p>
                    <img className="image3" data-aos="zoom-in" src={Paso3} alt="" />
                    <p className="text"> Donde n = Numero de digitos <br></br> p = Probabilidad de que exista un digito erroneo</p>
                </div>
            </div>
            <div className="algorithm">
                <p className="text subtitle"> <strong>Desarrollo del algortimo en Typescript</strong> </p>
                <img src={Paso4} alt="" />
            </div>
        </div>
    );
}