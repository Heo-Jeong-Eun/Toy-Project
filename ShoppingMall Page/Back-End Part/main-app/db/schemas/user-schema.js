// signup-schema

import { Schema } from "mongoose";
import { shortId } from "./types/short-id";

const UserSchema = new Schema (
    {   
        shortId,
        userName: {
            type: String, 
            maxlength: 10, // 이름 길이 제한
            required: true,
        },
        userEmail: {
            type: String,
            trim: true, // 중복 불가
            required: true,
        },   
        userPassword: {
            type: String,
            minlength: 8, // 최소 비밀번호 길이 지정
            required: true,
        }, 
        passwordCheck: { // 비밀번호 확인 
            type: String,
            minlength: 8, // 최소 비밀번호 길이 지정
            required: true,
        }
    }
);

export { UserSchema };