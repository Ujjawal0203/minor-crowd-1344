import { Box, Text, Image, Button, Flex, chakra } from "@chakra-ui/react";

const Busines = () => {
  return (
    <Box>
      <Box
        color="#fff"
        background="blue.900"
        paddingTop="60px"
        paddingBottom="60px"
      >
        <Flex marginLeft="30px" marginRight="30px">
          <Box>
            <Text fontWeight="bold" fontSize="4xl">
              fiverr <i>business.</i>
            </Text>
            <Text fontWeight="bold" fontSize="5xl" marginTop="40px">
              A business solution <br /> designed for <i>teams</i>
            </Text>
            <Text fontSize="2xl" marginTop="25px">
              Upgrade to a curated experience packed with tools <br /> and
              benefits, dedicated to businesses
            </Text>
            <Text fontSize="lg" marginTop="15px">
              Connect to freelancers with proven business experience
            </Text>
            <Text fontSize="lg" marginTop="5px">
              Get matched with the perfect talent by a customer success manager
            </Text>
            <Text fontSize="lg" marginTop="5px">
              Manage teamwork and boost productivity with one powerful workspace
            </Text>
            <br />
            <chakra.button
              px="3"
              py="2"
              bg="green.500"
              rounded="md"
              _hover={{ bg: "green.300" }}
            >
              Explore Fiverr Business
            </chakra.button>
          </Box>
          <Box>
            <Image
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
              alt="pic"
            />
          </Box>
        </Flex>
      </Box>
      <br />
      <br />

      <Box width="90%" margin="auto">
        <Flex justifyContent="space-between">
          <Box>
            <Image
              width="100%"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg"
              alt=""
            />
          </Box>
          <Box paddingLeft="20px">
            <Text fontWeight="bold" fontSize="2xl" color="gray.500">
              Brighid Gannon (DNP,PMHNP-BC), Co-Founder | <i>Lavender</i>
            </Text>
            <Text fontSize="3xl" fontStyle="italic" color="green">
              "We used Fiverr for SEO, our logo, website, copy, animated video -
              literally everything.  It was like working with a<br/> human
              right next to you versus being across the world."
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Busines;
