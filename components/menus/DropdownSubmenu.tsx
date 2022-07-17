import Link from 'next/link';
import React from 'react';
import { iMenu } from '../../lib/models/iHeader';

const SubMenu = (subMenu: iMenu) => {
  if (!subMenu.childrens || subMenu.childrens.length === 0) {
    return (
      <li>
        <Link href={subMenu.url ? subMenu.url : '#'}>
          <a className="dropdown-item">{subMenu.title}</a>
        </Link>
      </li>
    );
  }

  return (
    <li className="dropdown-submenu">
      <a id={`sub${subMenu.menuId}`} className="dropdown-item dropdown-toggle" href="#">
        {subMenu.title}
      </a>
      <ul className="submenu dropdown-menu">
        {subMenu.childrens.map((subMenuChild) => (
          <React.Fragment key={subMenuChild.menuId}>SubMenu(subMenuChild)</React.Fragment>
        ))}
      </ul>
    </li>
  );
};

const DropdownSubmenu = ({ menuData }: { menuData: iMenu }) => {
  return (
    <li className="nav-item dropdown">
      <a
        id={`navbarDropdown-${menuData.menuId}`}
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {menuData.title}
      </a>

      <ul className="dropdown-menu dropdown-menu-lg-center">
        {menuData.childrens.map((subMenu) => (
          <React.Fragment key={subMenu.menuId}>SubMenu(subMenu)</React.Fragment>
        ))}
      </ul>
    </li>
  );
};

export default DropdownSubmenu;
