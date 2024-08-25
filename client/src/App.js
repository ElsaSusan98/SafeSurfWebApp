import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import ServicePage from "./pages/service";
import FaqPage from "./pages/faqPage";
import ContactUsPage from "./pages/contactus";
// import About from "./pages/aboutus";
// import Contactus from "./pages/contactus";

function App() {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contactus" element={<ContactUsPage />} />
          </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
export default App;

