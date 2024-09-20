'use client';
import React, { useState } from "react";
import { FaHome, FaProjectDiagram, FaUser, FaBlog, FaEnvelope } from "react-icons/fa";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  
  const menuItems = [
    { label: "Home", href: "#home", icon: <FaHome />, index: 0 },
    { label: "Projects", href: "#projects", icon: <FaProjectDiagram />, index: 1 },
    { label: "Profile", href: "#profile", icon: <FaUser />, index: 2 }
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

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

      {/* Main Navbar for large screens */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.index}>
            <Link
              className={`navbar-link ${activeIndex === item.index ? "active" : ""}`}
              color="foreground"
              href={item.href}
              onClick={() => handleClick(item.index)}
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          
        </NavbarItem>
        {/* Responsive icons for Blog and Contact */}
        <NavbarItem className="navbar-link hidden lg:block">
          <Button as={Link} color="white" href="#" variant="ghost">
            My Blog
          </Button>
        </NavbarItem>
        <NavbarItem className="navbar-link hidden lg:block">
          <Button as={Link} color="primary" href="#" variant="shadow">
            Contact
          </Button>
        </NavbarItem>

        {/* Icons for smaller screens */}
        <NavbarItem className="lg:hidden">
          <Link href="#" aria-label="My Blog">
            <FaBlog />
          </Link>
        </NavbarItem>
        <NavbarItem className="lg:hidden">
          <Link href="#" aria-label="Contact">
            <FaEnvelope />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.index}>
            <Link
              color="foreground"
              className="navbar-link w-full" // No active class for aside menu
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
