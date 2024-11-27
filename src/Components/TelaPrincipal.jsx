import React from "react";
import './TelaPrincipal.css';
import capa from '../assets/capa.png';



function TelaPrincipal() {


    return (
        <div className="Foto">
            <img src={capa} alt="Capa" />
        </div>
    )
}

export default TelaPrincipal