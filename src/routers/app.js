import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import config from "./index.js";






const renderRoutes = routes => {
  if (!Array.isArray(routes)) {
    return null;
  }

  return (
    <Router >
      <Switch>
        {routes.map((route, index) => {
          if (route.redirect) {
            return (
              <Redirect
                key={route.path || index}
                exact={route.exact}
                strict={route.strict}
                from={route.path}
                to={route.redirect}  
              />
            );
          }

          return (
            <Route
              key={route.path || index}
              path={route.path}
              exact={route.exact}
              strict={route.strict}
              render={() => {
                const renderChildRoutes = renderRoutes(route);
                if (route.component) {
                  return (
                    // <Suspense fallback={<LoadingPage />}>
                      <route.component route={route}>
                        {renderChildRoutes}
                      </route.component>
                    // </Suspense>
                  );
                }
                return renderChildRoutes;
              }}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

const AppRouter = () => {
  return <Router>{renderRoutes(config)}</Router>;
};

export default AppRouter;
