import React, { useState } from "react";
import { currencyFormatter } from "../utils/CurrencyFormatter";
import { useProjectContext } from "../hooks/useProjectContext";

import moment from "moment";
import ProjectForm from "./ProjectForm";

const ProjectsCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverLayOpen, setIsOverLayOpen] = useState(false);

  const { dispatch } = useProjectContext();

  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:5000/api/projects/${project._id}`,
      {
        method: "DELETE",
      }
    );
    const json = await res.json();

    if (res.ok) {
      dispatch({
        type: "DELETE_PROJECT",
        payload: json,
      });
    }
  };

  const handleUpdate = () => {
    setIsModalOpen(true);
    setIsOverLayOpen(true);
  };

  const handleOverLay = () => {
    setIsModalOpen(false);
    setIsOverLayOpen(false);
  };

  return (
    <div className="project bg-slate-800 p-5 rounded-xl shadow-xl border border-slate-700 flex flex-col gap-5 w-[30rem]">
      <div className="top">
        <span className="text-sky-400">ID: {project._id}</span>
        <h3 className="text-3xl font-medium truncate">{project.title}</h3>
        <span className="uppercase text-xs tracking-widest text-slate-500 font-medium">
          {project.tech}
        </span>
      </div>
      <div className="mid text-slate-300 flex gap-10">
        <div className="left flex flex-col">
          <span>Budget: {currencyFormatter(project.budget)}</span>
          <span>
            Added on: {moment(project.createdAt).format("DD MMM YY. hh:mm A")}
          </span>
          <span>
            Last Update:{" "}
            {moment(project.updatedAt).format("DD MMM YY. hh:mm A")}
          </span>
        </div>
        <div className="right flex flex-col">
          <span>Manager: {project.manager}</span>
          <span>Developers: {project.dev}</span>
          <span>
            duration:{" "}
            {`${project.duration} week${project.duration === 1 ? "" : "s"}`}
          </span>
        </div>
      </div>
      <div className="bottom flex gap-5">
        <button
          onClick={handleUpdate}
          className="bg-sky-400 text-slate-900 py-2 px-5 rounded shadow-xl hover:bg-sky-50 duration-300"
        >
          Update
        </button>
        <button onClick={handleDelete} className="text-red-500 hover:underline">
          Delete
        </button>
      </div>
      {/* Overlay */}
      <div
        onClick={handleOverLay}
        className={`overlay fixed z-[1] h-screen w-screen bg-slate-900/50 backdrop-blur-sm top-0 right-0 bottom-0 left-0 ${
          isOverLayOpen ? "" : "hidden"
        }`}
      ></div>

      {/* MODLE */}
      <div
        className={`update-modal w-[35rem] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 p-10 rounded-xl shadow-xl border-slate-700 z-[2] ${
          isModalOpen ? "" : "hidden"
        }`}
      >
        <h2 className="text-4xl font-medium text-sky-400 mb-10">
          Update Project
        </h2>
        <ProjectForm
          project={project}
          setIsModalOpen={setIsModalOpen}
          setIsOverLayOpen={setIsOverLayOpen}
        />
      </div>
    </div>
  );
};

export default ProjectsCard;
