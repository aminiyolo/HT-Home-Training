import GoogleLoginBtn from "../components/Login/login";
// import { useSelector } from "react-redux";
// import { useRouter } from "next/router";

export default function Login() {
  // const { user, error } = useSelector((state) => state.user);
  // const router = useRouter();

  // user && router.push("/");
  // error && alert("아이디와 비밀번호가 일치하지 않습니다.");

  return (
    <div
      style={{
        width: "100%",
        height: "91.5vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <GoogleLoginBtn />
    </div>
  );
}
