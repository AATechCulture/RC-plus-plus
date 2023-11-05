import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import LoginSignup from './components/logins/login-signup.jsx';
import LoginSignup from './components/logins/login-signup';

function App() {
  return (
    <div>
      {/* Log component on the screen */}
      <LoginSignup />
    </div>
  );
}

export default App;
