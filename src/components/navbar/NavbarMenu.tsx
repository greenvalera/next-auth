"use client"

import { useRouter } from "next/navigation";
import NavbarMenuLink from "./NavbarMenuLink";
import { NavbarMenuLinkProps } from "./NavbarMenuLink";
import { text } from "node:stream/consumers";

const links: NavbarMenuLinkProps[] = [
  { href: "/", text: "Home", active: true },
  { href: "/about", text: "About" },
];

export default function NavbarMenu() {
    return (
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((link) => (<NavbarMenuLink key={link.text} {...link} />))}
          </ul>
        </div>
    );
};