import StepBoxWrapper from "../../../components/StepBoxWrapper";
/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  FileButton,
  Flex,
  ScrollArea,
  Switch,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useRef } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import * as yup from "yup";
import SelectComponent from "../../../components/SelectComponent";
import StepButtons from "../../../components/StepButtons";

const schema = yup.object({
  members: yup.array().of(
    yup.object().shape({
      name_ar: yup
        .string()
        .required("Name in arabic is required")
        .matches(/^[\u0600-\u06FF\s]+$/, "Only arabic letters are allowed"),
      name_en: yup
        .string()
        .required("Name in english is required")
        .matches(/^[A-Za-z]+$/, "Only english letters are allowed"),
      phone: yup
        .string()
        .required("Phone is required")
        .matches(/^01[0125][0-9]{8}$/, "Invalid phone number"),
      email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
      gender: yup.string().required("Please choose the gender"),
      national_id: yup
        .string()
        .required("National ID is required")
        .matches(
          /^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/,
          "Invalid national ID"
        ),
      cv_link: yup
        .string()
        .required("Please enter your linkedin account link")
        .matches(
          /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/,
          "invalid linkedin link"
        ), // linkedin regex
      interests: yup.string().nullable(),
      is_contact: yup.boolean(),
      city_id: yup.number().nullable(),
      school_name: yup.string().nullable(),
      id_front: yup
        .string()
        .required("Please upload your national ID front face"),
      id_back: yup
        .string()
        .required("Please upload your national ID back face"),
      // university_id: yup.number().nullable(),
    })
  ),
});
function ProjectMembers({ setActive, active, getData, data }) {
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
      members: savedData.members
        ? savedData.members.map(
            ({
              name_en,
              name_ar,
              phone,
              email,
              gender,
              national_id,
              cv_link,
              is_contact,
              affiliation_type,
              city_id,
              school_name,
              university_id,
              id_front,
              id_back,
              interests,
            }) => {
              return {
                name_en,
                name_ar,
                phone,
                email,
                gender,
                national_id,
                cv_link,
                is_contact,
                affiliation_type,
                city_id,
                school_name,
                university_id,
                id_front,
                id_back,
                interests,
              };
            }
          )
        : [
            {
              name_en: "",
              name_ar: "",
              phone: "",
              email: "",
              gender: "",
              national_id: null,
              cv_link: null,
              is_contact: false,
              affiliation_type: "university",
              city_id: null,
              school_name: "",
              university_id: null,
              id_front: "",
              id_back: "",
              interests: "",
            },
          ],
    },
    resolver: yupResolver(schema),
  });
  const { fields, append, remove } = useFieldArray({
    name: "members",
    control,
  });

  const cities = data?.cities.map((city) => {
    return { label: city.name_en, value: city.id };
  });

  const onsubmit = (submittedData) => {
    if (submittedData.members.length < 2) {
      toast.error("You must add two members at least", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    }
    if (Object.keys(errors).length === 0) setActive(active + 1);
    console.log({ submittedData });
    getData(submittedData);
  };

  const genderRef = useRef();
  const affliationtRef = useRef();
  const cityRef = useRef();
  const universityRef = useRef();
  const resetFrontRef = useRef();
  const resetBackRef = useRef();

  const clearFile = (idFace, index) => {
    if (idFace === "front") {
      resetField(`members.${index}.id_front`);
      trigger(`members.${index}.id_front`);
      resetFrontRef?.current?.();
    } else {
      resetField(`members.${index}.id_back`);
      trigger(`members.${index}.id_back`);
      resetBackRef?.current?.();
    }
  };

  const uploadImage = async (e, idFace, index) => {
    const base64 = await blobToBase64(e);
    if (idFace === "front") {
      setValue(`members.${index}.id_front`, base64);
      trigger(`members.${index}.id_front`);
    } else {
      setValue(`members.${index}.id_back`, base64);
      trigger(`members.${index}.id_back`);
    }
  };
  const blobToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <StepBoxWrapper title={"Project Members"} className={"!w-3/4"}>
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
                    Member {index + 1}
                  </Text>
                  <Button
                    onClick={() => {
                      remove(index);
                    }}
                    className="bg-red-700 w-fit hover:bg-red-500"
                  >
                    Remove Member
                  </Button>
                </Flex>
                <Flex className="flex-col w-full gap-2">
                  {" "}
                  <Flex className="items-center w-full gap-4">
                    <TextInput
                      {...register(`members.${index}.name_en`)}
                      error={errors?.members?.[index]?.name_en?.message}
                      classNames={{
                        input:
                          "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400  ",
                      }}
                      type={"text"}
                      className="w-full mt-1"
                      placeholder={"Full Name"}
                    />
                    <TextInput
                      {...register(`members.${index}.name_ar`)}
                      error={errors?.members?.[index]?.name_ar?.message}
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
                      {...register(`members.${index}.phone`)}
                      error={errors?.members?.[index]?.phone?.message}
                      classNames={{
                        input:
                          "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400  ",
                      }}
                      type={"text"}
                      className="w-full mt-1"
                      placeholder={"Phone Number"}
                    />
                    <TextInput
                      {...register(`members.${index}.email`)}
                      error={errors?.members?.[index]?.email?.message}
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
                    name={`members.${index}.gender`}
                    value={watch(`members.${index}.gender`)}
                    placeholder={"Gender"}
                    error={errors?.members?.[index]?.gender}
                    onChange={(e) => {
                      setValue(`members.${index}.gender`, e);
                      trigger(`members.${index}.gender`);
                    }}
                    errors={errors?.members?.[index]?.gender}
                    data={[
                      { label: "Male", value: "male" },
                      { label: "Female", value: "female" },
                    ]}
                  />
                  <TextInput
                    {...register(`members.${index}.national_id`)}
                    error={errors?.members?.[index]?.national_id?.message}
                    classNames={{
                      input:
                        "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400  ",
                    }}
                    type={"number"}
                    className="w-full mt-1"
                    placeholder={"National ID"}
                  />
                  <TextInput
                    {...register(`members.${index}.cv_link`)}
                    error={errors?.members?.[index]?.cv_link?.message}
                    classNames={{
                      input:
                        "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400  ",
                    }}
                    type={"text"}
                    className="w-full mt-1"
                    placeholder={"Linkedin Link"}
                  />
                  <Textarea
                    {...register(`members.${index}.interests`)}
                    error={errors?.members?.[index]?.interests?.message}
                    classNames={{
                      input:
                        "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400  ",
                    }}
                    type={"text"}
                    className="w-full mt-1"
                    placeholder={"Technical areas of interest"}
                  />
                  <Switch
                    {...register(`members.${index}.is_contact`)}
                    checked={watch(`members.${index}.is_contact`)}
                    label="Contact Person?"
                  />
                </Flex>
                <Flex className="flex-col w-full gap-2">
                  <Text className="font-semibold">Educational Details</Text>
                  <Flex className="flex-col w-full gap-2">
                    <SelectComponent
                      register={register}
                      ref={affliationtRef}
                      name={`members.${index}.affiliation_type`}
                      placeholder={"Education"}
                      value={watch(`members.${index}.affiliation_type`)}
                      onChange={(e) => {
                        setValue(`members.${index}.affiliation_type`, e);
                        setValue(`members.${index}.university_id`, "");
                        setValue(`members.${index}.school_name`, "");
                        trigger(`members.${index}.affiliation_type`);
                      }}
                      error={errors?.members?.[index]?.affiliation_type}
                      data={[
                        { label: "school", value: "school" },
                        { label: "university", value: "university" },
                      ]}
                    />
                    <Flex className="items-center w-full gap-4">
                      <SelectComponent
                        register={register}
                        ref={cityRef}
                        name={`members.${index}.city_id`}
                        placeholder={"City of University/school "}
                        value={watch(`members.${index}.city_id`)}
                        onChange={(e) => {
                          setValue(`members.${index}.city_id`, e);
                          setValue(`members.${index}.university_id`, "");
                          trigger(`members.${index}.city_id`);
                        }}
                        error={errors?.members?.[index]?.city_id}
                        data={cities || []}
                      />
                      {watch(`members.${index}.affiliation_type`) ===
                        "school" && (
                        <TextInput
                          {...register(`members.${index}.school_name`)}
                          error={errors.members?.[index]?.school_name?.message}
                          classNames={{
                            input:
                              "px-4 py-[22px] rtl:text-right   bg-white rounded-sm placeholder:text-neutral-400 mt-1",
                          }}
                          type={"text"}
                          className="w-full mb-1"
                          placeholder={"School Name"}
                        />
                      )}
                      {watch(`members.${index}.affiliation_type`) ===
                        "university" &&
                        watch(`members.${index}.city_id`) && (
                          <SelectComponent
                            register={register}
                            ref={universityRef}
                            name={`members.${index}.university_id`}
                            placeholder={"University"}
                            value={watch(`members.${index}.university_id`)}
                            onChange={(e) => {
                              setValue(`members.${index}.university_id`, e);
                              trigger(`members.${index}.university_id`);
                            }}
                            error={errors?.members?.[index]?.university_id}
                            data={data.cities
                              ?.find((target) => {
                                return (
                                  target.id ===
                                  watch(`members.${index}.city_id`)
                                );
                              })
                              ?.universities.map((university) => {
                                return {
                                  label: university.name_en,
                                  value: university.id,
                                };
                              })}
                          />
                        )}
                    </Flex>
                  </Flex>
                </Flex>
                <Flex className="flex-col w-full gap-4">
                  <Text className="font-semibold">Upload National ID</Text>
                  <Flex className="items-center">
                    <Flex className="flex-col flex-1 gap-2">
                      <Text className="font-semibold">Front Face</Text>

                      <Flex className="relative w-full gap-2 mb-6">
                        <FileButton
                          {...register(`members.${index}.id_front`)}
                          resetRef={resetFrontRef}
                          onChange={(e) => {
                            uploadImage(e, "front", index);
                          }}
                          accept="image/png,image/jpeg"
                        >
                          {(props) => (
                            <Button
                              {...props}
                              className="bg-primary hover:bg-primaryHover"
                            >
                              Upload image
                            </Button>
                          )}
                        </FileButton>
                        {(watch(`members.${index}.id_front`) ||
                          watch(`members.${index}.id_front`) !== "") && (
                          <Button
                            className="bg-red-700 w-fit hover:bg-red-500"
                            onClick={() => {
                              clearFile("front", index);
                            }}
                          >
                            Reset
                          </Button>
                        )}
                        {errors?.members?.[index]?.id_front && (
                          <Text className="absolute text-xs text-red-500 -bottom-4">
                            {errors?.members?.[index].id_front.message}
                          </Text>
                        )}
                      </Flex>
                      <div className="h-[100px]">
                        {(watch(`members.${index}.id_front`) ||
                          watch(`members.${index}.id_front`) !== "") && (
                          <img
                            src={watch(`members.${index}.id_front`)}
                            className="w-[50%]"
                          />
                        )}
                      </div>
                    </Flex>
                    <Flex className="flex-col flex-1 w-full gap-2">
                      <Text className="font-semibold">Back Face</Text>

                      <Flex className="relative w-full gap-2 mb-6">
                        <FileButton
                          {...register(`members.${index}.id_back`)}
                          resetRef={resetBackRef}
                          onChange={(e) => {
                            uploadImage(e, "back", index);
                          }}
                          accept="image/png,image/jpeg"
                        >
                          {(props) => (
                            <Button
                              {...props}
                              className="bg-primary hover:bg-primaryHover"
                            >
                              Upload image
                            </Button>
                          )}
                        </FileButton>
                        {(watch(`members.${index}.id_back`) ||
                          watch(`members.${index}.id_back`) !== "") && (
                          <Button
                            className="bg-red-700 w-fit hover:bg-red-500"
                            onClick={() => {
                              clearFile("back", index);
                            }}
                          >
                            Reset
                          </Button>
                        )}
                        {errors?.members?.[index]?.id_back && (
                          <Text className="absolute text-xs text-red-500 -bottom-4">
                            {errors?.members?.[index].id_back.message}
                          </Text>
                        )}
                      </Flex>
                      <div className="h-[100px]">
                        {(watch(`members.${index}.id_back`) ||
                          watch(`members.${index}.id_back`) !== "") && (
                          <img
                            src={watch(`members.${index}.id_back`)}
                            className="w-[50%]"
                          />
                        )}
                      </div>
                    </Flex>
                  </Flex>
                </Flex>
              </div>
            );
          })}
        </ScrollArea>
        <Button
          onClick={() => {
            append({
              name_en: "",
              name_ar: "",
              phone: "",
              email: "",
              gender: "",
              national_id: null,
              cv_link: null,
              is_contact: false,
              affiliation_type: "university",
              city_id: null,
              school_name: "",
              university_id: null,
              id_front: "",
              id_back: "",
              interests: "",
            });
          }}
          className="w-full mt-2 transition duration-200 bg-primary hover:scale-90 hover:bg-primary"
        >
          Add Member
        </Button>
        <StepButtons active={active} setActive={setActive} />
      </form>

      <ToastContainer />
    </StepBoxWrapper>
  );
}

export default ProjectMembers;
