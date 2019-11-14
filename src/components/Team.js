import React from "react";

const Team = props => {
  return (
    <div className="container">
      {props.member.map(mems => (
        <div className="teamMember" key={mems.id}>
          <h1>Team Member</h1>
          <h2>{mems.name}</h2>
          <p>{mems.email}</p>
          <p>{mems.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;
