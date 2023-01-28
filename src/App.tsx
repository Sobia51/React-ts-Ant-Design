import React from 'react';
import "./App.css"; 
import AppHeader from './components/common/header';
import { Layout } from 'antd';
import { Route , Routes,BrowserRouter  as Router } from 'react-router-dom';
import Home from  './pages/home';
import About from './pages/about';
import AppContact from './pages/contact';
import Shop from './pages/shop';
import FooterWidget from './components/common/footerWidget';
import FooterCopyright from './components/common/footerCopyright';
import AppFAQ from './pages/faq';
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
          <Route path='/about' element={<About/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/contact' element={<AppContact/>}/>
          <Route path='/faq' element={<AppFAQ/>}/>
        </Routes>
      </Content>
        </Router>
       
      <Footer>
        <FooterWidget/>
        <FooterCopyright/>
      </Footer>
    </Layout>
    
  </>
);

export default App;