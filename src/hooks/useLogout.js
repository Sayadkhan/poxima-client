import { useAuthContext } from "./useAuthContex";
import { useProjectContext } from "./useProjectContext";

export const useLogout = () => {
  const { dispatch: logoutDispatch } = useAuthContext();
  const { dispatch: projectsDispatch } = useProjectContext();
  const logout = () => {
    // clear ls
    localStorage.removeItem("user");
    // dispatch logout
    logoutDispatch({
      type: "LOGOUT",
    });
    projectsDispatch({ type: "GET_PROJECTS", payload: null });
  };

  return { logout };
};
