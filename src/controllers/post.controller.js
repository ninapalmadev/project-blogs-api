const { postService } = require('../services');
const { getPayload } = require('../auth/authFunction');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createPost = async (req, res) => {
  const { authorization } = req.headers;
  const token = authorization.split(' ')[1];
  const payload = getPayload(token);
  const { title, content, categoryIds } = req.body;
  const { id } = payload;
  const { status, message } = await postService.createPost(title, content, id, categoryIds);
  return res.status(mapStatusHTTP(status)).json(message);
};

const getAllPosts = async (req, res) => {
  const { status, message } = await postService.getAllPosts();
  return res.status(mapStatusHTTP(status)).json(message);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await postService.getPostById(id);
  if (status === 'NOT_FOUND') {
    return res.status(mapStatusHTTP(status)).json({ message: 'Post does not exist' });
  }
  return res.status(mapStatusHTTP(status)).json(message);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};