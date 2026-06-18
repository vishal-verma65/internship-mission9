import blogPosts from '../data/blogPosts.js';

let nextId = 1;

function getAllPosts(req, res) {
  res.json(blogPosts);
}

function getPostById(req, res) {
  const id = parseInt(req.params.id, 10);
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.json(post);
}

function createPost(req, res) {
  const newPost = {
    id: nextId++,
    ...req.body,
  };

  blogPosts.push(newPost);
  res.status(201).json(newPost);
}

function updatePost(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = blogPosts.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }

  blogPosts[index] = { ...blogPosts[index], ...req.body, id };
  res.json(blogPosts[index]);
}

function deletePost(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = blogPosts.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }

  blogPosts.splice(index, 1);
  res.json({ message: 'Post deleted', id });
}

export default {
  getAllPosts,
  getPostById, 
  createPost,
  updatePost,
  deletePost,
};  