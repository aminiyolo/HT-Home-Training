import { useState } from "react";
import { Nav, Item } from "./style";

const Navbar = () => {
  return (
    <Nav className="nav-wrapper">
      <Item className="item">
        <div>홈 화면</div>
      </Item>

      <Item className="item">How to use</Item>
      <Item className="item">이미지 검색</Item>
    </Nav>
  );
};

export default Navbar;
