import { BrowserRouter, Switch, Route,Redirect } from "react-router-dom";
import Home from "./screen/home";
import Login from "./screen/login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin/login" render={() =><Login  />} />
        <Route path="/admin/home" render={(props) => <Home route={props.location.pathname.split("/")[3]} />} />
       <Redirect from="/admin" to="/admin/home" />
       <Redirect from="/" to="/admin/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
