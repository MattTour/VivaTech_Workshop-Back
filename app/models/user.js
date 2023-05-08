const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database');

class user extends Model {};

user.init({
    Nom: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Prenom: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Telephone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Pass: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    timestamps: true,
    underscored: true,
    tableName: 'USER',
    modelName: 'user'
})

module.exports = user;