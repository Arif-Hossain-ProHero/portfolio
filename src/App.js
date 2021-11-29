import "./App.css";
import About from "./Home/About/About";
import Contact from "./Home/Contact/Contact";
import Header from "./Home/Header/Header";
import Navbar from "./Home/Navbar/Navbar";
import Portfolio from "./Home/Portfolio/Portfolio";
import Services from "./Home/Services/Services";
import Footer from "./Home/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
