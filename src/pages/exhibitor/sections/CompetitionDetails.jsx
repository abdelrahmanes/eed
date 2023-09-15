/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import { Flex, Title } from "@mantine/core";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import SelectComponent from "../../../components/SelectComponent";
import StepButtons from "../../../components/StepButtons";
import StepBoxWrapper from "../../../components/StepBoxWrapper";
const schema = yup.object({
  category_id: yup.string().required("please choose category"),
  competition_id: yup.string().required("please choose competition"),
});

function CompetitionDetails({ setActive, active, data, getData }) {
  const savedData = JSON.parse(localStorage.getItem("data"));
  console.log(savedData);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm({
    defaultValues: {
      category_id: +savedData.category_id || "",
      competition_id: +savedData.competition_id || "",
    },
    resolver: yupResolver(schema),
  });
  const onsubmit = (submittedData) => {
    if (Object.keys(errors).length === 0) setActive(active + 1);
    getData(submittedData);
  };

  // fetch data
  const competitions = data?.map((competition) => {
    return { label: competition.name, value: competition.id };
  });

  const selectedCompetition = watch("competition_id");

  const categories = data
    ?.find((target) => {
      return target.id === selectedCompetition;
    })
    ?.categories.map((category) => {
      return { label: category.name, value: category.id };
    });

  const competitionRef = useRef();
  const categoryRef = useRef();

  return (
    <StepBoxWrapper title={"Competition Details"}>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col gap-3 mt-10"
      >
        <SelectComponent
          register={register}
          ref={competitionRef}
          name="competition_id"
          placeholder={"Competition Name"}
          value={watch("competition_id")}
          onChange={(e) => {
            setValue("competition_id", e);
            setValue("category_id", "");
            trigger("competition_id");
          }}
          error={errors.competition_id}
          data={competitions || []}
        />
        <SelectComponent
          register={register}
          ref={categoryRef}
          name="category_id"
          value={watch("category_id")}
          placeholder={"Category"}
          error={errors.category_id}
          onChange={(e) => {
            setValue("category_id", e);
            trigger("category_id");
          }}
          errors={errors.category_id}
          data={categories || []}
        />

        <StepButtons active={active} setActive={setActive} />
      </form>
    </StepBoxWrapper>
  );
}

export default CompetitionDetails;
