import {
  PublicationTypeByID,
  PublicationTypesResponse,
} from '../interfaces/publicationTypes/publicationTypes.interface';
import { fetcher } from './fetcher.helper';

export const getPublicationTypesData = async () => {
  const { results }: PublicationTypesResponse = await fetcher(
    '/publications-types'
  );
  return results;
};

export const getPublicationTypesById = async (id: string) => {
  const { result }: PublicationTypeByID = await fetcher(
    `/publications-types/${id}`
  );
  return result;
};
