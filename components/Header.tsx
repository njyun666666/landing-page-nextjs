import Link from 'next/link';
import classnames from 'classnames';
import { useEffect, useState } from 'react';

const Header = () => {
  const header_offset = 90;
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', function () {
      setScrollTop(document.body.scrollTop || document.documentElement.scrollTop);
    });
  }, []);

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
              <li className="nav-item dropdown">
                <Link href="#">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="navbarDropdown1"
                  >
                    Home
                  </a>
                </Link>
                <div
                  className="dropdown-menu dropdown-md dropdown-menu-lg-center py-0"
                  aria-labelledby="navbarDropdown1"
                >
                  <div className="row g-0">
                    <div className="col-12 col-md-6">
                      <div className="dropdown-md-area">
                        <p className="dropdown-md-title">Corporate</p>
                        <Link href="#">
                          <a className="dropdown-item d-flex" href="index-agency.html">
                            <div className="drop-icon bg-primary text-light rounded-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-briefcase"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
                                />
                                <path
                                  fillRule="evenodd"
                                  d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
                                />
                              </svg>
                            </div>
                            <div className="drop-text">
                              <p className="fw-medium">Agency</p>
                            </div>
                          </a>
                        </Link>
                        <Link href="#">
                          <a className="dropdown-item d-flex" href="index-company.html">
                            <div className="drop-icon bg-primary text-light rounded-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-building"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                                />
                                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                              </svg>
                            </div>
                            <div className="drop-text">
                              <p className="fw-medium">Company</p>
                            </div>
                          </a>
                        </Link>
                        <Link href="#">
                          <a className="dropdown-item d-flex" href="index-coworking.html">
                            <div className="drop-icon bg-primary text-light rounded-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-people"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                                />
                              </svg>
                            </div>
                            <div className="drop-text">
                              <p className="fw-medium">Coworking</p>
                            </div>
                          </a>
                        </Link>
                        <Link href="#">
                          <a className="dropdown-item d-flex" href="index-course.html">
                            <div className="drop-icon bg-primary text-light rounded-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-easel"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8.473.337a.5.5 0 0 0-.946 0L6.954 2h2.092L8.473.337zM12.15 11h-1.058l1.435 4.163a.5.5 0 0 0 .946-.326L12.15 11zM8.5 11h-1v2.5a.5.5 0 0 0 1 0V11zm-3.592 0H3.85l-1.323 3.837a.5.5 0 1 0 .946.326L4.908 11z" />
                                <path
                                  fillRule="evenodd"
                                  d="M14 3H2v7h12V3zM2 2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"
                                />
                              </svg>
                            </div>
                            <div className="drop-text">
                              <p className="fw-medium">Course</p>
                            </div>
                          </a>
                        </Link>
                        <Link href="#">
                          <a className="dropdown-item d-flex" href="index-portfolio.html">
                            <div className="drop-icon bg-primary text-light rounded-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-images"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12.002 4h-10a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1zm-10-1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-10zm4 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                                />
                                <path
                                  fillRule="evenodd"
                                  d="M4 2h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1z"
                                />
                              </svg>
                            </div>
                            <div className="drop-text">
                              <p className="fw-medium">Portfolio</p>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 bg-light">
                      <div className="dropdown-md-area">
                        <p className="dropdown-md-title">App &amp; Others</p>
                        <Link href="#">
                          <a className="dropdown-item d-flex" href="index-default.html">
                            <div className="drop-icon bg-primary text-light rounded-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-braces"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z" />
                              </svg>
                            </div>
                            <div className="drop-text">
                              <p className="fw-medium">Default</p>
                            </div>
                          </a>
                        </Link>
                        <Link href="#">
                          <a className="dropdown-item d-flex" href="index-apps.html">
                            <div className="drop-icon bg-primary text-light rounded-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-app-indicator"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
                                />
                                <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                              </svg>
                            </div>
                            <div className="drop-text">
                              <p className="fw-medium">Mobile App</p>
                            </div>
                          </a>
                        </Link>
                        <Link href="#">
                          <a className="dropdown-item d-flex" href="index-desktop.html">
                            <div className="drop-icon bg-primary text-light rounded-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-laptop"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z"
                                />
                                <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z" />
                              </svg>
                            </div>
                            <div className="drop-text">
                              <p className="fw-medium">Desktop App</p>
                            </div>
                          </a>
                        </Link>
                        <Link href="#">
                          <a className="dropdown-item d-flex" href="index-personal.html">
                            <div className="drop-icon bg-primary text-light rounded-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-person"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                                />
                              </svg>
                            </div>
                            <div className="drop-text">
                              <p className="fw-medium">Personal</p>
                            </div>
                          </a>
                        </Link>
                        <Link href="#">
                          <a className="dropdown-item d-flex" href="index-event.html">
                            <div className="drop-icon bg-primary text-light rounded-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-puzzle"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4.605 2.5V2v.5zM3.61 3.6l.498-.043V3.55l-.498.05zM7 2.5h.5A.5.5 0 0 0 7 2v.5zm-.676 1.454l.304.397-.304-.397zm3.352 0l-.304.397.304-.397zM9 2.5V2a.5.5 0 0 0-.5.5H9zm3.39 1.1l-.498-.05v.007l.498.043zM12.1 7l-.498-.043a.5.5 0 0 0 .498.543V7zm1.854-.676l.397.304-.397-.304zm0 3.352l.397-.304-.397.304zM12.1 9v-.5a.5.5 0 0 0-.498.542L12.1 9zm.29 3.4l-.498.043v.007l.498-.05zM9 13.5h-.5a.5.5 0 0 0 .5.5v-.5zm.676-1.454l-.304-.397.304.397zm-3.352 0l.304-.397-.304.397zM7 13.5v.5a.5.5 0 0 0 .5-.5H7zm-2.395 0V13v.5zm-.995-1.1l.498.05v-.007L3.61 12.4zM3.9 9l.498.042A.5.5 0 0 0 3.9 8.5V9zm-1.854.676l-.397-.304.397.304zm0-3.352l-.397.304.397-.304zM3.9 7v.5a.5.5 0 0 0 .498-.543L3.9 7zm.705-5a1.5 1.5 0 0 0-1.493 1.65l.995-.1A.5.5 0 0 1 4.605 3V2zM7 2H4.605v1H7V2zm.5.882V2.5h-1v.382h1zm-.872 1.469c.375-.287.872-.773.872-1.469h-1c0 .195-.147.42-.48.675l.608.794zM6.5 4.5l.001-.006a.113.113 0 0 1 .012-.025.459.459 0 0 1 .115-.118l-.608-.794c-.274.21-.52.528-.52.943h1zM8 5c-.491 0-.912-.1-1.19-.24a.86.86 0 0 1-.271-.194.213.213 0 0 1-.039-.063V4.5h-1c0 .568.447.947.862 1.154C6.807 5.877 7.387 6 8 6V5zm1.5-.5v.003a.213.213 0 0 1-.039.064.86.86 0 0 1-.27.193C8.91 4.9 8.49 5 8 5v1c.613 0 1.193-.123 1.638-.346.415-.207.862-.586.862-1.154h-1zm-.128-.15c.065.05.099.092.115.119.008.013.01.021.012.025L9.5 4.5h1c0-.415-.246-.733-.52-.943l-.608.794zM8.5 2.883c0 .696.497 1.182.872 1.469l.608-.794c-.333-.255-.48-.48-.48-.675h-1zm0-.382v.382h1V2.5h-1zm2.895-.5H9v1h2.395V2zm1.493 1.65A1.5 1.5 0 0 0 11.395 2v1a.5.5 0 0 1 .498.55l.995.1zm-.29 3.392l.29-3.4-.996-.085-.29 3.4.996.085zm.284-.542H12.1v1h.782v-1zm.675-.48c-.255.333-.48.48-.675.48v1c.696 0 1.182-.497 1.469-.872l-.794-.608zm.943-.52c-.415 0-.733.246-.943.52l.794.608a.459.459 0 0 1 .118-.115.113.113 0 0 1 .025-.012L14.5 6.5v-1zM16 8c0-.613-.123-1.193-.346-1.638-.207-.415-.586-.862-1.154-.862v1h.003l.01.003a.237.237 0 0 1 .053.036.86.86 0 0 1 .194.27c.14.28.24.7.24 1.191h1zm-1.5 2.5c.568 0 .947-.447 1.154-.862C15.877 9.193 16 8.613 16 8h-1c0 .491-.1.912-.24 1.19a.86.86 0 0 1-.194.271.214.214 0 0 1-.063.039H14.5v1zm-.943-.52c.21.274.528.52.943.52v-1l-.006-.001a.113.113 0 0 1-.025-.012.458.458 0 0 1-.118-.115l-.794.608zm-.675-.48c.195 0 .42.147.675.48l.794-.608c-.287-.375-.773-.872-1.469-.872v1zm-.782 0h.782v-1H12.1v1zm.788 2.858l-.29-3.4-.996.084.29 3.401.996-.085zM11.395 14a1.5 1.5 0 0 0 1.493-1.65l-.995.1a.5.5 0 0 1-.498.55v1zM9 14h2.395v-1H9v1zm.5-.5v-.382h-1v.382h1zm0-.382c0-.195.147-.42.48-.675l-.608-.794c-.375.287-.872.773-.872 1.469h1zm.48-.675c.274-.21.52-.528.52-.943h-1l-.001.006a.113.113 0 0 1-.012.025.459.459 0 0 1-.115.118l.608.794zm.52-.943c0-.568-.447-.947-.862-1.154C9.193 10.123 8.613 10 8 10v1c.492 0 .912.1 1.19.24.14.07.226.14.271.194a.214.214 0 0 1 .039.063v.003h1zM8 10c-.613 0-1.193.123-1.638.346-.415.207-.862.586-.862 1.154h1v-.003l.003-.01a.214.214 0 0 1 .036-.053.859.859 0 0 1 .27-.194C7.09 11.1 7.51 11 8 11v-1zm-2.5 1.5c0 .415.246.733.52.943l.608-.794a.459.459 0 0 1-.115-.118.113.113 0 0 1-.012-.025L6.5 11.5h-1zm.52.943c.333.255.48.48.48.675h1c0-.696-.497-1.182-.872-1.469l-.608.794zm.48.675v.382h1v-.382h-1zM4.605 14H7v-1H4.605v1zm-1.493-1.65A1.5 1.5 0 0 0 4.605 14v-1a.5.5 0 0 1-.498-.55l-.995-.1zm.29-3.393l-.29 3.401.996.085.29-3.4-.996-.086zm-.284.543H3.9v-1h-.782v1zm-.675.48c.255-.333.48-.48.675-.48v-1c-.696 0-1.182.497-1.469.872l.794.608zm-.943.52c.415 0 .733-.246.943-.52l-.794-.608a.459.459 0 0 1-.118.115.112.112 0 0 1-.025.012L1.5 9.5v1zM0 8c0 .613.123 1.193.346 1.638.207.415.586.862 1.154.862v-1h-.003a.213.213 0 0 1-.064-.039.86.86 0 0 1-.193-.27C1.1 8.91 1 8.49 1 8H0zm1.5-2.5c-.568 0-.947.447-1.154.862C.123 6.807 0 7.387 0 8h1c0-.492.1-.912.24-1.19a.86.86 0 0 1 .194-.271.213.213 0 0 1 .063-.039H1.5v-1zm.943.52c-.21-.274-.528-.52-.943-.52v1l.006.001a.112.112 0 0 1 .025.012c.027.016.068.05.118.115l.794-.608zm.675.48c-.195 0-.42-.147-.675-.48l-.794.608c.287.375.773.872 1.469.872v-1zm.782 0h-.782v1H3.9v-1zm-.788-2.858l.29 3.4.996-.085-.29-3.4-.996.085z" />
                              </svg>
                            </div>
                            <div className="drop-text">
                              <p className="fw-medium">
                                Event <span className="badge small bg-success ms-2">new</span>
                              </p>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 border-top text-center">
                      <div className="p-3 small">Pre-build landing pages for your your personal and business site.</div>
                    </div>
                  </div>
                </div>
              </li>

              {/* 
            // <!--dropdown submenu--> */}
              <li className="nav-item dropdown">
                <Link href="#">
                  <a
                    id="navbarhome"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                </Link>

                {/* 
              // <!--link--> */}
                <ul className="dropdown-menu dropdown-menu-lg-center" aria-labelledby="navbarhome">
                  {/* 
                // <!--submenu--> */}
                  <li className="dropdown-submenu">
                    <Link href="#">
                      <a id="sub2" className="dropdown-item dropdown-toggle">
                        Pages
                      </a>
                    </Link>

                    {/* 
                  // <!--link--> */}
                    <ul className="submenu dropdown-menu" aria-labelledby="sub2">
                      <li className="dropdown-submenu">
                        <Link href="#">
                          <a id="sub350" className="dropdown-item dropdown-toggle" href="#">
                            Basic
                          </a>
                        </Link>

                        {/* 
                      // <!--child submenu--> */}
                        <ul className="submenu dropdown-menu" aria-labelledby="sub350">
                          <li>
                            <Link href="404.html">
                              <a className="dropdown-item">404</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="classic-page.html">
                              <a className="dropdown-item">Classic</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="coming-soon.html">
                              <a className="dropdown-item">Coming Soon</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="faq.html">
                              <a className="dropdown-item">FAQ</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="terms.html">
                              <a className="dropdown-item">Term of Use</a>
                            </Link>
                          </li>
                        </ul>

                        {/* 
                      // <!--End child submenu--> */}
                      </li>
                      <li>
                        <Link href="about.html">
                          <a className="dropdown-item">About</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="career.html">
                          <a className="dropdown-item">Career</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="contact.html">
                          <a className="dropdown-item">Contact</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="portfolio.html">
                          <a className="dropdown-item">Portfolio</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="pricing.html">
                          <a className="dropdown-item">Pricing</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="service.html">
                          <a className="dropdown-item">Services</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* 
                // <!--end submenu--> */}

                  {/* 
                // <!--submenu--> */}
                  <li className="dropdown-submenu">
                    <Link href="#">
                      <a id="sub22" className="dropdown-item dropdown-toggle">
                        Blogs
                      </a>
                    </Link>

                    {/* 
                  // <!--link--> */}
                    <ul className="submenu dropdown-menu" aria-labelledby="sub22">
                      <li>
                        <Link href="#">
                          <a className="dropdown-item" href="category.html">
                            Blog
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a className="dropdown-item" href="search.html">
                            Search
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a className="dropdown-item" href="author.html">
                            Author
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a className="dropdown-item" href="single.html">
                            Single Article
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a className="dropdown-item" href="classic-post.html">
                            Classic Article
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* 
                // <!--end submenu--> */}

                  {/* 
                // <!--submenu--> */}
                  <li className="dropdown-submenu">
                    <Link href="#">
                      <a id="sub221" className="dropdown-item dropdown-toggle" href="#">
                        Users
                      </a>
                    </Link>

                    {/* 
                  // <!--link--> */}
                    <ul className="submenu dropdown-menu" aria-labelledby="sub221">
                      <li>
                        <Link href="#">
                          <a className="dropdown-item" href="login.html">
                            Login
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a className="dropdown-item" href="register.html">
                            Register
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a className="dropdown-item" href="forgot.html">
                            Recover
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* 
                // <!--end submenu--> */}
                </ul>

                {/* 
              // <!-- end link --> */}
              </li>

              {/* 
            // <!--mega menu--> */}
              <li className="nav-item dropdown">
                <Link href="#">
                  <a
                    id="navbarmega3"
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sections
                  </a>
                </Link>
                <div
                  className="dropdown-menu dropdown-lg dropdown-menu-lg-center overflow-hidden p-0"
                  aria-labelledby="navbarmega3"
                >
                  <div className="row g-0">
                    <div className="col-lg-4">
                      {/* 
                    // <!-- header banner --> */}
                      <div
                        className="position-relative d-none d-lg-block header-banner z-index-1"
                        style={{ backgroundImage: "url('/img-min/bg/bg-business.jpg')" }}
                      >
                        {/* 
                      // <!-- background overlay --> */}
                        <div className="overlay bg-gradient-primary opacity-90 z-index-n1"></div>

                        {/* 
                      // <!-- banner content --> */}
                        <div className="header-banner-content">
                          <div className="mb-4 px-lg-4">
                            <h3 className="h4 text-light">Sections</h3>
                            <p className="text-light">Section for any project.</p>
                          </div>
                          <Link href="#">
                            <a className="btn btn-light btn-sm" href="index.html">
                              Overview
                              {/* 
                            // <!-- <span className="fas fa-angle-right ms-2"></span> --> */}
                              <svg
                                className="bi bi-arrow-right"
                                width="1.5rem"
                                height="1.5rem"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                                  clipRule="evenodd"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                      {/* 
                    // <!-- end header banner --> */}
                    </div>

                    <div className="col-lg-8">
                      <div className="py-4 px-5">
                        <div className="row">
                          <div className="col-sm-6 col-lg-3">
                            <ul className="list-unstyled mb-3 mb-lg-0">
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/blog.html">
                                    Blog
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/brand.html">
                                    Brand
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/collage.html">
                                    Collage
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/contact.html">
                                    Contact
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/content.html">
                                    Content
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/counter.html">
                                    Counter
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="col-sm-6 col-lg-3">
                            <ul className="list-unstyled mb-3 mb-lg-0">
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/cta.html">
                                    Cta
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/download.html">
                                    Download
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/faq.html">
                                    Faq
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/feature.html">
                                    Feature
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/footer.html">
                                    Footer
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/header.html">
                                    Header
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="col-sm-6 col-lg-3">
                            <ul className="list-unstyled mb-3 mb-lg-0">
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/hero.html">
                                    Hero
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/newsletter.html">
                                    Newsletter
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/portfolio.html">
                                    Portfolio
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/pricing.html">
                                    Pricing
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/process.html">
                                    Process
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/progress.html">
                                    Progress
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="col-sm-6 col-lg-3">
                            <ul className="list-unstyled mb-3 mb-lg-0">
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/review.html">
                                    Review
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/service.html">
                                    Service
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/slider.html">
                                    Slider
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/team.html">
                                    Team
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/video.html">
                                    Video
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <a className="dropdown-item px-0" href="sections/other.html">
                                    Other
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* 
            // <!--medium menu with svg icon--> */}
              <li className="nav-item dropdown">
                <Link href="#">
                  <a
                    id="navbarmd"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Docs
                  </a>
                </Link>
                <div className="dropdown-menu dropdown-menu-md dropdown-menu-lg-center p-4" aria-labelledby="navbarmd">
                  <div className="list-group list-group-flush">
                    <Link href="#">
                      <a
                        className="list-group-item dropdown-item bg-tansparent d-flex align-item-center"
                        href="docs/index.html"
                      >
                        {/* 
                      // <!-- Icon --> */}
                        <div className="align-self-center text-primary">a </div>

                        {/* 
                      // <!-- Content --> */}
                        <div className="ms-4 align-self-center">
                          <h6 className="text-uppercase mb-1">Documentation</h6>
                          <p className="text-muted mb-0">Development guides</p>
                        </div>
                      </a>
                    </Link>
                    <Link href="#">
                      <a
                        className="list-group-item dropdown-item bg-tansparent d-flex align-item-center"
                        href="docs/components/alerts.html"
                      >
                        {/* 
                      // <!-- Icon --> */}
                        <div className="align-self-center text-primary">a</div>

                        {/* <!-- Content --> */}
                        <div className="ms-4 align-self-center">
                          <h6 className="text-uppercase mb-1">Components</h6>
                          <p className="text-muted mb-0">Full list of components</p>
                        </div>
                      </a>
                    </Link>
                    <Link href="#">
                      <a
                        className="list-group-item dropdown-item bg-tansparent d-flex align-item-center"
                        href="docs/getting-started/changelog.html"
                      >
                        {/* <!-- Icon --> */}
                        <div className="align-self-center text-primary">a</div>

                        {/* <!-- Content --> */}
                        <div className="ms-4 align-self-center">
                          <h6 className="text-uppercase mb-1">Changelog</h6>
                          <p className="text-muted mb-0">Keep track of changes</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="docs/svg-img/ionicons.html">
                  Icons
                </a>
              </li>
            </ul>
            <div className="d-grid d-lg-block my-3 my-lg-0 ms-0 ms-lg-4">
              <Link href="https://wrapbootstrap.com/checkout?s=WB0X617B2&l=s">
                <a className="btn btn-warning btn-sm" target="_blank" rel="noopener">
                  Buy Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
