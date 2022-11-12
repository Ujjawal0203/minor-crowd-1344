import {Box,Text,Image,Flex} from "@chakra-ui/react";

const Video = () => {
  return (
    <Box background='blue.100' paddingTop='60px' paddingBottom='60px'>
       <Flex marginLeft='30px' marginRight='30px' >
            <Box fontWeight='bold' >
                <Text fontSize='3xl' >A whole world of freelance talent at your fingertips</Text>
                <Text fontSize='20px' marginTop='10px' >The best for every budget</Text>
                <Text fontSize='15px' marginTop='5px' color='gray.500' >Find high-quality services at every price point. No hourly rates, just project-based pricing.</Text>
                <Text fontSize='20px' marginTop='10px' >Quality work done quickly</Text>
                <Text fontSize='15px' marginTop='5px' color='gray.500' >Find the right freelancer to begin working on your project within minutes.</Text>
                <Text fontSize='20px' marginTop='10px' >Protected payments, every time</Text>
                <Text fontSize='15px' marginTop='5px' color='gray.500' >Always know what you'll pay upfront. Your payment isn't released until you approve the work.</Text>
                <Text fontSize='20px' marginTop='10px' >24/7 support</Text>
                <Text fontSize='15px' marginTop='5px' color='gray.500' >Questions? Our round-the-clock support team is available to help anytime, anywhere.</Text>
            </Box>
            <Box >
                <Image width='100%' src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png' alt='' />
            </Box>
        </Flex>
    </Box>   
  )
};

export default Video;
