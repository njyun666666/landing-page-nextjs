import classNames from 'classnames';
import Link from 'next/link';
import { iMenu } from '../../lib/models/iHeader';

const MegaMenu = ({ menuData }: { menuData: iMenu }) => {
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
      <div className="dropdown-menu dropdown-md dropdown-menu-lg-center py-0">
        <div className="row g-0">
          {menuData.childrens.map((menu, index) => {
            return (
              <div key={menu.menuId} className={`col-12 col-md-6 ` + classNames({ 'bg-light': index % 2 === 1 })}>
                <div className="dropdown-md-area">
                  <p className="dropdown-md-title">{menu.title}</p>

                  {menu.childrens.map((subMenu) => {
                    return (
                      <Link href={subMenu.url ? subMenu.url : '#'} key={subMenu.menuId}>
                        <a className="dropdown-item d-flex">
                          <div className="drop-icon bg-primary text-light rounded-3">
                            <i className={subMenu.icon}></i>
                          </div>
                          <div className="drop-text">
                            <p className="fw-medium">{subMenu.title}</p>
                          </div>
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="col-12 border-top text-center">
            <div className="p-3 small">{menuData.subTitle}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MegaMenu;
