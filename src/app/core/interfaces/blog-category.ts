export interface BlogCategory {
  $key?: string;
  name: string;
  createDate: number;
  count?: number;
  blogs: FBlogKey;
}

export interface FBlogKey {
  [key: string]: boolean;
}
