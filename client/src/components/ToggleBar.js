import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const ToggleBar = () => {

    const[darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {

        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <nav className="toggleBar">
            <div className="dark-mode__toggle">
                <div
                onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    );
};

export default ToggleBar;