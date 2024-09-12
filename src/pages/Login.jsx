import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

function Login()
{
    const [email, setEmail] = useState('');
    const [pass,setpass]=useState('');
    function HandleMail(e)
    {
        setEmail(e.target.value);
    }
    function Handlepass(e)
    {
        setpass(e.target.value);
    }
    function handleButton()
    {
        if(email && pass)
        {
            const anchor = document.getElementById('myAnchor');
            anchor.classList.remove('disable');
        }
        else{
            alert("fill all the fields");
        }
    }
    const text= <NavLink to='home' id="myAnchor" className='disable'>click</NavLink>;

    return(
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-6" id="col1">
                    <p className="display-4" id="heading">Prof Review</p>
                    <h1>NITW</h1>
                    <h6 id="caption">A platform where students' voice is heard.Review your professors genuienly and help them improve.Your valuable feedbacks show us a path to betterment.</h6>
                </div>
                <div className="col-sm-12 col-md-6" id="col2">
                    <p className="lead">Sign In</p>
                    <Input fun={HandleMail} type="text" category="email" holder="Email"></Input>
                    <Input fun={Handlepass} type="password" category="password" holder="Password"></Input>
                    <Button fun={handleButton} text={text}></Button>
                </div>
            </div>

        </div>
    );
}

export default Login