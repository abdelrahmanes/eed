import { Stepper } from "@mantine/core";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import SubPageHero from "../../components/SubPageHero";
import Layout from "../../layout";
import { GetProjectData } from "../../services/project";
import CompetitionDetails from "./sections/CompetitionDetails";
import EducationDetails from "./sections/EducationDetails";
import Equipments from "./sections/Equipments";
import ProjectDetails from "./sections/ProjectDetails";
import ProjectMembers from "./sections/ProjectMembers";
import ProjectSubmit from "./sections/ProjectSubmit";
import Supervisors from "./sections/Supervisors";
import Survey from "./sections/Survey";
import TermsAndConditions from "./sections/TermsAndConditions";
function ExhibitorRegisteration() {
  const [active, setActive] = useState(0);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [data, setData] = useState([]);
  const [requestBody, setRequestBody] = useState(() => {
    return JSON.parse(localStorage.getItem("data")) || [];
  });
  const { competitions, cities, colleges, questions, items } = data;

  useEffect(() => {
    GetProjectData()
      .then((res) => {
        setIsDataLoading(false);
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

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(requestBody));
  }, [requestBody]);

  return (
    <Layout>
      <SubPageHero title={"Exhibitor Regestration"} />
      {isDataLoading ? (
        <Spinner />
      ) : (
        <Stepper
          active={active}
          onStepClick={setActive}
          allowNextStepsSelect={false}
          breakpoint="lg"
          className="mx-auto "
          classNames={{
            steps: "!w-full mt-10 lg:mx-auto items-center",
            stepCompletedIcon: "bg-primary rounded-full",
            content: " w-full lg:w-5/6 lg:mx-auto",
            root: "flex lg:flex-col mx-10 lg:mx-auto w-3/4",
            step: "flex-col items-center ",
            stepDescription: "text-[12px] h-2 text-center ",
            separatorActive: "bg-primary rounded-xl",
            stepIcon:
              "bg-neutral-200 text-white data-[progress=true]:border-primary data-[completed=true]:bg-primary data-[completed=true]:border-primary data-[progress=true]:bg-primary ",
            separator: "h-1 mx-0 w-full bg-neutral-200 rounded-xl mb-3",
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
            description="Terms and Conditions"
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
            <TermsAndConditions active={active} setActive={setActive} />
          </Stepper.Step>
          <Stepper.Step
            description="Education Details"
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
            <EducationDetails
              active={active}
              setActive={setActive}
              data={{ cities, colleges }}
              getData={handleSubmit}
            />
          </Stepper.Step>
          <Stepper.Step
            description="Project Details"
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
            <ProjectDetails
              active={active}
              setActive={setActive}
              getData={handleSubmit}
            />
          </Stepper.Step>
          <Stepper.Step
            description="Project Members"
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
            <ProjectMembers
              active={active}
              setActive={setActive}
              getData={handleSubmit}
              data={{ cities }}
            />
          </Stepper.Step>
          <Stepper.Step
            description="Supervisors"
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
            <Supervisors
              active={active}
              setActive={setActive}
              getData={handleSubmit}
            />
          </Stepper.Step>
          <Stepper.Step
            description="Surveys"
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
            <Survey
              active={active}
              setActive={setActive}
              getData={handleSubmit}
              data={questions}
            />
          </Stepper.Step>
          <Stepper.Step
            description="Equipments"
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
            <Equipments
              active={active}
              setActive={setActive}
              getData={handleSubmit}
              data={items}
            />
          </Stepper.Step>
          <Stepper.Step
            description="Submit Project"
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
            <ProjectSubmit
              active={active}
              setActive={setActive}
              getData={handleSubmit}
              data={data}
            />
          </Stepper.Step>
        </Stepper>
      )}
    </Layout>
  );
}

export default ExhibitorRegisteration;
