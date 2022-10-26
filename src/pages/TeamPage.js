import React,{Fragment,useEffect} from 'react';
import EveryPageTop from '../components/EveryPageTop';
import Navigation from '../components/Navigation';
import ManagementTeam from '../components/ManagementTeam';
import AllTeam from '../components/AllTeam';
import Footer from '../components/Footer';
const TeamPage = () => {
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="Team"/>
            <ManagementTeam/>
            <AllTeam/>
            <Footer/>
        </Fragment>
    );
};

export default TeamPage;