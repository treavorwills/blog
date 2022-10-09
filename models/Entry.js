const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Entry extends Model { }

Entry.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [30],
            },
        },
        body: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'user',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'entry',
    }
);


module.exports = Entry;
