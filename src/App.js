import React from 'react';
import {Layout} from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MenuTop from './components/MenuTop';

//importando las paginas
import Home from './pages/home';
import Contact from './pages/contact';
import Error404 from './pages/error404';
import Eventos from './pages/eventos';
import Info from './pages/info';


export default function App() {
  
  //destructrurando el Layout
  const {Header, Content, Footer} = Layout;
  
  return (
    <Layout>
      <Router>
        <Header>
          <MenuTop/>
          
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Switch>

            <Route path='/' exact={true}>
              <Home/>
            </Route>

            <Route path='/info' exact={true}>
              <Info/>
            </Route>

            <Route path='/eventos' exact={true}>
              <Eventos/>
            </Route>

            <Route path='/contact' exact={true}>
              <Contact/>
            </Route>

            <Route path='*' exact={true}>
              <Error404/>
            </Route>

          </Switch>
        </Content>
      </Router>
      <Footer style={{ textAlign: 'center' }}>PSA ©2020 All rights reserved</Footer>
    </Layout>
  );
}

