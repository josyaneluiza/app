import './cadastro.css'
function Cadastro() {
return (
<div className="container">
<div className="container-login">
  <div className="wrap-login">
<form className="login-form">
       <span className="login-form-title">Cadastro</span>
       <div className="wrap-input">
         <input  className="input" type="email" placeholder="Email"
         />
       </div>
       <div className="wrap-input">
         <input className="input" type="password" placeholder='Senha'
          />
       </div>
       <div className="container-login-form-btn">
 <button className="login-form-btn" >Continuar</button>
       </div>
     </form>
     </div>
</div>
</div> 
  );
}

