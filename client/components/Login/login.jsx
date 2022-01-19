import React from "react";
import GoogleLogin from "react-google-login";
import { loginSucc, loginFail } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const clientId = process.env.NEXT_PUBLIC_GOOGLE_KEY;

const GoogleLoginBtn = () => {
  const { user, error } = useSelector((state) => state.user);
  const router = useRouter();

  const dispatch = useDispatch();
  const onSuccess = (response) => {
    // 구글 로그인 성공시 서버에 전달할 데이터
    router.push("/");
    const { googleId, profileObj } = response;
    loginSucc(dispatch, { googleId, profileObj });
  };

  const onFailure = (error) => {
    console.log(error);
    loginFail(dispatch);
  };

  user && router.push("/");
  error && alert("아이디와 비밀번호가 일치하지 않습니다.");

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        // render={(renderProps) => (
        //   <button
        //     style={{ padding: "1rem" }}
        //     onClick={renderProps.onClick}
        //     disabled={renderProps.disabled}
        //   >
        //     Sign in with Google
        //   </button>
        // )}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
};

export default GoogleLoginBtn;
