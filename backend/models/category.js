const { Model, DataTypes} = require('sequelize');

class Category extends Model{
}

Category.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: True
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {sequelize,
    modelName: 'Category'
});

Category.associate = (models) => {
    Category.belongsToMany(models.Transaction);
    Category.belongsTo(models.User);
}

module.exports = Category;