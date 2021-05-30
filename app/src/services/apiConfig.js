export const url = 'https://api-front-test.k8s.smarttbot.com/api/v1';

export const endpoints = {
  robotsInstances: () => ({
    method: 'GET',
    endpoint: '/robot',
  }),
  createRobot: () => ({
    method: 'POST',
    endpoint: '/robot',
  }),
  robotOverview: () => ({
    method: 'GET',
    endpoint: '/robot/overview',
  }),
  findRobotById: (id) => ({
    method: 'GET',
    endpoint: `/robot/${id}`,
  }),
  startRobot: (id) => ({
    method: 'PUT',
    endpoint: `/robot/${id}/start`,
  }),
  stopRobot: (id) => ({
    method: 'PUT',
    endpoint: `/robot/${id}/stop`,
  }),
};
