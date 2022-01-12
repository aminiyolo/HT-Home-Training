import Footer from "./Footer/Footer.jsx";
import Navbar from "./Navbar/Navbar.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
