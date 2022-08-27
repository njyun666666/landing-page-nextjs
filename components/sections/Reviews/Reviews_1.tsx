/* eslint-disable @next/next/no-img-element */
import { iSection } from '../../../lib/models/iPage';
import { Ratings, SectionHeader, Slider } from '../../common';

const Reviews_1 = ({ sectionData }: { sectionData: iSection }) => {
  return (
    // <!-- =========={ REVIEWS }==========  -->
    <div id="reviews" className="section py-6 py-md-7 bg-light">
      <div className="container">
        {/* <!--header section--> */}

        <SectionHeader sectionData={sectionData} />

        {/* <!-- row --> */}
        <div className="row justify-content-center">
          <div className="col-11 col-md-12">
            {/* <!-- review slider --> */}

            <Slider
              options={{ cellAlign: 'left', wrapAround: true, adaptiveHeight: true, pageDots: false, autoPlay: 5000 }}
            >
              {/* <!-- item --> */}

              {sectionData.item1Navigation.tbItems.map((item) => {
                return (
                  <div key={item.itemId} className="col-12 col-md-6 px-3 px-lg-5">
                    {/* <!-- Reviews --> */}
                    <blockquote className="reviews-one rounded-3 mb-5">
                      <p>{item.content}</p>
                      <Ratings count={item.number} />
                    </blockquote>
                    <div className="d-flex">
                      <img
                        className="d-flex align-self-center rounded-circle reviews-one-thumb shadow-md mx-3 mt-2"
                        src={item.imageUrl}
                        alt={item.title}
                      />
                      <div className="align-self-center">
                        <p className="mb-0">
                          <strong className="d-block">{item.title}</strong>
                          <span className="fs-75 text-muted">{item.subTitle}</span>
                        </p>
                      </div>
                    </div>
                    {/* <!-- End Reviews --> */}
                  </div>
                );
              })}
            </Slider>
            {/* <!-- end review slider --> */}
          </div>
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- End Reviews --> */}
    </div>
  );
};

export default Reviews_1;
