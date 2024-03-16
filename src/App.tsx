import { Route, Routes } from "react-router-dom";
import "./App.css";
import classNames from "classnames";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
// redux
import { useSelector } from "react-redux";
import { themeSelector } from "./redux/slicers/themeSlice";
// routes
import routes from "./routes";

const App = () => {
  const { darkMode } = useSelector(themeSelector);
  const className = classNames(
    "bg-background min-h-screen min-w-full flex flex-col transition duration-300 ease-linear",
    {
      light: !darkMode,
      dark: darkMode,
    }
  );

  return (
    <div className={className}>
      <Header />
      <main className="flex-0 w-full mt-10 container mx-auto px-2 lg:px-20">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.key}
              index={route?.index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
export default App;
