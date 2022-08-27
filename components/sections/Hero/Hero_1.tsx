/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { iSection } from '../../../lib/models/iPage';
import { Particle } from '../../common';

const Hero_1 = ({ sectionData }: { sectionData: iSection }) => {
  return (
    <div
      id="hero"
      className="section py-8 py-lg-9 overflow-hidden jarallax"
      style={{ backgroundColor: sectionData.backgroundColor }}
    >
      {/* <!-- background overlay --> */}
      <div className="overlay opacity-90 z-index-n1" style={{ backgroundColor: sectionData.backgroundColor }}></div>

      {/* <!-- moving up animation --> */}
      {sectionData.particleIcon && (
        <Particle>
          <i className={sectionData.particleIcon}></i>
        </Particle>
      )}

      {/* <!-- scribble --> */}
      <figure
        className="scribble scale-4 opacity-10 top-50 start-0 z-index-n1"
        data-aos="fade-up-right"
        data-aos-delay="400"
      >
        <svg
          className="text-secondary"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M42.5,-66.2C57.1,-56.7,72.5,-48.4,81.1,-35.3C89.8,-22.2,91.8,-4.4,89.6,13C87.3,30.4,80.7,47.4,69.5,60.1C58.3,72.9,42.4,81.5,25.9,84.6C9.5,87.8,-7.4,85.4,-22.7,79.8C-37.9,74.1,-51.5,65.2,-60.9,53.3C-70.4,41.4,-75.8,26.6,-79,10.8C-82.1,-5,-83.1,-21.7,-77.7,-36.4C-72.4,-51,-60.7,-63.7,-46.7,-73.5C-32.7,-83.3,-16.4,-90.1,-1.2,-88.2C13.9,-86.3,27.8,-75.7,42.5,-66.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </figure>

      {/* <!-- scribble --> */}
      <figure
        className="scribble scale-5 opacity-10 top-50 start-0 z-index-n1"
        data-aos="fade-up-right"
        data-aos-delay="300"
      >
        <svg
          className="text-secondary"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M42.5,-66.2C57.1,-56.7,72.5,-48.4,81.1,-35.3C89.8,-22.2,91.8,-4.4,89.6,13C87.3,30.4,80.7,47.4,69.5,60.1C58.3,72.9,42.4,81.5,25.9,84.6C9.5,87.8,-7.4,85.4,-22.7,79.8C-37.9,74.1,-51.5,65.2,-60.9,53.3C-70.4,41.4,-75.8,26.6,-79,10.8C-82.1,-5,-83.1,-21.7,-77.7,-36.4C-72.4,-51,-60.7,-63.7,-46.7,-73.5C-32.7,-83.3,-16.4,-90.1,-1.2,-88.2C13.9,-86.3,27.8,-75.7,42.5,-66.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </figure>

      {/* <!-- scribble --> */}
      <figure
        className="scribble scale-6 opacity-10 top-50 start-0 z-index-n1"
        data-aos="fade-up-right"
        data-aos-delay="200"
      >
        <svg
          className="text-secondary"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M42.5,-66.2C57.1,-56.7,72.5,-48.4,81.1,-35.3C89.8,-22.2,91.8,-4.4,89.6,13C87.3,30.4,80.7,47.4,69.5,60.1C58.3,72.9,42.4,81.5,25.9,84.6C9.5,87.8,-7.4,85.4,-22.7,79.8C-37.9,74.1,-51.5,65.2,-60.9,53.3C-70.4,41.4,-75.8,26.6,-79,10.8C-82.1,-5,-83.1,-21.7,-77.7,-36.4C-72.4,-51,-60.7,-63.7,-46.7,-73.5C-32.7,-83.3,-16.4,-90.1,-1.2,-88.2C13.9,-86.3,27.8,-75.7,42.5,-66.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </figure>

      {/* <!-- scribble --> */}
      <figure
        className="scribble scale-7 opacity-10 top-50 start-0 z-index-n1"
        data-aos="fade-up-right"
        data-aos-delay="100"
      >
        <svg
          className="text-secondary"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M42.5,-66.2C57.1,-56.7,72.5,-48.4,81.1,-35.3C89.8,-22.2,91.8,-4.4,89.6,13C87.3,30.4,80.7,47.4,69.5,60.1C58.3,72.9,42.4,81.5,25.9,84.6C9.5,87.8,-7.4,85.4,-22.7,79.8C-37.9,74.1,-51.5,65.2,-60.9,53.3C-70.4,41.4,-75.8,26.6,-79,10.8C-82.1,-5,-83.1,-21.7,-77.7,-36.4C-72.4,-51,-60.7,-63.7,-46.7,-73.5C-32.7,-83.3,-16.4,-90.1,-1.2,-88.2C13.9,-86.3,27.8,-75.7,42.5,-66.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </figure>

      <div className="container">
        {/* <!-- row --> */}
        <div className="row justify-content-center">
          {/* <!-- hero content --> */}
          <div className="col-md-9 col-lg-6 align-self-center pe-lg-5" data-aos="flip-up">
            <div className="text-center text-lg-start mt-4 mt-lg-0">
              {/* <div className="mb-3">
                <span className="badge badge-soft-light rounded">New</span>
                <span className="text-light ms-1">Next Generation Template</span>
              </div> */}
              <div className="mb-5">
                <h1 className="display-5 fw-bold text-white mb-3">
                  <span className="text-warning">{sectionData.title}</span>
                  {/* <span
                    data-toggle="typed"
                    data-options='{"strings": ["Apps", "StartUp", "Company", "Portfolio"]}'
                  ></span> */}
                </h1>
                <p className="lead text-light">{sectionData.content}</p>
              </div>

              {sectionData.item1Navigation.tbItems.map((item) => {
                return (
                  <Link key={item.itemId} href={item.url || '#'}>
                    <a className="btn btn-white hover-button-up">
                      <i className={item.icon}></i> {item.title}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* <!-- hero image --> */}
          <div className="col-md-9 col-lg-6 align-self-center">
            <div className="px-3 px-sm-7 px-md-2 px-xl-7 mt-5 mt-lg-0 mb-n9" data-aos="fade-up" data-aos-delay="100">
              <img className="img-fluid animated-up-down" src={sectionData.backgroundImage} alt="images title" />
            </div>
          </div>
        </div>
        {/* <!-- end row --> */}
      </div>

      {/* <!-- waves start --> */}
      <figure className="waves-bottom-center text-light mb-lg-n4 z-index-n1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="opacity-20 translate-top-2"
            fill="currentColor"
            fillOpacity="1"
            d="M0,160L60,186.7C120,213,240,267,360,245.3C480,224,600,128,720,106.7C840,85,960,139,1080,149.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
          <path
            className="opacity-30 translate-top-1"
            fill="currentColor"
            fillOpacity="1"
            d="M0,160L60,186.7C120,213,240,267,360,245.3C480,224,600,128,720,106.7C840,85,960,139,1080,149.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,160L60,186.7C120,213,240,267,360,245.3C480,224,600,128,720,106.7C840,85,960,139,1080,149.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </figure>
      {/* <!-- end hero --> */}
    </div>
  );
};

export default Hero_1;
