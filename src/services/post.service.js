const { BlogPost, Category, User } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
  const post = await BlogPost.create({ title, content, categoryIds, userId });
  return { status: 'CREATED', message: post };
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: 
    [
      {
        model: Category,
        as: 'categories',
      },
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      }, 
    ],
  });
  return { status: 'SUCCESSFUL', message: posts };
};

module.exports = {
  createPost,
  getAllPosts,
};