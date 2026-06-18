import { Router } from "express";

const blogRouter = Router()


blogRouter.get('/posts', (req, res) => {
  res.json({ message: 'Route active' });
});

blogRouter.get('/posts/:id', (req, res) => {
  res.json({ message: 'Route active' });
});

blogRouter.post('/posts', (req, res) => {
  res.json({ message: 'Route active' });
});

blogRouter.put('/posts/:id', (req, res) => {
  res.json({ message: 'Route active' });
});

blogRouter.delete('/posts/:id', (req, res) => {
  res.json({ message: 'Route active' });
});

blogRouter.get('/', (req, res) => {
  res.json({ message: 'Welcome to The Data Hub API' });
});

export default blogRouter