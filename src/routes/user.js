import { Router } from 'express';
import UserCommand from '../commands/users'
import { Express } from '../node-base/';
import UserHandler from '../infrastructure/http/userHandler'
import UserFactory from '../infrastructure/factories/user-factory'

const router = Router();

/* router.get('/', async (req, res) => {
  const users = await req.context.models.User.find();
  return res.send(users);
}); */

const { adapter } = Express;

router.get('/',  adapter(UserHandler, UserFactory));

router.get('/', new UserCommand().execute);
 

router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findById(
    req.params.userId,
  );
  return res.send(user);
});

export default router;
