const Sequelize = require('sequelize');

const OperationModel = require('./models/operation');

const sequelize = new Sequelize('operations', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 8889
});

const Operation = OperationModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas')
    })
    .catch(err => {
        console.log('Error ' + err)
    })

/* sequelize.authenticate()
    .then(() => 'Database ok')
    .catch(err => 'Error ' + err) */

module.exports = {
    Operation
}