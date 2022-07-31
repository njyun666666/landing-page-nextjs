/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import fetcher from '../lib/utils/fetcher';
import useSWR from 'swr';
import { iHeader } from '../lib/models/iHeader';
import MegaMenu from '../components/menus/MegaMenu';
import DropdownSubmenu from './menus/DropdownSubmenu';
import MediumMenu from './menus/MediumMenu';
import { useSelector } from 'react-redux';
import { RootState } from '../lib/store/store';

const Header = () => {
  const header_offset = 90;
  const [scrollTop, setScrollTop] = useState(0);
  const headerColorMode = useSelector((state: RootState) => state.header.headerColorMode);
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    window.addEventListener('scroll', function () {
      setScrollTop(document.body.scrollTop || document.documentElement.scrollTop);
    });
  }, []);

  useEffect(() => {
    if (headerColorMode == 'dark-to-light') {
      if (scrollTop < header_offset) {
        setThemeMode('dark');
      } else {
        setThemeMode('light');
      }
    } else {
      setThemeMode('light');
    }
  }, [scrollTop, headerColorMode]);

  const { data, error } = useSWR('/api/Header', fetcher<iHeader>);

  return (
    <header>
      <nav
        className={
          `main-nav navbar navbar-expand-lg hover-navbar fixed-top ` +
          classnames({
            'dark-to-light': headerColorMode == 'dark-to-light',
            'navbar-dark': themeMode == 'dark',
            'navbar-light': themeMode == 'light',
            'bg-white': themeMode == 'light',
            'navbar-scrolled': headerColorMode == 'dark-to-light' && scrollTop >= header_offset,
          })
        }
      >
        <div className="container">
          <Link href="#">
            <a className="navbar-brand main-logo">
              {themeMode == 'dark' && <img className="logo-light" src={data?.logoLight} alt="LOGO" />}
              {themeMode == 'light' && <img className="logo-dark" src={data?.logoDark} alt="LOGO" />}
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo"
            aria-controls="navbarTogglerDemo"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              {data?.menus.map((menu) => (
                <React.Fragment key={menu.menuId}>
                  {(menu.menuTypeId as string) === 'Mega-menu' && <MegaMenu menuData={menu} />}
                  {(menu.menuTypeId as string) === 'Dropdown-Submenu' && <DropdownSubmenu menuData={menu} />}
                  {(menu.menuTypeId as string) === 'Medium-menu' && <MediumMenu menuData={menu} />}
                  {menu.menuTypeId === null && (
                    <li className="nav-item ">
                      <Link href={menu.url || '#'}>
                        <a className="nav-link" role="button">
                          {menu.title}
                        </a>
                      </Link>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
