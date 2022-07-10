import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary">
      {/* <!--Footer content--> */}
      <div id="footer" className="footer-dark section pt-6 pb-5">
        <div className="container">
          <div className="row">
            {/* <!-- left widget --> */}
            <div className="col-lg-4">
              {/* <!-- Footer Content --> */}
              <div className="widget-content pe-lg-5">
                {/* <!-- Footer Title --> */}
                <h4 className="h5 mb-4">About Us</h4>
                <div className="widget-body">
                  <p>
                    Bootstrap template designer, we build web templates, themes and other goodies, putting a lot of love
                    in every pixel and design.
                  </p>
                  <address>
                    {/* <!-- <i className="fa fa-map-marker-alt me-2"></i> --> */}
                    🚀 Amphitheatre, Mountain View,
                    <br />
                    San Francisco, CA 9321, United States
                  </address>
                  <p className="footer-info">
                    {/* <!-- <i className="fa fa-phone me-2"></i> --> */}
                    🚀 +(123) 456-7890
                  </p>
                  <p className="footer-info">
                    {/* <!-- <i className="fa fa-envelope me-2"></i> --> */}
                    🚀 support@example.com
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- center widget --> */}
            <div className="footer-links col-md-6 col-lg-4">
              {/* <!-- Footer Content --> */}
              <div className="widget-content">
                {/* <!-- Footer Title --> */}
                <h4 className="h5 mb-4">Popular Links</h4>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="list-unstyled before-arrow">
                      <li className="py-2">
                        <Link href="#">
                          <a>About us</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">
                          <a>Contact us</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">
                          <a>Privacy policy</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">
                          <a>Term of use</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">
                          <a>GDPR</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">
                          <a>Career</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="list-unstyled before-arrow">
                      <li className="py-2">
                        <Link href="#">
                          <a href="#">Latest post</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">
                          <a href="#">Popular post</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">
                          <a href="#">Blogs</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">
                          <a href="#">Events</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">
                          <a href="#">Fax</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">
                          <a href="#">Category</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- right --> */}
            <div className="widget col-md-6 col-lg-4">
              {/* <!-- Footer Content --> */}
              <div className="widget-content">
                {/* <!-- Footer Title --> */}
                <h4 className="h5 mb-4">Newsletter</h4>
                <p>Subscribe to our mailing list to receives daily updates direct to your inbox!</p>
              </div>

              {/* <!--end form--> */}

              <div className="my-1"></div>
              <ul className="footer-links list-unstyled social-icon mb-4">
                {/* <!--facebook--> */}
                <li className="my-2 me-3">
                  <Link href="#">
                    <a target="_blank" rel="noopener noreferrer" title="Facebook">
                      {/* <!-- <i className="fab fa-facebook fa-2x"></i> --> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512">
                        <path
                          fill="currentColor"
                          d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                        />
                      </svg>
                    </a>
                  </Link>
                </li>

                {/* <!--twitter--> */}
                <li className="my-2 me-3">
                  <Link href="#">
                    <a target="_blank" rel="noopener noreferrer" title="Twitter">
                      {/* <!-- <i className="fab fa-twitter fa-2x"></i> --> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512">
                        <path
                          fill="currentColor"
                          d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
                        />
                      </svg>
                    </a>
                  </Link>
                </li>

                {/* <!--youtube--> */}
                <li className="my-2 me-3">
                  <Link href="#">
                    <a target="_blank" rel="noopener noreferrer" title="Youtube">
                      {/* <!-- <i className="fab fa-youtube fa-2x"></i> --> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512">
                        <path
                          fill="currentColor"
                          d="M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z"
                        />
                      </svg>
                    </a>
                  </Link>
                </li>

                {/* <!--VKontakte--> */}
                <li className="my-2 me-3">
                  <Link href="#">
                    <a target="_blank" rel="noopener noreferrer" title="VKontakte">
                      {/* <!-- <i className="fab fa-vk fa-2x"></i> --> */}
                      🚀
                    </a>
                  </Link>
                </li>

                {/* <!--Linkedin--> */}
                <li className="my-2 me-3">
                  <Link href="#">
                    <a target="_blank" rel="noopener noreferrer" title="Linkedin">
                      {/* <!-- <i className="fab fa-linkedin fa-2x"></i> --> */}
                      🚀
                    </a>
                  </Link>
                </li>

                {/* <!--instagram--> */}
                <li className="my-2 me-3">
                  <Link href="#">
                    <a target="_blank" rel="noopener noreferrer" title="Instagram">
                      {/* <!-- <i className="fab fa-instagram fa-2x"></i> --> */}
                      🚀
                    </a>
                  </Link>
                </li>

                {/* <!--end instagram--> */}
              </ul>
            </div>

            {/* <!-- End Footer Content --> */}
          </div>

          {/* <!-- end right --> */}
        </div>
      </div>

      {/* <!--End footer content--> */}

      {/* <!--Start footer copyright--> */}
      <div className="footer-dark">
        <div className="container py-4 border-top border-smooth">
          <div className="row">
            <div className="col-12 text-center">
              <p className="d-block my-3">Copyright &copy; Your Company | All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!--End footer copyright--> */}
    </footer>
  );
};

export default Footer;
