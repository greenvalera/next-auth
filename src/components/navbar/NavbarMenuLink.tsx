'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export interface NavbarMenuLinkProps {
    href: string;
    text: string;
    active?: boolean;
}

export default function NavbarMenuLink({href, text, active = false}: NavbarMenuLinkProps) {
    const pathname = usePathname();

    const activeClasses = pathname === href ? 'md:text-blue-700 md:dark:text-blue-500' : '';
    
    return (
      <li>
        <Link
          href={href}
          className={twMerge(
            activeClasses,
            "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0"
            )}
        >
            {text}
        </Link>
      </li>
    );
};