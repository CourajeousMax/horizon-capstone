import {React,useState} from "react";
import { Link,Navigate,useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../Components/Header/Header";
import FormInput from "../../Components/FormInput/FormInput";
import "./SignUp.scss";
const SignUp = () => {
 const [error, setError] = useState("");
 const [success, setSuccess] = useState(false);
    
 const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const response = await axios.post("http://localhost:8000/api/register", {
          username: event.target.username.value,
          email: event.target.email.value,
          password: event.target.password.value,
        });
        setSuccess(true);
        setError("");
        event.target.reset();
      } catch (error) {
        setSuccess(false);
        setError(error.response);
      }
    };
  return (
    <>
      <Header />
      <section className="cover">
        <div className="hero__flex">
          <div className="hero__img"></div>
        </div>
        <div className="signup">
          <form className="signup__form" onSubmit={handleSubmit}>
            <h2 className="signup__page-header">New user? Create an account!</h2>
            <FormInput label="Username:" name="username" type="text"  />
            <FormInput label="Email:" name="email" type="email"  />
            <FormInput label="Password:" name="password" type="password"  />
            <button>Register</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
