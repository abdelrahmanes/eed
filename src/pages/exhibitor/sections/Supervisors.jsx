import { yupResolver } from "@hookform/resolvers/yup";
import { Flex, TextInput, Textarea } from "@mantine/core";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import SelectComponent from "../../../components/SelectComponent";
import StepBoxWrapper from "../../../components/StepBoxWrapper";
import StepButtons from "../../../components/StepButtons";

const schema = yup.object({
  supervisor: yup.object().shape({
    title: yup.string().required("Job title is required"),
    name_ar: yup
      .string()
      .required("Name in arabic is required")
      .matches(/^[\u0600-\u06FF\s]+$/, "Only arabic letters are allowed"),
    name_en: yup
      .string()
      .required("Name in english is required")
      .matches(/^[A-Za-z\s]+$/, "Only english letters are allowed"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(/^01[0125][0-9]{8}$/, "Invalid phone number"),
    gender: yup.string().required("Please choose the gender"),
    linkedin: yup
      .string()
      .required("Please enter your linkedin account link")
      .matches(
        /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/,
        "invalid linkedin link"
      ), // linkedin regex
    interests: yup.string().nullable(),
  }),
});
function Supervisors({ setActive, active, getData }) {
  const savedData = JSON.parse(localStorage.getItem("data"));
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm({
    defaultValues: {
      supervisor: {
        title: savedData?.supervisor?.title || "",
        name_ar: savedData?.supervisor?.name_ar || "",
        name_en: savedData?.supervisor?.name_en || "",
        email: savedData?.supervisor?.email || "",
        phone: savedData?.supervisor?.phone || "",
        gender: savedData?.supervisor?.gender || "",
        linkedin: savedData?.supervisor?.linkedin || "",
        interests: savedData?.supervisor?.interests || "",
      },
    },
    resolver: yupResolver(schema),
  });

  const onsubmit = (submittedData) => {
    if (Object.keys(errors).length === 0) setActive(active + 1);
    getData(submittedData);
  };

  const genderRef = useRef();
  return (
    <StepBoxWrapper title={"Project Supervisor"} className={"!w-3/4"}>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col w-full gap-2"
      >
        <div className="flex flex-col w-full gap-5 mt-8 border-b border-gray-200">
          <Flex className="flex-col gap-2">
            <TextInput
              {...register(`supervisor.title`)}
              error={errors?.supervisor?.title?.message}
              classNames={{
                input:
                  "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400  ",
              }}
              type={"text"}
              className="w-full mt-1"
              placeholder={"Job Title"}
            />
            <Flex className="items-center w-full gap-4">
              <TextInput
                {...register(`supervisor.name_en`)}
                error={errors?.supervisor?.name_en?.message}
                classNames={{
                  input:
                    "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400  ",
                }}
                type={"text"}
                className="w-full mt-1"
                placeholder={"Full Name"}
              />
              <TextInput
                {...register(`supervisor.name_ar`)}
                error={errors?.supervisor?.name_ar?.message}
                classNames={{
                  input:
                    "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400  ",
                }}
                type={"text"}
                className="w-full mt-1"
                placeholder={"الإسم الثلاثي"}
              />
            </Flex>
            <Flex className="items-center w-full gap-4">
              <TextInput
                {...register(`supervisor.phone`)}
                error={errors?.supervisor?.phone?.message}
                classNames={{
                  input:
                    "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400  ",
                }}
                type={"text"}
                className="w-full mt-1"
                placeholder={"Phone Number"}
              />
              <TextInput
                {...register(`supervisor.email`)}
                error={errors?.supervisor?.email?.message}
                classNames={{
                  input:
                    "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400  ",
                }}
                type={"email"}
                className="w-full mt-1"
                placeholder={"Email Address"}
              />
            </Flex>
            <SelectComponent
              register={register}
              ref={genderRef}
              name={`supervisor.gender`}
              value={watch(`supervisor.gender`)}
              placeholder={"Gender"}
              error={errors?.supervisor?.gender}
              onChange={(e) => {
                setValue(`supervisor.gender`, e);
                trigger(`supervisor.gender`);
              }}
              errors={errors?.supervisor?.gender}
              data={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ]}
            />
          </Flex>
          <TextInput
            {...register(`supervisor.linkedin`)}
            error={errors?.supervisor?.linkedin?.message}
            classNames={{
              input:
                "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400  ",
            }}
            type={"text"}
            className="w-full mt-1"
            placeholder={"Linkedin Link"}
          />
          <Textarea
            {...register(`supervisor.interests`)}
            error={errors?.supervisor?.interests?.message}
            classNames={{
              input:
                "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400  ",
            }}
            type={"text"}
            className="w-full mt-1"
            placeholder={"Technical areas of interest"}
          />
        </div>

        <StepButtons active={active} setActive={setActive} />
      </form>
    </StepBoxWrapper>
  );
}

export default Supervisors;
