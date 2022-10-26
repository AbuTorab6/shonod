import React,{Fragment,useEffect} from 'react';

import EveryPageTop from '../components/EveryPageTop';
import Navigation from '../components/Navigation';
import AllServices from '../components/AllServices';
import Footer from '../components/Footer';

const ServicesPage = () => {
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="Services"/>
            <AllServices/>
            <Footer/>
        </Fragment>
    );
};

export default ServicesPage;