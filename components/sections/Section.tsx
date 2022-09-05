import { iSection } from '../../lib/models/iPage';
import { Brand } from './Brand';
import { Collage } from './Collage';
import { Counter } from './Counter';
import { FAQ } from './FAQ';
import { Hero } from './Hero';
import { Reviews } from './Reviews';
import { Service } from './Service';

const sectionComponent: any = {
  ...Hero,
  ...Service,
  ...FAQ,
  ...Reviews,
  ...Brand,
  ...Collage,
  ...Counter,
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
