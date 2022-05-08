import { CategoryType } from './Category';

export type ArticleType = {
  id: string;
  seoId: string;
  imgSrc: string;
  title: string;
  gender: string;
  description: string;
  descriptionHtml: string;
  userId: string;
  categories?: CategoryType[];
  userSeoId: string;
  username: string;
};
