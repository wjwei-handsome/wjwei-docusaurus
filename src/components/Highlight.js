import React from 'react';

export default function Highlight({ children, color }) {
    return ( <span style = {
            {
                backgroundColor: color,
                borderRadius: '2px',
                color: '#fff',
                padding: '.1rem',
            }
        } > { children } </span>);
    }