import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/footer/Footer";
import Menu from "./components/mobile/Menu";

function App() {
  useEffect(() => {
    const menuBtn = document.querySelector(
      ".header .container .btns .menu-btn"
    );
    const navMenu = document.querySelector(".nav-menu");
    const closeMenu = document.querySelector(".nav-menu .close-menu");

    menuBtn.addEventListener("click", () => {
      navMenu.classList.add("active-menu");
    });
    closeMenu.addEventListener("click", () => {
      navMenu.classList.remove("active-menu");
    });

    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
