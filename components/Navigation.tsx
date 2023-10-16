import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useOnClickOutside, useWindowSize } from "usehooks-ts";

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
  const ref = useRef(null);

  const toggleVisibility = () => setIsVisible(!isVisible);

  useOnClickOutside(ref, () => setIsVisible(false));

  return (
    <nav className="flex justify-between" ref={ref}>
      <button className={`nav-toggle ${isVisible ? "open" : ""}`} onClick={toggleVisibility}>
        <span />
        <span />
        <span />
        <span />
      </button>
      <div
        className={`absolute top-0 w-48 h-screen flex flex-col items-end p-8 transition-all duration-200 bg-black bg-opacity-90 ${
          isVisible ? "right-0" : "-right-48"
        }`}
      >
        <ul className="pt-12">
          {navigationItems.map((item) => (
            <li className="mb-4 text-right">
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
