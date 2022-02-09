import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Search from './search';

function Home(){
    return (
        <div>
            
        <div className='home_header'>
            <div className='home_headerLeft'>
            <Link to="/about">About</Link>
            <Link to="/about">Store</Link>
            </div>

        <div className='home_headerRight'>
        <Link to="/about">Gmail</Link>
        <Link to="/about">Images</Link>
        <AppsOutlinedIcon/>
        <PermIdentityOutlinedIcon/>
        </div>

        </div>
        <div className='home_body'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" />
        </div>

        <div className='home_inputContainer'>
            <Search/>
        </div>

        </div>
    )
};
//1. to install the material ui icons 
//2. to install the react router dom
export default Home;