const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('','','',{
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql'
});


try {
  sequelize.authenticate();
  console.log('MYSQL conectado com sucesso')
} catch (error) {
  console.log(`Error: ${error}`);
}
module.exports = sequelize