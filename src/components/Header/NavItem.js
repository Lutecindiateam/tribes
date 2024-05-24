import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavItem = ({ navItem = {} }) => {
  const { pathname } = useRouter();

  const { name, href, subNavItems } = navItem;
  const subHref = subNavItems.map((item) => item.href);
  const current = pathname === href || subHref.includes(pathname);

  return (
    <li className={`dropdown${current ? " current" : ""}`}>
      <Link href={href}>
        {name}
      </Link>
      <ul>
        {subNavItems.map((subItem) => (
          <li key={subItem.id}>
            <Link href={subItem.href}>
              {subItem.name}
            </Link>
            <ul>
              {subItem.subItems?.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavItem;
