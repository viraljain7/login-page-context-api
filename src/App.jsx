import "./App.css";
import Login from "./components/Login";
import LoginInVerif from "./components/LoginInVerif";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <LoginInVerif />
    </UserContextProvider>
  );
}

export default App;
