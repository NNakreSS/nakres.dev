import { NavLink } from "react-router-dom";
// loalization
import { useTranslation } from "react-i18next";
// utils
import { navButtonClass } from "./utils";
import routes from "../../routes";

const HamburgerMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="gap-2 grid grid-cols-2 text-md w-full">
      {routes.map((item) => (
        <NavLink key={item.key} to={item.path} className={navButtonClass}>
          {t(item.key)}
        </NavLink>
      ))}
    </nav>
  );
};

export default HamburgerMenu;
