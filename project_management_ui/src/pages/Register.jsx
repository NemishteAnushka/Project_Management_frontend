import { useRegisterUserMutation } from "../services/authApi.js";

const Register = () => {
  const [registerUser, { isLoading, isSuccess, isError, data, error }] =
    useRegisterUserMutation();
  const handleSubmit = async (e) => {
   e.preventDefault();
    console.log("SUBMITEEEDD");
    try {
      await registerUser({
        name: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Register;
