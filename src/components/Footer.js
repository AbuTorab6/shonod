import React,{Fragment} from 'react';

import logo from '../asset/image/logo-fotter.png'

import { GoLocation } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

import {Link} from 'react-router-dom'
import Slide from 'react-reveal/Slide';
const Footer = () => {
    return (
        <Fragment>
            <section className='footer-section'>
                <div className='row'>
                    <div className='footer-grid'>
                        <Slide left>
                        <div>
                            <h3>Contact Us</h3>
                            <h5> We believe in Simple, Creative & Flexible Design Standards</h5>
                            <p><span><GoLocation/></span> Adress : 4th floor, Nirala abashon,38/a, West Tejtury Bajar, Kawran Bajar, Dhaka-1215</p>
                            <p><span><AiOutlinePhone/></span> Phone : +8801972746663</p>
                            <p><span><BsEnvelope/></span> Email : info@shonod.com</p>
                        </div>
                        </Slide>
                        <Slide top>
                        <div>
                            <h3>Services</h3>
                            <p><span><BsArrowRightCircle/></span> Website Design</p>
                            <p><span><BsArrowRightCircle/></span> Web Development</p>
                            <p><span><BsArrowRightCircle/></span> E-Commerce Development</p>
                            <p><span><BsArrowRightCircle/></span> Digital Marketing</p>
                            <p><span><BsArrowRightCircle/></span> Application Development</p>
                            <p><span><BsArrowRightCircle/></span> Mobile Applications</p>
                            <p><span><BsArrowRightCircle/></span> Graphic Design</p>
                            <p><span><BsArrowRightCircle/></span> CMS Development</p>
                        </div>
                        </Slide>
                        <Slide bottom>
                        <div>
                            <h3>Quick Links</h3>
                            <p ><Link className='footer-link' to='/about'>About us</Link></p>
                            <p ><Link className='footer-link' to='/services'>Our Services</Link></p>
                            <p ><Link className='footer-link' to='/team'>Our Team</Link></p>
                            <p ><Link className='footer-link' to='/product'>Our Products</Link></p>
                            <p ><Link className='footer-link' to='/technology'>Technology We Use</Link></p>
                        </div>
                        </Slide>
                        <Slide right>
                        <div>
                            <img className="logo-fotter" src={logo} />
                        </div>
                        </Slide>
                    </div>
                </div>
            </section>

            <section className='footer-section-bottom'>
                <div className='row'>
                    <p>Copyright &copy; 2022 . <a href='https://www.facebook.com/shonodonline' target="_blank">Shonod</a> . All Rights Reserved</p>
                </div>
            </section>
        </Fragment>
    );
};

export default Footer;