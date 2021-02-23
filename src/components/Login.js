import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent'
// const GOOGLE_BUTTON_ID = "google-sign-in-button";

// class Login extends React.Component{
//     componentDidMount() {
//         window.gapi.signin2.render(GOOGLE_BUTTON_ID, {
//           width: 200,
//           height: 50,
//           onsuccess: this.onSuccess
//         });
//       }
    
//       onSuccess(googleUser) {
//         const profile = googleUser.getBasicProfile();
//         console.log("Name: " + profile.getName());
//         // var id_token = googleUser.getAuthResponse().id_token;
//         // console.log("ID Token: " + id_token);
//       }
    
//       render() {
//         return(
//             // <Card>
//             //     <CardContent>
//                     <div id={GOOGLE_BUTTON_ID} />
//             //     </CardContent>
//             // </Card>
//         ) 
//       }
// }
// export default Login;

const GOOGLE_BUTTON_ID = "google-sign-in-button";

class Login extends React.Component {
  componentDidMount() {
    window.gapi.signin2.render(GOOGLE_BUTTON_ID, {
      width: 200,
      height: 50,
      onsuccess: this.onSuccess,
      onfailure: this.onFailure
    });
  }

  onSuccess(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log("Name: " + profile.getName());
    console.log()
  }
  onFailure(e){
    console.log(e)
  }

  render() {
    return <div id={GOOGLE_BUTTON_ID} />;
  }
}
export default Login;