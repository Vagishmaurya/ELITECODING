import Template from "./Template";


function Login({ setIsLoggedIn }) {
  return (
    <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
   
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;