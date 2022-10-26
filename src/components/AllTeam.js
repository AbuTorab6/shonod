import React,{Fragment} from 'react';

import team1 from '../asset/image/team1.jpg'
import team2 from '../asset/image/team2.jpg'
import team3 from '../asset/image/team3.jpg'
import team4 from '../asset/image/team4.jpg'
import team5 from '../asset/image/team5.PNG'
import team6 from '../asset/image/team6.JPG'
import team7 from '../asset/image/team7.jpeg'
import team8 from '../asset/image/team8.png'
import team9 from '../asset/image/team9.jpg'
import team10 from '../asset/image/10.JPG'

import { FaLinkedinIn } from "react-icons/fa";


const AllTeam = () => 
{
    return (
        <Fragment>
            <section className='all-team-section-bottom'>
                <div className='row'>
                <h2>Meet Our Dynamic Team</h2>
                    <div className='all-team-grid'>
                            <div className='col mid'>
                                <div className='all-team-member'>
                                    <img className="all-team-member-img" src={team2} />
                                </div>
                                <h4>Saydujjaman Shamim</h4>
                                <h5>CEO</h5>
                                <p><a href='https://www.linkedin.com/in/saydujjaman/' target="_blank"><FaLinkedinIn/></a></p>
                            </div>
                            <div className='col'>
                                <div className='all-team-member'>
                                    <img className="all-team-member-img" src={team9} />
                                </div>
                                <h4>BRIT Robin</h4>
                                <h5>Chairman</h5>
                                <p><a href='https://www.linkedin.com/in/brit-robin-b6006655/' target="_blank"><FaLinkedinIn/></a></p>
                            </div>
                            <div className='col'>
                                <div className='all-team-member'>
                                    <img className="all-team-member-img" src={team8} />
                                </div>
                                <h4>Asaduzzaman</h4>
                                <h5>Senior Web Developer</h5>
                                <p><a href='https://www.linkedin.com/in/tdpxpress/' target="_blank"><FaLinkedinIn/></a></p>
                            </div>
                            <div className='col'>
                                <div className='all-team-member'>
                                    <img className="all-team-member-img" src={team6} />
                                </div>
                                <h4>Bashir Ahmed</h4>
                                <h5>Web Developer</h5>
                                <p><a href='https://www.linkedin.com/in/bashir-ahmed-52799aa6/' target="_blank"><FaLinkedinIn/></a></p>
                            </div>
                            <div className='col'>
                                <div className='all-team-member'>
                                    <img className="all-team-member-img" src={team10} />
                                </div>
                                <h4>Mahmudur Rahman</h4>
                                <h5>Software Developer Android</h5>
                                <p><a href='https://www.linkedin.com/in/mahmudur-rahman0920/' target="_blank"><FaLinkedinIn/></a></p>
                            </div>
                            <div className='col'>
                                <div className='all-team-member'>
                                    <img className="all-team-member-img" src={team1} />
                                </div>
                                <h4>Abu Torab Ibnul Baki (Juboraz)</h4>
                                <h5>Trainee, Web Developer</h5>
                                <p><a href='https://www.linkedin.com/in/abu-torab/' target="_blank"><FaLinkedinIn/></a></p>
                            </div>
                            <div className='col'>
                                <div className='all-team-member'>
                                    <img className="all-team-member-img" src={team7} />
                                </div>
                                <h4>Mridul Ahmed</h4>
                                <h5>Digital Marketing Executive</h5>
                                <p><a href='https://www.linkedin.com/in/mridulah96/' target="_blank"><FaLinkedinIn/></a></p>
                            </div>
                            <div className='col'>
                                <div className='all-team-member'>
                                    <img className="all-team-member-img" src={team5} />
                                </div>
                                <h4>Hridoy Ahmed</h4>
                                <h5>HR Officer</h5>
                                <p><a href='#jd' target="_blank"><FaLinkedinIn/></a></p>
                            </div>
                            <div className='col'>
                                <div className='all-team-member'>
                                    <img className="all-team-member-img" src={team3} />
                                </div>
                                <h4>Bijoy Roy</h4>
                                <h5>Manager (Admin and Account)</h5>
                                <p><a href='#jd' target="_blank"><FaLinkedinIn/></a></p>
                            </div>
                            <div className='col'>
                                <div className='all-team-member'>
                                    <img className="all-team-member-img" src={team4} />
                                </div>
                                <h4>Abdullah Kamal</h4>
                                <h5>Trainee HR</h5>
                                <p><a href='#jd' target="_blank"><FaLinkedinIn/></a></p>
                            </div>
                            
                        </div>
                </div>
            </section>
        </Fragment>
    );
};

export default AllTeam;