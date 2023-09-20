import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Flex,
  ScrollArea,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useRef } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";
import SelectComponent from "../../../components/SelectComponent";
import StepBoxWrapper from "../../../components/StepBoxWrapper";
import StepButtons from "../../../components/StepButtons";

const schema = yup.object({
  supervisors: yup.array().of(
    yup.object().shape({
      title: yup.string().required("Job title is required"),
      name_ar: yup
        .string()
        .required("Name in arabic is required")
        .matches(/^[\u0600-\u06FF\s]+$/, "Only arabic letters are allowed"),
      name_en: yup
        .string()
        .required("Name in english is required")
        .matches(/^[A-Za-z]+$/, "Only english letters are allowed"),
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
    })
  ),
});
function Supervisors({ setActive, active, getData }) {
  const savedData = JSON.parse(localStorage.getItem("data"));
  console.log(savedData);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
    control,
  } = useForm({
    defaultValues: {
      supervisors: savedData.supervisors
        ? savedData.supervisors.map(
            ({
              title,
              name_ar,
              name_en,
              email,
              phone,
              gender,
              linkedin,
              interests,
            }) => {
              return {
                title,
                name_ar,
                name_en,
                email,
                phone,
                gender,
                linkedin,
                interests,
              };
            }
          )
        : [
            {
              title: "",
              name_ar: "",
              name_en: "",
              email: "",
              phone: "",
              gender: "",
              linkedin: "",
              interests: "",
            },
          ],
    },
    resolver: yupResolver(schema),
  });
  const { fields, append, remove } = useFieldArray({
    name: "supervisors",
    control,
  });

  const onsubmit = (submittedData) => {
    if (Object.keys(errors).length === 0) setActive(active + 1);
    console.log({ submittedData });
    getData(submittedData);
  };

  const genderRef = useRef();
  return (
    <StepBoxWrapper title={"Project Supervisors"} className={"!w-3/4"}>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col w-full gap-2"
      >
        <ScrollArea h={400} className="w-full px-4">
          {fields.map((field, index) => {
            return (
              <div
                className="flex flex-col w-full gap-5 mt-8 border-b border-gray-200"
                key={index}
              >
                <Flex className="items-center justify-between w-full">
                  <Text className="font-bold text-primary">
                    Supervisor {index + 1}
                  </Text>
                  <Button
                    onClick={() => {
                      remove(index);
                    }}
                    className="bg-red-700 w-fit hover:bg-red-500"
                  >
                    Remove Supervisor
                  </Button>
                </Flex>
                <Flex className="flex-col gap-2">
                  <TextInput
                    {...register(`supervisors.${index}.title`)}
                    error={errors?.supervisors?.[index]?.title?.message}
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
                      {...register(`supervisors.${index}.name_en`)}
                      error={errors?.supervisors?.[index]?.name_en?.message}
                      classNames={{
                        input:
                          "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400  ",
                      }}
                      type={"text"}
                      className="w-full mt-1"
                      placeholder={"Full Name"}
                    />
                    <TextInput
                      {...register(`supervisors.${index}.name_ar`)}
                      error={errors?.supervisors?.[index]?.name_ar?.message}
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
                      {...register(`supervisors.${index}.phone`)}
                      error={errors?.supervisors?.[index]?.phone?.message}
                      classNames={{
                        input:
                          "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400  ",
                      }}
                      type={"text"}
                      className="w-full mt-1"
                      placeholder={"Phone Number"}
                    />
                    <TextInput
                      {...register(`supervisors.${index}.email`)}
                      error={errors?.supervisors?.[index]?.email?.message}
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
                    name={`supervisors.${index}.gender`}
                    value={watch(`supervisors.${index}.gender`)}
                    placeholder={"Gender"}
                    error={errors?.supervisors?.[index]?.gender}
                    onChange={(e) => {
                      setValue(`supervisors.${index}.gender`, e);
                      trigger(`supervisors.${index}.gender`);
                    }}
                    errors={errors?.supervisors?.[index]?.gender}
                    data={[
                      { label: "Male", value: "male" },
                      { label: "Female", value: "female" },
                    ]}
                  />
                </Flex>
                <TextInput
                  {...register(`supervisors.${index}.linkedin`)}
                  error={errors?.supervisors?.[index]?.linkedin?.message}
                  classNames={{
                    input:
                      "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400  ",
                  }}
                  type={"text"}
                  className="w-full mt-1"
                  placeholder={"Linkedin Link"}
                />
                <Textarea
                  {...register(`supervisors.${index}.interests`)}
                  error={errors?.supervisors?.[index]?.interests?.message}
                  classNames={{
                    input:
                      "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400  ",
                  }}
                  type={"text"}
                  className="w-full mt-1"
                  placeholder={"Technical areas of interest"}
                />
              </div>
            );
          })}
        </ScrollArea>
        <Button
          onClick={() => {
            append({
              title: "",
              name_ar: "",
              name_en: "",
              email: "",
              phone: "",
              gender: "",
              linkedin: "",
              interests: "",
            });
          }}
          className="w-full mt-2 transition duration-200 bg-primary hover:scale-90 hover:bg-primary"
        >
          Add Supervisor
        </Button>
        <StepButtons active={active} setActive={setActive} />
      </form>
    </StepBoxWrapper>
  );
}

export default Supervisors;
