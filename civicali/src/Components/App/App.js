import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routes
import * as ROUTES from "../../Constants/routes";
import './app.css';

// Pages
import {
  Landing,
  Home,
  SignIn,
  Ranking,
  Tienda,
  Personajes,
  Nicolas,
  Diana
} from "../../Page";

// Components
import { Footer } from "../../Components";

// Main component
function App() {
  return (
    <div className="bg">
        <Router>      
            <Switch>
                <Route exact path={ROUTES.LANDING} component={Landing} />
                <Route path={ROUTES.HOME} component={Home} />
                <Route path={ROUTES.SIGN_IN} component={SignIn} />
                <Route path={ROUTES.RANKING} component={Ranking} />
                <Route path={ROUTES.TIENDA} component={Tienda} />
                <Route path={ROUTES.PERSONAJES} component={Personajes} />
                <Route path={ROUTES.NICOLAS} component={Nicolas} />
                <Route path={ROUTES.DIANA} component={Diana} />
            </Switch>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;