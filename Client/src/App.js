import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContextProvider, UserContext } from "./contexts/userContext";
import { API, setAuthToken } from "./config/api";

import "./styles/global.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RaiseFund from "./pages/RaiseFund";
import FormFund from "./pages/FormFund";
import Profile from "./pages/Profile";
import DetailDonate from "./components/DetailDonate";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <UserContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/RaiseFund" component={RaiseFund} />
            <Route exact path="/FormFund" component={FormFund} />
            <Route exact path="/Profile" component={Profile} />
            <PrivateRoute exact path="/detail/:id" component={DetailDonate} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
