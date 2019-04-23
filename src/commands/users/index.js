class UserCommand { 
    constructor(){
        console.log('Constructor')
    }

    async execute(req, res){
        const users = await req.context.models.User.find();

        res.status(200).json( users );
    }
}

export default UserCommand;