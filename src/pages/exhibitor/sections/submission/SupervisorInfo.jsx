/* eslint-disable react/prop-types */
import { Flex, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import InfoCard from "../../../../components/InfoCard";

function SupervisorInfo() {
  const [savedData, setSavedData] = useState({});
  useEffect(() => {
    setSavedData(JSON.parse(localStorage.getItem("data")));
  }, []);
  return (
    <Flex className="flex-col gap-6 p-10 bg-white rounded-lg shadow-lg">
      <Text className="pb-4 text-2xl font-semibold border-b border-primary text-primary">
        Supervisor information
      </Text>
      <Flex className={`flex-col gap-8 pb-10`}>
        <InfoCard
          title={savedData?.supervisor?.name_en}
          icon={
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M22 11c0 5-3 9-6 9s-6-4-6-9s2-8 6-8s6 3 6 8ZM4 30h24c0-9-6-10-12-10S4 21 4 30Z"
            />
          }
        />
        <InfoCard
          title={savedData?.supervisor?.name_ar}
          icon={
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M22 11c0 5-3 9-6 9s-6-4-6-9s2-8 6-8s6 3 6 8ZM4 30h24c0-9-6-10-12-10S4 21 4 30Z"
            />
          }
        />
        <InfoCard
          title={savedData?.supervisor?.email}
          icon={
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2 26h28V6H2ZM2 6l14 10L30 6"
            />
          }
        />
        <InfoCard
          title={savedData?.supervisor?.phone}
          icon={
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 2H11c-1 0-2 1-2 2v24c0 1 1 2 2 2h10c1 0 2-1 2-2V4c0-1-1-2-2-2ZM9 5h14M9 27h14"
            />
          }
        />
      </Flex>
    </Flex>
  );
}

export default SupervisorInfo;
