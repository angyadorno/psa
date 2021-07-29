import React from 'react';

import SliderHome from '../components/SliderHome';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

export default function Home() {
    return (
        <>
            <div className='TextOnTop'>
                <Title level={2}>Welcome - 
                Tereguahe Pora - 
                Wominjeka! </Title>
            </div>
            <SliderHome/>
        </>
    )
}