import "./App.scss";
import { Route, Switch, withRouter } from "react-router-dom";
import { renderRoutesHome, renderRoutesAdmin } from "./routes";
import { lazy, Suspense } from "react";
import Loading from "./containers/HomeTemplate/components/Loading/Loading";
import ScrollToTop from "./components/ScrollToTop";

function App(props) {
  return (
    <Suspense fallback={<Loading />}>
      <ScrollToTop />
      <Switch>
        {renderRoutesHome(props.history)}
        {renderRoutesAdmin(props.history)}
        <Route
          path="/auth"
          exact
          component={lazy(() => import("./containers/Admin/Auth"))}
        />
        <Route
          path=""
          component={lazy(() => import("./containers/PageNotFound"))}
        />
      </Switch>
    </Suspense>
  );
}

export default withRouter(App);
