import React from 'react';
import "./App.css"; 
import AppHeader from './components/common/header';
import { Layout } from 'antd';
import { Route , Routes,BrowserRouter  as Router } from 'react-router-dom';
import Home from  './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Shop from './components/pages/Shop';
const { Header, Footer, Content } = Layout;

const App: React.FC = () => (
  <>
    <Layout>
    
        <Router>
        <Header>
        <AppHeader/>
      </Header>
      <Content>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/Shop' element={<Contact/>}/>
          <Route path='/Shop' element={<Contact/>}/>
        </Routes>
      </Content>
        </Router>
       
      <Footer></Footer>
    </Layout>
    
  </>
);

export default App;