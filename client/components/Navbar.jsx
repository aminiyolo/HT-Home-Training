import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="item">
        <div>홈 화면</div>
      </div>

      <div className="item">How to use</div>
      <div className="item">이미지 검색</div>
      <style jsx>
        {`
          .nav-wrapper {
            display: flex;
            aling-items: center;
            margin: auto;
            background-color: white;
            margin-left: 2.5rem;
          }

          .item {
            padding: 1.5rem;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
