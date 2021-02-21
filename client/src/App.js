import logo from './logo.svg';
import './App.css';
import Home from "./pages/home"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router> 
    <Switch>
     
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
    
      
    </Switch>

  </Router>
  );
}

export default App;
