import React,{Fragment,useEffect} from 'react';

import EveryPageTop from '../components/EveryPageTop';
import Navigation from '../components/Navigation';
import Product from '../components/Product';
import Footer from '../components/Footer';

const ProductPage = () => 
{
    useEffect(()=>{
        window.scroll(0,0);
    });
    return (
        <Fragment>
            <Navigation/>
            <EveryPageTop pageTitle="Our Product"/>
            <Product/>
            <Footer/>
        </Fragment>
    );
};

export default ProductPage;