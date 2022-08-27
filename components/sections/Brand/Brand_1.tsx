/* eslint-disable @next/next/no-img-element */
import { iSection } from '../../../lib/models/iPage';
import { SectionHeader } from '../../common';

const Brand_1 = ({ sectionData }: { sectionData: iSection }) => {
  return (
    // <!-- =========={ BRAND }==========  -->
    <div
      id="partner-brand"
      className="section pt-6 pt-md-7 pb-4 pb-md-5"
      style={{ backgroundColor: sectionData.backgroundColor }}
    >
      <div className="container">
        <SectionHeader sectionData={sectionData} />

        <div className="row">
          <div className="col-12">
            {/* <!-- list brand --> */}
            <ul className="list-unstyled row justify-content-center">
              {sectionData.item1Navigation.tbItems.map((item) => {
                return (
                  <li key={item.itemId} className="col-12 col-sm-6 col-md-4 col-lg-24 px-4 px-xl-5 mb-5 text-center">
                    <a href={item.url || '#'} target={item.target}>
                      <img className="brands-image img-fluid" src={item.imageUrl} alt={item.title} />
                    </a>
                  </li>
                );
              })}
            </ul>
            {/* <!-- end list brand --> */}
          </div>
        </div>
      </div>
    </div>
    // <!-- End brand-->
  );
};

export default Brand_1;
