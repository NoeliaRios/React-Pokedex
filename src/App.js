import "./App.css";
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:pokename" exact component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
