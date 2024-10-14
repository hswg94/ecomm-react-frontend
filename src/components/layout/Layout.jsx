/* eslint-disable react/prop-types */
import Header from "./Header/Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
