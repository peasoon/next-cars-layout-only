'use client'
import { link } from 'fs';
import { NextPage } from 'next';
import { PT_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import Hamburger from 'hamburger-react'
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

interface IHeaderProps {
}

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: '400'
})

const Header: NextPage<IHeaderProps> = (props) => {
  const navItems = ['Home', 'Recipes', 'Article', 'Contact', 'Purchase']
  const [isOpened, setIsOpened] = useState(false)
  return <header className={ptSans.className + ' header'}>
    <div className="container header-container">
      <div className="header__logo">
        <Image
          src={'/logo.svg'}
          alt='logotype'
          width={0}
          height={0}
          style={{ width: 100, height: 17 }}
        />
      </div>
      <div className={`header__menu ${isOpened ? 'opened' : ''}`}>
        <nav className="header__nav">
          <ul className="nav__list">
            {navItems.map(item => <li key={React.useId()}><Link href={'#'}>{item}</Link></li>)}
          </ul>
        </nav>
        <div className="header__search">
          <input type="text" className='search-input' />
          <Image
            src={'/search.svg'}
            alt='search icon'
            width={0}
            height={0}
            style={{ width: 16, height: 'auto' }}
          />
        </div>
      </div>
      {useMediaQuery({ query: '(max-width: 48rem)' }) && <Hamburger toggled={isOpened} toggle={() => { setIsOpened(prev => !prev) }} />}
    </div>
  </header>;
};

export default Header;
