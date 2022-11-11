import {Box,Text,Image} from '@chakra-ui/react'

const Network = () => {
    
    return(
        <div style={{ width: "100%",
            backgroundColor: "#fafafa",
            color: "#b5b6ba" }}>
           
            <Box display='flex' alignItems='center' justifyContent='space-between' width='70%' margin='auto'>
               <Text fontWeight='bold' >Trusted by:</Text>
               <Box><Image width='80px' height='70px' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png" alt='fb' /></Box>
               <Box><Image width='80px' height='70px' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png" alt='gool' /></Box>
               <Box><Image width='80px' height='70px' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png" alt='net' /></Box>
               <Box><Image width='80px' height='70px' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" alt='pn' /></Box>
               <Box><Image width='80px' height='70px' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png" alt='py' /></Box>
            </Box>
          
        </div>
    )
}
export default Network;