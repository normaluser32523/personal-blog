const { Post, User } = require('../models');

exports.createPost = async ({ content, mediaUrl, userId }) => {
  return await Post.create({ content, mediaUrl, userId });
};

exports.getAllPosts = async () => {
    return await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['email'],
        },
      ],
      order: [['createdAt', 'DESC']],
    });
};

exports.getPostById = async (id) => {
  return await Post.findByPk(id);
};

exports.updatePost = async (id, { content, mediaUrl, userId }) => {
  const post = await Post.findByPk(id);
  if (!post || post.userId !== userId) return null;
  
  post.content = content || post.content;
  post.mediaUrl = mediaUrl || post.mediaUrl;
  await post.save();
  
  return post;
};

exports.deletePost = async (id, userId) => {
  const post = await Post.findByPk(id);
  if (!post || post.userId !== userId) return null;
  
  await post.destroy();
  return true;
};