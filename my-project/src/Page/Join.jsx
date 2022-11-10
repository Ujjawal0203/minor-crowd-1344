import {FormControl,Input, Container,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function Join(){
    return <div style={{backgroundColor:'#f7f7f6',height:'700px' ,paddingTop:'40px'}}>
    <Container paddingTop='20px' backgroundColor='white' maxW='400px'>
      <FormControl  >
        <Text marginLeft='110px'  fontWeight='bold' fontSize='2xl'> Fiverr Join</Text>
    <hr />
    <Input backgroundColor='blue' color='white' marginTop='10px' type='submit' value='Continue With Facebook' fontWeight='bold' />
    <Input backgroundColor='red' color='white' marginTop='10px' type='submit' value='Continue with Google' fontWeight='bold' />
    <Input backgroundColor='black' color='white' marginTop='10px' type='submit' value='Continue weith Apple' fontWeight='bold' />
    <Text marginTop='10px' marginLeft='160px'  fontSize='lg'>OR</Text>
    <Input marginTop='10px' type='text' placeholder='Choose a Username' />
    <Input marginTop='10px' type='email' placeholder='Choose a Email' />
    <Input marginTop='10px' type='password' placeholder='Choose a Password' />
    <Input backgroundColor='#005737' color='white' marginTop='10px' type='submit' value='Continue' />
    <Text marginTop='10px' marginLeft='10px' fontSize='xs'>By signing up, you agree to our Privacy Policy, Cookie Policy and Terms of Use.</Text>

    <hr />
      <Text margin='12px 0px' marginLeft='70px' fontSize='lg'>Have an account? <Link to='/SignIn'>Sign In</Link></Text>
    <hr />
  </FormControl> 
  </Container>
     
       </div>
}





