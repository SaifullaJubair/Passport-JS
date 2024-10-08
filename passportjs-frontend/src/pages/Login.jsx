import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";
import { Link } from "react-router-dom";

const Login = () => {
  // const google = () => {
  //   window.open("http://localhost:5000/auth/google", "_self");
  // };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <Link
            to={"http://localhost:5000/auth/google"}
            className="loginButton google"
          >
            <img src={Google} alt="" className="icon" />
            Google
          </Link>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input
            type="text"
            placeholder="Username"
            className="border rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Password"
            className="border rounded p-2 mb-2"
          />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
