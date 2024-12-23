// src/components/Footer/Copyright/Copyright.js
import React from 'react';
import './Copyright.css'

const Copyright = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer-bottom">
            <p>&copy; {currentYear} GameVerse. All Rights Reserved. | Designed & Developed by Zeyad Al-Houssainy.</p>
        </div>
    )
}

export default Copyright

