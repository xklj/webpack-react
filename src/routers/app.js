import React from "react";
import {
  Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Provider } from 'react-redux';
import rootReducer from '@/models/reducer';
import config from "./index.js";
import history from '../utils/history';




const store = rootReducer;




const renderRoutes = routes => {
  if (!Array.isArray(routes)) {
    return null;
  }

  return (
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
  );
};

const AppRouter = () => {
  return (
    <Provider store={store}>
      <Router history={history}>{renderRoutes(config)}</Router>
    </Provider>
  );
};

export default AppRouter;
