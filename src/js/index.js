// this needs to stay here, do not remove.
import 'babel-core/polyfill';

// everything down from here can be removed for your
// own application and standup
import App from './app';

const app = new App();
const api = { start, stop };

function start(options={}) {
  stop();
  app.start(options);
};

function stop() {
  // A place to clean anything up
  app.stop();
};

export default api;
