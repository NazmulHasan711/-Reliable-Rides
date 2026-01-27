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
      <Navbar maxWidth="full" className="px-4">

  <NavbarContent justify="start">
    <NavbarMenuToggle className="sm:hidden mr-2" />
    <NavbarBrand>
      <img src="Logo1.svg" alt="Logo" className="h-8" />
    </NavbarBrand>
  </NavbarContent>

 
  <NavbarContent className="hidden sm:flex gap-4 bg-[#efeff7d5] px-6 rounded-xl py-3 mt-3" justify="center">
    <NavbarItem><NavLink to="/">Home</NavLink></NavbarItem>
    <NavbarItem><NavLink to="nn">Used Cars</NavLink></NavbarItem>
    <NavbarItem><NavLink to="v">Auctions</NavLink></NavbarItem>
    <NavbarItem><NavLink to="c">Support</NavLink></NavbarItem>
    <NavbarItem><NavLink to="p">Local Dealers</NavLink></NavbarItem>
    <NavbarItem><NavLink to="z">Sell Cars</NavLink></NavbarItem>
  </NavbarContent>

 
  <NavbarContent justify="end">
    <NavbarItem>
      <NavLink to="login">
        <button className="bg-indigo-500 px-5 py-2 rounded-xl text-white">Login</button>
      </NavLink>
    </NavbarItem>
    <NavbarItem className="hidden lg:flex">
      <Button as={NavLink} to="signup" color="primary" variant="flat">
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
