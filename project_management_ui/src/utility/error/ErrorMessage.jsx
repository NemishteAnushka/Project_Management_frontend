import { StyledErrorMsg } from "./ErrorMessage.styles";

const ErrorMessage = ({ fieldname }) => {
  console.log(fieldname);
  return <StyledErrorMsg>{fieldname?.message}</StyledErrorMsg>;
};

export default ErrorMessage;
