/* eslint-disable react/prop-types */
import { Flex, Title } from "@mantine/core";
import { FormProvider } from "react-hook-form";

function StepBoxWrapper({ title, children }) {
  return (
    <Flex className="flex-col gap-6 p-10 mx-4 lg:my-12 mt-8 bg-white rounded-md lg:mx-auto lg:w-1/2">
      <Title className="text-base">{title}</Title>
      <FormProvider>{children}</FormProvider>
    </Flex>
  );
}

export default StepBoxWrapper;
