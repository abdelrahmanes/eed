import { Flex, Text } from "@mantine/core";

function InfoCard({ title, description, multipleInfo, icon }) {
  return (
    <Flex className="flex gap-6">
      <div className="flex items-center justify-center p-4 border rounded-full border-primary w-fit">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="w-6 h-6 text-primary"
        >
          {icon}
        </svg>
      </div>
      <Flex className="items-center gap-10">
        <Flex className="flex-col">
          <Text className="text-lg font-bold">{title}</Text>
          {description && (
            <Text className="text-lg font-semibold">{description}</Text>
          )}
        </Flex>
        {multipleInfo &&
          multipleInfo?.map((info, index) => {
            return (
              <Flex className="flex-col" key={index}>
                <Text className="text-lg font-bold">{info?.title}</Text>
                {info.description && (
                  <Text className="text-lg font-semibold">
                    {info?.description}
                  </Text>
                )}
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
}

export default InfoCard;
