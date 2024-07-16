import { headers } from "next/headers"

export default function Sobre(){

    return(

        <header>
            
        <div className="titulo">
            <h1>Billie Eilish</h1>
            <div className="textotitulo">
                <p>by billiezinha: <br /> Portifólio</p>
            </div>
        </div>

        <ul>
        <li>
            <a href="#INICIO">INICIO</a>
        </li>
        <li>
            <a href="#SOBRE">SOBRE</a>
        </li>
        <li>
            <a href="#SERVICOS">SERVIÇOS</a>
        </li>
        <li>
            <a href="#CTT">CONTATO</a>
        </li>
    </ul>
        </header>


    );
}