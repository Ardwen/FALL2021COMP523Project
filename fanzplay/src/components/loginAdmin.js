
import React, { useState } from 'react';
import {signin} from "./auth.js"

function LoginAdmin(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      console.log(username.value);
      await a = signin(username.value, password.value);
      if(a){
        props.history.push('/');
      }else{
        console.log("not a valid user");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="center-white" >
      Login<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 15 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={'Login'} onClick={handleLogin} /><br />
      <a href="/register">register now!</a>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default LoginAdmin;
