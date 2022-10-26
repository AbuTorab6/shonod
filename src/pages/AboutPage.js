import React,{Fragment,useEffect} from 'react';

import EveryPageTop from '../components/EveryPageTop';
import Navigation from '../components/Navigation';
import Services from '../components/Services';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="About"/>
           
            <About/>
            <Footer/>
        </Fragment>
    );
};

export default AboutPage;