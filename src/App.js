import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router";
import Main from "./pages/Main";
import Home from "./features/home/Home";
import About from "./features/about/About";
import Services from "./features/services/Services";
import Portfolio from "./features/portfolio/Portfolio";
import Contact from "./features/contact/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<Main />}>
            <Route path="" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
