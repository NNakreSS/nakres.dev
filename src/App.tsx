import { Route, Routes } from "react-router-dom";
import "./App.css";
// components
import Header from "./components/Header";
// pages
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => (
  <div className="dark dark:bg-zinc-900  min-h-screen min-w-full dark:text-gray-200 p-5 flex flex-col">
    <Header />
    <main className="flex-0 w-full flex flex-col gap-4 mt-10 gap-y-40 container mx-auto px-20">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
    <Footer />
  </div>
);
export default App;
