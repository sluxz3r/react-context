import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
      <div className="flex flex-row">
        <PublicSidebar />
        <Router>
          <Switch>
            <PublicRoute path="/contact" component={Contact} />
            <PublicRoute path="/forgot" component={Forgot} />
            <PublicRoute path="/" component={Home} />
            <PublicRoute path="/integrity_fact" component={IntegrityFact} />
            <PublicRoute path="/procerument" component={Procurement} />
            <PublicRoute
              path="/qualification_requirement"
              component={QualificationReq}
            />
            <PublicRoute path="/registration" component={Registration} />
            <PublicRoute
              path="/registration_procedure"
              component={RegistrationProcedure}
            />
            <PublicRoute
              path="/tender_requirement"
              component={TenderRequirement}
            />
            <PublicRoute path="/term_condition" component={TermCondition} />
            <PublicRoute path="/user_manual" component={UserManual} />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
};
export default Routes;
