import { useRegisterUserMutation } from "../services/authApi.js";
import { useForm } from "react-hook-form";
const Register = () => {
  const [registerUser, { isLoading, isSuccess, isError, data, error }] =
    useRegisterUserMutation();

  const { register, handleSubmit } = useForm();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("SUBMITEEEDD");
  //   try {
  //     await registerUser({
  //       name: "",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const onSubmit = async (data) => {
    try {
      let payload = await registerUser(data).unwrap();
      if (payload) {
        console.log(payload);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <div>
          <label htmlFor="username">User Name</label>
          <input {...register("username")} type="text" id="username" />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="email" id="email" />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input {...register("password")} type="password" id="password" />
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
