const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	host: 'sql.freedb.tech',
	dialect: 'mysql',
    username: 'freedb_anajesset',
    password: '2z*YJMyJp9GfEGq',
    database: 'freedb_todolist_squalize'
});

module.exports = sequelize
