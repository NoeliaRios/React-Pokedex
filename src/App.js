import "./App.css";
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail";
import PokeDetail from "./pages/PokeDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:pokename" exact component={PokeDetail} />
          <Route path="/" exact component={LoadingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
