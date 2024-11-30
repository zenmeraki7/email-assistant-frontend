export const errorMiddleware = async (err, req, res, next) => {
  // Determine the status code
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
  // Respond with a consistent error structure
  res.status(statusCode).json({
    success: false,
    message: err.message,
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }), // Include stack trace only in development
  });
};
