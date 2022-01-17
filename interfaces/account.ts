export interface CommerceTurism {
  images: Array<{ url: string }>;
  commerce: string;
  discount: Array<string>;
  location: number;
  name: string;
  crmid: string;
  benefits: Array<{ type: string }>;
  [x: string]: any;
}

export interface CommerceDesc {
  name: string;
  images: Array<{ url: string }>;
  crmid: string;
  [x: string]: any;
}
