import { lazy } from "react";
import HomeTemplate from "../containers/HomeTemplate/HomeTemplate";
import AdminTemplate from "../containers/Admin";

const routesHome = [
  {
    exact: true,
    path: "/",
    showHeader: false,
    component: lazy(() =>
      import("../containers/HomeTemplate/HomePage/HomePage")
    ),
  },
  {
    exact: false,
    path: "/profile/",
    showHeader: true,
    component: lazy(() =>
      import("../containers/HomeTemplate/UserPage/UserPage")
    ),
  },
  {
    exact: false,
    path: "/search/:name",
    showHeader: true,
    component: lazy(() =>
      import("../containers/HomeTemplate/SearchPage/SearchPage")
    ),
  },
  {
    exact: false,
    path: "/categories/:id/:subid",
    showHeader: true,
    component: lazy(() => import("../containers/HomeTemplate/SubJob/SubJob")),
  },
  {
    exact: false,
    path: "/categories/:id",
    showHeader: true,
    component: lazy(() => import("../containers/HomeTemplate/MainJob/MainJob")),
  },
  {
    exact: false,
    path: "/:userCreator/:id",
    showHeader: true,
    component: lazy(() =>
      import("../containers/HomeTemplate/CreatorPage/CreatorPage")
    ),
  },
  {
    exact: false,
    path: "/categories",
    showHeader: true,
    component: lazy(() =>
      import("../containers/HomeTemplate/CategoryPage/CategoryPage")
    ),
  },
  {
    exact: false,
    path: "/login",
    showHeader: true,
    component: lazy(() =>
      import("../containers/HomeTemplate/LoginPage/LoginPage")
    ),
  },
  {
    exact: false,
    path: "/register",
    showHeader: true,
    component: lazy(() =>
      import("../containers/HomeTemplate/RegisterPage/RegisterPage")
    ),
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: lazy(() => import("../containers/Admin/Dashboard")),
  },
];

function renderRoutesHome(history) {
  return routesHome.map((route, index) => {
    return (
      <HomeTemplate
        history={history}
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      ></HomeTemplate>
    );
  });
}

function renderRoutesAdmin(history) {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        history={history}
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      ></AdminTemplate>
    );
  });
}

export { renderRoutesHome, renderRoutesAdmin };
