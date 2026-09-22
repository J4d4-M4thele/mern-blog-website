import React from "react";
import logo from "@/assets/images/logo-white.png";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
import SearchBox from "./SearchBox";
import { RouteSignIn } from "@/helpers/RouteName";

const Topbar = () => {
  return (
    <div
      className="flex justify-between items-center h-16 fixed w-full 
    z-20 bg-white px-5 border-b"
    >
      <div>
        <img src={logo} />
      </div>

      <div className="w-[500px]">
        <SearchBox />
      </div>
      <div>
        <Button className="rounded-full" render={<Link to={RouteSignIn}/>}>
            <IoIosLogIn /> 
            Sign In
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
