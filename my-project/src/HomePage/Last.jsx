import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

const Last = () => {
  return (
    <Box width="95%" margin="auto">
      <Box>
        <Text fontWeight="bold" fontSize="3xl">
          Fiverr guides
        </Text>
        <SimpleGrid columns={3} gap="20px">
          <Box>
            <Image
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_2.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png"
              alt=""
            />
            <Text fontWeight="bold">
              Start an online business and work from home
            </Text>
            <Text color="gray">
              A complete guide to starting a small business online
            </Text>
          </Box>
          <Box>
            <Image
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_2.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560168/guide-digital-marketing-552-x2.png"
              alt=""
            />
            <Text fontWeight="bold">Digital marketing made easy</Text>
            <Text color="gray">
              A practical guide to understand what is digital marketing
            </Text>
          </Box>
          <Box>
            <Image
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_2.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560155/guide-create-a-logo-552-x2.png"
              alt=""
            />
            <Text fontWeight="bold">Create a logo for your business</Text>
            <Text color="gray">
              A step-by-step guide to create a memorable business logo
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      <br />
      <br />
      <Box>
        <Image
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_2.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608129/bg-signup-1400-x2.png"
          alt=""
        />
      </Box>
    </Box>
  );
};

export default Last;
