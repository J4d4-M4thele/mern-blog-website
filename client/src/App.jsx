import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  RouteIndex,
  RouteProfile,
  RouteSignIn,
  RouteSignUp,
  RouteCategoryDetails,
  RouteAddCategory,
  RouteEditCategory,
} from "./helpers/RouteName";
import Layout from "./Layout/Layout";
import Index from "./pages/index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import CategoryDetails from "./pages/Categories/CategoryDetails";
import AddCategory from "./pages/Categories/AddCategory";
import EditCategory from "./pages/Categories/EditCategory";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteIndex} element={<Layout />}>
          <Route index element={<Index />} />
          <Route path={RouteProfile} element={<Profile />} />
          <Route path={RouteCategoryDetails} element={<CategoryDetails />} />
          <Route path={RouteAddCategory} element={<AddCategory />} />
          <Route path={RouteEditCategory()} element={<EditCategory />} />
        </Route>

        <Route path={RouteSignIn} element={<SignIn />} />

        <Route path={RouteSignUp} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
