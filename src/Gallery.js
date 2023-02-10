import { useState } from "react";
import LikeButton, { Heart } from "./LikeButton";
import AOS from 'aos';
import {useEffect} from "react";

function Gallery(props) {

    useEffect(() => {
        AOS.init();
      })

    const [over, setOver] = useState(false);
    const { id, title, searchTerm, image1, image2 } = props.singleArt;

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