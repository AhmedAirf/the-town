// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Introduction from "./components/Home/Introduction";

import Home from "./components/Home/Home";
import OurWork from "./components/Home/OurWork";

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
    </Router>
  );
}

export default App;
