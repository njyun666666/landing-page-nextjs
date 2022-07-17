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

const Header = () => {
  const header_offset = 90;
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', function () {
      setScrollTop(document.body.scrollTop || document.documentElement.scrollTop);
    });
  }, []);

  const { data, error } = useSWR('/api/Header', fetcher<iHeader>);

  return (
    <header>
      <nav
        className={
          `main-nav navbar navbar-expand-lg hover-navbar fixed-top dark-to-light ` +
          classnames({
            'navbar-dark': scrollTop < header_offset,
            'navbar-light': scrollTop >= header_offset,
            'navbar-scrolled': scrollTop >= header_offset,
          })
        }
      >
        <div className="container">
          <Link href="#">
            <a className="navbar-brand main-logo">
              <img className="logo-light" src="/img-min/logo/logo-light.png" alt="LOGO" />
              <img className="logo-dark" src="/img-min/logo/logo.png" alt="LOGO" />
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
