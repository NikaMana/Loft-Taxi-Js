import React from "react";
import { Redirect } from 'react-router-dom';
import { isLoginSelector } from '../../store/selectors';
import {actions} from '../../store/duck';
import {connect} from 'react-redux';

export const LoginForm = ({setPage}) => {
    const onSubmit = e => { 
        e.preventDefault();
        setPage('profile')
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type="email" name="email" label="email" placeholder="Email" />
            </div>
            <div>
                <input type="password" name="password" label="password" placeholder="Password" />
            </div>
            <div>
                <input type="name" name="name" label="name" placeholder="Name" />
            </div>
            <div>
                <input type="surname" name="surname" label="surname" placeholder="Surname" />
            </div>
            <button>signup</button>
        </form>
    )
};   