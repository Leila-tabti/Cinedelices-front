import React from 'react';
import './Header.scss';
import HeaderLogo from './HeaderLogo';
import HeaderForm from './HeaderForm';
import HeaderAuth from './HeaderAuth';
import HeaderBurger from './HeaderBurger';
import { ILoggedUser } from '../../../types/types';

interface HeaderProps {
  user: ILoggedUser | null
};




export default function Header(props: HeaderProps) {
    const { user } = props;
    return (
        <>
      <header className="header">
        <HeaderLogo />
        <HeaderForm />
        <HeaderAuth />
        <HeaderBurger user={user}/>

      </header>
      </>
    );
  }