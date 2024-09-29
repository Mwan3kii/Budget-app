const { Model, DataTypes } = require('sequelize');

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
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
}, {sequelize,
    modelName: 'Transaction'
});

Transaction.associate = (models) => {
    Transaction.belongsTo(models.User, {as: 'author', foreignKey: 'author_id'});
    Transaction.belongsToMany(models.Category);
}

module.exports = Transaction;