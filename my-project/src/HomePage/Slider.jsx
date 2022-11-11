import { Box, Text, Image, Grid, GridItem } from "@chakra-ui/react";

const Slider = () => {
  return (
    <Box marginLeft='20px' marginRight='20px'>
      <Text fontWeight="bold" fontSize="4xl">
        Popular profession services
      </Text>

      <Grid templateColumns="repeat(5, 1fr)" gap={3}>
        
        <GridItem>
          <Image
            width="100%"
            height="300px"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"
            alt=""
          />
          <Text color='#b5b6ba' fontSize='lg' fontWeight='bold' >Logo Design</Text>
        </GridItem>

        <GridItem>
          <Image
            width="100%"
            height="300px"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"
            alt=""
          />
          <Text color='#b5b6ba' fontSize='lg' fontWeight='bold' >WordPress</Text>
        </GridItem>

        <GridItem>
          <Image
           width="100%"
            height="300px"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"
            alt=""
          />
          <Text color='#b5b6ba' fontSize='lg' fontWeight='bold' >Voice Over</Text>
        </GridItem>

        <GridItem>
          <Image
           width="100%"
            height="300px"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"
            alt=""
          />
          <Text color='#b5b6ba' fontSize='lg' fontWeight='bold' >Video Explainer</Text>
        </GridItem>

        <GridItem>
          <Image
            width="100%"
            height="300px"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"
            alt="r"
          />
          <Text color='#b5b6ba' fontSize='lg' fontWeight='bold' >Social Media</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default Slider;
