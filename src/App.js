import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import About from "./components/UI/About/About";
import Home from "./components/UI/Home/Home";
import Portfolio from "./components/UI/Portfolio/Portfolio";
import Process from "./components/UI/Process/Process";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/portfolio">
          <Portfolio />
        </Route>

        <Route path="/process">
          <Process />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        {/* <Route path="/contact">
          <Contact />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
