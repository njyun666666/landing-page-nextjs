import { iSection } from '../../lib/models/iPage';
import { Brand } from './Brand';
import { Collage } from './Collage';
import { Content } from './Content';
import { Counter } from './Counter';
import { CTA } from './CTA';
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
  ...CTA,
  ...Content,
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
