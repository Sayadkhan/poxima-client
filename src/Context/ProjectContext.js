import { createContext, useReducer } from "react";

export const ProjectContext = createContext();

const initialState = {
  projects: [],
};

export const projectReducer = (state, action) => {
  switch (action.type) {
    case "GET_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      };
    case "CREATE_PROJECT":
      return {
        ...state,
        projects: [action.payload, ...state.projects],
      };

    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project._id !== action.payload._id
        ),
      };

    case "UPDATE_PROJECT":
      const [existingProject] = state.projects.filter(
        (project) => project._id === action.payload._id
      );

      return {
        ...state,
        projects: [
          action.payload,
          ...state.projects.filter(
            (project) => project._id !== existingProject._id
          ),
        ],
      };
    default:
      return state;
  }
};

export const ProjectContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  return (
    <ProjectContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};
