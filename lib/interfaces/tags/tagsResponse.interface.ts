// Generated by https://quicktype.io

export interface TagsResponse {
  results: Tags;
}

export interface Tags {
  count: number;
  totalPages: number;
  CurrentPage: number;
  results: Tag[];
}

export interface Tag {
  id: string;
  name: string;
  description: string;
  image_url: null;
  created_at: string;
  updated_at: string;
}
