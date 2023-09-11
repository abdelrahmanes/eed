/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Select } from "@mantine/core";

function SelectComponent({
  label,
  placeholder,
  data,
  name,
  register,
  rules,
  errors,
  className,
  ...props
}) {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);
  console.log({ ...register(name, rules) });
  return (
    <>
      {" "}
      <Select
        {...props}
        {...(register && register(name, rules))}
        label={label}
        placeholder={placeholder}
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
        data={data}
        classNames={{
          input: "text-primary focus:border-primary",
          item: "data-[selected=true]:bg-primaryHover data-[selected=true]:hover:bg-primary",
        }}
      />
      {/* {hasError && <p>{errorMessages}</p>} */}
    </>
  );
}

export default SelectComponent;
