'use client'
import React from "react";
import { FaGithub, FaLinkedin, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", href: "#home", icon: <FaHome /> },
    { label: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { label: "Profile", href: "#profile", icon: <FaUser /> },
    { label: "Github", href: "#", icon: <FaGithub color="#ffffff" /> },
    { label: "LinkedIn", href: "#", icon: <FaLinkedin color="#ffffff" />}
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="navbar-logo text-lg text-inherit">Rahfi Anugerah</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="navbar-link" color="foreground" href="#">
            <FaHome className="mr-2" />
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="navbar-link" color="foreground" href="#">
            <FaProjectDiagram className="mr-2" />
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="navbar-link" color="foreground" href="#">
            <FaUser className="mr-2" />
            Profile
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#"><FaGithub color="#ffffff" /></Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#"><FaLinkedin color="#ffffff" /></Link>
        </NavbarItem>
        <NavbarItem className="navbar-link">
          <Button as={Link} color="white" href="#" variant="ghost">
            My Blog
          </Button>
        </NavbarItem>
        <NavbarItem className="navbar-link">
          <Button as={Link} color="primary" href="#" variant="shadow">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color="foreground"
              className="navbar-link w-full"
              href={item.href}
              size="lg"
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
