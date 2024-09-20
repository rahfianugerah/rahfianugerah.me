'use client';
import React, { useState, useEffect } from "react";
import { FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const MyNavbar = () => {
  const [setIsMenuOpen] = useState(false);
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
        <NavbarBrand>
          <p className="navbar-logo text-lg text-inherit">Rahfi Anugerah</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
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

      <NavbarContent className="flex sm:hidden gap-4" justify="end">
        {menuItems.map((item) => (
          <NavbarItem key={item.index}>
            <Link
              className="navbar-link"
              color="foreground"
              href={item.href}
              onClick={() => handleClick(item.index)}
            >
              {item.icon}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default MyNavbar;
