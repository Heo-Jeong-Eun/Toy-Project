const mongoose=require('mongoose');

const signupSchema = mongoose.Schema ({
    userName: {
        type: String, 
        maxlength: 10, // 이름 길이 제한
    },
    userEmail: {
        type: String,
        trim: true, // 중복 불가
    },   
    userPassword: {
        type: String,
        maxlength: 15, // 비밀번호 길이 제한 
    }
});

const SignUp = mongoose.model("SignUp", signupSchema);
module.exports = { SignUp }

// server.js 연결 -> api 명세대로 작성 