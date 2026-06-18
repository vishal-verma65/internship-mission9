import express from 'express';
import logger from './middlewares/logger.js';
import postsRoutes from './routes/posts.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(express.json());
app.use(logger);

app.use('/posts', postsRoutes);
app.use('/', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to The Data Hub API' });
});

export default app;