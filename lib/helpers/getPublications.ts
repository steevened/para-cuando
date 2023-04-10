import {
  PublicationTypeByID,
  PublicationTypesResponse,
} from '../interfaces/publicationTypes/publicationTypes.interface';
import { PublicationbyID } from '../interfaces/publications/publicationId.interface';
import { PublicationsResponse } from '../interfaces/publications/publications.interface';
import { Tags } from '../interfaces/tags/tagsResponse.interface';
import { fetcher } from './fetcher.helper';

const getAllPublications = async () => {
  const { results }: PublicationsResponse = await fetcher('/publications');

  return results;
};

const getPublicationById = async (id: string) => {
  const publicationById: PublicationbyID = await fetcher(`/publications/${id}`);

  return publicationById;
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

const getTags = async () => {
  const { results }: Tags = await fetcher('/tags');

  return results;
};

export {
  getPublicationTypesData,
  getPublicationTypesById,
  getAllPublications,
  getPublicationById,
  getTags,
};
