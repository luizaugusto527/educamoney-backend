const {DataTypes} = require('sequelize')

const db = require('../data/conn')

const User = db.define('tbusuario',{
    nome:{
        type:DataTypes.STRING,
        require: true
    },
    email:{
        type:DataTypes.STRING,
        require: true
    },
    senha:{
        type:DataTypes.STRING,
        require: true
    },
    tipo:{
        type:DataTypes.STRING,
        require: true
    }
},{
    tableName:'tbusuario'
})
//User.sync({force:true})
module.exports = User