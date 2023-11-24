import React, { lazy } from "react";
import { Routes as Router, Route } from "react-router";
import { Routes } from "./routes";
import withSuspense from "../hoc/withSuspense";
import NotFound from "../pages/notFound";

const Home = lazy(() => import("../pages/home"));
const Profile = lazy(() => import("../pages/profile"));
const Projects = lazy(() => import("../pages/projects"));
const CartProduit = lazy(() => import("../shared/cartProduit/cartProduit"));

export const AppRoutes: React.FunctionComponent = () => (
  <Router>
    <Route path={Routes.home} element={withSuspense(Home)} />
    <Route path={Routes.profile} element={withSuspense(Profile)} />
    <Route path={Routes.projects} element={withSuspense(Projects)} />
    <Route path={Routes.cartproduit} element={withSuspense(CartProduit)} />

    <Route path="*" element={<NotFound />} />
  </Router>
);
