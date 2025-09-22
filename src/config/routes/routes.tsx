import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { RoutePath } from "../../constants/routes.path";
import More from "../../app/pages/More";

const Home = lazy(() => import("../../app/pages/home/index"));
const About = lazy(() => import("../../app/pages/about/index"));
const Contact = lazy(() => import("../../app/pages/contact/index"));
const Login = lazy(() => import("../../app/pages/login/index"));
const NotFound = lazy(() => import("../../app/pages/notfound/index"));

export const routes: RouteObject[] = [
  {
    path: RoutePath.basePath,
    element: <Home />,
  },
  {
    path: RoutePath.home,
    element: <Home />,
  },
  {
    path: RoutePath.about,
    element: <About />,
  },
  {
    path: RoutePath.contact,
    element: <Contact />,
  },
  {
    path: RoutePath.more,
    element: <More />,
  },
  {
    path: RoutePath.auth.login,
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
