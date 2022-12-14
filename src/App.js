
import { Form, Layout, Menu } from "antd";
import imagen from "./assets/images/WhatsApp Image 2022-12-14 at 08.00.04.jpeg";

import Formulario from './components/Formulario/Formulario';


const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <Layout>
      <Header>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img alt="Quikyempresa" src={imagen} width="140px" height="50px" />
        </div>
      </Header>
      <Content>
        <Formulario/>
      </Content>
      <Footer style={{background:'white'}}>Quiky empresa Copyright</Footer>
    </Layout>
  );
}

export default App;
