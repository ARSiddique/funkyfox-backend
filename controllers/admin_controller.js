const bcrypt = require('bcrypt')
const authModel = require('../models/admin_model')
const register = async (req, res) => {
    try {
        const { Name, Email, Password, Phone, Image } = req.body
        const hashedPassword = await bcrypt.hash(Password, 10)
        const sameEmail = await authModel.findOne({ Email })
        if (sameEmail) {
            return res.status(409).json({
                success: false,
                msg: "Email already exists, pleasae try to login"
            })
        }
        const register = await authModel.create({
            Name: Name,
            Email: Email,
            Phone: Phone,
            Password: hashedPassword,
            Image: Image
        })
        res.status(201).json({
            success: true,
            register
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })

    }
}
const login = async (req, res) => {
    try {
        const { Email, Password } = req.body
        const sameEmail = await authModel.findOne({ Email }).populate("Expense").populate("Income").populate("ProfitLoss")
        if (!sameEmail) {
            return res.status(409).json({

                success: false,
                msg: "Email not found"
            })
        }
        const comparePassword = await bcrypt.compare(Password, sameEmail.Password)
        if (!comparePassword) {
            return res.status(400).json({
                success: false,
                msg: "Invalid Email or Password"
            })
        }
        res.status(200).json({
            success: true,
            msg: 'User logged in',
            sameEmail

        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })

    }
}
const getLogins = async (req, res) => {
    try {
        const User = await authModel.find({})
        res.status(200).json({

            success: true,
            User
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}
const getSingleLogin = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const User = await authModel.findById(id)
        res.status(200).json({

            success: true,
            User
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}
const updateAuth = async (req, res) => {
    const { id } = req.params;
    const body = req.body
    console.log(id)
    try {
        const updatedAuth = await authModel.findByIdAndUpdate(id, body, { new: true })
        res.status(200).json({

            success: true,
            updatedAuth
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}
const deleteAuth = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const auth = await authModel.findByIdAndDelete(id)
        res.status(200).json({

            success: true,
            msg: `Product with id ${id} deleted successfully`
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}
const updatePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    try {
        const user = await authModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(currentPassword, user.Password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Current password is incorrect' });
        }
        user.Password = await bcrypt.hash(newPassword, 10);
        await user.save();
        res.json({ message: 'Password updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
}
const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const isAdminExist = await adminModel.findOne({ email })
        if (!isAdminExist) {
            return res.status(404).json({
                message: "Email not Found"
            })
        }
        const resetToken = jwt.sign({
            email: isAdminExist.email,
            userId: isAdminExist._id
        }, process.env.JWT_SECRET, { expiresIn: '1h' })

        isAdminExist.resetPasswordtoken = resetToken;
        isAdminExist.resetPasswordTokenExpiry = Date.now() + 60 * 60 * 1000;
        await isAdminExist.save()

        console.log(isAdminExist)

        await sendResetEmail(email, resetToken, res)
        // res.status(200).json({
        //   success: true,
        //   msg: 'Check your email to reset your password.',
        // });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            msg: 'Failed to send email. Please try again later.',
            error,
        });
    }
}
const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    try {

        const user = await adminModel.findOne({ resetPasswordtoken: token, resetPasswordTokenExpiry: { $gt: Date.now() } })

        if (!user) {
            return res.status(404).json({
                msg: 'token not found',
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        user.resetPasswordtoken = null;
        user.resetPasswordTokenExpiry = null;
        user.password = hashedPassword;
        await user.save()

        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: user.email,
            subject: 'Success',
            text: 'Hello,testing Admin authentication',
            html: `<b> Your password has been reset Succesfully</b>`,
        }
        await transporter.sendMail(mailOptions),
            console.log('reset Token', token)
        res.status(200).json({
            success: true,
            msg: 'password reset Successfully'
        })
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            msg: 'Failed to reset Password. Please try again later.',
            error,
        });
    }
};



module.exports = { register, login, getLogins, getSingleLogin, updateAuth, deleteAuth, updatePassword, forgetPassword, resetPassword} 