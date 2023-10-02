const { postService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const { status, message } = await postService.createPost(title, content, categoryIds, id);
  return res.status(mapStatusHTTP[status]).json(message);
};

const getAllPosts = async (req, res) => {
  const { status, message } = await postService.getAllPosts();
  return res.status(mapStatusHTTP(status)).json(message);
};

module.exports = {
  createPost,
  getAllPosts,
};