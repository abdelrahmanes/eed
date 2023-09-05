/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="">{children}</div>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Layout;
