import React from 'react';
import './Header.scss';


import HeaderLogo from './HeaderLogo';
import HeaderForm from './HeaderForm';
import HeaderAuth from './HeaderAuth';

import Navbar from '../Navbar/Navbar';


export default function Header() {
    return (
        <>
      <header className="header">
        <HeaderLogo />
        <HeaderForm />
        <HeaderAuth />
      </header>
      </>
    );
  }