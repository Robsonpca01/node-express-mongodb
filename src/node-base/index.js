
const BaseCommand = require('./src/commands/base-command');
const baseEvents = require('./src/base-events');
const expressAdapter = require('./src/express/handler-to-function-adapter');
const expressCorsMiddleware = require('./src/express/cors-middleware');
const expressLoggingMiddleware = require('./src/express/logging-middleware');
const Module = require('./src/module');
const NodeInspector = require('./src/development/node-inspector');
const ExpressHandler = require('./src/express/handler');

const ArrayUtils = require('./src/utils/array');

module.exports = {
  App: {
    baseEvents,
    Command: BaseCommand,
  },
  Express: {
    adapter: expressAdapter,
    corsMiddleware: expressCorsMiddleware,
    loggingMiddleware: expressLoggingMiddleware,
    Handler: ExpressHandler,
  },
  Util: {
    ArrayUtils,
    Module,
    NodeInspector,
  },
};
