import ReactDOM from "react-dom/client";
// component
import App from "./App.tsx";
// styles
import "./index.css";
// router
import { BrowserRouter as Router } from "react-router-dom";
// redux
import { Provider } from "react-redux";
import Store from "./redux/store.ts";
// localizations
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={Store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
