import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, updateUser } from "./Redux/userAction";

const UserForm = ({ existinguser, onupdatecomplete }) => {
  const [user, setUser] = useState(existinguser || { name: "", email: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      dispatch(updateUser(user.id, user));
    } else {
      dispatch(createUser(user));
    }
    setUser({ name: "", email: "" });
  };
  return (
    <>
      <h1> Return from user form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={user.name} onChange={handleChange} />
        <input type="email" value={user.email} onChange={handleChange} />
        <button type="submit">{user.id ? 'Update' : 'Create'} User</button>


      </form>
    </>
  );
};
export default UserForm;
