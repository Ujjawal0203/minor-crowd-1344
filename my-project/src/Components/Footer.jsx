import { Box, Center, Image,Heading,Text, Flex, Divider } from "@chakra-ui/react";

export const Footer = ()=>{
    return(
        <>
        <Box bg={"black"} width='95%' margin='auto' >
        <Center>
        <Box bg={"black"} color="white" p={5}>
            <Flex gap={40}>
               <Box>
                <Heading as='h6' size='xs'>Categories</Heading>
                <Text fontSize='sm'> Choose Your Store</Text>
               </Box>
               <Box>
                <Heading as='h6' size='xs'>About</Heading>
                <Text fontSize='sm'> Available</Text>
               </Box>
               <Box>
                <Heading as='h6' size='xs'>Support</Heading>
                <Text fontSize='sm'>Text "APP" to 36611</Text>
               </Box>
               <Box>
                <Heading as='h6' size='xs'>Community</Heading>
                <Text fontSize='sm'> Sign Up Now</Text>
               </Box>
               <Box>
                <Heading as='h6' size='xs'>More From Fiverr</Heading>
                <Text fontSize='sm'> Want 25% off your shopping</Text>
               </Box>
            </Flex>
            <Divider borderColor="white" mt={5}
                          orientation="horizontal"/>
        </Box>
        
        </Center>
        <Image src="https://i.imgur.com/L5xKABJ.png"/>
      </Box>
        </>
    )
}