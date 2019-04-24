import { App } from '../../../utils/node-base';
import events from '../../enum/events';

const { noContent, success } = events;
class UserCommand extends App.Command {
  constructor({ User }) {
    super();
    this.User = User;
  }

  async execute() {
    try {
      const users = await this.User.find();
      const data = {success: true};

      this.emit(success, users);
    } catch (error) {
      console.error(error);
      this.emit(noContent, { error });
    }
  }
}

export default UserCommand;
