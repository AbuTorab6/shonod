import React,{Fragment,useState,useEffect} from 'react';

import logo from '../asset/image/logo.png'

import {Navbar,Nav,Container} from 'react-bootstrap'
import {NavLink,Link} from 'react-router-dom'

import { AiOutlinePhone,AiOutlineKey } from "react-icons/ai";
import { BsEnvelope, BsQuestion,BsQuestionLg,BsEye,BsPencilFill} from "react-icons/bs";
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { TbMessages,TbBrandProducthunt } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";

import { BiWorld } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaDigitalOcean } from "react-icons/fa";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { MdSettingsApplications,MdOutlineDesignServices } from "react-icons/md";
import { GrGraphQl } from "react-icons/gr";
import { SiDatocms } from "react-icons/si";


import { AiOutlineHome,AiOutlineTeam,AiOutlineInfoCircle } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { AiOutlineFolderOpen } from "react-icons/ai";


const Navigation = () => 
{

    const[v1,v2]=useState({
        navigationBackground:"navigation-background",
        navigationBrand : "navigation-brand",
        navigationList : "navigation-list"
    });

    var jubo = ()=>
    {
        var topNav= document.querySelector('.top-nav')
        if(window.scrollY>100)
        {
            v2({navigationBackground:"navigation-background-scroll",navigationBrand : "navigation-brand", navigationList : "navigation-list"});
            topNav.classList.add('visibility-none')
            topNav.classList.remove('visibility-yes')
        }
        else if(window.scrollY<100)
        {
            v2({navigationBackground:"navigation-background",navigationBrand : "navigation-brand", navigationList : "navigation-list"});
            topNav.classList.remove('visibility-none')
            topNav.classList.add('visibility-yes')
        }
    }

   

    useEffect(()=>{
        window.addEventListener('scroll',jubo); 
    });


    return (
        <Fragment>
            <nav className='top-nav visibility-yes'>
                <div className=' nav-row'>
                    <div className='top-nav-grid'>
                        <div className='top-nav-left'>
                            <ul >
                                <li><AiOutlinePhone /><span>+8801972746663</span></li>
                                <li><BsEnvelope /><span>info@shonod.com</span></li>
                            </ul>
                        </div>
                        
                        <div className='top-nav-right'>
                            <ul>
                                <li><a href="https://www.facebook.com/shonodonline" target="_blank"><FaFacebookF /></a></li>
                                <li><a href="https://www.linkedin.com/company/digital-study-room/" target="_blank"><FaLinkedinIn /></a></li>
                                <li><a href="#instargam" target="_blank"><FaInstagram /></a></li>
                            </ul>
                        </div> 
                    </div>  
                </div>
            </nav>

            <Navbar className={v1.navigationBackground}  fixed="top" collapseOnSelect expand="lg"  variant="light">
                <Container>
                    <Navbar.Brand > <NavLink className={v1.navigationBrand} to="/" ><img className="logo" src={logo} /> Shonod</NavLink> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(226, 30, 81)':undefined}}} to="/"><span className='navigation-icon'><AiOutlineHome/></span>Home</NavLink>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(226, 30, 81)':undefined}}} to="/about"><span className='navigation-icon'><AiOutlineInfoCircle/></span>About</NavLink>
                            <NavLink className={'company-dropdown '+v1.navigationList}  to="/"><span className='navigation-icon'><MdHomeRepairService/></span> Company
                                <div className='company-dropdown-content'>
                                    <div className='company-dropdown-grid'>
                                        <p><span className='navigation-icon'><AiOutlineInfoCircle/></span><Link className='drpdown-link' to="/about"> About us</Link></p>
                                        <p><span className='navigation-icon'><BsQuestionLg/></span><Link className='drpdown-link' to="/whyChooseUs"> Why Choose us</Link></p>
                                        <p><span className='navigation-icon'><BsEye/></span><Link className='drpdown-link' to="/missionVision"> Vision & Mission</Link></p>
                                        <p><span className='navigation-icon'><TbBrandProducthunt/></span><Link className='drpdown-link' to="/product"> Products</Link></p>
                                        <p><span className='navigation-icon'><GrTechnology/></span><Link className='drpdown-link' to="/technology"> Technology</Link></p>
                                        <p><span className='navigation-icon'><RiTeamFill/></span> Our Clients</p>
                                        <p><span className='navigation-icon'><AiOutlineKey/></span> Career</p>
                                        <p><span className='navigation-icon'><BsPencilFill/></span> Blog</p>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink className={'services-dropdown '+v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(226, 30, 81)':undefined}}} to="/services"><span className='navigation-icon'><AiOutlineFolderOpen/></span>Services
                                <div className='services-dropdown-content'>
                                    <div className='services-dropdown-grid'>
                                        <p><MdOutlineDesignServices/> Web Design</p>
                                        <p><BiWorld/> Web Development</p>
                                        <p><AiOutlineShoppingCart/> E-Commerce Development</p>
                                        <p><FaDigitalOcean/> Digital Marketing</p>
                                        <p><MdSettingsApplications/> Application Development</p>
                                        <p><TbDeviceMobileMessage/> Mobile Applications</p>
                                        <p><GrGraphQl/> Graphic Design</p>
                                        <p><SiDatocms/> CMS Development</p>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(226, 30, 81)':undefined}}} to="/team"><span className='navigation-icon'><AiOutlineTeam/></span>Team</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default Navigation;