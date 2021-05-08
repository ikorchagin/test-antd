import { Grid, Layout } from "antd";
import LoginCard from "../login-card";
import { main } from "./app.module.scss";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ backgroundColor: "white" }}>Header</Header>
      <Content style={{ padding: "20px 0px", height: "100%" }}>
        <div className="container-main">
          <LoginCard />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
