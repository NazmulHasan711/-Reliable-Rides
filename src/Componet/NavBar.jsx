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
      <Navbar className="flex justify-between">
        <NavbarBrand>
          <img src="Logo1.svg" alt="" />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4 bg-[#efeff7d5] px-6 rounded-xl py-3 mt-3" justify="center ">
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

        <NavbarContent justify="end" className="mt-3 ">
          <NavbarItem className=" lg:flex" justify="end">
            <NavLink to="login"><button className="bg-indigo-500 px-4 py-2 rounded-xl border-b-none text-white">Login</button></NavLink>
          </NavbarItem>
          <NavbarItem>
            <Button justify="end" className="hidden lg:flex" color="primary" href="#" variant="flat">
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
