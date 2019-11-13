import React, { useState } from "react";

const TeamForm = props => {
  const [members, setMembers] = useState({
    name: "",
    email: "",
    role: " "
  });

  const handleChanges = e => {
    setMembers({ ...members, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(members);
    setMembers({ name: "", email: "", role: "" });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={members.name}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        value={members.email}
        onChange={handleChanges}
      />
      <label htmlFor="role">Role</label>
      <input
        id="role"
        type="text"
        name="role"
        value={members.role}
        onChange={handleChanges}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default TeamForm;
