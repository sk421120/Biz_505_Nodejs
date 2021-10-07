import passport from "passport";
import passportLocal from "passport-local";
import User from "../model/user.js";
import { members } from "../model/member.js";

// local login 정책을 수행하는 모듈
const LocalStratege = passportLocal.Strategy;

const exportPassport = () => {
  // 로그인이 성공했을때 (내부에서) 호출되는 함수
  passport.serializeUser((user, done) => {
    console.log("로그인 성공");
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    console.log("DES", user);
    done(null, user);
  });

  passport.use(
    new LocalStratege(
      {
        usernameField: "userid",
        passwordField: "password",
        session: true,
      },
      (userid, password, done) => {
        // Member.js에 선언된 사용자 리스트를 사용하여 인증하기
        // const findMember = members.filter((member) => {
        //   return member.userid === userid && member.password === password;
        // });
        // if (findMember && findMember.length > 0)
        //   return done(null, findMember[0]);
        // else return done(null, false, { message: "Login Fail" });
        members.map((member) => {
          if (member.userid === userid && member.password === password)
            return done(null, member);
        });

        /* 
        members.forEach((member) => {
          if (member.userid === userid && member.password === password)
            return done(null, member);
        });
		*/

        return done(null, false, { message: "Login Fail" });
      }
    )
  );
};

export default exportPassport;
