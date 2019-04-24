import { Express } from '../../utils/node-base';
import events from '../../domain/enum/events';

class UserUidHandler extends Express.Handler {
    setupListeners(command) {
      console.log('setup listeners')
      super.setupListeners(command);
      //command.on('success', this.onSuccess.bind(this));
    }


    buildInput(input) {
     console.log('-------buildInput--------', input)
    }
    
  
    onSuccess(data) {
      console.log('---SUCESSO----');
      return this.response.status(200).json( data );
    }
  }
  
  export default UserUidHandler;
  