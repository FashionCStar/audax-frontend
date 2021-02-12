
import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";
import AuthLayout from "layouts/Auth.js";
import IndexView from "views/Index.js";

function App() {
    return(
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/admin" to="/admin/dashboard" />
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Route path="/rtl" render={props => <RTLLayout {...props} />} />
          
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
          <Route path="/" render={props => <IndexView {...props} />} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    )
}

export default App;
