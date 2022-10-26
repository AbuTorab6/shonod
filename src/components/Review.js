import React,{Fragment} from 'react';



import Slider from "react-slick";
import Zoom from 'react-reveal/Zoom';

import client1 from '../asset/image/client.jpg'

const Review = () => 
{


    var settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
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
            <section className='review-section'>
                <div className='row'>
                    <h2>Client Review</h2>
                    <Zoom top>
                    <Slider {...settings}>
                        <div className='review-content'>
                            <div className='review-quote'>
                                <p> <span>&#10075;&#10076;</span> </p>
                            </div>
                            <p className='review-description'>Continually harness functional e-business without global core competencies. Interactively pontificate client-focused web-readiness via quality scenarios. Professionally pursue collaborative </p>
                            <div className='review-client'>
                                <img className="review-client-img" src={client1} />
                            </div>
                            <p className='client-name'>Junl Sarukh</p>
                            <p className='client-designation' >Web Developer</p>
                        </div>
                        <div className='review-content'>
                            <div className='review-quote'>
                                <p> <span>&#10075;&#10076;</span> </p>
                            </div>
                            <p className='review-description'>Continually harness functional e-business without global core competencies. Interactively pontificate client-focused web-readiness via quality scenarios. Professionally pursue collaborative </p>
                            <div className='review-client'>
                                <img className="review-client-img" src={client1} />
                            </div>
                            <p className='client-name'>Junl Sarukh</p>
                            <p className='client-designation' >Web Developer</p>
                        </div>
                    </Slider>
                    </Zoom>
                </div>
            </section>
        </Fragment>
    );
};

export default Review;