/* eslint-disable react/prop-types */
import { Flex } from "@mantine/core";
import { useForm } from "react-hook-form";
import StepButtons from "../../../components/StepButtons";
import { CreateProject } from "../../../services/project";
import ItemsInfo from "./submission/ItemsInfo";
import MembersInfo from "./submission/MembersInfo";
import ProjectInfo from "./submission/ProjectInfo";
import SupervisorInfo from "./submission/SupervisorInfo";

function ProjectSubmit({ data, active, setActive }) {
  const savedData = JSON.parse(localStorage.getItem("data"));

  const { handleSubmit } = useForm({});
  const onsubmit = () => {
    CreateProject(savedData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <Flex className="flex-col gap-10 p-10 ">
        <ProjectInfo savedData={savedData} data={data} />
        <MembersInfo savedData={savedData} />
        <SupervisorInfo savedData={savedData} />
        <ItemsInfo savedData={savedData} data={data.items} />

        <StepButtons active={active} setActive={setActive} last />
      </Flex>
    </form>
  );
}

export default ProjectSubmit;
