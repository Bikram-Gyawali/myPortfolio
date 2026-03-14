import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./components/banner/Banner.jsx";
import Aboutme from "./components/about/Aboutme";
import Skills from "./components/skills/Skills";
import Card from "./components/projects/Card";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Banner />
        <Aboutme />
        <Skills />
        <Card />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
