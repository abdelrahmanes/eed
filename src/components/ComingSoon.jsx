import { Flex, Text } from "@mantine/core";
import comingSoon from "../assets/images/coming-soon.png";

function ComingSoon() {
  return (
    <Flex className="flex-col items-center justify-center gap-6 mb-20">
      <img src={comingSoon} alt="coming soon" className="w-[500px] h-[500px" />
      <Flex className="flex-col items-center justify-center gap-8">
        <Text className="font-sans font-bold text-8xl text-primary">
          Stay Tuned...
        </Text>
        <Text className="text-lg font-semibold">
          This Page is still under construction, and it will be launched soon
        </Text>
      </Flex>
    </Flex>
  );
}

export default ComingSoon;
