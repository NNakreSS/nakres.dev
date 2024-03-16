import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
// routes
import routes from "../../routes";
// utils
import { navButtonClass } from "./utils";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="gap-2 hidden grid-cols-4 lg:grid">
      {routes.map((item) => (
        <NavLink key={item.key} to={item.path} className={navButtonClass}>
          {t(item.key)}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
