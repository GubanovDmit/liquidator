import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

export const Header = () => (
    <div className="header">
        Header
        <NavLink to="/create">
            <div>Create New Exchanger</div>
        </NavLink>
    </div>
);
