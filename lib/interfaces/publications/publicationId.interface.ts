// Generated by https://quicktype.io

export interface PublicationID {
  id: string;
  title: string;
  description: string;
  content: string;
  cities_id: string;
  user_id: string;
  publications_types_id: string;
  votes_count: number;
  user: User;
  city: City;
  publications_type: PublicationsType;
}

export interface City {
  id: string;
  name: string;
  state_id: string;
}

export interface PublicationsType {
  id: string;
  name: string;
  description: string;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  country_id: null;
  image_url: null;
}