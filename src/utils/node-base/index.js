
const BaseCommand = require('./src/commands/base-command');
const baseEvents = require('./src/base-events');
const expressAdapter = require('./src/express/handler-to-function-adapter');
const ExpressHandler = require('./src/express/handler');

module.exports = {
  App: {
    baseEvents,
    Command: BaseCommand,
  },
  Express: {
    adapter: expressAdapter,
    Handler: ExpressHandler,
  },
};
