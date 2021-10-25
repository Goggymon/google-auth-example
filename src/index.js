import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import Calculator from './calculator.js';



const responseGoogle = (response) => {
  console.log(response);
  document.getElementById('googleButton').innerHTML = "<img src=" + response.profileObj.imageUrl + ">";
	document.getElementById('response').innerHTML = "Welcome " + response.profileObj.name;
}

ReactDOM.render(
  <GoogleLogin
    clientId="447012010585-b9fuirddc7j2f3u0bqgdrqgc75rkn7lk.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
		  isSignedIn={true}

  />,
  document.getElementById('googleButton')
);

  
ReactDOM.render(<Calculator />, document.getElementById('Calculator'));
