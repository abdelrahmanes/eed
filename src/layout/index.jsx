/* eslint-disable react/prop-types */
import ScrollToTop from "./ScrollToTop";
import Footer from "./footer";
import Navbar from "./navbar";

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
