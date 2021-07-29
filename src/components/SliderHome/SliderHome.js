import React from 'react';
import {Carousel, Button} from 'antd';
import {Link} from 'react-router-dom';
import Uno from '../../assets/img/1.jpeg';
import Dos from '../../assets/img/2.jpeg';
import Tres from '../../assets/img/3.jpeg';

import './SliderHome.scss';

export default function SliderHome(){
    return (
        <Carousel autoplay className='slider-home'>
            <div>
                <img src={Uno} alt='Paraguay Speaks' className='imagen'/>
            </div>
            <div>
                <img src={Dos} alt='Paraguay Speaks' className='imagen'/>            
            </div>
            <div>
                <img src={Tres} alt='Paraguay Speaks' className='imagen'/>            
            </div>
        </Carousel>
    )
}
