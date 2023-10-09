// import ComingSoon from "../../components/ComingSoon";
import SubPageHero from "../../components/SubPageHero";
import { Button } from '@mantine/core';
import Layout from "../../layout";
import { NavLink } from "react-router-dom";
import AboutImg1 from "../../assets/images/about1.jpg";
import AboutImg2 from "../../assets/images/competetion.jpg";
import AboutImg3 from "../../assets/images/engineers.jpg"



import Registeration from "../registeration/Registeration";

function AboutUs() {
  return (
    <Layout>
      <SubPageHero title={"About Us"} />
      <div className="about-us-container">
        {/* <div className="aboutSection"> */}
          
          <p className="about-us-text">
            Egyptian Engineering Day (EED) is an annual event that showcases the
            latest engineering projects from Egyptian universities. It is a
            two-day event that is typically held in September. EED is organized by
            the IEEE Egypt Section, and it is sponsored by a number of companies
            and organizations.
          </p>
          <img className="w-4/5	mx-auto my-5 rounded-lg" src={AboutImg1} alt="Egyptian Engineering Day (EED)"  />
        {/* </div> */}
        <div className="about-us-text">
          <p className="about-us-text">
          EED is a major event in the Egyptian engineering calendar. It is an
          opportunity for students to showcase their work to potential
          employers, and it is also a great opportunity for engineers to learn
          about the latest trends and developments in the field. EED features a
          number of events, including:</p>
          <ul className="list-disc list-inside m-5">
            <li>A competition for student engineering projects.</li>
            <li>Technical workshops and presentations.</li>
            <li>A career fair.</li>
            <li> A social networking event.</li>
          </ul>
          <img className="w-4/5	mx-auto my-5 rounded-lg" src={AboutImg2} alt="Egyptian Engineering Day (EED)"  />

        </div>
        <p className="about-us-text">
          EED is a valuable event for both students and engineers. It is a great
          way to learn about the latest engineering trends and developments, and
          it is also a great way to network with other professionals in the
          field.
        </p>

        <div className="about-us-text">
          Here are some of the benefits of attending Egyptian Engineering Day:
          <ul className="list-disc list-inside m-5">
            <li>
              For students:
              <ul className="m-10 list-disc list-inside">
                <li> Showcase their work to potential employers.</li>
                <li>
                  Learn about the latest trends and developments in the field.
                </li>
                <li>
                  Network with other students and professionals in the field.
                </li>
              </ul>
            </li>

            <li>
              For engineers:
              <ul className="list-disc list-inside m-10">
                <li>
                  Learn about the latest trends and developments in the field.
                </li>
                <li> Network with other professionals in the field.</li>
                <li> Find new job opportunities.</li>
                <li>
                  Stay up-to-date on the latest engineering technologies and
                  practices.
                </li>
              </ul>
            </li>
          </ul>
        </div>
          <img className="w-4/5	mx-auto my-5 rounded-lg" src={AboutImg3} alt="Egyptian Engineering Day (EED)"  />
        <p className="about-us-text">
          If you are an engineer or a student interested in engineering, I
          encourage you to attend Egyptian Engineering Day. It is a great event
          to learn, network, and grow your career.
          </p>
        

          <NavLink className=" text-black"  to={"/registeration"}>
              <Button
              className="border border-green-600 text-green-600 hover:text-white"
                  variant="filled"
                  color="green"
                  fullWidth
                  mt="lg"
                  radius="lg"
                  size="lg"
                >
                  Go to registeration page
                </Button>
                {/* <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Button</button> */}
            </NavLink>        
          </div>

    </Layout>
  );
}

export default AboutUs;
