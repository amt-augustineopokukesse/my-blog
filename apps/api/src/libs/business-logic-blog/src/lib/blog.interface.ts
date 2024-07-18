export interface IBlog {
  id: number;
  title: string;
  content: string;
  author: string;
  comments: {
    id: number;
    author: string;
    content: string;
  }[];
  categories: {
    id: number;
    name: string;
    description: string;
  }[];
}

export interface PartialBlog {
  id?: number;
  title: string;
  content: string;
  author: string;
}
