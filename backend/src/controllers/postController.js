const postService = require('../services/postService');

exports.createPost = async (req, res) => {
  try {
    const { content, mediaUrl, user } = req.body;
      const userId = req.userId;

      console.log('Request Body:', req.body);
      console.log('Authenticated User ID:', userId);
      console.log('createPost ', content, mediaUrl, userId)
      console.log('user ', user)

      if (!content) {
        return res.status(400).json({ message: 'Content is required' });
      }
  
    const post = await postService.createPost({ content, mediaUrl, userId });
    res.status(201).json(post);
  } catch (err) {
    console.error("Error in createPost:", err.message);
    res.status(400).json({ message: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await postService.getAllPosts();
        console.log(posts)
        res.json(posts);
    } catch (err) {
        console.error('Error in getAllPosts:', err.message);
        res.status(500).json({ message: err.message });
    }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { content, mediaUrl } = req.body;
    const userId = req.userId;
    const updatedPost = await postService.updatePost(req.params.id, { content, mediaUrl, userId });

    if (!updatedPost) return res.status(403).json({ message: 'Unauthorized or post not found' });
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const userId = req.userId;
    const deleted = await postService.deletePost(req.params.id, userId);

    if (!deleted) return res.status(403).json({ message: 'Unauthorized or post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};