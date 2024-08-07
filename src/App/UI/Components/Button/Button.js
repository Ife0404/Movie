import React from 'react';
import './Button.css';

function Button({ type, onClick, text }) {
    return (
        <div>
            <button onClick={onClick} type={type} className="button">
                {text}
            </button>
        </div>
    )
}

export default Button
