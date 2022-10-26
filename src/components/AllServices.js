import React,{Fragment} from 'react';
import { BiWorld } from "react-icons/bi";


import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaDigitalOcean } from "react-icons/fa";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { MdSettingsApplications,MdOutlineDesignServices } from "react-icons/md";
import { GrGraphQl } from "react-icons/gr";
import { SiDatocms } from "react-icons/si";

import Slide from 'react-reveal/Slide';

const AllServices = () => 
{
    return (
        <Fragment>
            <section className='services-section'>
                <div className='row'>
                    <h2>What We Offer</h2>
                    <div className='services-grid'>
                        <Slide left>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><MdOutlineDesignServices/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Web Design</h3>
                                <p>Designing services makes the website exquisite and tempting. To attract the online visitors for the business designing...</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide top>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><BiWorld/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Web Development</h3>
                                <p>We have extensive web design and web development skills blended with the quality essence of expertise must have...</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide right>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><AiOutlineShoppingCart/></span>
                            </div>
                            <div className='services-content'>
                                <h3>E-Commerce Development</h3>
                                <p>Our ecommerce solution has all basic features required to run a successful online selling business. They are made...</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide left>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><FaDigitalOcean/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Digital Marketing</h3>
                                <p>Digital marketing is an umbrella term for the marketing of products or services using digital technologies, mainly...</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide bottom>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><MdSettingsApplications/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Application Development</h3>
                                <p>Our specialized web applications creations provide the highest level of usability, scalability and complete...</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide right>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><TbDeviceMobileMessage/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Mobile Applications</h3>
                                <p>We specialize in building mobile apps for all platforms and now, it using a new robust technology...</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide left>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><GrGraphQl/></span>
                            </div>
                            <div className='services-content'>
                                <h3>Graphic Design</h3>
                                <p>Graphic design is the applied art of arranging images and text to communicate a message, or facilitate...</p>
                            </div>
                        </div>
                        </Slide>
                        <Slide right>
                        <div className='services-grid-inner'>
                            <div className='services-icon'>
                                <span><SiDatocms/></span>
                            </div>
                            <div className='services-content'>
                                <h3>CMS Development</h3>
                                <p>We Systems understands the highly competitive Web world and provides you a CMS solution that...</p>
                            </div>
                        </div>
                        </Slide>
                        
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default AllServices;