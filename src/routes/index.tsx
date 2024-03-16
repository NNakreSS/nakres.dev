// pages
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Articles from "../pages/Articles";

export default [
  { path: "/", element: <Home />, index: true, key: "pages.home" },
  { path: "/projects", element: <Projects />, key: "pages.projects" },
  { path: "/articles", element: <Articles />, key: "pages.articles" },
  { path: "/contact", element: "", key: "pages.contact" },
];
