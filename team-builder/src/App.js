import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
  const [addedMember, setAddedMember]=useState([]);
 return (
    <div className="App">
      <body>
        <h1>Team Member List!</h1>
        <Form 
        addedMember={addedMember} setAddedMember={setAddedMember}
        />
        <h3>Team Members</h3>
        <div>
            {addedMember.map(member=>(
                <div key={member.id}>
                    <p>Name: {member.name}</p>
                    <p>Email: {member.email}</p>
                    <p>Role: {member.role}</p>
                    <p>Github Handle:  {member.githubHandle}</p>
                </div>
            ))}
        </div>
      </body>
    </div>
  );
}

export default App;