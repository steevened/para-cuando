// Generated by https://quicktype.io

export interface PublicationsResponse {
  count: number;
  rows: Publication[];
}

export interface Publication {
  id: string;
  title: string;
  description: string;
  content: string;
  cities_id: string;
  user_id: string;
  publications_types_id: string;
  votes_count: number;
  user: User;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  country_id: null;
  image_url: null;
}