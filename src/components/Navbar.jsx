'use client';
import React, { useState, useEffect } from "react";
import { FaHome, FaProjectDiagram, FaUser, FaBlog, FaEnvelope } from "react-icons/fa";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

const MyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Default to Home
  
  const menuItems = [
    { label: "Home", href: "/", icon: <FaHome />, index: 0 },
    { label: "Projects", href: "#projects", icon: <FaProjectDiagram />, index: 1 },
    { label: "Profile", href: "#profile", icon: <FaUser />, index: 2 }
  ];

  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentIndex = menuItems.findIndex(item => item.href === currentPath);
    setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
  }, []);

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
              className="navbar-link"
              color="foreground"
              href={item.href}
              onClick={() => handleClick(item.index)}
            >
              {item.icon}
              <span className={`ml-2 navbar-text ${activeIndex === item.index ? "active" : ""}`}>
                {item.label}
              </span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
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
              className="navbar-link w-full"
              href={item.href}
              size="lg"
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              <span className={`navbar-text ${activeIndex === item.index ? "active" : ""}`}>
                {item.label}
              </span>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default MyNavbar;
