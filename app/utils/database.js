const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mariadb://admin:pass@mysql/viva_tech');

try {
    sequelize.authenticate();
    console.log('Connection successful');
}
catch (error) {
    console.error('Unable to connect',error);
}

module.exports = sequelize;