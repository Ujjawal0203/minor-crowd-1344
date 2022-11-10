import React from "react";
import { Input } from '@chakra-ui/react'
import '../App.css'

const Join = () => {


  return (
    <>
      <div className="join_pages">
      <div className="join_page">
       <h1>Join Fiverr</h1>

       <div className="fag" style={{backgroundColor:"blue"}}><a href="#!">Continue With Facebook</a></div>
      <div className="fag" style={{backgroundColor:"red"}}><a href="#!">Continue with Google</a></div>
      <div className="fag" style={{backgroundColor:"black"}}><a href="#!">Continue with Apple</a></div>


        <p>OR</p>
        
        <div className="inp">
            <form>    
                <input type="email" placeholder="Enter your email" width='auto' required/><br/>
                <input type="password" placeholder="Enter your password" width='auto' required/><br/>
                <input type="text" placeholder="Enter your name" width='auto' required/><br/>
                <input id="continue" type="submit" value="Continue" width='auto'/>
            </form>
        </div>
            <p>By joining I agree to recieve emails from Fiverr</p>
        <hr/>
        <p>Already a member?<a href="http://localhost:3000/signIn">Sign In</a></p>
    </div>
      </div>
    </>
  );
};

export default Join;

