import Link from 'next/link';
import useSWR from 'swr';
import { iFooter } from '../lib/models/iFooter';
import fetcher from '../lib/utils/fetcher';

const Footer = () => {
  const { data, error } = useSWR('/api/Footer', fetcher<iFooter>);

  return (
    // <!-- =========={ FOOTER }==========  -->
    <footer className="bg-dark">
      {/* <!--Footer content--> */}
      <div id="footer-content" className="footer-dark py-4">
        <div className="container">
          <div className="row">
            {/* <!-- single widget --> */}
            <div className="widget col-12">
              <div className="widget-content text-center footer-copyright">
                <ul className="footer-links list-unstyled social-icon mt-5 mb-0">
                  {data?.section.item1Navigation.tbItems.map((item) => {
                    return (
                      <li key={item.itemId} className="my-2 me-3">
                        <Link target="_blank" href={item.url || '#'}>
                          <a title={item.title}>
                            <i className={`${item.icon} fa-2x`}></i>
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* <!--Navbar--> */}
                <nav className="navbar navbar-expand navbar-dark">
                  {/* <!--footer menu--> */}
                  <ul className="navbar-nav footer-nav mx-auto first-start-lg-0 text-uppercase">
                    {data?.section.item1Navigation.tbItems.map((item) => {
                      return (
                        <li key={item.itemId} className="nav-item">
                          <Link href={item.url || '#'}>
                            <a className="nav-link">{item.title}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--End footer content--> */}

      {/* <!--Start footer copyright--> */}
      <div className="footer-dark">
        <div className="container py-4 border-top border-smooth">
          <div className="row">
            <div className="col-12 col-md text-center">
              <p className="d-block my-3">{data?.section.title}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!--End footer copyright--> */}
    </footer>
  );
};

export default Footer;
