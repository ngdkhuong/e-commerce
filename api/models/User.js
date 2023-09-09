import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        role: {
            type: Number,
            default: 0,
        },
        token: {
            type: String,
            default: null,
        },
    },
    { timestamps: true },
);

// userSchema.methods = {
//     createPasswordChangedToken: function () {
//         const resetToken = crypto.randomBytes(32).toString('hex');
//         this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
//         this.passwordResetExpires = Date.now() + 15 * 60 * 1000;
//         return resetToken;
//     },
// };

export default mongoose.model('User', userSchema);
