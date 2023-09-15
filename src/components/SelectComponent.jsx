/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Select } from "@mantine/core";
import { forwardRef, useEffect } from "react";

const SelectComponent = forwardRef(
  (
    {
      label,
      placeholder,
      data,
      name,
      value,
      register,
      rules,
      error,
      className,
      ...props
    },
    ref
  ) => {
    const errorMessages = error?.message;
    const hasError = !!(error && errorMessages);

    useEffect(() => {
      if (hasError) {
        ref?.current?.focus();
      }
    }, [hasError, ref]);
    return (
      <>
        {" "}
        <Select
          {...props}
          error={hasError}
          ref={ref}
          label={label}
          value={value}
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
            input: `text-primary focus:border-primary ${
              hasError && "focus:border-red-500"
            }`,
            item: "data-[selected=true]:bg-primaryHover data-[selected=true]:hover:bg-primary",
          }}
        />
        {hasError && (
          <p className="h-2 -mt-2 text-xs text-red-500">{errorMessages}</p>
        )}
      </>
    );
  }
);

export default SelectComponent;
