import { Flex, Grid, Text } from "@mantine/core";
import { Fragment } from "react";
import audience from "../../assets/images/audience.jpg";
import minister from "../../assets/images/minister.jpg";
import SubPageHero from "../../components/SubPageHero";
import Layout from "../../layout";
function FAQ() {
  const faqs = {
    "General Information": [
      {
        id: 0,
        question: "Who can exhibit at EED 2023?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremillum excepturi tempora harum provident, deserunt voluptates recusandae laudantium perspiciatis? Tempore, quisquam adipisci commodi magni eos nesciunt expedita consequatur cumque at!",
        image: minister,
      },
      {
        id: 1,
        question: "Who can exhibit at EED 2023?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremillum excepturi tempora harum provident, deserunt voluptates recusandae laudantium perspiciatis? Tempore, quisquam adipisci commodi magni eos nesciunt expedita consequatur cumque at!",
        image: audience,
      },
    ],
    Lorem: [
      {
        id: 0,
        question: "Who can exhibit at EED 2023?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremillum excepturi tempora harum provident, deserunt voluptates recusandae laudantium perspiciatis? Tempore, quisquam adipisci commodi magni eos nesciunt expedita consequatur cumque at!",
        image: minister,
      },
      {
        id: 1,
        question: "Who can exhibit at EED 2023?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremillum excepturi tempora harum provident, deserunt voluptates recusandae laudantium perspiciatis? Tempore, quisquam adipisci commodi magni eos nesciunt expedita consequatur cumque at!",
        image: audience,
      },
    ],
  };

  return (
    <Layout>
      <SubPageHero title={"Frequently Asked Questions"} />
      <Flex className="flex-col ">
        {Object.keys(faqs).map((key) => {
          return (
            <Fragment key={key}>
              <div className="w-full px-4 py-4 my-4 text-xl font-bold text-white lg:px-24 bg-primary">
                {key}
              </div>
              <Flex className="flex-col gap-3 mb-6">
                {faqs[key].map(({ question, answer, id, image }, index) => {
                  return (
                    <Fragment key={id}>
                      {index % 2 === 0 ? (
                        <div className="p-4 mx-4 rounded-sm lg:p-6 lg:mx-24 bg-primary bg-opacity-70">
                          <Grid grow columns={12} className="w-full m-0">
                            <Grid.Col
                              span={12}
                              md={6}
                              className="flex flex-col gap-6 p-0 px-2"
                            >
                              <Text className="text-base font-bold lg:text-xl">
                                {question}
                              </Text>
                              <Text className="mb-4 text-sm lg:text-base lg:mb-0">
                                {answer}
                              </Text>
                            </Grid.Col>
                            <Grid.Col span={12} md={6} className="p-0">
                              <img
                                src={image}
                                className="object-cover h-auto mx-auto lg:ml-auto lg:mr-0 lg:h-96"
                              />
                            </Grid.Col>
                          </Grid>
                        </div>
                      ) : (
                        <div className="p-4 mx-4 rounded-sm lg:p-6 lg:mx-24 bg-primary bg-opacity-70">
                          <Grid grow columns={12} className="w-full m-0">
                            <Grid.Col span={12} md={6} className="p-0">
                              <img
                                src={image}
                                className="object-cover h-auto mx-auto lg:mr-auto lg:ml-0 lg:h-96"
                              />
                            </Grid.Col>
                            <Grid.Col
                              span={12}
                              md={6}
                              className="flex flex-col gap-6 p-0 px-2"
                            >
                              <Text className="text-base font-bold lg:text-xl">
                                {question}
                              </Text>
                              <Text className="mb-4 text-sm lg:text-base lg:mb-0">
                                {answer}
                              </Text>
                            </Grid.Col>
                          </Grid>
                        </div>
                      )}
                    </Fragment>
                  );
                })}
              </Flex>
            </Fragment>
          );
        })}
      </Flex>
    </Layout>
  );
}

export default FAQ;
