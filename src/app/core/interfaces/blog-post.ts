export interface BlogPost {
  $key?: string;
  imageUrl: string;
  author: string;
  modDate: string;
  createDate: string;
  displayOrder: number;
  viewCount: number;
  title: string;
  description: string;
  likeCount: number;
  commentCount: number;
  linkUrl: string;
  categories: FCatKey;
  modDateObj?: Date;
  createDateObj?: Date;

}

export interface FCatKey {
  [key: string]: boolean;
};
