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
// notify
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={Store}>
    <Router>
      <App />
    </Router>
    <ToastContainer />
  </Provider>
);
