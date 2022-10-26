import React,{Fragment} from 'react';

import { BsFillGearFill } from "react-icons/bs";

const EveryPageTop = (ob) => 
{
    return (
        <Fragment>
            <section className='every-page-top-section'>
                <div className='row'>
                    
                    <h2>{ob.pageTitle}</h2>
                </div>
            </section>
        </Fragment>
    );
};

export default EveryPageTop;