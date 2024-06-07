import samsung from '../imagens/samsungs23.webp'
import motorola from '../imagens/motorola.webp'

function Grid(){
    return(
        <div id='grid1'>
            <div id='item1'><img id="s23" src={samsung} alt='s23'></img></div>
            <div id='item2'><img class="motorola" src={motorola} alt='motorola'></img></div>
            <div id='item2'><img class="motorola" src={motorola} alt='motorola'></img></div>
            <div id='item2'><img class="motorola" src={motorola} alt='motorola'></img></div>
            <div id='item2'><img class="motorola" src={motorola} alt='motorola'></img></div>
            <div id='item2'><img class="motorola" src={motorola} alt='motorola'></img></div>
        </div>
    );
}

export default Grid