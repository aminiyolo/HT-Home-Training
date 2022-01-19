import { useState } from "react";
import { Nav, Item } from "./style";
import { logout } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    logout(dispatch);
  };

  return (
    <Nav className="nav-wrapper">
      <Item className="item">
        <div>홈 화면</div>
      </Item>

      <Item className="item">How to use</Item>
      <Item className="item">이미지 검색</Item>
      <Item>
        <button onClick={handleLogout}>로그아웃</button>
      </Item>
    </Nav>
  );
};

export default Navbar;
