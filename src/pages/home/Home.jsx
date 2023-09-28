import { Flex, Grid, Text } from "@mantine/core";
import { Fragment } from "react";
import Slider from "react-slick";
// import eed from "../../assets/images/event2.png";
import Theme from "../../assets/images/event.png";
import Theme2 from "../../assets/images/event2.png";
import ieee from "../../assets/images/ieee.png";
import yp from "../../assets/images/young-professionals.png";
import AutoIncrement from "../../components/AutoIncrement";
import Layout from "../../layout";
import Hero from "./sections/Hero";
function Home() {
  const gridSections = [
    {
      id: 1,
      image: ieee,
      title: "About IEEE",
      description:
      "IEEE (The Institute of Electrical & Electronics Engineers) is a non-profit organization whose members inspire a global community to innovate for a better tomorrow through its highly cited publications, conferences, technology standards, and professional and educational activities.",
    },
    {
      id: 2,
      image: Theme2,
      title: "About EED",
      description:
      "The Egyptian Engineering Day, was first founded in the annual Egyptian Student Branches Meeting, ESBM 2002. The EED was suggested to be an expo for engineering graduation projects. EED has become a special national event that receives deliberation from the Egyptian government, academia, industry and media with both local and regional recognition. It's considered as the annual nexus for engineers where engineering professionals meet new associates in the field, share ideas, collaborate on projects and learn new things.",
    },
    {
      id: 3,
      image: yp,
      title: "About IEEE Egypt section and YP Egypt",
      description:
        "The IEEE history in Egypt is back to 70 years ago. Annual Technical conferences and workshops in various engineering fields have been organized by the IEEE Egypt Section since then, as well as supervising various activities in many universities through +50 IEEE student branches. IEEE Young Professionals is an international community of innovative members and volunteers. Members of this community are interested in elevating their professional image, expanding their global network, connecting with peers locally and giving back to the community. IEEE YP Egypt provides a competitive advantage to entities – that has good business sense in today’s fast-paced environment. In order to reduce the technical or financial risk, gain access to highly specialized programs and to get connected with innovative minds.",
    },
  ];
  const achievments = [
    {
      id: 1,
      label: "Projects",
      total: 3500,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 m-auto text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      label: "Years",
      total: 20,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 m-auto text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      label: "Universities",
      total: 45,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 m-auto text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      ),
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  const GalleryPics = [
    { id: 1, image: Theme },
    { id: 2, image: Theme2 },
    { id: 3, image: Theme },
    { id: 4, image: Theme2 },
    { id: 5, image: Theme },
    { id: 6, image: Theme2 },
    { id: 7, image: Theme },
  ];
  return (
    <Layout>
      <Hero />
      {/* Logos section */}
      <Grid columns={12} gutter={"0"} className="border border-primary">
        {gridSections.map((section, index) => {
          return (
            <Fragment key={section.id}>
              {index % 2 === 0 ? (
                <>
                  <Grid.Col span={12} lg={6} className="px-16 bg-white py-28">
                    <img src={section.image} className="m-auto mt-4" />
                  </Grid.Col>
                  <Grid.Col
                    span={12}
                    lg={6}
                    className="flex flex-col h-full gap-6 px-16 text-white py-28 bg-primary"
                  >
                    <Text className="text-3xl font-bold">{section.title}</Text>
                    <Text className="text-base">{section.description}</Text>
                  </Grid.Col>
                </>
              ) : (
                <>
                  <Grid.Col
                    span={12}
                    lg={6}
                    className="flex flex-col h-full gap-6 px-16 text-white py-28 bg-primary"
                  >
                    <Text className="text-3xl font-bold">{section.title}</Text>
                    <Text className="text-base">{section.description}</Text>
                  </Grid.Col>
                  <Grid.Col span={12} lg={6} className="px-16 bg-white ">
                    <img src={section.image} className="m-auto mt-4" />
                  </Grid.Col>
                </>
              )}
            </Fragment>
          );
        })}
      </Grid>
      {/* WHAT HAPPENED SECTION */}
      <Flex className="flex-col gap-6 mx-2 text-center border-b border-gray-300">
        <Text className="my-10 text-4xl font-bold">What Happened</Text>
        <Grid columns={12} grow>
          <Grid.Col span={12}>
            <AutoIncrement total={10000} label={"Total Attendance"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-40 h-40 m-auto text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </AutoIncrement>
          </Grid.Col>
        </Grid>
        <Grid columns={12} grow className="my-12">
          {achievments.map((achievment) => {
            return (
              <Grid.Col key={achievment.id} span={3}>
                <AutoIncrement
                  total={achievment.total}
                  label={achievment.label}
                >
                  {achievment.icon}
                </AutoIncrement>
              </Grid.Col>
            );
          })}
        </Grid>
      </Flex>
      {/* Gallery Section */}
      <Flex className="flex-col gap-6 py-10 text-center border-b border-gray-300">
        <Text className="mb-10 text-4xl font-bold">Gallery</Text>
        <Slider
          {...settings}
          className="max-w-full overflow-hidden gallery"
          adaptiveHeight
        >
          {GalleryPics.map((image) => {
            return (
              <div key={image.id} className="w-10 mx-6 rounded-md">
                <img
                  src={image.image}
                  alt={image.image}
                  className="rounded-md"
                />
              </div>
            );
          })}
        </Slider>
      </Flex>
      {/* venue section */}
      <Flex className="flex-col p-10">
        <Text className="mb-10 text-4xl font-bold text-center ">
          Venu Information
        </Text>
        <Grid columns={12} gutter={"0"}>
          <Grid.Col span={12} lg={6} className="flex flex-col gap-6 ">
            <Flex className="flex flex-col">
              <Text>Address: Nile University - Cairo </Text>
              <Text>
                More Info: <a href="#"> Click Here</a>
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col span={12} lg={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13819.438800553911!2d30.9868612!3d30.0121847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585754b9cba23f%3A0xdfbc09a0a87f3e86!2z2KzYp9mF2LnYqSDYp9mE2YbZitmE!5e0!3m2!1sar!2seg!4v1695822159483!5m2!1sar!2seg"
              width="600"
              height="450"
              className="w-full px-0 border border-gray-200 rounded-md lg:pr-0"
              allowFullScreen="true"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid.Col>
        </Grid>
      </Flex>
    </Layout>
  );
}

export default Home;
