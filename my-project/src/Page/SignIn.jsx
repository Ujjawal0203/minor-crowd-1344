
import {FormControl,Input, Container,Text,chakra} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function SignIn(){
    return <div style={{backgroundColor:'#f7f7f6',height:'700px' ,paddingTop:'40px'}}>
    <Container paddingTop='20px' backgroundColor='white' maxW='400px'>
      <FormControl  >
        <Text marginLeft='100px'  fontWeight='bold' fontSize='2xl'> Sign In to Fiverr </Text>
    <hr />
    <Input backgroundColor='blue' color='white' marginTop='10px' type='submit' value='Continue With Facebook' fontWeight='bold' />
    <Input backgroundColor='red' color='white' marginTop='10px' type='submit' value='Continue with Google' fontWeight='bold' />
    <Input backgroundColor='black' color='white' marginTop='10px' type='submit' value='Continue weith Apple' fontWeight='bold' />
    <Text marginTop='10px' marginLeft='160px'  fontSize='lg'>OR</Text>
    <Input marginTop='10px' type='email' placeholder='Choose a Email' />
    <Input marginTop='10px' type='password' placeholder='Choose a Password' />
   <br/>
    <chakra.button
              px="153"
              py="2"
              bg="#005737"
              color='white'
              rounded="md"
              _hover={{ bg: "green.400" }}
            >
            <Link to='/' > Continue</Link>
            </chakra.button>

    <Text marginTop='10px' marginLeft='10px' fontSize='xs'>By signing up, you agree to our Privacy Policy, Cookie Policy and Terms of Use.</Text>

    <hr />
      <Text margin='12px 0px' marginLeft='70px' fontSize='lg'>Not a member Yet? <Link to='/Join'>Join now</Link></Text>
    <hr />
  </FormControl> 
  </Container>
     
       </div>
}


