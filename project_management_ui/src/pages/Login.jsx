import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../utility/error/ErrorMessage";
import { StyledSubmitButton } from "../utility/Button.Styles";
import { useLoginUserMutation } from "../services/authApi";
import { useDispatch } from "react-redux";
import { showToast } from "../utility/alert/ShowAlert";
const Login = () => {
  const dispatch = useDispatch();
  console.log(dispatch, "DISPPS");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors, "errors");

  const [loginUser] = useLoginUserMutation();

  const onSubmit = async (data) => {
    try {
      let payload = await loginUser(data).unwrap();
      console.log(payload, "PALO");

      if (payload) {
        showToast({
          message: "User Logged In Sucessfully",
          type: "sucess",
        });
      }
    } catch (error) {
      console.log(error, "ERRRRR");
      showToast({
        message: error?.data?.message,
        type: "error",
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
            type="text"
            {...register("username", { required: "This field is required" })}
            id="username"
          />
        </div>
        <ErrorMessage fieldname={errors?.username} />
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="input"
            {...register("email", { required: "This field is required" })}
            type="email"
            id="email"
          />
        </div>
        <ErrorMessage fieldname={errors?.email} />
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="input"
            {...register("password", { required: "This field is required" })}
            type="password"
            id="password"
          />
        </div>
        <ErrorMessage fieldname={errors?.password} />
        <br />
        <div>
          <StyledSubmitButton className="ms-2" type="submit">
            Login
          </StyledSubmitButton>
        </div>
      </form>
    </>
  );
};

export default Login;
