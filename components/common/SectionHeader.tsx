import { iSection } from '../../lib/models/iPage';

const SectionHeader = ({ sectionData }: { sectionData: iSection }) => {
  if (sectionData.title || sectionData.subTitle) {
    return (
      <header className="text-center mx-auto mb-5">
        {sectionData.title && (
          <>
            <h2 className="h3 fw-bold">{sectionData.title}</h2>
            <hr className="divider my-4 mx-auto bg-warning border-warning" />
          </>
        )}
        {sectionData.subTitle && <p className="lead text-muted">{sectionData.subTitle}</p>}
      </header>
    );
  } else {
    return <></>;
  }
};
export default SectionHeader;
