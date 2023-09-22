/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import { TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import StepBoxWrapper from "../../../components/StepBoxWrapper";
import StepButtons from "../../../components/StepButtons";

const schema = yup.object({
  name: yup
    .string()
    .test(
      "len",
      "Must be at least 2 characters and max 50 characters",
      (val) => val.length > 2 && val.length <= 50
    )
    .required("Project name is required"),
  spec_length: yup.string().required("Project length is required"),
  spec_width: yup.string().required("Project width is required"),
  //   department: yup.string().required("department is required"),
});

function ProjectDetails({ active, setActive, getData }) {
  const savedData = JSON.parse(localStorage.getItem("data"));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: savedData.name || "",
      spec_length: +savedData.spec_length || "",
      spec_width: +savedData.spec_width || "",
      //   department: +savedData.college_id || "",
    },
    resolver: yupResolver(schema),
  });

  const onsubmit = (submittedData) => {
    if (Object.keys(errors).length === 0) setActive(active + 1);
    getData(submittedData);
  };

  return (
    <StepBoxWrapper title={"Project Details"}>
      <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-3 ">
        <TextInput
          {...register("name")}
          error={errors.name?.message}
          classNames={{
            input:
              "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400 mt-1 ",
          }}
          type={"text"}
          className="w-full mt-2"
          placeholder={"Project name"}
        />

        <TextInput
          {...register("spec_length")}
          error={errors.spec_length?.message}
          classNames={{
            input:
              "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400 mt-1 ",
          }}
          type={"number"}
          className="w-full mt-2"
          placeholder={"Project Length (m)"}
        />

        <TextInput
          {...register("spec_width")}
          error={errors.spec_width?.message}
          classNames={{
            input:
              "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400 mt-1 ",
          }}
          type={"number"}
          className="w-full mt-2"
          placeholder={"Project width (m)"}
        />

        <StepButtons active={active} setActive={setActive} />
      </form>
    </StepBoxWrapper>
  );
}

export default ProjectDetails;
