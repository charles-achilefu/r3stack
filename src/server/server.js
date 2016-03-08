/* eslint no-new:0 */
import {SocketCluster} from 'socketcluster';
import os from 'os';
import {jwtSecret} from './secrets';
import path from 'path';

const numCpus = os.cpus().length;

export const options = {
  authKey: jwtSecret,
  logLevel: 1,
  // change this to scale vertically
  workers: 1 || numCpus,
  brokers: 1,
  port: 3000,
  appName: 'R3stack',
  allowClientPublish: false,
  brokerController: path.join(__dirname, '/broker.js'),
  initController: path.join(__dirname, '/init.js'),
  workerController: path.join(__dirname, '/worker.js'),
  socketChannelLimit: 1000,
  rebootWorkerOnCrash: true
};
new SocketCluster(options); // eslint-disable no-new
