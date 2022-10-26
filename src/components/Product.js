import React,{Fragment} from 'react';

import Fade from 'react-reveal/Fade';

const Product = () => 
{
    return (
        <Fragment>
            <section className='product-section'>
                <div className='row'>
                    <div className='product-content'>
                        <h2>Products</h2>
                        <div className='product-grid'>
                        <Fade left>
                        <div className='col'>
                            <h3>CUMO (Curriculum unit measurement operating software) </h3>
                            <p>Software for Autistics institutes that has 13,060 Task details for individuals to improve capacity that cover 4 domains of - Physical development, Cognitive development, Emotional development, Social development</p>
                        </div>
                        </Fade> 
                        <Fade right> 
                        <div className='col'>
                            <h3>ShonodBizSuite</h3>
                            <p>A business solution for small enterprise that consist of   Accounting, Sales, Purchase, Inventory and POS module.<br/>
                            Educational product-<br/>
                            www.digitalstudyroom.com provide online tutorials for class 1 -12 students and exam preparation students.
                            </p>
                        </div>
                        </Fade> 
                    </div>
                    </div>
                    
                </div>
            </section>
        </Fragment>
    );
};

export default Product;