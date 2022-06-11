import ScreenOpen from './components/ScreenOpen/ScreenOpen'
import UserLogin from './components/UserLogin/UserLogin'
import './App.css';

function App() {
  const userName = "Lucas";

  const firstAcess = () => {
    if (userName === "") {
      return <UserLogin />
    } else {
      return (
        <p>Usuário existe</p>
      )
    }
  }

  return (
    <div className="App">
      <ScreenOpen firstAcess={userName}/>
    </div>
  );
}

export default App;
