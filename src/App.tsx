import React from 'react';
import header from './components/common/header';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => (
  <>
    <Layout>
      <Header>
        <header/>
      </Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
    
  </>
);

export default App;