import React from "react";
import { Input } from '@chakra-ui/react'

const Join = () => {

  const style = {}

  return (
    <>
       <div style={style}>
        <h2>Join Fiverr</h2>
        <p>OR</p>
        
        <div>
            <form>    
                <Input type="email" id="email" placeholder="Enter your email" width='auto' required/><br/><br/>
                <Input type="text" id="n" placeholder="Enter your name" width='auto' required/><br/><br/>
                <Input type="password" id="pass" placeholder="Enter your password" width='auto' required/><br/><br/>
                <Input type="submit" value="Continue" width='auto'/><br/><br/>
            </form>
        </div>
            <p>By joining I agree to recieve emails from Fiverr</p>
        <hr/>
        <p>Already a member?<a href="#">Sign In</a></p>
    </div>
    </>
  );
};

export default Join;

