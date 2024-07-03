import React,{useState} from 'react'
import "./Sign.css"

export default function Sign_in() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <main class="signmain">
            <div class="loginboxi">
                <form action="#">
                    <h1>Login</h1>
                    <div class="input_box input_boxi"><input type="email" placeholder="Username"onChange={(e)=>setEmail(e.target.value)}  required/></div>
                    <div class="input_box input_boxi"><input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/></div>
                    <div class="rem"><a href="#">Forgot password?</a></div>
                    <button type="submit">Login</button>
                    <p>Dont have an account? <a href="/signup">Sign Up</a></p>
                </form>
            </div>
        </main>
    </>
  )
}
