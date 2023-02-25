import { useContext } from "react";

import { ProjectContext } from "../Context/ProjectContext";

export const useProjectContext = () => {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error("you must useProjecrsContext inside a Projectcontext");
  }

  return context;
};
