import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import SimpleSelect from './pages/SimpleSelect';
import ExportCSV from './pages/ExportCSV';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={SignIn} />
        <Route path='/search' component={SimpleSelect} />
        <Route path='/export-csv' component={ExportCSV} />
      </Switch>
    </Router>
  );
}

export default App;