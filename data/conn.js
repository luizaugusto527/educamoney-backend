const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('educamoney','root','',{
    host:'localhost',
    dialect:'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso!');
} catch (error) {
    console.log(`N�o foi poss�vel conectar: ${err}`);
}
//sequelize.sync({ force: true })
module.exports = sequelize