import { Route, Routes, Navigate, BrowserRouter} from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Main from './Main';

function App(){
  const user = localStorage.getItem("tokeb")
  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />}/>} 
      <Route path="/signup" exact element={<Signup />}/>
      <Route path="/login" exact element={<Login />}/>
      <Route path="/" exact element={<Navigate replace to="/login" />}/>
    </Routes>
  );
}

export default App;