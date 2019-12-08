import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import image from '../image.jpg';
import image2 from '../image2.jfif';

const CarouselResponsive = () => {
  
    return (
        <div>
            <Carousel>
                <div>
                    <img src={image} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
  
}

export default CarouselResponsive;
