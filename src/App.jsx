import { Container } from "react-bootstrap";
import Layout from "./components/layout/Layout";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
  <>
      <Layout>
      <ToastContainer />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      </Layout>
    </>
  );
};

export default App;
