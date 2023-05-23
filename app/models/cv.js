const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database');

class cv extends Model {};

cv.init({
    id_user: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Last_Diplome: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Poste_Recherche: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    timestamps: false,
    tableName: 'CV',
    modelName: 'cv'
})

module.exports = cv;
