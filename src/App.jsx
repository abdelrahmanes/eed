import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/about-us/AboutUs";
import ContactUs from "./pages/contact-us/ContactUs";
import ExhibitorRegisteration from "./pages/exhibitor/ExhibitorRegisteration";
import FAQ from "./pages/faq/FAQ";
import Home from "./pages/home/Home";
import Session from "./pages/session/Session";
import Store from "./pages/store/Store";
import VisitorRegisteration from "./pages/visitor/VisitorRegisteration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/visitor-register" element={<VisitorRegisteration />} />
        <Route
          path="/exhibitor-register"
          element={<ExhibitorRegisteration />}
        />
        <Route path="/session" element={<Session />} />
        <Route path="/store" element={<Store />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
