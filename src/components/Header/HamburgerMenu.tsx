import React from "react";
import { NavLink } from "react-router-dom";
// loalization
import { useTranslation } from "react-i18next";
// type
import INavItem from "../../interfaces/INavItem";
// utils
import { navButtonClass } from "./utils";

const HamburgerMenu: React.FC<{ navItems: INavItem[] }> = ({ navItems }) => {
  const { t } = useTranslation();

  return (
    <nav className="gap-5 grid grid-cols-2 text-md w-full">
      {navItems.map((item, index) => (
        <NavLink key={index} to={item.path} className={navButtonClass}>
          {t(item.key)}
        </NavLink>
      ))}
    </nav>
  );
};

export default HamburgerMenu;
