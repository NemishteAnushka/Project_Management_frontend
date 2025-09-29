import { toast } from "react-toastify";

export const showToast = ({ message, type = "info", options = {} }) => {
  const defaultOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    ...options,
  };

  switch (type) {
    case "success":
      toast.success(message, defaultOptions);
      break;
    case "error":
      toast.error(message, defaultOptions);
      break;
    case "warn":
      toast.warn(message, defaultOptions);
      break;
    case "info":
    default:
      toast.info(message, defaultOptions);
      break;
  }
};
