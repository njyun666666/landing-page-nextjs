import classNames from 'classnames';
import Link from 'next/link';
import { iMenu } from '../../lib/models/iHeader';

const MediumMenu = ({ menuData }: { menuData: iMenu }) => {
  return (
    // <!--medium menu with svg icon-->
    <li className="nav-item dropdown">
      <a
        id={`navbarmd${menuData.menuId}`}
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {menuData.title}
      </a>

      <div className="dropdown-menu dropdown-menu-md dropdown-menu-lg-center p-4">
        <div className="list-group list-group-flush">
          {menuData.childrens.map((subMenu) => (
            <a key={subMenu.menuId} className="list-group-item dropdown-item d-flex align-item-center" href="#">
              {/* <!-- Icon --> */}
              <div className="align-self-center text-primary">
                <i className={subMenu.icon}></i>
              </div>

              {/* <!-- Content --> */}
              <div className="ms-4 align-self-center">
                <h6 className="fw-medium text-uppercase mb-0">{subMenu.title}</h6>
                <p className="text-light-blue mb-0">{subMenu.subTitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </li>
  );
};

export default MediumMenu;
