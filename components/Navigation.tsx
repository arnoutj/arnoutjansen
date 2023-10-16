import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren, useState } from "react";
import { usePathname } from "next/navigation";

import useWindowSize from "hooks/useWindowSize";

const navigationItems = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/music", title: "Music" },
  { href: "/newsletter", title: "Newsletter" },
  { href: "/contact", title: "Contact" }
];
export default function Navigation() {
  const windowSize = useWindowSize();
  if (windowSize.width < 900) return <MobileNavigation />;
  return <DesktopNavigation />;
}

function DesktopNavigation() {
  return (
    <nav className="pt-2 flex justify-between">
      <ul>
        {navigationItems.map((item) => (
          <li className="mr-8 inline">
            <NavigationLink href={item.href}>{item.title}</NavigationLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileNavigation() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <nav className="pt-2 flex justify-between">
      <button onClick={toggleVisibility}>Menu</button>
      <div
        className={`absolute top-0 w-1/2 h-screen flex flex-col items-end p-12 transition-all duration-200 bg-black ${
          isVisible ? "right-0" : "-right-1/2"
        }`}
      >
        <button onClick={toggleVisibility} className="mb-8 ml-auto">
          Close
        </button>
        <ul>
          {navigationItems.map((item) => (
            <li className="mb-8 text-right">
              <NavigationLink href={item.href}>{item.title}</NavigationLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function NavigationLink(props: PropsWithChildren<LinkProps>) {
  const isActive = usePathname() === props.href;
  return (
    <Link {...props} className={`text-xl ${isActive ? "font-bold" : ""}`}>
      {props.children}
    </Link>
  );
}