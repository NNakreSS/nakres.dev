import { Route, Routes } from "react-router-dom";
import "./App.css";
// components
import Header from "./components/Header";
// pages
import Home from "./pages/Home";
import Footer from "./components/Footer";
// redux
import { useSelector } from "react-redux";
import { themeSelector } from "./redux/slicers/themeSlice";
import classNames from "classnames";
import { Suspense } from "react";

const App = () => {
  const { darkMode } = useSelector(themeSelector);

  return (
    <Suspense fallback="loading">
      <div
        className={classNames(
          "bg-background min-h-screen min-w-full flex flex-col transition duration-300 ease-linear",
          {
            light: !darkMode,
            dark: darkMode,
          }
        )}
      >
        <Header />
        <main className="flex-0 w-full flex flex-col gap-4 mt-10 gap-y-40 container mx-auto px-2 lg:px-20">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Suspense>
  );
};
export default App;
