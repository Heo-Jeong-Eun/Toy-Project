import { userModel } from '../db/models/user-model.js';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserService {
  // 본 파일의 맨 아래에서, new UserService(userModel) 하면, 이 함수의 인자로 전달됨
  constructor(userModel) {
    this.userModel = userModel;
  }

  // 회원 가입
  async addUser(userInfo) {
    // 객체 destructuring
    const { userName, userEmail, userPassword, role } = userInfo;
    console.log(userInfo);
    // 이메일 중복 확인
    const user = await this.userModel.findByEmail(userEmail);

    console.log(user);
    if (user) {
      throw new Error(
        '이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.'
      );
    }

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    const newUserInfo = {
      userName,
      userEmail,
      userPassword: hashedPassword,
      passwordCheck: hashedPassword,
    };

    // db에 저장
    const createdNewUser = await this.userModel.create(newUserInfo);
    return createdNewUser;
  }

  // 로그인
  async getUserToken(loginInfo) {
    // 객체 destructuring
    const { userEmail, userPassword } = loginInfo;

    // 해당 이메일의 사용자 정보가  db에 존재하는지 확인한다.
    const user = await this.userModel.findByEmail(userEmail);
    if (!user) {
      throw new Error(
        '해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.'
      );
    }

    // 이메일은 통과, 다음으로 비밀번호를 확인한다.
    // 비밀번호 일치 여부 확인
    const correctPasswordHash = user.userPassword; // db에 저장되어 있는 암호화된 비밀번호

    // 매개변수의 순서 중요하다. (1번째는 프론트가 보내온 비밀번호, 2번쨰는 db에 있떤 암호화 된 비밀번호)
    const isPasswordCorrect = await bcrypt.compare(
      userPassword,
      correctPasswordHash
    );

    if (!isPasswordCorrect) {
      throw new Error(
        '비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.'
      );
    }

    // 로그인 성공 -> JWT 웹 토큰 생성
    const secretKey = process.env.JWT_SECRET_KEY || 'secret-key';

    // 2개 프로퍼티를 jwt 토큰에 담는다.
    const token = jwt.sign({ shortId: user.shortId }, secretKey);

    return token;
  }

  // 유저정보 수정, 현재 비밀번호가 있어야 수정 가능하다.
  async setUser(userInfoRequired, toUpdate) {
    // 객체 destructuring
    const { shortId, currentPassword } = userInfoRequired;

    // 우선 해당 id의 유저가 db에 있는지 확인하다.
    let user = await this.userModel.findById(shortId);

    // db에서 찾지 못한 경우, 에러 메시지 반환한다.
    if (!user) {
      throw new Error('가입 내역이 없습니다. 다시 한 번 확인해 주세요.');
    }

    // 다음으로 정보 수정을 위해 사용자가 입력한 비밀번호가 올바른 값인지 확인해야 한다.
    // 비밀번호 일치 여부 확인
    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      currentPassword,
      correctPasswordHash
    );

    if (!isPasswordCorrect) {
      throw new Error(
        '현재 비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.'
      );
    }

    // 업데이트 시작, 비밀번호도 변경하는 경우 회원가입 때처럼 해쉬화 해주어야 한다.
    const { userPassword } = toUpdate;

    if (userPassword) {
      const newPasswordHash = await bcrypt.hash(userPassword, 10);
      toUpdate.userPassword = newPasswordHash;
    }

    // 업데이트 진행
    user = await this.userModel.update({
      shortId,
      update: toUpdate,
    });

    return user;
  }

  async deleteUser(userInfoRequired) {
    // 객체 destructuring
    // const { shortId, currentPassword } = userInfoRequired;
    const { shortId } = userInfoRequired;

    // console.log('currentPassword' + currentPassword);

    // 우선 해당 id의 유저가 db에 있는지 확인
    let user = await this.userModel.findById(shortId);

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      throw new Error('가입 내역이 없습니다. 다시 한 번 확인해 주세요.');
    }

    // 이제, 정보 수정을 위해 사용자가 입력한 비밀번호가 올바른 값인지 확인해야 함

    // 비밀번호 일치 여부 확인
    // const correctPasswordHash = user.password;
    // const isPasswordCorrect = await bcrypt.compare(
    //     currentPassword,
    //     correctPasswordHash
    // );

    // if (!isPasswordCorrect) {
    //     throw new Error(
    //         "현재 비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요."
    //     );
    // }

    // 유저 삭제 시작
    user = await this.userModel.deleteOneUser({
      shortId,
    });
    console.log('사용자 정보가 삭제되었습니다.');
    return user;
  }
}

const userService = new UserService(userModel);
export { userService };