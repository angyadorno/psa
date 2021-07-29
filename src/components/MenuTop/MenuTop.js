import React from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/logo-psa.jpg';

import './MenuTop.scss';

export default function MenuTop(){
    return (
        <div className='menu-top'>
            <div className='menu-top__logo'>
                {/* <Logo/> */}
                {/* <img src={Logo} alt='logo PSA'/> */}
            </div>
            <Menu 
                theme='dark'
                mode='horizontal'
                defaultSelectedKey={['1']}
                style={{lineHeight:'64px'}}
            >
                <Menu.Item key='1'>
                    <Link to='/'>Home</Link>
                    
                </Menu.Item>
                <Menu.Item key='2'>
                    <Link to='/info'>About Us</Link>
                    
                </Menu.Item>
                <Menu.Item key='3'>
                    <Link to='/eventos'>What's Next</Link>
                    
                </Menu.Item>
                <Menu.Item key='4'>
                    <Link to='/contact'>Contact Us</Link>
                    
                </Menu.Item>
            </Menu>
        </div>

    )
}