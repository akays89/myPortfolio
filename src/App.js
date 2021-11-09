import { BrowserRouter, Route, Switch,  Redirect} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
    <Redirect exact from="/myPortfolio" to="/home"></Redirect>
      <Route component={Home} path="/home"/>
      <Route component={About} path="/about" />
      <Route component={Project} path="/project" />
      <Route component={Contact} path="/contact" />
    </Switch>
    <Footer />
  </BrowserRouter>
  );
}

export default App;