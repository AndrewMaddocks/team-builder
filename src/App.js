import React, { useState } from "react";
import Team from "./components/Team";
import TeamForm from "./components/TeamForm";
import "./App.css";

function App() {
  const [member, setMember] = useState([
    {
      id: 1,
      name: "Andrew Maddocks",
      email: "AndrewMaddocks@gmail.com",
      role: "Web Developer"
    }
  ]);
  const addNewMember = mem => {
    const newMember = {
      id: Date.now(),
      name: mem.name,
      email: mem.email,
      role: mem.role
    };
    setMember([...member, newMember]);
  };

  return (
    <div className="App">
      <h1>My Team</h1>
      {/* we are going to pass a function down as a prop */}
      <TeamForm addNewMember={addNewMember} />
      <Team member={member} />
    </div>
  );
}

export default App;
