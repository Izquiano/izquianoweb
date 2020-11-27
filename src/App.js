import { Route, Switch } from "react-router-dom";
import "./App.css";
import Splash from "../src/components/splash/Splash";
import Curriculum from "../src/components/Curriculum/Curriculum";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/curriculum" component={Curriculum} />
        {/* <Route exact path="/home" component={Home} /> */}
      </Switch>
    </div>
  );
}

export default App;
