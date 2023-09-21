import { Flex, ScrollArea, Text, Textarea } from "@mantine/core";
import { useFieldArray, useForm } from "react-hook-form";
import StepButtons from "../../../components/StepButtons";

function Survey({ active, setActive, getData, data }) {
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
    getValues,
    resetField,
  } = useForm({
    defaultValues: {
      answers: data.map((question) => {
        return { question_id: question.id, answer: "" };
      }),
    },
  });
  console.log({ errors });
  const { remove, append, fields } = useFieldArray({
    name: "answers",
    control,
  });
  const onsubmit = (submittedData) => {
    if (Object.keys(errors).length === 0) setActive(active + 1);
    console.log({ submittedData });
    getData(submittedData);
  };
  console.log({ fields });
  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="flex flex-col gap-4 px-10 py-10 "
    >
      <ScrollArea h={800} className="flex flex-col gap-8">
        {data.map((question, index) => {
          return (
            <Flex
              key={question.id}
              className="relative flex-col p-8 my-6 bg-white rounded-lg"
            >
              <Text className="mb-4 font-bold text-neutral-700">
                {question.title}
              </Text>
              <Textarea
                {...register(`answers.${index}.answer`, {
                  required: "Your Answer is required",
                  maxLength: {
                    value: question.answer_max,
                    message: `Your answer must be less than ${question.answer_max} charachters`,
                  },
                })}
                error={errors?.answers?.[index]?.answer.message}
                classNames={{
                  input:
                    "px-4 py-[22px] h-[150px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400  ",
                }}
                type={"text"}
                className="relative w-full mt-1"
                placeholder={"Write a descriptive answer"}
              />
              <Text
                className={`ml-auto mt-1 text-xs w/fit ${
                  errors?.answers?.[index]?.answer.message &&
                  "text-red-500 !-mt-4"
                }`}
              >
                {watch(`answers.${index}.answer`)?.length} /{" "}
                {question.answer_max}
              </Text>
            </Flex>
          );
        })}
      </ScrollArea>
      <StepButtons active={active} setActive={setActive} />
    </form>
  );
}

export default Survey;
