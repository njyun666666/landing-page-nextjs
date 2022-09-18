/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import { iSection } from '../../../lib/models/iPage';
import { SectionHeader } from '../../common';

const Content_1 = ({ sectionData }: { sectionData: iSection }) => {
  return (
    // <!-- =========={ ABOUT}==========  -->
    <div id="about" className="section showcase bg-white">
      <div className="container-fluid p-0">
        <SectionHeader sectionData={sectionData} />

        {sectionData.item1Navigation.tbItems.map((item, index) => {
          return (
            <div key={item.itemId} className="row g-0">
              {/* <!-- img block --> */}
              <div
                className={`col-lg-6 text-white showcase-img ` + classNames({ 'order-lg-2': index % 2 === 0 })}
                style={{ backgroundImage: `url('${item.imageUrl}')` }}
                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              ></div>

              {/* <!-- content block --> */}
              <div
                className={`col-lg-6 my-auto showcase-text ` + classNames({ 'order-lg-1': index % 2 === 0 })}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              >
                <div className="p-5 p-md-7">
                  <h2 className="fw-bold mb-3">{item.title}</h2>
                  <p className="lead">{item.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    // <!-- end about -->
  );
};

export default Content_1;
