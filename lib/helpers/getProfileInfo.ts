import { ProfileResponse } from '../interfaces/profile/profile.interface';
import { fetcher } from './fetcher.helper';

const getProfileInfo = async () => {
  const response: ProfileResponse = await fetcher('/auth/me');

  const { results } = response;
  return results;
};

export { getProfileInfo };
