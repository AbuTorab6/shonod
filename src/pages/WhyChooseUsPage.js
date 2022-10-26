import React,{Fragment,useEffect} from 'react';

import EveryPageTop from '../components/EveryPageTop';
import Navigation from '../components/Navigation';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';


const WhyChooseUsPage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="Why Choose Us"/>
            <WhyChooseUs/>
            <Footer/>
        </Fragment>
    );
};

export default WhyChooseUsPage;