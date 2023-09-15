import StepBoxWrapper from "../../../components/StepBoxWrapper";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef } from "react";
import SelectComponent from "../../../components/SelectComponent";
import StepButtons from "../../../components/StepButtons";
import { TextInput } from "@mantine/core";
const schema = yup.object({
  city_id: yup.string().required("please choose city"),
  affiliation_type: yup.string().required("Please Choose one"),
  school_name: yup
    .string()

    .ensure()
    .when("affiliation_type", {
      is: "school",
      then: () =>
        yup
          .string()
          .test(
            "len",
            "Must be at least 10 characters and max 50 characters",
            (val) => val.length > 10 && val.length <= 50
          )
          .required("School name is required"),
      otherwise: () => yup.string().notRequired(),
    }),
  university_id: yup
    .string()
    .ensure()
    .when("affiliation_type", {
      is: "university",
      then: () => yup.string().required("Please choose university"),
      otherwise: () => yup.string().notRequired(),
    }),
  department_id: yup.string(),
  college_id: yup.string(),
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
    setError,
  } = useForm({
    defaultValues: {
      city_id: +savedData.city_id || "",
      affiliation_type: savedData.affiliation_type || "",
      university_id: +savedData.university_id || "",
      department_id: +savedData.department_id || "",
      college_id: +savedData.college_id || "",
      school_name: savedData.school_name || "",
    },
    resolver: yupResolver(schema),
  });

  // fetch data
  const cities = data?.cities.map((city) => {
    return { label: city.name_en, value: city.id };
  });

  const selectedCity = watch("city_id");
  const selectedAfiliation = watch("affiliation_type");
  const selectedCollege = watch("college_id");
  const selectedDepartment = watch("department_id");

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
  const affliationtRef = useRef();

  console.log({ errors });
  const onsubmit = (submittedData) => {
    if (
      colleges?.length > 0 &&
      selectedCollege === "" &&
      selectedAfiliation === "university"
    ) {
      setError("college_id", {
        type: "custom",
        message: "Please choose college",
      });
      return false;
    }
    if (
      departments?.length > 0 &&
      selectedDepartment === "" &&
      selectedAfiliation === "university"
    ) {
      setError("department_id", {
        type: "custom",
        message: "Please choose department",
      });
      return false;
    }
    if (Object.keys(errors).length === 0) setActive(active + 1);
    getData(submittedData);
  };

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
          placeholder={"City of University/school "}
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
          ref={affliationtRef}
          name="affiliation_type"
          placeholder={"Education"}
          value={watch("affiliation_type")}
          onChange={(e) => {
            setValue("affiliation_type", e);
            setValue("university_id", "");
            setValue("school_name", "");
            trigger("affiliation_type");
          }}
          error={errors.affiliation_type}
          data={
            [
              { label: "school", value: "school" },
              { label: "university", value: "university" },
            ] || []
          }
        />
        {selectedAfiliation === "school" && (
          <TextInput
            {...register("school_name")}
            error={errors.school_name?.message}
            classNames={{
              input:
                "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400 mt-1 ",
            }}
            type={"text"}
            className="w-full mt-2"
            placeholder={"School Name"}
          />
        )}
        {selectedAfiliation === "university" && (
          <>
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
            {colleges?.length > 0 && (
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
            )}
            {departments?.length > 0 && (
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
            )}
          </>
        )}

        <StepButtons active={active} setActive={setActive} />
      </form>
    </StepBoxWrapper>
  );
}

export default EducationDetails;
