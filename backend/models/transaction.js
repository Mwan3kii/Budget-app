const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');


class Transaction extends Model {

}

Transaction.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categories',  
            key: 'id'             
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
}, {sequelize,
    modelName: 'Transaction'
});

Transaction.associate = (models) => {
    Transaction.belongsTo(models.User, {as: 'author', foreignKey: 'author_id'});
    Transaction.belongsTo(models.Category);
}

module.exports = Transaction;