import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onLinkClick }) => {
  return (
    <ul id="mobile-menu" className="flex flex-col py-4 items-center">
      {links.map((link) => (
        <li key={link.path}>
          <NavLink href={link.path} title={link.title} onClick={onLinkClick} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
