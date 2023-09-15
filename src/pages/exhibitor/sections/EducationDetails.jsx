import StepBoxWrapper from "../../../components/StepBoxWrapper";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef } from "react";
import SelectComponent from "../../../components/SelectComponent";
import StepButtons from "../../../components/StepButtons";
const schema = yup.object({
  city_id: yup.string().required("please choose city"),
  university_id: yup.string().required("please choose university"),
  department_id: yup.string().required("please choose department"),
  college_id: yup.string().required("please choose college"),
});
function EducationDetails({ data, active, setActive, getData }) {
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
      city_id: +savedData.city_id || "",
      university_id: +savedData.university_id || "",
      department_id: +savedData.department_id || "",
      college_id: +savedData.college_id || "",
    },
    resolver: yupResolver(schema),
  });

  const onsubmit = (submittedData) => {
    if (Object.keys(errors).length === 0) setActive(active + 1);
    getData(submittedData);
  };

  // fetch data
  const cities = data?.cities.map((city) => {
    return { label: city.name_en, value: city.id };
  });

  const selectedCity = watch("city_id");

  const universities = data.cities
    ?.find((target) => {
      return target.id === selectedCity;
    })
    ?.universities.map((university) => {
      return { label: university.name_en, value: university.id };
    });

  const colleges = data?.colleges.map((college) => {
    return { label: college.name_en, value: college.id };
  });

  const selectedCollege = watch("college_id");

  const departments = data.colleges
    ?.find((target) => {
      return target.id === selectedCollege;
    })
    ?.departments.map((department) => {
      return { label: department.name, value: department.id };
    });

  const cityRef = useRef();
  const universityRef = useRef();
  const collegeRef = useRef();
  const departmentRef = useRef();
  return (
    <StepBoxWrapper title={"Education Details"}>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col gap-3 mt-10"
      >
        <SelectComponent
          register={register}
          ref={cityRef}
          name="city_id"
          placeholder={"City of University "}
          value={watch("city_id")}
          onChange={(e) => {
            setValue("city_id", e);
            setValue("university_id", "");
            trigger("city_id");
          }}
          error={errors.city_id}
          data={cities || []}
        />
        <SelectComponent
          register={register}
          ref={universityRef}
          name="university_id"
          value={watch("university_id")}
          placeholder={"University"}
          error={errors.university_id}
          onChange={(e) => {
            setValue("university_id", e);
            trigger("university_id");
          }}
          errors={errors.university_id}
          data={universities || []}
        />
        <SelectComponent
          register={register}
          ref={collegeRef}
          name="college_id"
          placeholder={"College"}
          value={watch("college_id")}
          onChange={(e) => {
            setValue("college_id", e);
            setValue("department_id", "");
            trigger("college_id");
          }}
          error={errors.college_id}
          data={colleges || []}
        />
        <SelectComponent
          register={register}
          ref={departmentRef}
          name="department_id"
          value={watch("department_id")}
          placeholder={"Department"}
          error={errors.department_id}
          onChange={(e) => {
            setValue("department_id", e);
            trigger("department_id");
          }}
          errors={errors.department_id}
          data={departments || []}
        />

        <StepButtons active={active} setActive={setActive} />
      </form>
    </StepBoxWrapper>
  );
}

export default EducationDetails;
