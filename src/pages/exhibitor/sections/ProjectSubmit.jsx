/* eslint-disable react/prop-types */
import { Flex } from "@mantine/core";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import StepButtons from "../../../components/StepButtons";
import { CreateProject } from "../../../services/project";
import ItemsInfo from "./submission/ItemsInfo";
import MembersInfo from "./submission/MembersInfo";
import ProjectInfo from "./submission/ProjectInfo";
import SupervisorInfo from "./submission/SupervisorInfo";

function ProjectSubmit({ data, active, setActive }) {
  const [savedData, setSavedData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setSavedData(JSON.parse(localStorage.getItem("data")));
  }, []);
  const { handleSubmit } = useForm({});
  const onsubmit = () => {
    setLoading(true);
    CreateProject(savedData)
      .then(() => {
        localStorage.clear("data");
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(
          <div
            dangerouslySetInnerHTML={{ __html: err.response.data.errors }}
          />,
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      });
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <Flex className="flex-col gap-10 p-10 ">
        <ProjectInfo savedData={savedData} data={data} />
        <MembersInfo savedData={savedData} />
        <SupervisorInfo savedData={savedData} />
        <ItemsInfo savedData={savedData} data={data.items} />
        <ToastContainer />
        <StepButtons
          active={active}
          setActive={setActive}
          last
          loading={loading}
        />
      </Flex>
    </form>
  );
}

export default ProjectSubmit;
