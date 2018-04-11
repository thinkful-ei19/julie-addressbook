import React from 'react';

export default function Form(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <form onSubmit={(event) => {
                event.preventDefault()
                let inputName = event.target.userName.value
                let inputAddress = event.target.userAddress.value
                props.passContact({name:inputName, address:inputAddress})
            }}>
                <input type="text" name="userName" />
                <input type="text" name="userAddress" />
                <button type="submit">Submit</button>
            </form>
            
            
                
            
        </div>
    )
};