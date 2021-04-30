import React from 'react'
import { connect } from 'react-redux'
import { requestCreateUserAccount } from '../app/store/mutations';

// authenticated_k is a name definded in this document. 
// 
export const TestRedux = ({authenticated, requestCreateUserAccount}) => {
    let word = "a word";
    if(authenticated === true){
        console.log("true");
    }
    if(Boolean(authenticated) === false){
        console.log("false");
    }
    if (authenticated === undefined) {
        console.log('Undefined value!');
    }
    console.log("a");
    console.log(((Boolean)(authenticated)));
    console.log('typeof: ',(typeof(authenticated)));

    return (
        <div>
            <button onClick={requestCreateUserAccount}>
                {authenticated? null:word} hello
            </button>
            {/* <h>{authenticated}</h> */}
        </div>
    )
}

// TestRedux.propTypes = {
//     authenticated_k: boolean
// }

const mapStateToProps = (state) => ({
    authenticated:state.session.authenticated
})

const mapDispatchToProps = {
    requestCreateUserAccount(e){
        //e.preventDefault();
        console.log("Creating!");
        //dispatch(mutations.requestCreateUserAccount(username,password));
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestRedux)