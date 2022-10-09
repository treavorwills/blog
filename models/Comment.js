const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_author: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'user',
                key: 'id',
            }
        },
        entry_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'entry',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }  
);


module.exports = Comment;
