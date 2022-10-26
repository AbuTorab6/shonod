import React,{Fragment} from 'react';

import mission from '../asset/image/mission.png'
import vision from '../asset/image/vision.png'

import Slide from 'react-reveal/Slide';

const MissionVision = () => {
    return (
        <Fragment>
            <section className='mission-vision-section'>
                <div className='row'>
                    <div className='mission-vision-grid'>
                        <Slide left>
                        <div className='mission'>
                            <h2>Our Mission</h2>
                            <p>Deliver innovative, scalable, and practical solutions that increase productivity.</p>
                        </div>
                        </Slide>
                        <Slide right>
                        <div className='mission-pic'>
                            <img className="mission-img" src={mission} />
                        </div>
                        </Slide>
                        <Slide left>
                        <div className='vision-pic'>
                            <img className="vision-img" src={vision} />
                        </div>
                        </Slide>
                        <Slide right>
                        <div className='vision'>
                            <h2>Our Vision</h2>
                            <p>We strive to create local opportunity, growth, and impact in education, legal, hospitality service innovative digital transformation journey.</p>
                        </div>
                        </Slide>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default MissionVision;