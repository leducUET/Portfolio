import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";
import { Route, Routes } from "react-router-dom";
import About from "./features/about/About";
import Login from "./features/auth/Login";
import Contact from "./features/contact/Contact";
import Home from "./features/home/Home";
import Portfolio from "./features/portfolio/Portfolio";
import Services from "./features/services/Services";
import Main from "./pages/main/Main";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/private/privateRoute";
import Admin from "./pages/admin/Admin";
import AboutManager from "./features/about manager/AboutManager";
import MessageManager from "./features/message manager/MessageManager";
import ProjectManager from "./features/project manager/ProjectManager";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <ToastContainer />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />}>
            <Route path="" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          >
            <Route path="" element={<AboutManager />} />
            <Route path="about" element={<AboutManager />} />
            <Route path="message" element={<MessageManager />} />
            <Route path="project" element={<ProjectManager />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
