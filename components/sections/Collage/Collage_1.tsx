/* eslint-disable @next/next/no-img-element */
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgVideo from 'lightgallery/plugins/video';
import lgZoom from 'lightgallery/plugins/zoom';
import { iSection } from '../../../lib/models/iPage';
import { LightBox, SectionHeader } from '../../common';

const Collage_1 = ({ sectionData }: { sectionData: iSection }) => {
  return (
    // <!-- =========={ COLLAGE }==========  -->
    <div id="collages" className="section py-6 py-md-7 bg-white">
      <SectionHeader sectionData={sectionData} />
      <div className="container">
        {/* <!-- row --> */}
        <div className="row">
          <div className="col-lg-6 px-2 px-md-0 text-center">
            <div className="image-collage lightgallery-thumbnail mt-6 mb-9">
              {/*class image-collage lightgallery-thumbnail */}

              <LightBox plugins={[lgZoom, lgThumbnail, lgVideo]}>
                {sectionData.item1Navigation.tbItems.map((item) => {
                  return (
                    <a key={item.itemId} href={item.imageUrl} data-sub-html={item.title || ''}>
                      <img className="img-fluid" src={item.imageUrl} alt={item.title || ''} data-aos="fade-up" />
                    </a>
                  );
                })}
              </LightBox>
            </div>
          </div>

          <div className="col-lg-6 align-self-center" data-aos="fade-left">
            <div className="mt-5 mt-lg-0 pb-1">
              <p className="lead mb-5">{sectionData.content} </p>
              {sectionData.item2Navigation.tbItems.map((item) => {
                return (
                  <a key={item.itemId} className="btn btn-outline-primary hover-button-up" href={item.url || '#'}>
                    {item.title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        {/* <!-- end row --> */}
      </div>
    </div>
    // <!-- End Collage -->
  );
};

export default Collage_1;
