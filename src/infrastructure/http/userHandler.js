import { Express } from '../../node-base';
import events from '../../domain/enum/events';

const { noContent } = events;

class UserUidHandler extends Express.Handler {
    setupListeners(command) {
        console.log('setup listeners')
      super.setupListeners(command);
      command.on(noContent, this.onNoContent.bind(this));
    }


    buildInput() {
     console.log('-------buildInput--------')
    }
    
  
    onNoContent() {
      return this.response.sendStatus(204);
    }
  }
  
  export default UserUidHandler;
  