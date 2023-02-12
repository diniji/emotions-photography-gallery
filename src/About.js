import giphy1 from './Videos/giphy.gif';
import giphy2 from './Videos/giphy2.gif';
import giphy3 from './Videos/giphy3.gif';
import AOS from 'aos';
// import 'aos/dist/aos.css';
import {useEffect} from "react";


function About() {

    useEffect(() => {
        AOS.init();
      })
      
    return(
        <div className='aboutUsPosition'>
            <div className="aboutUsContainer">
                <div className='aboutUsSetOfTwo'>
                    <img src={giphy1} data-aos="zoom-in" data-aos-duration="2000" width="150px" height="200px" className="aboutUsImg" alt="an art" />
                    <h2 className='aboutUsH2'>
                        DEAR FRIEND, <br/>
                        Welcome to our e-gallery of emotions.<br />
                        Take a look at the art, put the cursor on the image to see the complete meaning.
                    </h2>
                </div>
                <div className='aboutUsSetOfTwo'>
                    <h2 className='aboutUsH2'>
                        LIKE IT! <br/>
                        The art with the most Likes will be displayed at the BeautyByProfessionals Photography Gallery in NeYorSee and will be considered for the Annual Recognition Award!
                    </h2>
                    <img src={giphy2} data-aos="zoom-in" data-aos-delay="300" data-aos-duration="2000" width="250px" className="aboutUsImg imgTwo" alt="a girl" />
                </div>
                <div className='aboutUsSetOfTwo'>
                    <img src={giphy3} data-aos="zoom-in" data-aos-delay="600" data-aos-duration="2000" width="150px" height="200px" className="aboutUsImg" alt="a gallery" />
                    <h2 className='aboutUsH2'>
                        PHYSICAL! <br/>
                        50% of the Award's monetary prize goes to the development of a permanent physical gallery location in addition to the online presence, which will allow more incredible creations to see the light of day! 
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default About;