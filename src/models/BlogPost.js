module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    content:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      referencs: {
        model: 'users',
        key: 'id',
      },
    },
    published:{
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated:{
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return BlogPost;
}