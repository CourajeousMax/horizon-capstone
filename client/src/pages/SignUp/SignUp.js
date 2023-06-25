import {React,useState} from "react";
import GifEmbed from "../../Components/GifEmbed/GifEmbed";
import Header from "../../Components/Header/Header";
import FormInput from "../../Components/FormInput/FormInput";
import "./SignUp.scss";
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      console.log(response);
      if (response.ok) {
        console.log('Registration successful');
        setUsername('');
        setEmail('');
        setPassword('');
      } else if (response.status === 400) {
        const errorMessage = await response.text();
        setErrorMessage(errorMessage);
      } else {
        setErrorMessage('Error in registering user');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred');
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
            {errorMessage && <p>{errorMessage}</p>}
            <FormInput label="Username:" name="username" type="text" onChange={(e) => setUsername(e.target.value)} />
            <FormInput label="Email:" name="email" type="email" onChange={(e) => setEmail(e.target.value)} />
            <FormInput label="Password:" name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button>Register</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
