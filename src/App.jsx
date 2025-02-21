// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import OurWork from "./components/Home/OurWork";
import Introduction from "./components/Home/Introduction";

function App() {
  return (
    <Router>
      <Header />

      <Home />

      <Routes>
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/contact-us" element={<Footer />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
