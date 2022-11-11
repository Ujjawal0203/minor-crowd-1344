import React from "react";
import {Box,SimpleGrid,Text,Input, Button,Image} from '@chakra-ui/react'

const Heading = () => {

    return (
     
         <div style={{background:'#60192b'}}>
            <SimpleGrid columns={2} spacing={0}>
                <Box width='90%' alignItems='center' marginLeft='100px' marginTop='100px'>

                   <Box>
                   <Text fontWeight='bold' color='#fff' fontSize='5xl' >Find the perfect  <i>freelance</i></Text>
                    <Text fontWeight='bold' color='#fff' fontSize='4xl' >services  for your business</Text><br/>
                    <Input width='70%' backgroundColor='white' type='search' placeholder='Try "building mobile app"' />
                    <Button padding='20px' marginLeft='5px' marginBottom='5px' backgroundColor='green.400'>Search</Button>
                   </Box><br/>

                   <Box color='#fff'>
                    Popule:
                    <Button marginLeft='10px' fontSize='sm' border='1px solid #fff' colorScheme='red'  background='#60192b' color='#fff'>Website Design</Button>
                    <Button marginLeft='10px' fontSize='sm' border='1px solid #fff' colorScheme='red' background='#60192b' color='#fff'>WordPress</Button>
                    <Button marginLeft='10px' fontSize='sm' border='1px solid #fff'  colorScheme='red' background='#60192b' color='#fff'>Logo Design</Button>
                    <Button marginLeft='10px' fontSize='sm' border='1px solid #fff'  colorScheme='red' background='#60192b' color='#fff'>Video Editing</Button>
                   </Box>
                
                </Box>

                <Box>
                    <Image width='100%' height='450px' src='https://assets-global.website-files.com/606a802fcaa89bc357508cad/6070b089462418ef33b63b12_Facebook-Cover-2-p-800.jpeg' alt='' />
                </Box>

            </SimpleGrid>

 

       </div>
       
  
    )
}

export default Heading;