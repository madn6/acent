import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
	// First try cookie, then Authorization header
	const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

	if (!token) return res.status(401).json({ message: 'No token provided' });

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.userId = decoded.id;
		next();
	} catch (error) {
		return res.status(401).json({ message: 'Invalid token' });
	}
};
