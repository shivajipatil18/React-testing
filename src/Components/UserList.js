import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, deleteuser } from "./Redux/userAction";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(getUsers());
  }, dispatch);
  const handledelete = (id) => {
    dispatch(deleteuser(id));
  };
  return (
    <>
      <h1>users List</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name}
              {user.email}
              <button onCanPlay={() => handledelete(user.id)}></button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default UserList;
