import SubPageHero from "../../components/SubPageHero";
import VisitorImg from "../../assets/images/visitor.jpg";
import VisitsImg from "../../assets/images/visits.jpg";
import ExhibitorImg from "../../assets/images/exhibitor.jpg";
import Layout from "../../layout";
import { Card, Flex,Image, Text, Badge, Button, Group } from '@mantine/core';
import { NavLink} from "react-router-dom";

export default function Registeration() {

    // const navigate = useNavigate();

    const pages = [
        {
            id: 1,
            title: 'Visits Registeration',
            href: '#',
            image:`${VisitsImg}`,
            path:'/registeration/visits-register',
            description:
              'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        },
          
        {
            id: 2,
            title: 'Visitor Registeration',
            href: '#',
            image:`${VisitorImg}`,
            path:'/registeration/visitor-register',
            description:
              'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        },

        {
            id: 3,
            title: 'Exhibitor Registeration',
            href: '#',
            path:'/registeration/exhibitor-register',
            image:`${ExhibitorImg}`,
            description:
              'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        },
      ]

      
    return (
        <Layout>
        <SubPageHero title={"Registeration"} />
        <Flex
            mih={50}
            bg="rgba(0, 0, 0, .3)"
            gap="md"
            justify="center"
            align="flex-start"
            direction="row"
            wrap="wrap"
        >
        {pages.map((page) => (
        <Card shadow="sm" miw={280}  w={300}  m={20} padding="lg" radius="md" 
        key={page.id}
                        
        >
        <Card.Section>
        
        <Image
          src={page.image}
          height={360}
          // opacity={0.7}
          alt={page.title}
        />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
        <Text color="marine" fw={700}>{page.title}</Text>
        <Badge color="pink" variant="light">
          Open
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>
      <NavLink
        to={page.path}>
          <Button  variant="light" color="green"  fullWidth mt="lg" radius="lg" size="lg" > Register</Button>
      </NavLink>
    </Card>))}
    </Flex>
   
    </Layout>
    )
}  