// import React from 'react';
 
// export default class Login extends React.Component {
//     constructor(props) {
//         super(props);
        
//         this.state = {
//           email: '',
//           password: ''
//       }

//     }

//     handleFormSubmit = (event) => {
//       event.preventDefault();
//   }

//     render() {
//         return (
//           <>
//            <h1>Please Login Here</h1>
//            <form action="" method="post" onSubmit={ this.handleFormSubmit }>
//               Email:<br />
//               <input type="text" name="email" 
//                   value={ this.state.email } 
//                   onChange={ this.handleEmailChange } 
//               /><br />
//               Password:<br />
//               <input type="password" name="password" 
//                   value={ this.state.password } 
//                   onChange={ this.handlePasswordChange }
//               /><br />
//               <input type="submit" value="Log in" />
//           </form>
//           </>
//         )
//     }
// }