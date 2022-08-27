import Link from 'next/link';
import { iSection } from '../../../lib/models/iPage';
import { SectionHeader } from '../../common';

const Service_1 = ({ sectionData }: { sectionData: iSection }) => {
  return (
    <div id="service" className="section pt-6 pt-md-7 pb-4 pb-md-5 bg-light">
      <div className="container">
        <SectionHeader sectionData={sectionData} />

        {/* <!-- row --> */}
        <div className="row text-center">
          {sectionData.item1Navigation.tbItems.map((item, index) => {
            return (
              <div
                key={item.itemId}
                className="col-12 col-sm-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                {/* <!-- service block --> */}
                <div className="p-4 mb-5 shadow-sm rounded-3 bg-white hover-box-up">
                  <div className="display-4 text-primary mb-3">
                    {/* <!-- icon --> */}
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="h5">{item.title}</h3>
                  <p> {item.content} </p>

                  {item.url && (
                    <Link href={item.url}>
                      <a href="#">
                        More
                        <i className="fas fa-arrow-right ms-1"></i>
                      </a>
                    </Link>
                  )}
                </div>
                {/* <!-- end service block --> */}
              </div>
            );
          })}
        </div>
        {/* <!-- end row --> */}
      </div>
    </div>
  );
};

export default Service_1;
