const { Router } = require('express');
const { SignUp } = require("./models/SignUp");
const asyncHandler = require('../utils/async-handler');
const hashPassword = require('../utils/hash-password');

const router = Router();

router.post("/user/signup", asyncHandler (async (req, res) => {
    const { userName, userEmail, userPassword } = req.body;
    const hashedPassword = hashPassword(userPassword);
    const signup = await SignUp.create({
        userName,
        userEmail,
        userPassword: hashedPassword,
    })

    // 입력 값이 없을 때, error message 반환 
    if (!(userName || userEmail || userPassword)) {
        throw new Error("내용을 입력 해 주세요");
    }

    console.log("회원가입이 되었습니다.", signup);

    res.redirect('/');
}));

module.exports = router;

