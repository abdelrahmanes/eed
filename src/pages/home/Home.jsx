import { Flex, Grid, Text } from "@mantine/core";
import { Fragment } from "react";
import Slider from "react-slick";
import eed from "../../assets/images/eed_logo_dark.png";
import event from "../../assets/images/event.png";
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque nec ultricies erat. Vivamus volutpat pellentesque urna,vitae maximus felis tempor quis. Nullam volutpat dui consectetu  tempor semper. Suspendisse potenti. Nullam ultricies libero a veli  ullamcorper fringilla. Nunc quam justo, semper sed elit id, rhoncu  eleifend tortor. Vestibulum magna sapien, bibendum vel nisi ut  lacinia luctus nisl. Nullam consequat dignissim odio, pellentesqu  mattis diam aliquam sit amet. Vestibulum a nunc vel tellus sodale  ornare vel ac purus.",
    },
    {
      id: 2,
      image: eed,
      title: "About EED",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque nec ultricies erat. Vivamus volutpat pellentesque urna,vitae maximus felis tempor quis. Nullam volutpat dui consectetu  tempor semper. Suspendisse potenti. Nullam ultricies libero a veli  ullamcorper fringilla. Nunc quam justo, semper sed elit id, rhoncu  eleifend tortor. Vestibulum magna sapien, bibendum vel nisi ut  lacinia luctus nisl. Nullam consequat dignissim odio, pellentesqu  mattis diam aliquam sit amet. Vestibulum a nunc vel tellus sodale  ornare vel ac purus.",
    },
    {
      id: 3,
      image: yp,
      title: "About IEEE Egypt section and YP Egypt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque nec ultricies erat. Vivamus volutpat pellentesque urna,vitae maximus felis tempor quis. Nullam volutpat dui consectetu  tempor semper. Suspendisse potenti. Nullam ultricies libero a veli  ullamcorper fringilla. Nunc quam justo, semper sed elit id, rhoncu  eleifend tortor. Vestibulum magna sapien, bibendum vel nisi ut  lacinia luctus nisl. Nullam consequat dignissim odio, pellentesqu  mattis diam aliquam sit amet. Vestibulum a nunc vel tellus sodale  ornare vel ac purus.",
    },
  ];
  const achievments = [
    {
      id: 1,
      label: "Projects",
      total: 5000,
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
      label: "Sponsors",
      total: 2000,
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
      total: 500,
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
    { id: 1, image: event },
    { id: 2, image: event },
    { id: 3, image: event },
    { id: 4, image: event },
    { id: 5, image: event },
    { id: 6, image: event },
    { id: 7, image: event },
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
            <AutoIncrement total={9500} label={"Total Attendance"}>
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
              <Text>Address: Al-Azhar Conference Center (ACC)</Text>
              <Text>
                More Info: <a href="#"> Click Here</a>
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col span={12} lg={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.250855763736!2d31.322500276019145!3d30.058343117911303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e5d94c66301%3A0x78353e8be3e413a7!2sAl-Azhar%20Conference%20Centre!5e0!3m2!1sen!2seg!4v1693675018384!5m2!1sen!2seg"
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
