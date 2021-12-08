import './App.css';
import LoginButton from './components/LoginButton'
import Profile from './components/Profile'
import LogoutButton from './components/LogoutButton'

import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const {isAuthenticated} = useAuth0()
  //test1234_

  return (
    <div className="App">
      <h1>Application</h1>
      {
        isAuthenticated ? <LogoutButton /> : <LoginButton />
      }
      
      
      <Profile/>
    </div>
  );
}

export default App;
