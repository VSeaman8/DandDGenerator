import Background from "./Background.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

import "./layout.css";

const Layout = () => {
  return (
    <div>
      <Background>
        <Navbar />
        <Footer />
      </Background>
    </div>
  );
};

export default Layout;
