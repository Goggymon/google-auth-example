import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
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