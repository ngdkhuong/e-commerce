import JWT from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = JWT.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
    // ? lưu token vào vùng nhớ của cookie có tên accessToken
    return res.cookie('accessToken', token, {
        httpOnly: true,
        // ? Bảo vệ cookie nếu không phải development k thay đổi được
        secure: process.env.DEV_MODE !== 'development',
    });
};

const generateResetToken = (userId) => {
    const token = JWT.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '15m' });
    return token;
};

export { generateToken, generateResetToken };
