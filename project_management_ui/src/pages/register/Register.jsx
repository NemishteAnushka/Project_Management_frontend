import { useRegisterUserMutation } from "../../services/authApi.js";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../utility/error/ErrorMessage.jsx";
const Register = () => {
  const [registerUser, { isLoading, isSuccess, isError, data, error }] =
    useRegisterUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors, "errors");
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
          <input
            {...register("username", { required: "This field is required." })}
            type="text"
            id="username"
          />
          {/* <div style={{color :"red"}}>{errors?.username?.message}</div> */}
          <ErrorMessage fieldname={errors?.username} />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: "This field is required" })}
            type="email"
            id="email"
          />
          <ErrorMessage fieldname={errors?.email} />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input
            {...register("password", { required: "This field is required" })}
            type="password"
            id="password"
          />
          <ErrorMessage fieldname={errors?.password} />
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
