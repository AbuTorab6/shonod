import React,{Fragment,useEffect} from 'react';

import EveryPageTop from '../components/EveryPageTop';
import Navigation from '../components/Navigation';
import Technology from '../components/Technology';
import Footer from '../components/Footer';

const TechnologyPage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
           <Navigation/>
            <EveryPageTop pageTitle="Technology"/>
            <Technology/>
            <Footer/>
        </Fragment>
    );
};

export default TechnologyPage;