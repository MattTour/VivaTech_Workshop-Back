const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database');

class stand extends Model {};

stand.init({
    Nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Localisation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Nom_Entreprise: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Catégorie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Telephone: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    tableName: 'STANDS',
    modelName: 'stand'
})

module.exports = stand;