import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./component/layout/Layout";
import About from "./component/UI/About/About";
import Home from "./component/UI/Home/Home";
import Portfolio from "./component/UI/Portfolio/Portfolio";
import Process from "./component/UI/Process/Process";

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
