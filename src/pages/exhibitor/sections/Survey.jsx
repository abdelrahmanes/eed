import { Flex, ScrollArea, Text, Textarea } from "@mantine/core";
import { useForm } from "react-hook-form";
import StepButtons from "../../../components/StepButtons";

function Survey({ active, setActive, getData, data }) {
  const savedData = JSON.parse(localStorage.getItem("data"));
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
      answers: data
        .filter(
          (x) =>
            !x.competition_id || x.competition_id === +savedData.competition_id
        )
        .map((question, index) => {
          return {
            question_id: question.id,
            answer: savedData?.answers?.[index]?.answer || "",
          };
        }),
    },
  });

  const onsubmit = (submittedData) => {
    if (Object.keys(errors).length === 0) setActive(active + 1);
    getData(submittedData);
  };

  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="flex flex-col gap-4 px-10 py-10 "
    >
      <ScrollArea h={800} className="flex flex-col gap-8">
        {data
          .filter(
            (x) =>
              !x.competition_id ||
              x.competition_id === +savedData.competition_id
          )
          .map((question, index) => {
            return (
              <Flex
                key={question.id}
                className="relative flex-col p-8 my-6 bg-white rounded-lg"
              >
                <Text className="mb-4 font-bold text-neutral-700">
                  {question.title}
                </Text>
                <div
                  className="mb-2 text-xs text-primary"
                  dangerouslySetInnerHTML={{ __html: question.description }}
                />
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
