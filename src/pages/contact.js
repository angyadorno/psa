import React from 'react';

import {
    Typography,
    Row,
    Col,
    Space
  } from 'antd';

const {Title, Text} = Typography;
export default function Contact(){
    return (
        < >
        <div className='TextOnTop'>
            <Title level={2}>Contact Us</Title>
        </div>

        <Space direction = 'vertical' align='center'>

            <Row>
                <Col span={8}></Col>
                <Col span={8}>
                    <Text>Email</Text>
                    <Text>Phone Number</Text>
                </Col>
                <Col span={8}></Col>
            </Row>
        
        </Space>
    </>
    )
        }