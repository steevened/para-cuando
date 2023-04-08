// Generated by https://quicktype.io

export interface PublicationTypesResponse {
  results: Types;
}

export interface Types {
  count: number;
  totalPages: number;
  currentPage: number;
  results: Type[];
}

export interface Type {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

// Generated by https://quicktype.io

export interface PublicationTypeByID {
  result: Result;
}

export interface Result {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}
