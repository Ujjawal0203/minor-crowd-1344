import { Flex,Box , Spacer ,Text, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export const Navbar = () => {

    return <div style={{height:'90px',padding:'10px',color:'#fff', background:'#60192b'}}>
    <Flex  justifyContent='space-between' alignItems='center' gap='2'>
  <Spacer />
  
  <Box>
   <Link to='/'><Text fontSize='3xl' fontWeight='bold' marginRight='50px'>Ujjawal.</Text></Link>
   </Box>

  <Box p='2' marginLeft='200px' >
    <Flex width='900px' fontWeight='bold' justifyContent='space-around' alignItems='center' gap='2' >
    
         <Link to='/fiverrBusiness'><Text fontSize='lg'>Fiverr Business</Text></Link>
         <Link to='/explore'><Text fontSize='lg'>Explore</Text></Link>
         <Link to='/english'><Text fontSize='lg'>English</Text></Link>
         <Link to='/inr'><Text fontSize='lg'>$ INR</Text></Link>
         <Link to='/becomeAseller'><Text fontSize='lg'>Become a Seller</Text></Link>
         <Link to='/signIn'><Text fontSize='lg'>Sign In</Text></Link>
         <Link to='/join'><Button border='1px solid #fff' background='#60192b' colorScheme='green' color='#fff'>Join</Button></Link>
        
    </Flex>
      </Box>
  
  <Spacer />
</Flex>
    </div>
}