import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Product() {
    return (
        <div>
            <h1>I 'm inside Product!</h1>
            <Outlet />
        </div>
    )
}
