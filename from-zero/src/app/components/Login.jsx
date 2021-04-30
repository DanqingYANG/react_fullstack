// // import { connect } from 'mongodb'
// // import React from 'react'
// import {Link} from 'react-router-dom'

// // take authenticateUser, authenticated as input variables.
// // function Login({authenticateUser, authenticated}) {
// //     return (
// //         <>
           
// //         </>
// //     )
// // }


// import React from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

// export const Login = ({requestCreateUserAccount,authenticated}) => {
//     return (
//         <div>
//              <h2>
//                 Please login
//             </h2>
//             <h3> 
//                 <Link to="signup">
//                     Sign up
//                 </Link>
//             </h3>
//             <form onSubmit={requestCreateUserAccount}>
//                 <input defaultValue="User Name"/>
//                 <input defaultValue=""/>
//                 {authenticated == mutations.USERNAME_RESERVED ? <p>A user by that name already exists.</p> : null}
//                 <button>
//                     Log in
//                 </button>
//             </form>
//         </div>
//     )
// }

// Login.propTypes = {
//     props: PropTypes
// }

// const mapStateToProps = (state) => ({
//     authenticated:state.session.authenticated
// })


// const mapDispatchToProps =(dispatch)=> {
//     return{
//         actions:{
//             requestCreateUserAccount(e){
//                 e.preventDefault();
//                 let username = e.target[`username`].value;
//                 let password = e.target[`password`].value;
//                 console.log("Creating!",username,password);
//                 dispatch(mutations.requestCreateUserAccount(username,password));
//             }
//         }
//     };
// }

// export default ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login)

