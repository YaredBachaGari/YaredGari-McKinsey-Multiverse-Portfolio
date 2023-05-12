import { useContext } from "react";
import { InstFraudContext } from "../Context/Context";

const useAuth = () => {
  return useContext(InstFraudContext);
};
export default useAuth;
