import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

// https://github.com/zeit/micro#error-handling
const handleErrors = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    return await fn(req, res);
  } catch (error) {
    const statusCode = error.statusCode || 500;
    const message = err.message || 'Oops, something went wrong!';
if (error instanceof Error) {
    res.status(statusCode).json({ statusCode, message });
}
  }
};

export default handleErrors;
