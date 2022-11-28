import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarHead from './component/NavbarHead';
import { Route, Routes } from 'react-router-dom';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <NavbarHead/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
