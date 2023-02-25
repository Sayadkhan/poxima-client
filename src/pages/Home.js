import React, { useEffect } from "react";
import ProjectForm from "../components/ProjectForm";
import ProjectsCard from "../components/ProjectsCard";
import { useProjectContext } from "../hooks/useProjectContext";

const Home = () => {
  const { projects, dispatch } = useProjectContext();

  useEffect(() => {
    const getAllProjects = async () => {
      const res = await fetch("http://localhost:5000/api/projects");
      const json = await res.json();

      if (res.ok) {
        dispatch({
          type: "GET_PROJECTS",
          payload: json,
        });
      }
    };

    getAllProjects();
  }, [dispatch]);
  return (
    <div className="home container mx-auto py-20 grid grid-cols-3 gap-10">
      <div className="left col-span-2">
        <h2 className="text-4xl font-medium text-sky-400 mb-10">
          All Projects
        </h2>
        <div className="projects-wrapper flex gap-10 flex-wrap">
          {projects &&
            projects.map((project) => (
              <ProjectsCard key={project._id} project={project} />
            ))}
        </div>
      </div>
      <div className="right">
        <ProjectForm />
      </div>
    </div>
  );
};

export default Home;
