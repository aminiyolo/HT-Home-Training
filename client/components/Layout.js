import Footer from "./Footer/Footer.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  if (user) {
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    );
  } else {
    return <>{children}</>;
  }
};

export default Layout;
