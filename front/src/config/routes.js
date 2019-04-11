import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import React from 'react';
import { ListBrandContainer, CreateBrandContainer } from '../pages/Brand';
import { ListCategoryContainer, CreateCategoryContainer } from '../pages/Category';
import ErrorPage from '../pages/Error';

export default () => (
  <BrowserRouter>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ListBrandContainer} />
        <Route exact path="/brand/:action" component={CreateBrandContainer} />
        <Route exact path="/category/:action" component={CreateCategoryContainer} />
        <Route exact path="/category" component={ListCategoryContainer} />
        <Route exact path="/error/:code" component={ErrorPage} />
      </Switch>
    </HashRouter>
  </BrowserRouter>
);
