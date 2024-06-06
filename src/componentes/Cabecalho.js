import React from "react";
import Entrar from "./Entrar";
import Login from "./Login";
import Menu from "./Menu";
import styled from "styled-components";

const CabecalhoContainer = styled.header `
  display: flex;
  height: 10vh; /*viewport height; viewport = tela toda (vh estará no id/class/tag que estiver como elemento 'pai')*/
  background-color: rgb(0, 163, 109);
  justify-content: space-between; /*justifica conteúdo em relação a distribuição entre elementos dessa tag*/
  align-items: center; /*alinha os items em relação a tela dessa tag*/`

function Cabecalho (){
    return (
        <CabecalhoContainer>

        <Entrar></Entrar>
        <Menu></Menu>
        <Login></Login>
        </CabecalhoContainer>
        //</header> /*só pode ter um "pai", se por um <p> fora da header, por exemplo, vai dar erro*/
    ); /*dentro do return podem ter mais 'pais'*/
}

export default Cabecalho //toda vez que alguém exportar esse arquivo vai chamar essa função, se tiver mais de uma função põe só export