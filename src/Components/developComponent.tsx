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
                <div className="aside-top">
                    <div className="topLeft">
                        <p className="text">  <strong>Paso 1:</strong> Identificando los siguientes sucesos</p>
                        <img className="image image1" src={Paso1} alt="" />
                    </div>
                    <div className="topRight">
                        <p className="text"> <strong>Paso 2</strong> Sabiendo que los sucesos para cada digito son independientes, el numero de n digitos será incorrecto si al menos uno de los digitos aparece incorrecto. Es decir el suceso D se describe como</p>
                        <img className="image" src={Paso2} alt="" />
                    </div>
                </div>
                <div className="aside-bottom">
                    <p className="text"><strong>Paso 3:</strong> Por ende tenemos que:</p>
                    <img className="image" src={Paso3} alt="" />
                </div>
            </div>
        </div>
    );
}