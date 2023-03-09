import React, { useEffect, useRef, useState} from "react";
import LogoUd from "../Assets/LogoDistrital.png"
import { TeoryComponent } from "../Components/teoryComponent";
import { DevelopComponent } from "../Components/developComponent";
import { BiblioComponent } from "../Components/biblioComponent";
import { Link } from 'react-scroll';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';

import AOS from 'aos';
import 'aos/dist/aos.css';

import "../Styles/principalView.css"

ChartJS.register(ArcElement, Tooltip, Legend);

export const Principalview = () => {
    
    const [numMax, setNumMax] = useState<number>(1);
    const [numDigits, setNumDigits] = useState<number>(1);

    const numMaxRef = useRef<HTMLInputElement>(null);
    const numDigitsRef = useRef<HTMLInputElement>(null);

    let probabilityRound:string = '0' ;


    const [data, setData] = useState({
        labels: ["Probabilidad de error", "Probabilidad de acierto"],
        datasets: [
          {
            data: [1, 1],
            backgroundColor: ["#FF6384", "#36A2EB"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB"],
          },
        ],
      });
      
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

        const valueNumDigits = parseInt(numDigitsRef.current?.value ?? "");
        const valueNumMax = parseInt(numMaxRef.current?.value ?? "");
    
        // Generar un número binario aleatorio con la cantidad de dígitos especificada
        const binaryNumber = generateBinaryNumber(valueNumDigits,valueNumMax);
        
        // Calcular la probabilidad de que aparezca un número incorrecto
        const probability = calculateProbability(valueNumDigits,valueNumMax);
        probabilityRound = probability.toFixed(8);

        const newData = {
            labels: ["Probabilidad de error", "Probabilidad de acierto"],
            datasets: [
              {
                data: [parseFloat(probabilityRound) , 1 - parseFloat(probabilityRound) ],
                backgroundColor: ["#FF6384", "#36A2EB"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB"],
              },
            ],
          };

        setData(newData);
        // Mostrar el resultado en pantalla
        const resultDiv = document.getElementById("result");

        if (resultDiv) {
            resultDiv.innerHTML =
                '<p>Número binario generado: ' + binaryNumber +
                '</p><p>Probabilidad de que aparezca un número incorrecto: ' +probabilityRound +"</p>";
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

    function handleKeyDown(_event: any) {
        _event.preventDefault();
      }

    return (
        <div className="container" data-aos="fade-up">
            <header>
                <div className="imgUd">
                    <img data-aos="fade-right" src={LogoUd} alt="" />
                </div>
                <div id="navHeader">
                <ul className="flex-container">
                    <li  className="flex-item"> <Link to="parametrizacion" spy={true} smooth={true} duration={500} className="nav-link">Parametrizacion</Link></li>
                    <li  className="flex-item"><Link to="teoria" spy={true} smooth={true} duration={500} className="nav-link">Teoria</Link></li>
                    <li  className="flex-item"><Link to="desarrollo" spy={true} smooth={true} duration={500} className="nav-link">Procedimiento</Link></li>
                    <li  className="flex-item"><Link to="bibliografia" spy={true} smooth={true} duration={500} className="nav-link">Bibliografia</Link></li>
                </ul>
                </div>
                <div className="authors">
                    <p>Juan Esteban Carrillo Garcia (20212020147) <br /> Probabilidad 020-81 - Docente: Fernando Leon Parada </p>
                </div>
            </header>
            <div className="titleBox">
                <h1 className="title" data-aos="zoom-in">Generador de números binarios</h1>
                <p className="text" >Problema : Un número en sistema binario está compuesto sólo por dígitos 0 y 1. Si consideramos números binarios de n dígitos y es p la probabilidad de que cualquier dígito sea incorrecto (se transforme de 0 a 1 y de 1 a 0), independientemente unos de otros <br/>¿Cual es la probabilidad de que un número sea incorrecto? </p>
                <a href="https://drive.google.com/file/d/0B_2tTMG4oaixUlBQenZmeHB6bWM/view?resourcekey=0-AF5V_DIxP97koYUifA9Gbw" rel="noreferrer"> Ejercicio 3.13 Pagina 51 - "Probabilidad y aplicaciones estadisticas" Paul L. Meyer</a>
            </div>
            <div className="principalBox">
                <div className="formBox" data-aos="zoom-in">
                    <label htmlFor="numMax">Digite el Maximo digito posible que puede existir: </label>
                    <input type="number" id="numMax" min="1" max="9" onKeyDown={handleKeyDown} value={numMax} onChange={handleInputChange} ref={numMaxRef} />
                    <label htmlFor="numDigits">Número de dígitos:</label>
                    <input type="number" name="numDigits" min="1" max="100" onKeyDown={handleKeyDown} value={numDigits} onChange={handleInputChange} ref={numDigitsRef}></input>
                    <button onClick={handleGenerateBtnClick} type="button" id="generateBtn">Generar número</button>
                </div>
                <div className="table" id="table">
                    <Pie 
                        data={data}
                    />
                </div>
                <div id="result"></div>
            </div>
            <TeoryComponent />
            <DevelopComponent />
            <BiblioComponent />
        </div>
    );
}