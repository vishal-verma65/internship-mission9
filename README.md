# Mission9 — Backend

Simple Node.js/Express backend for the Mission9 internship project. Provides basic authentication and blog/post handling.

**Prerequisites**

- Node.js (v14+)
- npm

**Quick start**

1. Change into the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Run the server:

```bash
npm start
# or
node server.js
```

The server entry point is [backend/server.js](backend/server.js).

**Project structure (important files)**

- [backend/package.json](backend/package.json)
- [backend/server.js](backend/server.js)
- [backend/src/app.js](backend/src/app.js)
- [backend/src/routes/auth.routes.js](backend/src/routes/auth.routes.js)
- [backend/src/routes/posts.routes.js](backend/src/routes/posts.routes.js)
- [backend/src/routes/blog.routes.js](backend/src/routes/blog.routes.js)
- [backend/src/controllers/auth.controller.js](backend/src/controllers/auth.controller.js)
- [backend/src/controllers/posts.controller.js](backend/src/controllers/posts.controller.js)
- [backend/src/data/blogPosts.js](backend/src/data/blogPosts.js)
- [backend/src/middlewares/logger.js](backend/src/middlewares/logger.js)
- [backend/src/utils/jwt.util.js](backend/src/utils/jwt.util.js)

**Notes**

- The app uses JWT helpers in the `src/utils` folder for authentication.
- Check `package.json` scripts in [backend/package.json](backend/package.json) for any custom start scripts.
- If you need environment variables (JWT secret, ports), add a `.env` and update the app accordingly.


