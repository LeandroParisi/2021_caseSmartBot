import { url, endpoints } from './apiConfig';
import fetcher from './fetcher';

const getRobotsOverview = async () => {
  const { method, endpoint } = endpoints.robotOverview;
  const finalUrl = `${url}${endpoint}`;
  const response = await fetcher(method, finalUrl);
  return response;
};

export { getRobotsOverview, fetcher };
