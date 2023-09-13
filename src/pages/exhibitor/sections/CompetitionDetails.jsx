/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import { Flex, Title } from "@mantine/core";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import SelectComponent from "../../../components/SelectComponent";
import StepButtons from "../../../components/StepButtons";
const schema = yup.object({
  category: yup.string().required("please choose category"),
  competition: yup.string().required("please choose competition"),
});

function CompetitionDetails({ setActive, active, data, getData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm({
    defaultValues: { category: "", competition: null },
    resolver: yupResolver(schema),
  });
  onsubmit = (submittedData) => {
    if (Object.keys(errors).length === 0) setActive(active + 1);
    getData(submittedData);
  };

  // fetch data
  const competitions = data?.map((competition) => {
    return { label: competition.name, value: competition.name };
  });

  const selectedCompetition = watch("competition");

  const categories = data
    ?.find((target) => {
      return target.name === selectedCompetition;
    })
    ?.categories.map((category) => {
      return { label: category.name, value: category.name };
    });

  const competitionRef = useRef();
  const categoryRef = useRef();

  return (
    <Flex className="flex-col gap-6 p-10 mx-4 my-12 bg-white rounded-md lg:mx-auto lg:w-1/2">
      <Title className="text-base">Competition Details</Title>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col gap-3 mt-10"
      >
        <SelectComponent
          register={register}
          ref={competitionRef}
          name="competition"
          placeholder={"Competition Name"}
          value={watch("competition")}
          onChange={(e) => {
            setValue("competition", e);
            setValue("category", "");
            trigger("competition");
          }}
          error={errors.competition}
          data={competitions || []}
        />
        <SelectComponent
          register={register}
          ref={categoryRef}
          name="category"
          value={watch("category")}
          placeholder={"Category"}
          error={errors.category}
          onChange={(e) => {
            setValue("category", e);
            trigger("category");
          }}
          errors={errors}
          data={categories || []}
        />

        <StepButtons active={active} setActive={setActive} />
      </form>
    </Flex>
  );
}

export default CompetitionDetails;
