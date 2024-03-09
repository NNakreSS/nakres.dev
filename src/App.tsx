import { Route, Routes } from "react-router-dom";
import "./App.css";
// components
import Header from "./components/Header";
// pages
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => (
  <div className="dark dark:bg-zinc-900  min-h-screen min-w-full dark:text-gray-200 p-5 grid grid-cols-12 gap-4">
    <div className="col-span-10 col-start-2">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  </div>
);
export default App;
