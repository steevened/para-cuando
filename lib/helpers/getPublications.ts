import {
  PublicationTypeByID,
  PublicationTypesResponse,
} from '../interfaces/publicationTypes/publicationTypes.interface';
import { PublicationsResponse } from '../interfaces/publications/publications.interface';
import { fetcher } from './fetcher.helper';

const getAllPublications = async () => {
  const { results }: PublicationsResponse = await fetcher('/publications');

  return results;
};

const getPublicationTypesData = async () => {
  const { results }: PublicationTypesResponse = await fetcher(
    '/publications-types'
  );
  return results;
};

const getPublicationTypesById = async (id: string) => {
  const { result }: PublicationTypeByID = await fetcher(
    `/publications-types/${id}`
  );
  return result;
};

export { getPublicationTypesData, getPublicationTypesById, getAllPublications };
