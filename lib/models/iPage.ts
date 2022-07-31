import { headerColorModeType } from '../types/header.type';

export interface iPage {
  pageId: number;
  path: string;
  title: string;
  description: string;
  headerColorMode: headerColorModeType;
  tbPageSections: iTbPageSection[];
}

export interface iTbPageSection {
  id: number;
  pageId: number;
  sectionId: number;
  sort: number;
  section: iSection;
}

export interface iSection {
  sectionId: number;
  sectionTypeId: string;
  backgroundImage: string;
  backgroundColor: string;
  title: string;
  subTitle: string;
  content: string;
  item1: number;
  item1Navigation: iItem1Navigation;
}

export interface iItem1Navigation {
  itemGroupId: number;
  description: string;
  tbItems: iTbItem[];
}

export interface iTbItem {
  itemId: number;
  itemGroupId: number;
  title: string;
  subTitle: string;
  content: string;
  icon: string;
  imageUrl: string;
  url: string;
  target: string;
  number: number;
  sort: number;
}
