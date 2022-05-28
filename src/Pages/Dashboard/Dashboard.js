import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="bg-base-300 drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="bg-base-300 drawer-content">
                <h2 className='text-3xl font-bold text-blue-500'>Welcome to Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div class="bg-base-300 drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/review">My Review</Link></li>
                    <li><Link to="/dashboard/profile">My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;