import React from 'react';

export default function User(props){
    return (
        <div>
            <h1>User details</h1>
            Name: {props.name}
            Age: {props.age}
        </div>
    );
}