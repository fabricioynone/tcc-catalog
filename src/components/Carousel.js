import './Carousel.css'
import Tcccard from './Tcccard';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useState } from 'react';

const Carousel = ( { curso } ) => {
    const [scrollX, setScrollX] = useState(0);

    const handleClickLeft = () => {
        let x = scrollX + 300;
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }
    const handleClickRight = () => {
        let x = scrollX - 300;
        setScrollX(x);
    }

    
    fetch("./resources/documentos/" + curso ).then((resposta) => {
        resposta.json().then(dados => {
            console.log(dados);
        })        
    })


    return ( 
        <>
        <div className="divider">
            <h2>Grupos de TCC</h2>
        </div>
        <div className="carousel--area">
            <div className="right--arrow">
                <MdArrowForwardIos style={{fontSize: 30}} onClick={handleClickRight}/>
            </div>
            <div className="left--arrow">
                <MdArrowBackIos style={{fontSize: 30}} onClick={handleClickLeft}/>
            </div>
            <div className="carousel--container"  style={{marginLeft: scrollX}}>
                <Tcccard />
                <Tcccard />
                <Tcccard />
                <Tcccard />
                <Tcccard />
                <Tcccard />
                <Tcccard />
                <Tcccard />
                <Tcccard />
                <Tcccard />
            </div>
        </div>
        </>
     );
}
 
export default Carousel;