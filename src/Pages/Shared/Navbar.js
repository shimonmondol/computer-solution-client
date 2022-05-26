import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
    const items = <>
        <div class="dropdown">
            <li><Link to="/">Home</Link></li>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow rounded-box w-18">
                <li><Link to="/hardware">Hardware</Link></li>
                <li><Link to="/software">Software</Link></li>
            </ul>
        </div>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/businessSummary">Business Summary</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/portfolio">My Portfolio</Link></li>
        <li>{user ? <button className="btn btn-ghost" onClick={logout} >Log Out</button> : <Link to="/login">Login</Link>}</li>
    </>
    return (
        <div class="navbar bg-accent">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Computer Solution</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {items}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;