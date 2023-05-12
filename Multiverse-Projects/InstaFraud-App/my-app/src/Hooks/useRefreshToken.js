import axios from "../api/axios";
import useAuth from "./useAuth";
function useRefreshToken() {
  const { setAuth } = useAuth();
  const refresh = async()=>{
      const response = await axios.get('/refresh',{
          withCredentials: true // this will allow use to send access token inside our secured cookies along woth our request 
      })
      setAuth(prev =>{
          return {...prev, accessToken:response.data.accessToken}
      })
      return response.data.accessToken
  }
  return refresh;
}

export default useRefreshToken;
