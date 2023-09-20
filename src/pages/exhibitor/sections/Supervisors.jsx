import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Flex, ScrollArea, Text } from "@mantine/core";
import { useRef } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";
import StepBoxWrapper from "../../../components/StepBoxWrapper";
import StepButtons from "../../../components/StepButtons";

const schema = yup.object({
  members: yup.array().of(yup.object().shape({})),
});
function Supervisors({ setActive, active, getData, data }) {
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
    setError,
    resetField,
  } = useForm({
    defaultValues: {
      supervisors: savedData.supervisors
        ? savedData.supervisors.map(({}) => {
            return {};
          })
        : [{}],
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
              </div>
            );
          })}
        </ScrollArea>
        <Button
          onClick={() => {
            append({});
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
