import { useState } from "react";
import { Nav, Item } from "./style";
import { logout } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Navbar = () => {
  const dispatch = useDispatch();
  const { pathname } = useRouter();

  const handleLogout = () => {
    logout(dispatch);
  };

  return (
    <Nav className="nav-wrapper">
      <Item className="item" path={pathname === "/"}>
        <div>홈 화면</div>
      </Item>
      <Item className="item" path={pathname === "/guide"}>
        How to use
      </Item>
      <Item className="item" path={pathname === "/search"}>
        이미지 검색
      </Item>
      <Item>
        <button path={0} onClick={handleLogout}>
          로그아웃
        </button>
      </Item>
    </Nav>
  );
};

export default Navbar;
