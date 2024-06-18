import Background from "./Background.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

import "./layout.css";

const Layout = ({ children, page }) => {
  const backgroundClass = page === "/" ? "homepageBackground" : "background";
  return (
    <div className={backgroundClass}>
      <Background>
        <Navbar />
        {children}
        <Footer />
      </Background>
    </div>
  );
};

export default Layout;
