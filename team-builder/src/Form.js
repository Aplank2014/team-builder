import React,{useState} from 'react';

const Form=(props=>{
    const defaultState={name:'',email:'',role:'', githubHandle: ''};

    const [teamMember, setTeamMember]=useState(defaultState);

    const handleChange=event=>{
        setTeamMember({...teamMember,[event.target.name]: event.target.value});
      }
    
      const handleSubmit=event=>{
        event.preventDefault();
        props.setAddedMember([...props.addedMember,teamMember]);
        setTeamMember(defaultState);
      }
    return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput"> Full Name</label>
            <input 
                type='text' 
                placeHolder='Enter Full Name' 
                name='name' 
                id='nameInput' 
                value={teamMember.name} 
                onChange={handleChange}>
            </input>
        <br></br>
        <label htmlFor= "emailInput">Email</label> 
            <input 
                type='email' 
                placeHolder='Enter Email' 
                name='email' 
                id='emailInput' 
                value={teamMember.email} 
                onChange={handleChange}>
            </input>
        <br></br>
        <label htmlFor='team role'>
            Role </label>
            <input type="text" 
             placeHolder='Enter Team Role' 
                id='team role' 
                value={teamMember.role}
                name='role' 
                onChange={handleChange}>
                    </input>
       <br></br>
       <label htmlFor='githubHandle'>
            Github Handle </label>
            <input type="text" 
             placeHolder='Enter Your Github Handle' 
                id='githubHandle' 
                name='githubHandle' 
                value={teamMember.githubHandle}
                onChange={handleChange}>
                    </input>
       <br></br>
        <button type='submit'>Add Team Member</button>
    </form>
    )
})

export default Form;