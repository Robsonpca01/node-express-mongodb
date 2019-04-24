import UserCommand from '../../domain/commands/user';


class UserFactory {
  create() {
    return new UserCommand();
  }
}

export default UserFactory;
