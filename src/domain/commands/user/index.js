import { App } from '../../../node-base';
import events from '../../enum/events';

class UserCommand extends App.Command {
  constructor() {
      console.log('----constructor')
    super();
  }

  async execute() {
      console.log('-----Execute---------')
    try {
      const data = [];

      this.emit('finished', data);
    } catch (error) {
      console.error(error);
      this.emit('failed', { error });
    }
  }
}

export default UserCommand;
