import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "lightgray",
          //minHeight: "100vh",
          //minWidth: "100vh",
        }}
      >
        <Header />
        <Container
          style={{
            padding: "125px 0 40px 0",
            minHeight: "100vh",
            minWidth: "100vh",
          }}
        >
          <Outlet />
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
