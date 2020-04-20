import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import "./App/Container/Assets/Css/App.css";
// IMPORT UTILS FOR GET TOKEN OR SET TOKEN FROM PINDAD UTILS
import {
  Contact,
  Forgot,
  Home,
  IntegrityFact,
  Procurement,
  QualificationReq,
  Registration,
  RegistrationProcedure,
  TenderRequirement,
  TermCondition,
  UserManual,
} from "./App/Container/Views/Public/index";
import { VendorProfile } from "./App/Container/Views/Private/index";
import { PublicHeader, PublicSidebar } from "./App/Layout/Public/index";
import { PrivateSidebar } from "./App/Layout/Private/index";
import history from "./App/Misc/BrowserHistory";
import { getToken } from "./App/Misc/Cookies";

const PublicRoute = ({ component: Component, ...rest }) => {
  const login: any = getToken();
  return (
    <Route
      {...rest}
      render={(props) =>
        login === null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/vendor/profile",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const login: any = getToken();
  return (
    <Route
      {...rest}
      render={(props) =>
        login !== null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
const Routes = () => {
  const login: any = getToken();
  return (
    <React.Fragment>
      <PublicHeader />
      <div className="lg:flex sm:flex sm:flex-col lg:flex-row pt-16 lg:overflow-y-auto">
        <div className="lg:w-auto">
          {login === null ? <PublicSidebar /> : <PrivateSidebar />}
        </div>

        <div className="lg:w-auto">
          <Router history={history}>
            <Switch>
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/integrity_pact" component={IntegrityFact} />
              <Route exact path="/procurements" component={Procurement} />
              <Route
                exact
                path="/qualification_requirement"
                component={QualificationReq}
              />
              <Route
                exact
                path="/registration_procedure"
                component={RegistrationProcedure}
              />
              <Route
                exact
                path="/tender_requirement"
                component={TenderRequirement}
              />
              <Route exact path="/term_condition" component={TermCondition} />
              <Route exact path="/user_manual" component={UserManual} />
              <PublicRoute exact path="/forgot" component={Forgot} />
              <PublicRoute exact path="/" component={Home} />
              <PublicRoute
                exact
                path="/registration"
                component={Registration}
              />
              <PrivateRoute
                exact
                path="/vendor/profile"
                component={VendorProfile}
              />
            </Switch>
          </Router>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Routes;
