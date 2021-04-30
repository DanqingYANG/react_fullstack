import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as mutations from '../store/mutations';

const ButtonClick = () =>{
    console.log("Hello World.");
}

const mapStateToProps = state=>({
    authenticated:state.session.authenticated
});

const mapDispatchToProps=(dispatch, ownProps) => {
    return{
        requestCreateUserAccount(e){
            e.preventDefault();
            let username = e.target[`username`].value;
            let password = e.target[`password`].value;
            console.log("Creating!",username,password);
            dispatch(mutaions.requestCreateUserAccount(username,password));
        }
    }
}

const SignupComponent = () =>
{
    return(
        <>
            <h2>
                Complete the following form to create a new account.
            </h2>
            
            <form onSubmit={authenticated, requestCreateUserAccount}>
                <label>
                    <span>User Name</span>
                    <input type="text" name="username" defaultValue="Danqing"></input>
                </label>
                <label>
                    <span>Password</span>
                    <input type="text" name="password" defaultValue="password"></input>
                </label>
                <div>
                <input type="submit" value="Sign up"/> 
                {/* {<button onClick={ButtonClick}>
                    Sign Up
                </button>} */}
                </div>
            </form>
        </>
    )
};


export const Signup = connect(mapStateToProps, mapDispatchToProps)(SignupComponent);
