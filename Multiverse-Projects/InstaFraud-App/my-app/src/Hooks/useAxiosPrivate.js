//this hook attaches axiosprivate interceptor as a header to each and every request we make to protected routes

import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

//
const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { Auth } = useAuth();
  useEffect(() => {
    //put interceptors here. they are basically the same as vanilla javascript event-listner. so they get attached when we make a request but also shouls be removed to avoid over and over repitation
    const requestIntercept = axiosPrivate.interceptors.request.use(
       (config) => {
        if (!config.headers.Authorization) {
          // if this true this is could be the first attempt
          config.headers.Authorization = `Bearer ${Auth?.accessToken}`
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response, // if our response is good we will return response  other wise if the access token is expired it will through an error
      async (error) => {
        const prevRequest = error?.config; // we can access the the expired accessToken from error.config
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [Auth, refresh]);

  return axiosPrivate;
};
export default useAxiosPrivate;
