import React from "react";

const SignIn = () => {
  return (
    <div id="up">
      <h2>Join Fiverr</h2>
      <p>oR</p>
      <div>
        <form>
          <input
            type="text"
            id="namee"
            placeholder="Email / Username"
            required
          />
          <br />
          <br />
          <input type="password" id="passs" placeholder="Password" required />
          <br />
          <br />
          <input type="submit" value="Continue" />
          <br />
          <br />
        </form>
      </div>

      <p>
        Not a member yet?<a href="#">Join now</a>
      </p>
    </div>
  );
};

export default SignIn;
