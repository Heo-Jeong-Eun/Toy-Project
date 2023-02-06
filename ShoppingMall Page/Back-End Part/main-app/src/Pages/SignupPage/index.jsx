import SignupForm from "./SignupForm";
import Nav from "../../Components/Nav";


const Signup = () => {

  return (
    <div>
      <Nav linkList={['login']}></Nav>
      <SignupForm />
    </div>
  );
};

export default Signup;
