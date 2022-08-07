import { iSection } from '../../../lib/models/iPage';
import { SectionHeader } from '../../common';

export const FAQ_1 = ({ sectionData }: { sectionData: iSection }) => {
  return (
    // <!-- =========={ FAQ }==========  -->
    <div id="faq" className="section py-6 pt-md-7 pb-md-6 bg-light">
      <div className="container">
        {/* <!-- Questions Header --> */}
        <SectionHeader sectionData={sectionData} />

        <div className="row justify-content-center">
          <div className="accordion-list col-10 col-md-8">
            <div id={`Accordione${sectionData.sectionId}`} className="accordion">
              {/* <!-- faq list --> */}
              {sectionData.item1Navigation.tbItems.map((item) => {
                return (
                  <div key={item.itemId} className="card border-0 collapse-shadow mb-3" data-aos="fade-up">
                    <div className="card-header py-2 bg-white mb-0" id={`Heading${item.itemId}`}>
                      <div className="d-grid mb-0">
                        <button
                          className="btn btn-link btn-block btn-accordion fw-medium d-flex px-0 justify-content-between collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target={`#Collapse${item.itemId}`}
                          aria-expanded="true"
                          aria-controls={`Collapse${item.itemId}`}
                        >
                          {item.title}
                          <span className="collapse-arrow-end">
                            <i className="bi bi-chevron-down"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div
                      id={`Collapse${item.itemId}`}
                      className="collapse"
                      aria-labelledby={`Heading${item.itemId}`}
                      data-bs-parent={`#Accordione${sectionData.sectionId}`}
                    >
                      <div className="card-body">
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
