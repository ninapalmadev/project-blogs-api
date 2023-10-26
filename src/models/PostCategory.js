module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: 'post_id',
      references: {
        model: 'BlogPost',
        key: 'id',
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: 'category_id',
      references: {
        model: 'Category',
        key: 'id',
      },
    },
  }, {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostCategory;
}