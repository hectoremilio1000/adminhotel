import React, { useState } from "react";
import { Layout, Menu } from "antd";
import FormularioPrueba from "../../Modules/FormularioPrueba/FormularioPrueba";
import ListaOrdenes from '../../Modules/ListaOrdenes/ListaOrdenes';
import ItemsRoutes from '../ItemRoutes/ItemRoutes';

const { Header, Footer, Sider, Content } = Layout;


function ContentLayoutAdmin() {
  const [current, setCurrent] = useState("");
   const cambiarComponent = e => {
     setCurrent(e.key);
   };
  
  
  return (
    <>
      <Layout>
        <Sider trigger={null} style={{ backgroud: "white" }}>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={current}
            onClick={cambiarComponent}
            items={ItemsRoutes}
          />
        </Sider>

        <Content style={{ margin: "24px 16px 0" }}>
          {current === "1" ? (
            <div className="site-layout-background" style={{ minHeight: 100 }}>
              <ListaOrdenes />
            </div>
          ) : current === "2" ? (
            <div className="site-layout-background" style={{ minHeight: 100 }}>
              <FormularioPrueba />
            </div>
          ) : (
            <></>
          )}
        </Content>
      </Layout>
    </>
  );
        
        
        }

export default ContentLayoutAdmin;