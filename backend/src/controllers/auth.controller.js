import {generateMockToken}  from "../utils/jwt.util.js"

function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const token = generateMockToken({
    username,
    iat: Date.now(),
    exp: Date.now() + 1000 * 60 * 60,
  });

  res.json({ message: 'Login successful', token });
}

export default { login };