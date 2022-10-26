import React,{Fragment} from 'react';

import Slide from 'react-reveal/Slide';

const WhyChooseUs = () => {
    return (
        <Fragment>
            <section className='why-choose-us-section'>
                <div className='row'>
                    <div className='why-choose-us-grid'>
                        <Slide left>
                        <div className='col'>
                            <h3>Software</h3>
                            <p>One of major focus areas for Shonod is software development service for medium to large enterprises as their IT outsourcing partner. These enterprises are mainly in education, Autism – health care, RMG.<br/>
                                We are personally committed to delivering the very best. Everything, from customer support to product design and development, is provided by our dedicated (and adorable) team.
                            </p>
                        </div>
                        </Slide>
                        <Slide right>
                        <div className='col'>
                            <h3>Education</h3>
                            <p>Education is vital and every individual has right to get proper education. We created the digitalstudyroom.com with the user's perspective in mind. We wanted to offer a platform that will provide Tutorials with ease explanation. We keep it simple, so users can focus on understanding the topic and visualize the topic with animation. Best of all - it's very less costly. You can get online, offline and start studying right away and with your own pace.
                            </p>
                        </div>
                        </Slide>
                        <Slide bottom>
                        <div className='col'>
                            <h3>ICT Consultancy</h3>
                            <p>By working in full partnership with our clients and counterparts, we have built a strong reputation as practitioners who strive to understand local needs to tailor our consulting experience with the local environment. We work witha range of institutions, including government administrations, bilateral and multilateral development agencies, the private sector and civil society organizations.
                            </p>
                        </div>
                        </Slide>
                        
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default WhyChooseUs;