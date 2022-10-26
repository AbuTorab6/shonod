import React,{Fragment} from 'react';
import Fade from 'react-reveal/Fade';


import about from '../asset/image/about.png'

const About = () => 
{
    return (
        <Fragment>
            <section className='about-section'>
                <Fade left>
                <div className='row'>
                    <h2>Know More About Us</h2>
                    <div className='about-grid'>
                        <div>
                            <h3>Company Overview</h3>
                            <p>Our main goal is to develop innovative solutions that address real-world problems by understanding the unique needs of the markets we serve. We foster an environment of creativity with easy access to resources, ensuring an open environment to exchange ideas that powers the innovative solution/platforms that we develop. <br/><br/>
                            Shonod applying state-of-the-art software practices has also positioned itself to provide complete IT/ITES solutions. Shonod has designed and engineered high quality and cost-effective applications for both private and public sector. Shonod has transformed the businesses for a number of local and international clients through the art of digitization.
                            </p>
                            <h3>Our Customers Mean the World</h3>
                            <p>At Shonod, we strive to provide exactly what our customers are looking for. A huge part of our brainstorming process is looking at our client feedback to make sure you're well taken care of.</p>
                        </div>
                        <div>
                            <img className="cloud1" src={about} />
                        </div>
                        
                    </div>
                </div>
                </Fade>
            </section>
        </Fragment>
    );
};

export default About;