import React,{Fragment} from 'react';

import Slider from "react-slick";
import ourClient from '../asset/image/our-client.png'
import ourClient2 from '../asset/image/our-client2.png'
import ourClient3 from '../asset/image/our-client3.png'
import ourClient4 from '../asset/image/our-client4.png'

const Client = () => 
{

    var settings = {
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



    return (
        <Fragment>
            <section className='client-section'>
                <div className='row'>
                <h2>Our Client</h2>
                    <Slider className='client-slider'  {...settings}>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={ourClient} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={ourClient2} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={ourClient3} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={ourClient4} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={ourClient} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={ourClient2} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={ourClient3} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={ourClient4} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={ourClient2} />
                            </div>
                        </div>
                        <div className='client-content'>
                            <div className='client-brand'>
                                <img className="client-brand-img" src={ourClient3} />
                            </div>
                        </div>

                    </Slider>
                </div>
            </section>
        </Fragment>
    );
};

export default Client;