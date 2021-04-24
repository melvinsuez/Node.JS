const Sequelize = require('sequelize');

const tasks = require('./task');

const sequelize = new Sequelize('toti', 'postgres', '1234', {
    // gimme postgres, please!
    host: 'localhost',
    dialect: 'postgres'
})

const task = tasks(sequelize, Sequelize);

sequelize.sync({force: false})
    .then (() => {
        console.log('Tablas creadas y actualizadas');
})

module.exports = {
    task
}