import React,{Fragment} from 'react';
import '../asset/css/custom.css'
import {Link} from 'react-router-dom'

import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Pulse from 'react-reveal/Pulse';


import HeroSide from '../asset/image/hero-side.svg'
import could1 from '../asset/image/cloud1.svg'
import could2 from '../asset/image/cloud2.svg'

const Hero = () => {
    return (
        <Fragment>
            <section className='hero-section'>
                <div className='row'>
                    <div className='hero-grid'>
                        <div className='hero-grid-left-content'>
                            <Slide bottom>
                            <div >
                                <h1>Shonod</h1>
                                <p>Our main goal is to develop innovative solutions that address real-world problems by understanding the unique needs of the markets we serve</p>
                                <Link className="hero-btn" to="/about" >About Us</Link>
                            </div>
                            </Slide>
                        </div>
                        <div className='hero-grid-right-content'>
                            <div>
                                <Slide top><div className='sun'></div></Slide>
                                <Slide left><img className="cloud1" src={could1} /></Slide>
                                <Slide right><img className="cloud1" src={could1} /></Slide>
                                <Slide left><img className="cloud2" src={could2} /></Slide>
                                <Pulse><img className="hero-side-img" src={HeroSide} /></Pulse>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Hero;