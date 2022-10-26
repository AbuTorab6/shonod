import React,{Fragment} from 'react';

import team2 from '../asset/image/team2.jpg'
import team9 from '../asset/image/team9.jpg'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const ManagementTeam = () => 
{
    return (
        <Fragment>
            <section className='management-team-section'>
                <div className='row'>
                    <h2>Management Team</h2>
                    <div className='management-team-grid'>
                        <Fade top>
                        <div className='col'>
                            <div className='management-team-inner-grid'>
                                <div className='management-photo'>
                                    <img className="management-img" src={team2} />
                                </div>
                                <div className='management-about'>
                                    <h3>Saydujjaman</h3>
                                    <h4>Founder and CEO</h4>
                                </div>
                            </div>
                            <p>Saydujjaman having degree on Masters in Computer Application. He is having around 20+ years of experience on IT. He has worked for Large telecom, World Bank, JICA projects as Consultants. He is expert in Data analytics, Data science, blockchain, AI and Machine learning. He is also lead educator and teaching Math, Science subjects to make the education ease for students. </p>
                        </div>
                        </Fade>
                        <Fade bottom>
                        <div className='col'>
                            <div className='management-team-inner-grid'>
                                <div className='management-photo'>
                                    <img className="management-img" src={team9} />
                                </div>
                                <div className='management-about'>
                                    <h3>BRIT Robin</h3>
                                    <h4>Co-Founder</h4>
                                </div>
                            </div>
                            <p>President <br/>ZeroPlus Group </p>
                        </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default ManagementTeam;