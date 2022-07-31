import { iSection } from '../../lib/models/iPage';
import { FAQ_1 } from './FAQ';
import { Hero_1 } from './Hero';
import { Reviews_1 } from './Reviews';
import { Service_1 } from './Service';

const sectionComponent: any = {
  Hero_1,
  Service_1,
  FAQ_1,
  Reviews_1,
};

const Section = ({ sectionData }: { sectionData: iSection }) => {
  const TypeComponent = sectionComponent[sectionData.sectionTypeId];

  if (TypeComponent) {
    return <TypeComponent sectionData={sectionData} />;
  } else {
    console.error(`not found component: ${sectionData.sectionTypeId}`);
    return <></>;
  }
};

export default Section;
