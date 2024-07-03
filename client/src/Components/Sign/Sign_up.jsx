import React from 'react';
import { useNavigate } from "react-router-dom";
export default function Sign_up() {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneno] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmpassword, setComfirmPassowrd] = useState('');
  const handleClick = () => {
    navigate('/admin/*');
  };

  return (
    <>
        <main class="signmain">
            <div class="loginboxu">
                <form action="#">
                    <h1>Sign Up</h1>
                    <div class="input_box input_boxu"><input type="text" placeholder="First Name" onChange={(e)=>setFirstname(e.target.value)} required/></div>
                    <div class="input_box input_boxu"><input type="text" placeholder="Last Name" onChange={(e)=>setLastname(e.target.value)} required/></div>
                    <div class="input_box input_boxu"><input type="email" placeholder="Email-id" onChange={(e)=>setEmail(e.target.value)} required/></div>
                    <div class="input_box input_boxu"><input type="tel" placeholder="Phone Number"  pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="12" onChange={(e)=>setPhoneno(e.target.value)} required/></div>
                    <div class="input_box input_boxu"><input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/></div>
                    <div class="input_box input_boxu"><input type="password" placeholder="Confirm Password" onChange={(e)=>setComfirmPassowrd(e.target.value)} required/></div>
                    <div class="genderinput">
                        <input type="radio" name="gender" id="m"/>
                        <input type="radio" name="gender" id="f"/>
                        <input type="radio" name="gender" id="n"/>
                        <h2>Gender</h2>
                        <div>
                            <label for="m"><span class="dot md"></span>
                                <span class="gender">Male</span></label>
                            <label for="f"><span class="dot fd"></span>
                                <span class="gender">Female</span></label>
                            <label for="n"><span class="dot nd"></span>
                                <span class="gender">Prefer not to say</span></label>
                        </div>
                    </div>
                    <button type="submit" onClick={handleClick}>Sign up</button>
                </form>
            </div>
        </main>
        </>
  )
}
