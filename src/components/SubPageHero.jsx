/* eslint-disable react/prop-types */
import { Text } from "@mantine/core";

function SubPageHero({ title }) {
  return (
    <div className="w-full bg-footer-texture h-[45vh] bg-center flex justify-center items-center">
      <Text className="mt-24 text-4xl font-bold text-center text-yellow">
        {title}
      </Text>
    </div>
  );
}

export default SubPageHero;
