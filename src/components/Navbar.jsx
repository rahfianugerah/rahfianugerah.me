'use client';
import React, { useState, useEffect } from "react";
import { FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link"; // Import Next.js Link component

const MyNavbar = () => {
  const [setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Default to Home

  const menuItems = [
    { label: "Home", href: "/", icon: <FaHome />, index: 0 },
    { label: "Projects", href: "/projects", icon: <FaProjectDiagram />, index: 1 },
    { label: "Profile", href: "/profile", icon: <FaUser />, index: 2 }
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
          <a href="/" className="navbar-logo text-lg text-inherit">Rahfi Anugerah</a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menuItems.map((item) => (
          <NavbarItem key={item.index}>
            <Link
              className={`navbar-link ${activeIndex === item.index ? "active" : ""}`}
              href={item.href}
              onClick={() => handleClick(item.index)}
            >
              {item.icon}
              <span className={`ml-2 hover:text-gray-400 navbar-text ${activeIndex === item.index ? "active" : ""}`}>
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
              href={item.href}
              onClick={() => handleClick(item.index)}
              passHref
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