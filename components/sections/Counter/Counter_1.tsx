/* eslint-disable @next/next/no-img-element */
import { iSection } from '../../../lib/models/iPage';
import { Counter, SectionHeader } from '../../common';

const Counter_1 = ({ sectionData }: { sectionData: iSection }) => {
  return (
    // <!-- =========={ COUNTER }==========  -->
    <div id="counter" className="section pt-6 pt-md-7 pb-5 pb-md-6 bg-light">
      <SectionHeader sectionData={sectionData} />

      <div className="container">
        <div className="row text-center text-uppercase">
          {sectionData.item1Navigation.tbItems.map((item) => {
            return (
              <div key={item.itemId} className="col-lg-3 col-sm-6">
                <div className="p-4 bg-white rounded-3 shadow-sm position-relative mb-4">
                  {/* <!-- icons --> */}
                  <i className={`${item.icon} text-primary mb-1 font-size-rem-3`} />
                  <div className="h2 mb-1 text-primary">
                    {/* <span className="counter">{item.number}</span> */}
                    <Counter>{item.number}</Counter>
                  </div>
                  <small className="d-block text-uppercase text-primary">{item.title}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    // <!-- end counter -->
  );
};

export default Counter_1;
