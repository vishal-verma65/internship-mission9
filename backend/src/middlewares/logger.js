function logger(req, res, next) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`[${req.method}] ${req.originalUrl} - ${timestamp}`);
  next();
}

export default logger;