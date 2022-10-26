import React,{Fragment,useEffect} from 'react';

import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import ManagementTeam from '../components/ManagementTeam';
import Team from '../components/Team';
import Review from '../components/Review';
import Client from '../components/Client';
import Footer from '../components/Footer';

const HomePage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <Hero/>
            <Services />
            <About/>
            <ManagementTeam/>
            <Team/>
            {/* <Review /> */}
            <Client/>
            <Footer/>
        </Fragment>
    );
};

export default HomePage;