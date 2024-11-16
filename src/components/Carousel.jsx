import {useState} from 'react';

function Carousel (props) {
    const [index, setIndex] = useState(0);
    const hasNext = index < props.images.length - 1;
    function handleClick () {
        if (hasNext) {
            setIndex(index +1);
        } else {
            setIndex(0);
        }
    }

    return (
        <>
        <img onClick={handleClick} src= {props.images[index]} alt = "random image"/>
        </>
    )
}

export default Carousel;
