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
  articleContent: string;
  linkUrl: string;
  categories: FCatKey;
  modDateObj?: Date;
  createDateObj?: Date;
}

export class BlogPost implements BlogPost {
  constructor() {
    this.$key = '';
    this.imageUrl = '';
    this.author = '';
    this.modDate = new Date().toDateString();
    this.createDate = new Date().toDateString();
    this.displayOrder = 0;
    this.viewCount = 0;
    this.title = '';
    this.description = '';
    this.likeCount = 0;
    this.commentCount = 0;
    this.articleContent = '';
    this.linkUrl = '';
    this.modDateObj = new Date();
    this.createDateObj = new Date();

  }

}



export interface FCatKey {
  [key: string]: boolean;
};
