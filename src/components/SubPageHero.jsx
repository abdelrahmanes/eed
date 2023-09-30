/* eslint-disable react/prop-types */
import { Text } from "@mantine/core";

function SubPageHero({ title }) {
  return (
    <div className="h-[55vh] w-full bg-center bg-cover flex justify-center items-center bg-texture">

    {/* <div className="w-full bg-cover bg-no-repeat bg-texture h-[80vh] bg-center flex justify-center items-center"> */}
      <Text className="jus text-4xl font-bold  uppercase font-outline-2 "
        c="green">{title}</Text>
    </div>
  );
}

export default SubPageHero;
