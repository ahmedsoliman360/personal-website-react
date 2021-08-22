import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";
import Work from "./components/work/Work";
import "./app.scss";
// import { useState } from "react";
function App() {
  // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      {/* menuOpen={menuOpen} setMenuOpen={setMenuOpen}  */}
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
