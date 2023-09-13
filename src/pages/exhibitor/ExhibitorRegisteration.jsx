import { Stepper } from "@mantine/core";
import { useEffect, useState } from "react";
import SubPageHero from "../../components/SubPageHero";
import Layout from "../../layout";
import { GetProjectData } from "../../services/project";
import CompetitionDetails from "./sections/CompetitionDetails";
function ExhibitorRegisteration() {
  const [active, setActive] = useState(0);
  const [data, setData] = useState([]);
  const [requestBody, setRequestBody] = useState({});
  const { competitions } = data;

  useEffect(() => {
    GetProjectData()
      .then((res) => {
        if (data.length === 0) setData(res);
      })
      .catch((err) => console.log(err));
  }, [data]);

  const handleSubmit = (stepData) => {
    setRequestBody((prev) => ({
      ...prev,
      ...stepData,
    }));
  };
  console.log({ requestBody });
  return (
    <Layout>
      <SubPageHero title={"Exhibitor Regestration"} />
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        allowNextStepsSelect={false}
        className="w-3/4 mx-auto"
        classNames={{
          step: "flex-col items-center ",
          stepDescription: "text-[10px]",
          stepIcon:
            "bg-neutral-200 text-white data-[progress=true]:border-primary data-[progress=true]:bg-primary ",
          separator: "h-1 mx-0 bg-neutral-200",
        }}
      >
        <Stepper.Step
          description="Competition Details"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentcolor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 m-auto "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          }
          iconPosition="left"
        >
          <CompetitionDetails
            setActive={setActive}
            active={active}
            data={competitions}
            getData={handleSubmit}
          />
        </Stepper.Step>
        <Stepper.Step
          description="Competition Details"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentcolor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 m-auto "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          }
          iconPosition="left"
        >
          first step
        </Stepper.Step>
        <Stepper.Step
          description="Competition Details"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentcolor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 m-auto "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          }
          iconPosition="left"
        >
          first step
        </Stepper.Step>
        <Stepper.Step
          description="Competition Details"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentcolor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 m-auto "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          }
          iconPosition="left"
        >
          first step
        </Stepper.Step>
        <Stepper.Step
          description="Competition Details"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentcolor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 m-auto "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          }
          iconPosition="left"
        >
          first step
        </Stepper.Step>
        <Stepper.Step
          description="Competition Details"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentcolor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 m-auto "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          }
          iconPosition="left"
        >
          first step
        </Stepper.Step>
        <Stepper.Step
          description="Competition Details"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentcolor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 m-auto "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          }
          iconPosition="left"
        >
          first step
        </Stepper.Step>
        <Stepper.Step description="Competition Details">
          second step
        </Stepper.Step>
        <Stepper.Step description="Competition Details">
          third step
        </Stepper.Step>
      </Stepper>
    </Layout>
  );
}

export default ExhibitorRegisteration;
