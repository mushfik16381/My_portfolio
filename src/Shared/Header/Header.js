import { Container } from '@mui/system';
import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <div className="navbar bg-base-100">
            <div className="navbar-start">
            <div className="dropdown mr-4">
                <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-80">
                    <li><Link>Home</Link></li>
                    <li><Link>Home</Link></li>
                    <li><Link>Home</Link></li>
                    </ul>
            </div>
                <Link className="font-semibold normal-case text-4xl "> Portfolio</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 mx-4">
                <li className='mx-4 text-xl font-normal'><Link>Home</Link></li>
                <li className='mx-4 text-xl font-normal'><Link>Contact Me</Link></li>
                <li className='mx-4 text-xl font-normal'><Link>My Projects</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn"><DownloadIcon/> Resume</Link>
            </div>
            
            </div>
        </Container>
    );
};

export default Header;