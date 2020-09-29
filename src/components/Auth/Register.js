import React, {useState} from 'react'
import styles from './Register.module.css'

import Alert from "../Alert/Alert";

const Register = () => {
  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");

  const alert = document.querySelector("#alert");
  console.log(alert);

  const onSubmit = (e) => {
    e.preventDefault();
    if(username === "test@test.com" && password === 'testtest'){
      console.log(username, password)
      return <Alert text="The user is logged in" />
    }   else {
        return <Alert text="Please proper credientials" />
    }
  }
  return (
    <div className={styles.register_container}>
      
      <div className={styles.head_content}>
      <h3>Log In</h3>
      <div>
        <span>Need a Mailchimp account?
</span>
<a href="https://login.mailchimp.com/signup/">
<span>
Create an account</span>
</a>
      </div>

      <div className={styles.form_container}>
        <form>
          <div className={styles.form_group}>
            <label htmlFor="username">UserName</label>
            <input type="email" value={username} name="username" id="username" onChange={e => setUsername(e.target.value)} />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="password">Password</label>
            <input type="password" value={password} name="password" id="password" onChange={e => setPassword(e.target.value)} />
          </div>
          <button className={styles.form_button} onClick={onSubmit}>Log In</button>

        </form> 
        <div id="alert"></div>
      </div>

      </div>
    </div>
  )
}

export default Register
