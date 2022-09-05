/* eslint-disable @next/next/no-img-element */
import { iSection } from '../../../lib/models/iPage';

const CTA_1 = ({ sectionData }: { sectionData: iSection }) => {
  return (
    // <!-- =========={ CTA }==========  -->
    <div id="cta" className="section py-6 py-md-7 bg-primary jarallax">
      {/* <!-- background parallax --> */}
      <img className="jarallax-img" src={sectionData.backgroundImage} alt="title" />

      {/* <!-- background overlay --> */}
      <div className="overlay bg-dark opacity-70 z-index-n1"></div>

      <div className="container text-center" data-aos="fade-up">
        <h3 className="text-light mb-5">{sectionData.content} </h3>

        {/* <!-- buttom --> */}
        {sectionData.item1Navigation.tbItems.map((item) => {
          return (
            <a key={item.itemId} className="btn btn-outline-light btn-lg text-start" href={item.url || '#'}>
              <i className={`${item.icon} me-3`}></i>
              {item.title}
            </a>
          );
        })}
      </div>
    </div>
    // <!-- End cta -->
  );
};

export default CTA_1;
