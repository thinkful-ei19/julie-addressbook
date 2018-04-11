import React from 'react';

export default function Form(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <form onSubmit={(event) => {
                event.preventDefault()

            }}>
            </form>
            <button>Submit</button>
                
            
        </div>
    )
};