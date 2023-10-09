import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/about-us/AboutUs";
import ContactUs from "./pages/contact-us/ContactUs";
import ExhibitorRegisteration from "./pages/exhibitor/ExhibitorRegisteration";
import FAQ from "./pages/faq/FAQ";
import Home from "./pages/home/Home";
import Registration from "./pages/registeration/Registeration";
import Session from "./pages/session/Session";
import Store from "./pages/store/Store";
import VisitorRegisteration from "./pages/visitor/VisitorRegisteration";
import VisitsRegisteration from "./pages/visits/VisitsRegisteration";
import Gallery from "./pages/registeration/gallery/Gallery";
import Theme1 from "../src/assets/images/gallery1.jpg";
import Theme2 from "../src/assets/images/gallery2.jpg";
import Theme3 from "../src/assets/images/gallery3.jpg";
import Theme4 from "../src/assets/images/gallery4.jpg";
import Theme5 from "../src/assets/images/gallery5.jpg";
import Theme6 from "../src/assets/images/gallery6.jpg";
import Theme7 from "../src/assets/images/gallery7.jpg";

function App() {
  const images = [Theme1,Theme2,Theme3,Theme4,Theme5,Theme6,Theme7,]
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home images={images}/>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/visitor-register" element={<VisitorRegisteration />} />

        <Route path="/session" element={<Session />} />
        <Route path="/store" element={<Store />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/registeration" element={<Registration />} />
        <Route path="/gallery" element={<Gallery images={images}/>} />
        <Route
          path="/registeration/exhibitor-register"
          element={<ExhibitorRegisteration />}
        />
        <Route
          path="/registeration/visitor-register"
          element={<VisitorRegisteration />}
        />
        <Route
          path="/registeration/visits-register"
          element={<VisitsRegisteration />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
