import React from 'react';
import Logo from '../assets/img/logo-psa.jpg';
import Flag from '../assets/img/flag-rectangulo.png';

import { Card, Col, Row, Typography} from 'antd';
import './info.scss';

const { Title, Paragraph, Text } = Typography;

export default function Info(){
    return (
        <>
            <div className='TextOnTop'>
                <Title level={2}>Paraguayan Student Association</Title>
            </div>
            <div className="site-layout-content">
                <Paragraph>The Paraguayan Student Association of The University of Melbourne is a Graduate group, 
                part of the GSA - Graduate Student Association, 
                The University of Melbourne, that was formed to spread 
                and share the Paraguayan culture, at the same time to strengthen and expand ties with Australian and 
                international students, academics and community. </Paragraph>
           
                <img src={Logo} alt='Paraguayan Student Association Logo' className='ImgContent'/>

                <Paragraph>
                From 2016 to date, 63 Paraguayans have had the opportunity to pursue their
                postgraduate studies in the areas of education, science and technology at the
                University of Melbourne, through the National Program of Postgraduate
                Scholarships abroad "Don Carlos Antonio López ”- BECAL.
                In June 2019, the “Paraguayan student association - PSA” was created as a
                member of the “The University of Melbourne Graduate Student Association -
                GSA”, which has more than 100 affiliated associations that receive an annual
                fund and human support to work for their members.
                With the desire to promote the debate on Paraguay from different perspectives
                and inspired by the initiative of Paraguayan students of UK Universities, in
                October 2019, the Paraguayan Student Association of the University of
                Melbourne "PSA" held the first edition of "Paraguay Speaks" in Australia.
                </Paragraph>

                <Title level={3}>Benefits</Title>
                <Paragraph>
                    <ul>
                        <li>Participation in cultural, sporting, academic and related events</li>
                        <li>Support for new members</li>
                        <li>Learn about paraguayan culture</li>
                        <li>Improve your spanish through activities with the latino community</li>
                        <li>Engage with paraguayan students for networking</li>
                    </ul>
                </Paragraph>
                
                <Title level = {2}>Meet our Committee</Title>
                <div className="site-card-wrapper">
                    <Row gutter={0}>
                        <Col span={12}>
                            <Card 
                                title="President" 
                                bordered={false}
                                >
                                <img 
                                    alt='Ale - LinkedIn' 
                                    src='https://media-exp1.licdn.com/dms/image/C4E03AQGgHggD4IXVKQ/profile-displayphoto-shrink_800_800/0?e=1600300800&v=beta&t=mF9WVETiEvkiTLhsNmQJM8riEdlGrCXSN6lpA3hJUF4'                                    
                                    />
                                <ul>
                                    <Text strong >Alejandra Bogado</Text>
                                    <li>abogado@student.unimelb.edu.au </li>
                                    <li>abogadotervit@gmail.com </li>
                                </ul>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card 
                                title="Vice President" 
                                bordered={false}
                                >
                                <img alt='Majo - LinkedIn' src='https://media-exp1.licdn.com/dms/image/C4D03AQEnJ2uMjLs__A/profile-displayphoto-shrink_800_800/0?e=1600300800&v=beta&t=poSbtDlIYnElprckWPZsa5XfgLXlz5DWnq4a4ZJgQOg'/> 
                                
                                <ul> 
                                    <Text strong>Maria Jose Aguilera</Text>
                                    <li>mduarteaguil@student.unimelb.edu.au</li>
                                    <li>mojito.duarte@gmail.com</li>
                                </ul>
                            </Card>
                        </Col>
                        
                        <Col span={12}>
                            <Card 
                                title="Secretary" 
                                bordered={false}
                                >
                                <img 
                                    alt='Mechi - LinkedIn' 
                                    src='https://media-exp1.licdn.com/dms/image/C4D03AQEw0ohg2hexRQ/profile-displayphoto-shrink_800_800/0?e=1600300800&v=beta&t=6caDsF2_5yjzNfmO_8y6qzYaCWK7ViW2QHpcK9MhoQc'                                    

                                />
                                <ul>
                                    <Text strong>Mercedes Huidobro</Text>
                                    <li>mhuidobrorom@student.unimelb.edu.au </li>
                                    
                                </ul>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card 
                                title="Treasurer" 
                                bordered={false}
                                >
                                <img alt='Fede - LinkedIn' src='https://media-exp1.licdn.com/dms/image/C5603AQE6tW6rkTthrw/profile-displayphoto-shrink_800_800/0?e=1600300800&v=beta&t=jKl-iy8TdEKGC6VCWwv7mvuGpCJphdAf79lNwsTSCkE'/> 
                                
                                <ul> 
                                    <Text strong>Federico Cainzos</Text>
                                    <li>fcainzosgarc@student.unimelb.edu.au </li>
                                    <li>fedecainzos@gmail.com</li>
                                </ul>
                            </Card>
                        </Col>
                    
                        <Col span={12}>
                            <Card 
                                title="Non executive member" 
                                bordered={false}
                                text-align={'center'}
                                >
                                <img alt='Fran - LinkedIn' src='https://media-exp1.licdn.com/dms/image/C4D03AQFs2b2Tl5Hp5Q/profile-displayphoto-shrink_800_800/0?e=1600300800&v=beta&t=3a24YvzF924ykDmq88KfQup-mQK5YT8oLHOtH7An7Zk'/> 
                                
                                <ul> 
                                    <Text strong>Francisco Mereles</Text>
                                    <li>fmereles@student.unimelb.edu.au </li>
                                    <li>frmerelesv@gmail.com</li>
                                </ul>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card 
                                title="Non executive member" 
                                bordered={false}
                                text-align={'center'}
                                >
                                <img alt='Enri - LinkedIn' src='https://media-exp1.licdn.com/dms/image/C4D03AQHNx7MCoS4j8A/profile-displayphoto-shrink_800_800/0?e=1600300800&v=beta&t=k1R2KbK-ZJeFHe6c3Dp7WCbUrXumi_WhroXC437qHsQ'/> 
                                
                                <ul> 
                                    <Text strong>Enrique Fleitas</Text>
                                    <li>fmereles@student.unimelb.edu.au </li>
                                    <li>frmerelesv@gmail.com</li>
                                </ul>
                            </Card>
                        </Col>
                        
                    </Row>
                </div>

            </div>
        
            <div className='TextOnTop'>
                <Title level={2}>About Paraguay</Title>
            </div>
            <div className="site-layout-content">
                <Paragraph>
                    Paraguay is a country located in the heart South America! With a rich culture, we have two official languages: Spanish and Guarani.
                </Paragraph>
           
                <img src={Flag} alt='Paraguayan Student Association Logo' className='ImgContent'/>
            </div>
        </>
    )
}