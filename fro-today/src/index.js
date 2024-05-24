import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthContextProvider } from "./contexts/AuthContext";

import { Provider } from "react-redux";
import store from "./components/redux/store";
import { AlertProvider } from "./contextData/AlertProviderContext";
import { AuthContextProvider } from "./contextData/useAuth";
import Loader from "./components/loading/Loader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<Loader />}>
        <AuthContextProvider>
          <AlertProvider>
            <Provider store={store}>
              <Routes>
                <Route path="/*" element={<App />} />
              </Routes>
            </Provider>
          </AlertProvider>
        </AuthContextProvider>
      </Suspense>
    </Router>
  </React.StrictMode>
);
