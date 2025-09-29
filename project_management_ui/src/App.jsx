import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
