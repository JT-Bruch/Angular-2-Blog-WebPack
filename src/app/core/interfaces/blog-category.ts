export interface BlogCategory {
  $key?: string;
  name: string;
  createDate: string;
  count?: number;
  blogs: FBlogKey;
}

export interface FBlogKey {
  [key: string]: boolean;
};

