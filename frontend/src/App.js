import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
     <Routes>
      <Route path="/" element={<h1>Home Component</h1>}/>
      <Route path="/events" element={<h1>Events Component</h1>}/>
      <Route path="/pomodoro" element={<h1>Pomodoro Component</h1>}/>
      <Route path="/profile" element={<h1>Profile Component</h1>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/logout" element={<h1>Logout Component</h1>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
     
    </div>
  );
}

export default App;
