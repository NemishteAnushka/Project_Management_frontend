import { useRegisterUserMutation } from "../../services/authApi.js";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../utility/error/ErrorMessage.jsx";
import { StyledSubmitButton } from "../../utility/Button.Styles.js";
import { showToast } from "../../utility/alert/ShowAlert.jsx";
const Register = () => {
  const [registerUser, { isLoading, isSuccess, isError, data, error }] =
    useRegisterUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors, "errors");

  const onSubmit = async (data) => {
    try {
      let payload = await registerUser(data).unwrap();
      if (payload) {
        showToast({
          type: "sucess",
          message: "User Registered Sucessfully",
        });
      }
    } catch (error) {
      console.log(error);
      showToast({
        type: "error",
        message: error.data.message,
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <div>
          <label htmlFor="username">User Name</label>
          <input
            className="input"
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
            className="input"
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
            className="input"
            {...register("password", { required: "This field is required" })}
            type="password"
            id="password"
          />
          <ErrorMessage fieldname={errors?.password} />
        </div>
        <br />
        <div>
          <StyledSubmitButton type="submit" className="ms-2">
            Register
          </StyledSubmitButton>
        </div>
      </form>
    </>
  );
};

export default Register;
