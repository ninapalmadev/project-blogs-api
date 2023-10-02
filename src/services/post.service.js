const { BlogPost, Category, User } = require('../models');

const createPost = async (name) => {
  const post = await BlogPost.create({ name });
  return { status: 'CREATED', message: post };
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 'SUCCESSFUL', message: posts };
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) return { status: 'NOT_FOUND', message: 'Post does not exist' };
  return { status: 'SUCCESSFUL', message: post };
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};