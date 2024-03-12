import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import INavItem from "../../interfaces/INavItem";
import React from "react";
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
