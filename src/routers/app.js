import React, { Fragment } from "react";
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
  }else {
    return (
      <Switch> 
        {routes.map((item, index) => {
          if(item.redirect) {
            return (
              <Redirect 
                key={index}
                exact={item.exact}
                from={item.path}
                to={item.redirect}
              />
            )
          }else {
            return (
              <Route 
                key={index}
                path={item.path}
                exact={item.exact}
                render={(props) => {
                  if(item.childRoutes) {
                    return (
                      <Fragment>
                        <item.component {...props} ></item.component>
                          <Switch>
                            {
                              item.childRoutes.map((childRoute, index) => {
                                return (
                                  <Route 
                                    exact={childRoute.exact}
                                    path={childRoute.path}
                                    key={`${index}_${childRoute.path}`}
                                    component={childRoute.component}
                                  />
                                )
                              })
                            }
                          </Switch>
                      </Fragment>
                    )
                  }else {
                    return (
                      <Route 
                        path={item.path}
                        key={index}
                        render={(props) => {
                          return (
                            <item.component {...props} />
                          )
                        }}
                      />
                    )
                  }
                }}
              />
            )
          }
        }
        )}
      </Switch>
    );
  }
};

const AppRouter = () => {
  return (
    <Provider store={store}>
      <Router history={history}>{renderRoutes(config)}</Router>
    </Provider>
  );
};

export default AppRouter;
