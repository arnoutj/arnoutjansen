import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  return (
    <nav className="pt-2 flex justify-between">
      <ul>
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/about">About</NavigationLink>
        <NavigationLink href="/music">Music</NavigationLink>
        <NavigationLink href="/newsletter">Newsletter</NavigationLink>
        <NavigationLink href="/contact">Contact</NavigationLink>
      </ul>
    </nav>
  );
}

function NavigationLink(props: PropsWithChildren<LinkProps>) {
  const isActive = usePathname() === props.href;
  return (
    <Link {...props} className={`text-xl mr-8 ${isActive ? "font-bold" : ""}`}>
      {props.children}
    </Link>
  );
}
