import myVideo from './Videos/Robot - 145864.mp4';
import AOS from 'aos';
import {useEffect} from "react";


function Participate() {

    useEffect(() => {
        AOS.init();
      })

    return(
        <div className='participateContainer'>
            <div class="video-container">
                <video autoPlay muted loop id="video">
                    <source src={myVideo} type="video/mp4" />
                </video>
            </div>
            <div className='participateH2' data-aos="fade-zoom-in"      data-aos-easing="ease-in-back" data-aos-delay="150" data-aos-duration="1000">
                <h2>ROBOTS HAVE FEELINGS!</h2>
                <h1>New category to our exhibition!</h1>
                <h2>Participate!</h2>
                <h2 className='weightNormal'>Send us the deepest robotic emotions you caught on camera and get your art displayed, first - in our e-gallery and then - the sky is the limit!..</h2>
                <input className="fontParticipate" type="email" placeholder="Your email..."/>
                <textarea rows="3" placeholder="Tell us about yourself..." />
                <p className="fontParticipate"><button>Choose file</button> Upload your art</p>
                <button className="fontParticipate sendButton">Send</button>
            </div>
        </div>
    )
}

export default Participate;