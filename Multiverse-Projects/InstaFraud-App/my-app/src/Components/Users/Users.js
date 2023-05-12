import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";

function Users() {
  // const [users, setUsers] = useState();
  // const axiosPrivate = useAxiosPrivate();

  // useEffect(() => {
  //   let isMounted = true;
  //   const controller = new AbortController(); //this is to cancel our request incase an error
  //   const getUsers = async () => {
  //     try {
  //       const response = await axiosPrivate.get("/users", {
  //         signal: controller.signal
  //       });
  //       console.log(response.data);
  //       isMounted && setUsers(response.data);
  //     } catch (error) {
  //         console.error(error)
  //     }
  //   };
  //   getUsers();
    
  //   return () => {
  //     // is a cleanup fn to turn the ismount state to false once the component unmountes and if there isany pending request
  //     isMounted = false;
  //     controller.abort();
  //   };
  // }, []);
  // console.log(users)
  // return (
  //   <div>
  //     <h1>UsersList</h1>
  //     <div>
  //       {users?.length ? (
  //         <ul>
  //           {users.map((user, i) => {
  //             return <li key={i}> {user?.FirstName}</li>;
  //           })}
  //         </ul>
  //       ) : (
  //         <p>No users to display</p>
  //       )}
  //     </div>
  //   </div>
  // );
}

export default Users;
