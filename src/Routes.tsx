import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
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
import { PublicHeader, PublicSidebar } from "./App/Layout/Public/index";
import history from "./App/Misc/BrowserHistory";
const PublicRoute = ({ component: Component, ...rest }) => {
  const login = null;
  return (
    <Route
      {...rest}
      render={(props) =>
        login === null ? (
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
  return (
    <React.Fragment>
      <PublicHeader />
      <div className="lg:flex lg:flex-1 lg:pt-14 lg:overflow-y-auto">
        <div className="lg:w-1/5 xs:w-full">
          <PublicSidebar />
        </div>
        <div className="lg:w-4/5 xs:w-full">
          <Router history={history}>
            <Switch>
              <PublicRoute exact path="/contact" component={Contact} />
              <PublicRoute exact path="/forgot" component={Forgot} />
              <PublicRoute exact path="/" component={Home} />
              <PublicRoute
                exact
                path="/integrity_fact"
                component={IntegrityFact}
              />
              <PublicRoute exact path="/procerument" component={Procurement} />
              <PublicRoute
                exact
                path="/qualification_requirement"
                component={QualificationReq}
              />
              <PublicRoute
                exact
                path="/registration"
                component={Registration}
              />
              <PublicRoute
                exact
                path="/registration_procedure"
                component={RegistrationProcedure}
              />
              <PublicRoute
                exact
                path="/tender_requirement"
                component={TenderRequirement}
              />
              <PublicRoute
                exact
                path="/term_condition"
                component={TermCondition}
              />
              <PublicRoute exact path="/user_manual" component={UserManual} />
            </Switch>
          </Router>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Routes;
