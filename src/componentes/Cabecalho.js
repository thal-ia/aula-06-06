import React from "react";
import entrar from '../imagens/entrar.png'
import uslogin from '../imagens/uslogin.jpg'


function Cabecalho (){
    return (
        <header id='cabecalho'>

        <img id="entrar"src={entrar} alt='pedra do sol'></img>
  
          <ul id="menu">
            <li id='li1'>HOME</li>
            <li id='li2'>PRODUTOS</li>
            <li id='li2'>CATEGORIAS</li>
          </ul>
  
          <img id="uslogin" src={uslogin} alt='pedras roxas'></img>
        </header> /*só pode ter um "pai", se por um <p> fora da header, por exemplo, vai dar erro*/
    ); /*dentro do return podem ter mais 'pais'*/
}

export default Cabecalho //toda vez que alguém exportar esse arquivo vai chamar essa função, se tiver mais de uma função põe só export