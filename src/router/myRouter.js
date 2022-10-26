import React,{Fragment} from 'react';


import {Routes,Route} from 'react-router-dom';

import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import TeamPage from '../pages/TeamPage';
import MissionVisionPage from '../pages/MissionVisionPage';
import WhyChooseUsPage from '../pages/WhyChooseUsPage';
import ProductPage from '../pages/ProductPage';
import TechnologyPage from '../pages/TechnologyPage';

const myRouter = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/services" element={<ServicesPage/>} />
                <Route path="/team" element={<TeamPage/>} />
                <Route path="/missionVision" element={<MissionVisionPage/>} />
                <Route path="/whyChooseUs" element={<WhyChooseUsPage/>} />
                <Route path="/product" element={<ProductPage/>} />
                <Route path="/technology" element={<TechnologyPage/>} />
            </Routes>
        </Fragment>
    );
};

export default myRouter;