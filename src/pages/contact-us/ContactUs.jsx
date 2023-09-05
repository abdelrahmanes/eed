import { Flex, Text, TextInput, Textarea, UnstyledButton } from "@mantine/core";
import SubPageHero from "../../components/SubPageHero";
import Layout from "../../layout";
function ContactUs() {
  return (
    <Layout>
      <SubPageHero title={"Contact Us"} />
      <div className="p-10 mx-4 my-12 bg-white rounded-md lg:mx-auto lg:w-1/2 ">
        <Text className="text-base font-bold lg:text-2xl">
          Contact Information
        </Text>
        <form className="flex flex-col gap-3 mt-10">
          <Text className="text-xs">
            Thank you for your interest in the EED
          </Text>
          <Flex className="flex-col gap-6">
            <TextInput name="name" placeholder="Your Name" />
            <TextInput name="email" placeholder="Email Address" />
            <TextInput name="subject" placeholder="Subject" />
            <Textarea name="message" placeholder="Message" />
          </Flex>
          <UnstyledButton className="px-4 py-2 mt-10 text-sm text-white rounded-lg bg-primary w-fit">
            Send Message
          </UnstyledButton>
        </form>
      </div>
    </Layout>
  );
}

export default ContactUs;
