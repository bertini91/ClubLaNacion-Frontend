export interface CommerceTurism {
  images: Array<{ url: string }>;
  commerce: string;
  discount: Array<string>;
  location: number;
  name: string;
  [x: string]: any;
}

export interface CommerceDesc {
  name: string;
  images: Array<{ url: string }>;
  [x: string]: any;
}
