import React from "react";
import {
  Navbar,
  NavbarItem,
  NavbarContent,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
} from "@heroui/react";
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar>
        <NavbarBrand>
          <img src="Logo1.svg" alt="" />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4 bg-[#efeff7d5] px-4 rounded-xl py-" justify="center ">
          <NavbarItem>
            <NavLink to="/">Home</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="nn">Used Cars</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="v">Auctions</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="c">Support</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="p">Local Dealers</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="z">Sell Cars</NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className=" lg:flex">
            <NavLink to="login"><button className="bg-indigo-500 px-4 py-2 rounded-xl border-b-none text-white">Login</button></NavLink>
          </NavbarItem>
          <NavbarItem>
            <Button className="hidden lg:flex" color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <Outlet />
    </>
  );
}

export default NavBar;
