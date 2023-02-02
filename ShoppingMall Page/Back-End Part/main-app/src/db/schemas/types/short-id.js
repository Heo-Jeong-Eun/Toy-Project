import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("01234567899abcedf", 6);

const shortId = {
    type: String,
    default: () => {
        return nanoid() // 중복 값 없이 shortId 생성 
    },
    require: true,
    index: true,
};

export { shortId };