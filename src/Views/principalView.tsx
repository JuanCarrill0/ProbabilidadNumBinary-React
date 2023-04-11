import React, { useEffect, useRef, useState} from "react";
import clsx from "clsx";
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

type BinaryDigit = "0" | "1";

type BinaryNumberProps = {
    binaryNumber: BinaryDigit[];
    isIncorrect: boolean;
    incorrectIndexes?: number[];
  };

function generateRandomBinaryNumber(n: number): BinaryDigit[] {
  const result: BinaryDigit[] = [];
  for (let i = 0; i < n; i++) {
    const digit = Math.random() < 0.5 ? "0" : "1";
    result.push(digit);
  }
  return result;
}

function calculateProbabiility(binaryNumber: BinaryDigit[], p: number): number{
    return 1-Math.pow((1-p),binaryNumber.length);
}
function countIncorrectDigits(binaryNumber: BinaryDigit[], p: number): number[] {
  const incorrectIndexes: number[] = [];
  for (let i = 0; i < binaryNumber.length; i++) {
    if (Math.random() < p) {
      incorrectIndexes.push(i);
    }
  }
  return incorrectIndexes;
}

function BinaryNumber({ binaryNumber, incorrectIndexes }: BinaryNumberProps) {
    return (
      <div className="binary-numberBox">
        {binaryNumber.map((digit, index) => (
          <div
            key={index}
            className={`binary-number ${incorrectIndexes !== undefined && incorrectIndexes.includes(index) ? "incorrect" : ""}`}
          >
            {digit}
          </div>
        ))}
      </div>
    );
  }

export const Principalview = () => {
    
    const [numMax, setNumMax] = useState<number>(1);
    const [numProb, setNumProb] = useState<number>(1);

    const numMaxRef = useRef<HTMLInputElement>(null);
    const numProbRef = useRef<HTMLInputElement>(null);

    const [binaryNumber, setBinaryNumber] = useState<BinaryDigit[]>(generateRandomBinaryNumber(numMax));
    const [incorrectIndexes, setIncorrectIndexes] = useState<number[]>([]);

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

    const generateNewBinaryNumber = (p: number) => {
        const newBinaryNumber = generateRandomBinaryNumber(numMax);
        setBinaryNumber(newBinaryNumber);
        const newIncorrectIndexes = countIncorrectDigits(newBinaryNumber, p);
        setIncorrectIndexes(newIncorrectIndexes);

        let probability = calculateProbabiility(binaryNumber,p);

        const newData = {
            labels: ["Probabilidad de error", "Probabilidad de acierto"],
            datasets: [
              {
                data: [parseFloat(probability.toFixed(8)) , 1 - parseFloat(probability.toFixed(8)) ],
                backgroundColor: ["#FF6384", "#36A2EB"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB"],
              },
            ],
          };

        setData(newData);
    };

    const handleChange =() => {

        if (numMaxRef.current ) {
            setNumMax(parseInt(numMaxRef.current.value));
        }

        if(numProbRef.current){
            setNumProb(parseInt(numProbRef.current.value));
        }
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
                    <label>
                        Digite la cantidad de digitos del numero binario
                        <input type="number" step="1" min="1" max="8" value={numMax} ref={numMaxRef} onChange={() => handleChange()}/>
                    </label>
                    <label>
                        Digite la probabilidad en porcentaje % de que exista un numero incorrecto
                        <input type="number" step="1" min="0" max="100" value={numProb} ref={numProbRef} onChange={() => handleChange()}/>
                    </label>
                    <button id="generateBtn" onClick={() => generateNewBinaryNumber(numProb/100)}>Generar Numero Binario</button>
                </div>
                <div className="table" id="table">
                    <Pie 
                        data={data}
                    />
                </div>
                <BinaryNumber binaryNumber={binaryNumber} isIncorrect={incorrectIndexes.length > 0} incorrectIndexes={incorrectIndexes} />
            </div>
            <TeoryComponent />
            <DevelopComponent />
            <BiblioComponent />
        </div>
    );
}