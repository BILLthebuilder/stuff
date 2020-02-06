import React from 'react'
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <React.Fragment>
            <p style={{ fontWeight: '900' }}> The page you are looking for cannot be found </p> 
            <p>Click<Link to="/">{' '} <li style={{color:'red', listStyleType:'none'}}>here</li>{' '}</Link>to return to the homepage </p>  
        </React.Fragment>
    )
}
