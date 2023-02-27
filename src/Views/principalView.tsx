import React, { useEffect, useRef, useState} from "react";
import LogoUd from "../Assets/LogoDistrital.png"
import { TeoryComponent } from "../Components/teoryComponent";
import { DevelopComponent } from "../Components/developComponent";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "../Styles/principalView.css"

export const Principalview = () => {
    
    const [numMax, setNumMax] = useState<number>(1);
    const [numDigits, setNumDigits] = useState<number>(1);

    const numMaxRef = useRef<HTMLInputElement>(null);
    const numDigitsRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            delay: 100,
        });
    }, []);


    // Función para generar un número binario aleatorio con la cantidad de dígitos especificada
    const generateBinaryNumber = (numDigits: number , numMax:number) => {
        let binaryNumber = "";
        for (let i = 0; i < numDigits; i++) {
        // Generar un número aleatorio entre 0 y 2
        let digit = Math.floor(Math.random() * (numMax+1));
        binaryNumber += digit;
        }
        return binaryNumber;
    }

    // Función para calcular la probabilidad de que aparezca un número incorrecto
    const calculateProbability = (numDigits: number , numMax:number) => {
        // Probabilidad de que aparezca un número incorrecto en un dígito
        let p = 0;
    
        if(numMax >= 2){
        p = (numMax-1) / (numMax+1);
        }
    
        let probability = 0;
        for (let k = 1; k <= numDigits; k++) {
        let binomialCoefficient = 1;
        for (let i = 0; i < k; i++) {
            binomialCoefficient *= (numDigits - i) / (i + 1);
        }
        probability += binomialCoefficient * Math.pow(p, k) * Math.pow(1 - p, numDigits - k);
        }
        return probability;
    }

    // Función para manejar el evento de clic en el botón "Generar número"
    const handleGenerateBtnClick = () =>{
        const inputNumDigits = numDigitsRef.current?.value ?? ""
        const inputNumMax = numMaxRef.current?.value ?? "";

        const valueNumDigits = parseInt(inputNumDigits);
        const valueNumMax = parseInt(inputNumMax);
    
        // Generar un número binario aleatorio con la cantidad de dígitos especificada
        const binaryNumber = generateBinaryNumber(valueNumDigits,valueNumMax);
        
        // Calcular la probabilidad de que aparezca un número incorrecto
        const probability = calculateProbability(valueNumDigits,valueNumMax);
        const probabilityRound = probability.toFixed(8);
        
        // Mostrar el resultado en pantalla
        const resultDiv = document.getElementById("result");
        if (resultDiv) {
        resultDiv.innerHTML =
            '<p>Número binario generado: ' +
            binaryNumber +
            '</p><p>Probabilidad de que aparezca un número incorrecto: ' +
            probabilityRound +
            "</p>";
        }
    }

    const handleInputChange =() => {
        if (numMaxRef.current ) {
            setNumMax(parseInt(numMaxRef.current.value));
        }

        if(numDigitsRef.current){
            setNumDigits(parseInt(numDigitsRef.current.value));
        }
    }
      
    return (
        <div className="container" data-aos="fade-up">
            <header>
                <div className="imgUd">
                    <img src={LogoUd} alt="" />
                </div>
                <div id="navHeader">
                <ul className="flex-container">
                    <li className="flex-item">Parametrizacion</li>
                    <li className="flex-item">Teoria</li>
                    <li className="flex-item">Desarrollo de procedimientos</li>
                    <li className="flex-item">Bibliografia</li>
                </ul>
                </div>
            </header>
            <div className="titleBox">
                <h1 className="title" data-aos="zoom-in">Generador de números binarios</h1>
                <p className="text" data-aos="fade-left">Problema : Un número en sistema binario está compuesto sólo por dígitos 0 y 1. Si consideramos números binarios de n dígitos y es p la probabilidad de que cualquier dígito sea incorrecto (se transforme de 0 a 1 y de 1 a 0), independientemente unos de otros <br/>¿Cual es la probabilidad de que un número sea incorrecto?</p>
            </div>
            <div className="principalBox" data-aos="fade-up">
                <div className="formBox" data-aos="fade-right">
                <label htmlFor="numMax">Digite el Maximo digito posible que puede existir: </label>
                <input type="number" id="numMax" min="1" max="9" value={numMax} onChange={handleInputChange} ref={numMaxRef} />
                <label htmlFor="numDigits">Número de dígitos:</label>
                <input type="number" name="numDigits" min="1" max="100" value={numDigits} onChange={handleInputChange} ref={numDigitsRef}></input>
                <button onClick={handleGenerateBtnClick} type="button" id="generateBtn">Generar número</button>
                </div>
                <div id="result" data-aos="zoom-in"></div>
            </div>
            <TeoryComponent />
            <DevelopComponent />
        </div>
    );
}