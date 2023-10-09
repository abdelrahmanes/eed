/* eslint-disable react/prop-types */
import { Text } from "@mantine/core";

function SubPageHero({ title }) {
  return (
    <div className="h-[55vh] w-full bg-center bg-cover flex justify-center items-center bg-footer-image">
      <Text className="jus text-2xl font-bold  uppercase "
        c="green">{title}</Text>
    </div>
  );
}

export default SubPageHero;
