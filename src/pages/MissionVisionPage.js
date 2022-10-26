import React,{Fragment,useEffect} from 'react';

import EveryPageTop from '../components/EveryPageTop';
import Navigation from '../components/Navigation';
import MissionVision from '../components/MissionVision';
import Footer from '../components/Footer';

const MissionVisionPage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="Mission & Vision"/>
            <MissionVision/>
            <Footer/>
        </Fragment>
    );
};

export default MissionVisionPage;