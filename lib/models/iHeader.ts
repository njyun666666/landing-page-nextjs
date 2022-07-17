export interface iHeader {
  headerId: number;
  menuGroupId: number;
  logo: string;
  menus: iMenu[];
}

export interface iMenu {
  menuId: number;
  menuTypeId: 'string';
  title: 'string';
  subTitle: 'string';
  url: 'string';
  target: 'string';
  icon: 'string';
  imageUrl: 'string';
  childrens: iMenu[];
}
