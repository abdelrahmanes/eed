import { Flex, Select, Title } from "@mantine/core";
import { useForm } from "react-hook-form";

function CompetitionDetails({ setActive, active }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: { frameWork: "" },
  });
  onsubmit = (data) => {
    if (!errors) setActive(active + 1);
    console.log(data);
  };
  return (
    <Flex className="flex-col gap-6 p-10 mx-4 my-12 bg-white rounded-md lg:mx-auto lg:w-1/2">
      <Title className="text-base">Competition Details</Title>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col gap-3 mt-10"
      >
        <Select
          {...register("frameWork", { required: "true" })}
          onChange={(e) => {
            setValue("frameWork", e);
          }}
          label={"Your favorite framework/library"}
          placeholder={"pick one"}
          rightSection={
            <svg
              viewBox="0 0 24 24"
              fill="white"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          }
          data={[
            { value: "React", label: "React" },
            { value: "Angular", label: "Angular" },
            { value: "Svelte", label: "Svelte" },
            { value: "Vue", label: "Vue" },
          ]}
          classNames={{
            input: "text-primary focus:border-primary",
            item: "data-[selected=true]:bg-primaryHover data-[selected=true]:hover:bg-primary",
          }}
        />
        <Select
          {...register("frameWork")}
          onChange={(e) => {
            setValue("frameWork", e);
          }}
          label={"Your favorite framework/library"}
          placeholder={"pick one"}
          rightSection={
            <svg
              viewBox="0 0 24 24"
              fill="white"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          }
          data={[
            { value: "React", label: "React" },
            { value: "Angular", label: "Angular" },
            { value: "Svelte", label: "Svelte" },
            { value: "Vue", label: "Vue" },
          ]}
          classNames={{
            input: "text-primary focus:border-primary",
            item: "data-[selected=true]:bg-primaryHover data-[selected=true]:hover:bg-primary",
          }}
        />

        <Flex className="justify-between w-full mt-6">
          {" "}
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-800 rounded-md w-fit"
          >
            Previous
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white rounded-md bg-primary w-fit"
          >
            Next
          </button>
        </Flex>
      </form>
    </Flex>
  );
}

export default CompetitionDetails;
