import './cadastro.css'
function Cadastro() {
    return (
    <div className="container">
    <div className="container-login">
      <div className="wrap-login">
    <form className="login-form">
           <span className="login-form-title">Cadastro</span>
           <div className="wrap-input">
             <input className="input" type="nick-name" placeholder='Nome de Usuário'
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