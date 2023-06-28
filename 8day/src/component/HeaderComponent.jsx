import React from 'react';

export default function HeaderComponent () {
  return (
    <header id="header">
      <div className="header-container">
        <div className="brand-logo">
          <a href="!#"><img src="./img/mini.png" alt="홈 버튼 이미지" /></a>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="!#">미니인턴 리스트</a>
            </li>
            <li>
              <a href="!#">채용관</a>
            </li>
            <li>
              <a href="!#">M클래스</a>
            </li>
            <li>
              <a href="!#">해피폴리오</a>
            </li>
          </ul>
        </nav>
        <div className="member">
          <ul>
            <li>
              <a href="!#" className="not-color">서비스 소개</a>
            </li>
            <li>
              <a href="!#">회원가입</a>
            </li>
            <li>
              <a href="!#">로그인</a>
            </li>
            <li>
              <a href="!#">기업회원</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};