import { App } from '../../../utils/node-base';
import events from '../../enum/events';

const { noContent, success } = events;
class UserCommand extends App.Command {
  constructor() {
    console.log('----constructor')
    super();
  }

  async execute() {
    console.log('-----Execute---------')
    try {
      const data = {success: true};

      this.emit(success, data);
    } catch (error) {
      console.error(error);
      this.emit(noContent, { error });
    }
  }
}

export default UserCommand;
