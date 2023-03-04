import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ProjectContextProvider } from "./Context/ProjectContext";
import { AuthContexProvider } from "./Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectContextProvider>
        <AuthContexProvider>
          <App />
        </AuthContexProvider>
      </ProjectContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
