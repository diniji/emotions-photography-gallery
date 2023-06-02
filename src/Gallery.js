import { useState, useEffect } from "react";
import LikeButton from "./LikeButton";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Gallery(props) {

    useEffect(() => {
        AOS.init();
      })

    const [over, setOver] = useState(false);
    const { title, image1, image2 } = props.singleArt;

    return(
        <div className="art-card" data-aos="fade-up">
            <div 
                onMouseOver={() => {setOver(true)}}
                onMouseOut={() => {setOver(false)}}
                >
                    <img src={over ? image2 : image1} className="imgStyle" width="400px" alt="the art" />
            </div>
            <h2>{title}</h2>
            <LikeButton />
        </div>
    )
}

export default Gallery;