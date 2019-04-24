import { Router } from 'express';
import { Express } from '../../utils/node-base';
import UserHandler from '../http/user-handler'
import UserFactory from '../factories/user-factory'

const router = Router();

/* router.get('/', async (req, res) => {
  const users = await req.context.models.User.find();
  return res.send(users);
}); */

const { adapter } = Express;

router.get('/',  adapter(UserHandler, UserFactory));
 

router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findById(
    req.params.userId,
  );
  return res.send(user);
});

export default router;
