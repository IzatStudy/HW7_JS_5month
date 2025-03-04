import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header"
import { Layout } from "antd"
import AppRoutes from "../src/routes";
import "./styles/global.css"

const { Content, Footer } = Layout;

const App = () => {

  return (
      <Router>
        <Layout style={{minHeight: '100vh'}}>
          <Header />
          <Content style={{padding: '20px', flex: 1}}>
            <AppRoutes />
          </Content>
          <Footer style={{textAlign: 'center'}}>Questify 2025</Footer>
        </Layout>
      </Router>
  )
}

export default App