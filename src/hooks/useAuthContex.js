import { useContext } from "react";

import { AuthContex } from "../Context/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContex);

  if (!context) {
    throw new Error("you must useAuthContext inside a AuthcontextProvider");
  }

  return context;
};
