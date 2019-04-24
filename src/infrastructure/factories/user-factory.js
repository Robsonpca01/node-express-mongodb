import UserCommand from '../../domain/commands/user';
import models from '../models'

class UserFactory {
  create() {
    return new UserCommand(models);
  }
}

export default UserFactory;
