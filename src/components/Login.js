import { useState } from "react";
import axios from 'axios';
function Login() {

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[error, setError] = useState('');

    const handleLogin = async (e) => {
      e.preventDefault();

    console.log(email,password);

    try {
    const response = await axios.post('http://localhost:3000/login', JSON.stringify({email, password}),
   { 
    headers: {'Content-Type': 'application/json'}
    }
    );
   }catch (error) {
    if (!error?.response) {
      setError('Erro ao acessar o servidor');}
      else if (error.response.status == 401){
        setError('Usuário ou senha inválidos');
      }
    }
    };

  return (<form className="login-form">
       <span className="login-form-title">Login</span>
       <div className="wrap-input">
         <input  className="input" type="email" placeholder="Email"
         required
         onChange={(e) => setEmail(e.target.value)}/>
       </div>
       <div className="wrap-input">
         <input className="input" type="password" placeholder='Senha'
          required
          onChange={(e) => setPassword(e.target.value)}/>
       </div>
       <div className="container-login-form-btn">
 <button className="login-form-btn" onClick={(e) => handleLogin(e)}>LOGIN</button>
       </div>
       <p>{error}</p>
     </form>
  );
}
 export default Login;