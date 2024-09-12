import { useState } from "react";
import Button from "../components/Button";
import Input2 from '../components/Input2';
import { NavLink } from "react-router-dom";

function Home()
{
    const[name,SetName]=useState('');
    const[branch,SetBranch]=useState('');
    function handleName(e)
    {
        SetName(e.target.value);
    }
    function handleBranch(e)
    {
        SetBranch(e.target.value);
    }
    
    function handleClick()
    {
        const set=document.getElementById('student').checked || document.getElementById('professor').checked ;
        if(name && branch && set)
            document.getElementById('link').classList.remove('disable');
        else
        alert('fill all the feilds');        
    }
    
    const text= <NavLink to='feedback' id="link" className='disable'>feedback</NavLink> ;
    return(
        <div className="container-fluid" id="home-div">
            <p className="display-3">Welcome to Prof Review!!</p>
            <div className="home p-5">
               <h1 id="home-heading">Enter your details</h1>
               <Input2 fun={handleName} type="text" category="name" holder="Name"></Input2>
               {/* <Input2 type="text" category="branch" holder="Branch"></Input2> */}
               <div className="mb-3">
                  <label className="h5">Branch</label>
                  <select onChange={handleBranch} name="branch" id="" className="form-select">
                      <option value="">--select--</option>
                      <option value="cse">CSE</option>
                      <option value="ece">ECE</option>
                      <option value="eee">EEE</option>
                      <option value="mech">MECH</option>
                      <option value="civil">CIVIL</option>
                  </select>
               </div>
               <div className="form-check mb-3">
                   <input type="radio" name="person" value='student' id="student" className="form-check-input"></input>
                   <label for="student" class="form-check-label h4">Student</label>
               </div>
               <div className="form-check mb-3">
                   <input type="radio" name="person" value='professor' id="professor" className="form-check-input"></input>
                   <label for="professor" class="form-check-label h4">Professor</label>
               </div>
               <Button text={text} fun={handleClick}></Button>
            </div>
        </div>
    );
}

export default Home