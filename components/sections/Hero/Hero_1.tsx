import { iSection } from '../../../lib/models/iPage';

export const Hero_1 = ({ sectionData }: { sectionData: iSection }) => {
  return <h2>{sectionData.sectionTypeId}</h2>;
};
