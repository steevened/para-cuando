import axios from '../../helpers/axios.helper';

function votePublication(id: string) {
  return axios.post(`/publications/${id}/vote`);
}

export { votePublication };
