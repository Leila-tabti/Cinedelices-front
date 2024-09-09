import React from 'react';
import './Footer.scss';
import {NavLink} from 'react-router-dom';
export default function Footer () {
 
   return (
    <footer>
         <ul>
            <li className="footer-item"><NavLink to='/Contact'>Contact </NavLink></li>
            <li className="footer-item"><NavLink to='/LegalNotice'>Mentions Légales </NavLink></li>
            <li className="footer-item"><NavLink to ='/About'>A propos</NavLink></li>
            <li className="footer-item"><NavLink to ='/Login'>Connexion</NavLink></li>
            <li className="footer-item"><NavLink to ='/Register'>Inscription</NavLink></li>
         </ul>
   </footer>
   );
};