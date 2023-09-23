const User = require('../models/User')


module.exports = class UserController {
    static async login(req,res){
        const {email,senha} = req.body;

         const userData = await User.findAll({
             where:{
                 email:email
             }
         })

         if (userData.length == 0) {
            res.status(200).json({
                erro:'Usuario nao encontrado'
            })
         }else if (senha !== userData[0].dataValues.senha) {
            res.status(200).json({
                erro:'E-mail ou senha inválidos'
            })
         }else{
           res.status(200).json({
            nome:userData[0].nome,
            email:userData[0].email,
            
           })
         }
        
    }

    static async register(req,res){
        

        try{
            const userRegister = await User.create(req.body)
            res.status(200).json({
                erro: "Cadastro realizado com sucesso"
            })
        }catch(error){
            res.status(404).json({
                erro: "Nao foi possivel realizar o cadastro"
            })
        }
        
    }
}