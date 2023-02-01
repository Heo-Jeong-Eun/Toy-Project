import { Router } from 'express';
import is from '@sindresorhus/is';
import { userService } from "../../../TestCode/Edit/src/services";
const userRouter = Router();

// 회원 가입 API 
userRouter.post("/user/signup", async (req, res, next) => {
    try {
        if (is.emptyObject(req.body)) {
            throw new Error(
                "headers의 Content-Type을 application/json으로 설정해주세요."
            );
        }
    
        const { userName, userEmail, userPassword } = req.body;
        console.log("회원가입이 되었습니다.", signup);

        // data를 db에 추가
        const newUser = await userService.addUser({
            userName,
            userEmail,
            userPassword,
        });

        res.status(201).json(newUser);
    }
    catch (e) {
        next(e);
    }
});

// 로그인 API
userRouter.post("/user/login", async function (req, res, next) {
    try {
        if (is.emptyObject(req.body)) {
            throw new Error(
                "headers의 Content-Type을 application/json으로 설정해주세요."
            );
        }

        // req에서 data 가져오기 
        const email = req.body.email;
        const password = req.body.password;

        // login 진행, 로그인 성공 시 jwt token을 프론트에 보낸다. 
        const userToken = await userService.getUserToken({ email, password });
        
        //만료 시간을 임의로 정해준다. 24시간 * 3일
        const expiryDate = new Date(Date.now() + 60 * 60 * 1000 * 24 * 3);

        // httponly 옵션을 넣어 보안을 강화한 쿠키 사용한다. -> web 한정
        // jwt 토큰을 프론트에 보낸다. -> jwt token = string
        res.cookie("token", userToken, {
            expires: expiryDate,
            httpOnly: true,
            signed: true,
        });
        
        // res.cookie("token", userToken);
        res.cookie("login", "true");
        res.status(200).json(userToken);
    }
    catch (e) { 
        next(e);
    }
});

// 로그아웃 API 
userRouter.get("/user/logout", async function (req, res, next) {
    //쿠키에 있는 jwt 토큰이 들어 있는 쿠키를 비워준다. 
    try {
        res.clearCookie("token");
        res.clearCookie("login");
        res.redirect("/");
    } 
    catch (e) {
        next(e);
    }
});

// 사용자 정보 수정, /users/edit/abc12345 로 요청하면 req.params.userId는 "abc12345" 문자열이 된다. 
userRouter.patch("/user/{password}", loginRequired, async function (req, res, next) {
    try {
        if (is.emptyObject(req.body)) {
        throw new Error(
            "headers의 Content-Type을 application/json으로 설정해주세요."
        );
        }

        // params로부터 id를 가져온다. 
        const shortId = req.currentUserId;

        // body data 로부터 업데이트할 사용자 정보를 추출한다.
        const userName = req.body.userName;
        const userPassword = req.body.userPassword;
        const userEmail = req.body.userEmail;

        // body data로부터, 확인용으로 사용할 현재 비밀번호를 추출한다.
        const currentPassword = req.body.currentPassword;

        // currentPassword 없을 시, 진행 불가
        if (!currentPassword) {
        throw new Error("정보를 변경하려면, 현재의 비밀번호가 필요합니다.");
        }

        const userInfoRequired = { shortId, currentPassword };

        // 위 데이터가 undefined가 아닐 경우, 즉 프론트에서 업데이트를 위해 보내주었다면, 업데이트용 객체에 삽입한다.
        const toUpdate = {
        ...(userName && { userName }),
        ...(userPassword && { userPassword }),
        ...(userEmail && { userEmail }),
        };

        // 사용자 정보를 업데이트한다.
        const updatedUserInfo = await userService.setUser(
            userInfoRequired,
            toUpdate
        );

        // 업데이트 이후의 유저 데이터를 프론트에 보내준다. 
        res.status(200).json(updatedUserInfo);
    } 
    catch (e) {
        next(e);
    }
});

// 회원 탈퇴 API 
userRouter.delete("/unregister", loginRequired, async function (req, res, next) {
    try {
        const shortId = req.currentUserId;

        if (is.emptyObject(req.body)) {
            throw new Error(
                "headers의 Content-Type을 application/json으로 설정해주세요."
            );
        }

        // // params로부터 id를 가져온다
        // const shortId = req.currentUserId;

        // // body data 로부터 탈퇴 및 삭제할 사용자 비밀번호를 추출한다.
        // const currentPassword = req.body.password;

        // // password 없을 시, 진행 불가
        // if (!currentPassword) {
        //     throw new Error("탈퇴를 위해서는 비밀번호가 필요합니다.");
        // }

        // 사용자 정보를 삭제한다. -> 회원 탈퇴 
        const deletedUser = await userService.deleteUser(userInfoRequired);

        if (!deletedUser) {
            throw new Error("삭제가 실패하였습니다.");
        }
        res.clearCookie("token").clearCookie("login").status(200).json({
            success: true,
            data: "성공적으로 탈퇴되었습니다.",
        });
    }
    catch (e) {
        next(e);
    }
});

export { userRouter };