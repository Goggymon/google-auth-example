import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import Calculator from './calculator.js';
import { GoogleLogout } from 'react-google-login';

class State{
  constructor(){
    this.authenticated = false;
  }
}

const responseGoogle = (response) => {
  console.log(response);
  State.authenticated = true;
  document.getElementById('googleButton').innerHTML = "<img src=" + response.profileObj.imageUrl + ">";
  document.getElementById('response').innerHTML = "Welcome " + response.profileObj.name;
  ReactDOM.render(<Calculator />, document.getElementById('Calculator'));
  document.getElementById('Calculator').style.display = "block";
}

ReactDOM.render(
  <GoogleLogin
    clientId="447012010585-b9fuirddc7j2f3u0bqgdrqgc75rkn7lk.apps.googleusercontent.com"
    buttonText="Sign in with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
  />,
  document.getElementById('googleButton')
);

if (State.authenticated){
  ReactDOM.render(  
    <GoogleLogout
      clientId="447012010585-b9fuirddc7j2f3u0bqgdrqgc75rkn7lk.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    >
    </GoogleLogout>,
    document.getElementById('logout')
  );
}    
