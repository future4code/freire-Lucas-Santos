import './UserLogin.css';

function Login() {
  return (
    <div className="App">
      <section className="user-recorder" >
        <h1>Digite seu nome de usuário para entrar:</h1>
        <input type="text" />
        <button>Enviar</button>
      </section>
    </div>
  );
}
export default Login;