import ComingSoon from "../../components/ComingSoon";
import SubPageHero from "../../components/SubPageHero";
import Layout from "../../layout";
function AboutUs() {
  return (
    <Layout>
      <SubPageHero title={"About Us"} />
      <ComingSoon />
    </Layout>
  );
}

export default AboutUs;
