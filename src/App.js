import { Route, Switch } from "react-router-dom";
import "./App.css";
import Splash from "../src/components/splash/Splash";
import Home from "../src/components/Home/Home";
import Curriculum from "../src/components/Curriculum/Curriculum";
import Proyectos from "../src/components/Proyectos/Proyectos";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/curriculum' component={Curriculum} />
        <Route exact path='/proyectos' component={Proyectos} />
      </Switch>
    </div>
  );
}

export default App;
