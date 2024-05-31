export function exceptionHandler(err, req, res, next) {
  let message;
  let details;

  try {
    details = JSON.parse(err.message);
    message = details?.message || "An error occurred";
  } catch (error) {
    message = err.message || "An error occurred";
  }

  console.error({ message });

  const statusCode = err.statusCode || 500; // Default to 500 if statusCode is not set

  res.status(statusCode).json({
    error: true,
    statusCode: statusCode,
    message: message,
    details: details || undefined,
    timestamp: new Date().toISOString(),
    path: req.url,
  });
}
