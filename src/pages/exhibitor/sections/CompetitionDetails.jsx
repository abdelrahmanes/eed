/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import SelectComponent from "../../../components/SelectComponent";
import StepButtons from "../../../components/StepButtons";
import StepBoxWrapper from "../../../components/StepBoxWrapper";
const schema = yup.object({
  category_id: yup.string(),
  sub_category_id: yup.string(),
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
    setError,
  } = useForm({
    defaultValues: {
      category_id: +savedData.category_id || "",
      competition_id: +savedData.competition_id || "",
      sub_category_id: +savedData.sub_category_id || "",
    },
    resolver: yupResolver(schema),
  });

  const selectedCompetition = watch("competition_id");
  const selectedCategory = watch("category_id");
  const selectedSubCategory = watch("sub_category_id");

  // fetch data
  const competitions = data?.map((competition) => {
    return { label: competition.name, value: competition.id };
  });

  const categories = data
    ?.find((target) => {
      return target.id === selectedCompetition;
    })
    ?.categories.map((category) => {
      return { label: category.name, value: category.id };
    });
  const subCategories = data
    ?.find((target) => {
      return target.id === selectedCompetition;
    })
    ?.categories.find((category) => category.id === selectedCategory)
    ?.sub_categories.map((subCategory) => {
      return { label: subCategory.name, value: subCategory.id };
    });

  const competitionRef = useRef();
  const categoryRef = useRef();
  const subCategoryRef = useRef();

  const onsubmit = (submittedData) => {
    if (categories?.length > 0 && selectedCategory === "") {
      setError("category_id", {
        type: "custom",
        message: "Please choose category",
      });
      return false;
    }
    if (subCategories?.length > 0 && selectedSubCategory === "") {
      setError("sub_category_id", {
        type: "custom",
        message: "Please choose sub category",
      });
      return false;
    }
    if (Object.keys(errors).length === 0) setActive(active + 1);
    getData(submittedData);
  };

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
        {categories?.length > 0 && (
          <SelectComponent
            register={register}
            ref={categoryRef}
            name="category_id"
            value={watch("category_id")}
            placeholder={"Category"}
            error={errors.category_id}
            onChange={(e) => {
              setValue("category_id", e);
              setValue("sub_category_id", "");
              trigger("category_id");
            }}
            errors={errors.category_id}
            data={categories || []}
          />
        )}
        {subCategories?.length > 0 && (
          <SelectComponent
            register={register}
            ref={subCategoryRef}
            name="sub_category_id"
            value={watch("sub_category_id")}
            placeholder={"Sub Category"}
            error={errors.sub_category_id}
            onChange={(e) => {
              setValue("sub_category_id", e);
              trigger("sub_category_id");
            }}
            errors={errors.sub_category_id}
            data={subCategories || []}
          />
        )}

        <StepButtons active={active} setActive={setActive} />
      </form>
    </StepBoxWrapper>
  );
}

export default CompetitionDetails;
