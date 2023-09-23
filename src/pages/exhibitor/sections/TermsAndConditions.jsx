import { ScrollArea,} from "@mantine/core";
import StepBoxWrapper from "../../../components/StepBoxWrapper";
import StepButtons from "../../../components/StepButtons";
import { Card, Typography } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const TABLE_HEAD1=["Item", "Quantity"]
const TABLE_ROWS1 = [
  { item: "Basic Chair", quantity:"2" },
  { item: "Basic Exhibition Space (2m*1m)", quantity:"1" },
  { item: "Basic Meal", quantity:"1" },
  { item: "Basic Table", quantity:"1" },
  { item: "Single-Phase Power Supply", quantity:"1" },
  { item: "Accommodation", quantity:"1" }
];
const TABLE_HEAD2=["Item", "Quantity", "Price"]
const TABLE_ROWS2 = [
  { item: "Extra Chair", quantity:"1", price:"50"},
  { item: "Extra Exhibition Space (2m*1m)", quantity:"1", price:"100" },
  { item: "Extra Meal", quantity:"1" ,price:"50"},
  { item: "Extra Table", quantity:"1" ,price:"100"},
  { item: "Extra Single-Phase Power Supply", quantity:"1" ,price:"50"},
  { item: "Display Screen", quantity:"1" ,price:"100"},
  { item: "Accommodation", quantity:"1" ,price:"200"},
  { item: "Three-Phase Power Supply", quantity:"1" ,price:"300"}
];

function TermsAndConditions({ active, setActive }) {
  
  // const rows1 = elements1.map((element) => {
  //   return <Table.Tr key={element.item}>
  //     <Table.Td>{element.item}</Table.Td>
  //     <Table.Td>{element.quantity}</Table.Td>
  //   </Table.Tr> 
  // });
  
  // const rows2 = elements2.map((element) => (
  //   <Table.Tr key={element.item}>
  //     <Table.Td>{element.item}</Table.Td>
  //     <Table.Td>{element.quantity}</Table.Td>
  //     <Table.Td>{element.price}</Table.Td>
  //   </Table.Tr>
  // ));



  onsubmit = () => {};

  return (
    <StepBoxWrapper title={"Terms and conditions"}>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setActive(active + 1);
        }}
        id="placeholders"
      >
        <ScrollArea className="h-[60vh] ">
          <p>
          Dear Applicant,  Welcome to{""}
            <span className="font-medium tracking-wide	"> EED</span>
            !
          </p>
          <p>
            <ul className="list-disc list-inside">
            <li>
               Please note that this online registration is only an initial step in your team & participation process in EED 2023 as a graduation project. And then there will be a selection process based on the submitted data.
            </li>
            <li>
               So, please make sure to fill in all the required forms with your valid and most updated data. For all details about registration requirements, the selection criteria, filtration process… etc.
            </li>
            <li>
               Every project should have a team leader who should read our instructions carefully before starting the registration process to avoid any future problems.
            </li>          
            <li>
               The team leader is responsible for registering the project and adding all his team members’ information.
            </li>
            <li>
               The Registration process has two phases, The Registration phase, where each team must fill the registration form for completing the project’s info and answering all the questions related to the early evaluation, then all projects will enter The Filtration phase, which includes the reviewing and early judgment of all the registered projects depending on their answers, so be careful.
            </li>
            <li>
              All registered projects will be filtered and judged by professional judges.
            </li>
            <li>
              Only innovative and applicable projects "Prototype - Well thought out idea" can exhibit in the EED2023.
            </li>
            <li>
              An acceptance email will be sent to all qualified projects.
            </li>          
            <li>
              A rejection email will be sent to the unqualified projects
            </li>          
            <li>
              Any project that violates our instructions, rules or regulations will be eliminated from the competition. 
            </li>          
            </ul>
          </p>
          <p>
            

            <strong>Special Notes:</strong>
            <ol className="list-decimal list-inside">
              <li>In some urgent cases, the EED core team may need to change the rules without returning to the exhibitors.</li> 
              <li>No political activities will be allowed.</li>
              <li>We are volunteers in a non-profit organization; your cooperation is much appreciated.</li>
              If you have any inquiries, kindly feel free to contact the EED Registration Team through: <a href="mailto:reg.eed@ieeeypegypt.org" className="bg-sky-100 hover:bg-sky-400 p-1 text-sm">reg.eed@ieeeypegypt.org</a>
            </ol>

            <p className="m-10 mx-0">
              <strong className="italic">
                Terms and Conditions for Participation in the Egyptian Engineering Day Graduation Project Competition
              </strong>
            </p>
            <strong>
            Eligibility
            </strong>
            <ul className="list-disc list-inside">
            <li>
            The competition is open to all undergraduate engineering students in Egypt who are graduating in the academic year 2023-2024 with a complete project idea and prototype.
            </li>
            <li>
            The competition is open to all the graduate students who has graduated within the last 3 years [(2022-2023)-(2021-2022)-(2020-2021)] with a complete project idea and prototype.
            </li>
            <li>
            Only graduation projects that are complete and have been approved by the student's advisor will be accepted.
            </li>
            <li>
            Projects must be original and not have been submitted to any other competition.
            </li>
            </ul>
            <strong>
            Submission
            </strong>
            <ul className="list-disc list-inside">
            <li>
            To submit your project, please visit the Egyptian Engineering Day website and complete the online registration form.
            </li>
            <li>
            You will have to upload a short video presentation that summarizes your project.
              <ul className="list-disc list-inside px-10 text-slate-600">
                <li>
                The video should be around 3 to 5 minutes.
                </li>
                <li>
                The name of the project should be mentioned.
                </li>
                <li>
                The problems you faced.
                </li>
                <li>
                The solution.
                </li>
                <li>
                What is applied by the tools and the technology.
                </li>
                <li>
                The working prototype or simulation should be shown in the video.
                </li>
                <li>
                Every team member’s role in the project.
                </li>
                <li>
                Be sure to make the video link to be public shared in google drive.
                </li>    
              </ul>
            </li>
            
            <li>
            The deadline for first wave submissions is October 15, 2023.
            </li>
            <li>
            The team lead (contact person) should fill in the form and make sure that all the submitted data is correct.
            </li>
            </ul>
            <strong>
            Judging
            </strong>
            <ul className="list-disc list-inside">
            <li>
            Projects will be judged by a panel of experts from industry and academia.
            </li>
            <li>
            The judges will consider the following criteria:
              <ul className="list-disc list-inside px-10 text-slate-600">
                <li>
                  Originality and innovation.
                </li>
                <li>
                  Technical feasibility.      
                </li>
                <li>
                  Social and economic impact.
                </li>
                <li>
                  Clarity and presentation.              
                </li>
                <li>
                  Teamwork.            
                </li>
                <li>
                  Competitive edge & market research.
                </li>
              </ul>
            </li>
            </ul>
            <strong>
            Accommodation:
            </strong>
            <ul className="list-disc list-inside">
              <li>
                Accommodation option is only available for those who are participating from universities located outside the greater Cairo region (Cairo, Giza, Qalyubiyah, Helwan and 6th of October).
              </li>
              <li>
                Basic registration allows accommodation for only 1 team member per project.
              </li>
              <li>
                Accommodation places will be announced later.
              </li>
              <li>
                The transportation from and to the hotels for those who have accommodation will have strict time, and you must stick to it.
              </li>
            </ul>
            <strong>
              Payment and Fees:
            </strong>
            <ul className="list-disc list-inside">
              <li>
                Payment of the fees will be through money transfer to our provided bank account which will be sent to all accepted projects after the filtration phase, this is the only way to pay your fees. Please do NOT pay the fees to anyone.
              </li>
              <li>
                If the fees are not paid within the allowed days, which will be announced later, your application will be discarded, and you won’t be able to register again as an exhibitor for EED 2023.
              </li>
              <li>
                No refund will be possible after the closure of the payment phase.
              </li>
              <li>
                If your project passes the filtration phase, you'll have to upload a clear scanned copy of the cash payment receipt to your project account on our website later.
              </li>
              <li>
                We will send a payment confirmation mail after checking your receipt and our bank account status.
              </li>
              <li>
                Basic registration package for all teams will be <span className="font-semibold">500EGP</span> includes:
                <Card className="h-full w-full mt-8 mb-10">
                  <table className="w-full min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        {TABLE_HEAD1.map((head) => (
                          <th
                            key={head}
                            className=" border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                          >
                            <Typography
                              variant="small"
                              color="black"
                              className="leading-none opacity-70"
                            >
                              {head}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {TABLE_ROWS1.map(({ item, quantity }, index) => {
                        const isLast = index === TABLE_ROWS1.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            
                        return (
                          <tr key={item}>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {item}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {quantity}
                              </Typography>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Card>
                
              </li>
              <li>
                Any team can add items to package as needed as follows:
                  
                <Card className="h-full w-full mt-8 mb-10">
                  <table className="w-full min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        {TABLE_HEAD2.map((head) => (
                          <th
                            key={head}
                            className=" border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                          >
                            <Typography
                              variant="small"
                              color="black"
                              className="leading-none opacity-70"
                            >
                              {head}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {TABLE_ROWS2.map(({ item, quantity,price }, index) => {
                        const isLast = index === TABLE_ROWS2.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            
                        return (
                          <tr key={item}>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {item}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {quantity}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {price}
                              </Typography>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Card>      
              </li>
            </ul>
            <strong>
              Prizes:
            </strong>
            <ul className="list-disc list-inside">
              <li>
              Prizes will be announced soon.
              </li>
              <li>
              All participants in the final competition will receive a certificate of participation.
              </li>
            </ul>
            <strong>
              Other Conditions:
            </strong>
            <ul className="list-disc list-inside">
              <li>
              By submitting your project, you agree to allow the Egyptian Engineering Day Organizing Committee to use your project for promotional purposes.
             </li>
              <li>
                If the fees are not paid within the allowed days, which will be announced later, your application will be discarded, and you won’t be able to register again as an exhibitor for EED 2023.
              </li>
              <li>
              The Organizing Committee reserves the right to disqualify any project that is found to be in violation of the competition rules or that is deemed to be inappropriate.
              </li>
            </ul>
          </p>
        
          <p className="mt-10">
            <strong>
              Acceptance of Terms and Conditions
            </strong>
              <p>
              By submitting your project, you agree to be bound by the terms and conditions of this competition.
              Please note: The above terms and conditions are for illustrative purposes only. The actual terms and conditions for the Egyptian Engineering Day Graduation Project Competition may vary. Please consult the official website for the most up-to-date information.
              </p>
          </p>
        </ScrollArea>
        <StepButtons active={active} setActive={setActive} />
      </form>
    </StepBoxWrapper>
  );
}

export default TermsAndConditions;
