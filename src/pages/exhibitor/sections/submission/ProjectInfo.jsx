/* eslint-disable react/prop-types */
import { Flex, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import InfoCard from "../../../../components/InfoCard";

function ProjectInfo({ data }) {
  const [savedData, setSavedData] = useState({});

  useEffect(() => {
    setSavedData(JSON.parse(localStorage.getItem("data")));
  }, []);

  const cityName = data?.cities?.find(
    (object) => object.id === +savedData.city_id
  )?.name_en;

  const universityName = data?.cities
    ?.find((object) => object.id === +savedData.city_id)
    ?.universities.find((uni) => uni.id === +savedData.university_id)?.name_en;

  const collegeName = data?.colleges?.find(
    (object) => object.id === +savedData.college_id
  )?.name_en;

  const departmentName = data?.colleges
    ?.find((object) => object.id === +savedData.college_id)
    ?.departments?.find((dep) => dep.id === +savedData.department_id)?.name;

  const competitionName = data?.competitions?.find(
    (object) => object.id === +savedData.competition_id
  )?.name;

  const categoryName = data?.competitions
    ?.find((object) => object.id === +savedData.competition_id)
    ?.categories.find((cat) => cat.id === +savedData.category_id)?.name;

  return (
    <Flex className="flex-col gap-6 p-10 bg-white rounded-lg shadow-lg">
      <Text className="pb-4 text-2xl font-semibold border-b border-primary text-primary">
        Project information
      </Text>
      <Flex className="flex-col gap-8">
        <InfoCard
          title="Project Name"
          description={savedData.name}
          icon={
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m30 7l-5-5L5 22l-2 7l7-2Zm-9-1l5 5ZM5 22l5 5Z"
            />
          }
        />
        <InfoCard
          title="City"
          description={cityName}
          icon={
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <circle cx="16" cy="11" r="4" />
              <path d="M24 15c-3 7-8 15-8 15s-5-8-8-15s2-13 8-13s11 6 8 13Z" />
            </g>
          }
        />
        <InfoCard
          title="Width"
          description={`${+savedData.spec_width} m`}
          icon={
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M28 6H4m24 10H4m24 10H4M24 3v6M8 13v6m12 4v6"
            />
          }
          multipleInfo={[
            { title: "Length", description: `${+savedData.spec_length} m` },
          ]}
        />
        <InfoCard
          title="Competition Name"
          description={competitionName}
          icon={
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m30 7l-5-5L5 22l-2 7l7-2Zm-9-1l5 5ZM5 22l5 5Z"
            />
          }
        />
        {categoryName && (
          <InfoCard
            title="Category Name"
            description={categoryName}
            icon={
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h24M4 16h24M4 24h24"
              />
            }
          />
        )}
        {savedData.university_id && (
          <>
            <InfoCard
              title="University"
              description={universityName}
              icon={
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 20v10H4V12L16 2l12 10v18h-8V20Z"
                />
              }
            />
            <InfoCard
              title="College"
              description={collegeName}
              icon={
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 20v10H4V12L16 2l12 10v18h-8V20Z"
                />
              }
            />
            <InfoCard
              title="Department"
              description={departmentName}
              icon={
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 20v10H4V12L16 2l12 10v18h-8V20Z"
                />
              }
            />
          </>
        )}
      </Flex>
    </Flex>
  );
}

export default ProjectInfo;
