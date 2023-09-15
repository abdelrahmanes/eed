import { Flex } from "@mantine/core";

function Spinner() {
  return (
    <Flex className="w-full h-[60vh] justify-center items-center">
      <div className="relative w-28 h-28 bg-transparent border-8 border-gray-300 border-t-primary rounded-full animate-spin  "></div>
    </Flex>
  );
}

export default Spinner;
