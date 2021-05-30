import { url, endpoints } from './apiConfig';
import fetcher from './fetcher';

const {
  robotsInstances,
  // createRobot,
  robotOverview,
  // findRobotById,
  // startRobot,
  // stopRobot,
} = endpoints;

const assembleFinalUrl = (apiUrl, endpoint) => `${apiUrl}${endpoint}`;

const getRobotsOverview = async () => {
  const { method, endpoint } = robotOverview();
  const finalUrl = assembleFinalUrl(url, endpoint);
  const response = await fetcher(method, finalUrl);
  return response;
};

const getRobotInstances = async () => {
  const { method, endpoint } = robotsInstances();
  const finalUrl = assembleFinalUrl(url, endpoint);
  const response = await fetcher(method, finalUrl);
  return response;
};

export { getRobotsOverview, getRobotInstances };
