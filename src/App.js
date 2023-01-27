
import { Form, Layout, Menu } from "antd";
import React, { useState } from "react";
import imagen from "./assets/images/WhatsApp Image 2022-12-14 at 08.00.04.jpeg";

import ItemsRoutes from './components/ItemRoutes/ItemRoutes';
import ContentLayoutAdmin from './components/ContentLayoutAdmin/ContentLayoutAdmin';
import AppRoutes from "./AppRoutes/AppRoutes";


const { Header, Footer, Sider, Content } = Layout;


function App() {
  const [current, setCurrent] = useState("");
    const cambiarComponent = e => {
      setCurrent(e.key);
    };
  return (
    <Layout>
      <Header>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img alt="Quikyempresa" src={imagen} width="140px" height="50px" />
        </div>
      </Header>
      
        <Content>
          <AppRoutes />
        </Content>
   
      <Layout>
        <Footer style={{ background: "white" }}>Quiky empresa Copyright</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
