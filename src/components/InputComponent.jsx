/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { Flex, TextInput } from "@mantine/core";
import { forwardRef, useEffect } from "react";

const InputComponent = forwardRef(
  ({ type, placeholder, label, register, error, ...props }, ref) => {
    const errorMessages = error?.message;
    const hasError = !!(error && errorMessages);
    console.log({ error });
    useEffect(() => {
      if (hasError) {
        ref?.current?.focus();
      }
    }, [hasError, ref]);
    return (
      <Flex className="flex-col mb-[17px] relative">
        <TextInput
          error={hasError}
          classNames={{
            input:
              "px-4 py-[22px] rtl:text-right  bg-white rounded-sm placeholder:text-neutral-400 mt-1 ",
          }}
          type={type}
          className="w-full mt-2"
          placeholder={placeholder}
          label={label}
        />
        <p className="absolute z-50 w-full h-2 text-red-500 -bottom-3">
          {errorMessages && errorMessages}
        </p>
      </Flex>
    );
  }
);

export default InputComponent;
