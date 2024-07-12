export interface PostDataType {
  title: string;
  date: string;
  readingTime: string;
  summary: string;
  url: string;
  tag: string[];
}

export interface FooterLink {
  label: string;
  link: string;
  subLinks?: FooterLink[];
}
