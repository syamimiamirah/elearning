import React from 'react';
import { Link } from 'react-router-dom';

const Nav=()=>{
    return(
        <div>
            <ul className='nav-ul'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/pomodoro">Pomodoro</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/signup">Register</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    )
}

export default Nav;