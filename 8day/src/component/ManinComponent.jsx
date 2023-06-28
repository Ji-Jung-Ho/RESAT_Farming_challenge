import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import '../css/style.css'
import 'swiper/swiper-bundle.css';

SwiperCore.use([ Pagination, Autoplay ])

export default function ManinComponent () {
  return (
    <main id="main">
      <div className="main-container">
        <section className="section">
          <div className="content-1">
            <div className="left-img">
              <img src="./img/main_img_1.jpg" alt=""/>
              <a href="!#">
                <div className="left-title">
                  <p>최대한의 효율로 직무경험을 쌓아보세요</p>
                  <p>2주만에 실무 경험을 만드는, 미니인턴</p>
                </div>
              </a>
              <span className="sign-up">
                <svg xmlns="http://www.w3.org/2000/svg" width="118" height="8" viewBox="0 0 118 8"><path fill="none" stroke="#FFF" d="M0 7h118l-7.652-6"></path></svg>
                <span>회원가입하기</span>
              </span>
            </div>
            <div className="right-img">
              <img src="./img/main_img_r_1.jpg" alt=""/>
              <a href="!#">
                <div className="right-title">
                  <p>미니인턴? 미니인턴!</p>
                </div>
              </a>
              <span className="service">
                <svg xmlns="http://www.w3.org/2000/svg" width="118" height="8" viewBox="0 0 118 8"><path fill="none" stroke="#FFF" d="M0 7h118l-7.652-6"></path></svg>
                <span>서비스 더 알아보기</span>
              </span>
            </div>
          </div>
          <div className="content-2">
            <div className="title">
              <p>미니인턴으로 취업하세요</p>
              <div className="title-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="main-project-tooltip-svg">
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h24v24H0z" />
                    <path d="M12 3a9 9 0 110 18 9 9 0 010-18zm.6 12h-1.7v1.7h1.7V15zm-.536-8c-.246 0-.496.023-.752.068a5.807 5.807 0 00-.755.188 7.083 7.083 0 00-1.357.598l.697 1.511c.388-.191.762-.353 1.125-.485.362-.132.7-.198 1.015-.198.36 0 .628.084.803.253a.853.853 0 01.263.642c0 .169-.018.317-.054.444-.037.128-.096.25-.178.366a2.17 2.17 0 01-.321.352 9.9 9.9 0 01-.486.404c-.218.173-.405.34-.56.502a2.582 2.582 0 00-.38.499c-.098.17-.17.351-.218.54-.048.19-.072.4-.072.632v.506h1.804v-.41c0-.146.013-.272.038-.38a.925.925 0 01.14-.31c.069-.1.163-.207.284-.318.12-.112.277-.243.468-.393.25-.2.47-.391.66-.571a3.17 3.17 0 00.472-.56c.125-.194.22-.404.283-.63a2.83 2.83 0 00.096-.769c0-.391-.07-.74-.209-1.045a2.155 2.155 0 00-.598-.78 2.679 2.679 0 00-.95-.489A4.388 4.388 0 0012.064 7z" fill="#384040" />
                  </g>
                </svg>
                <div className="tooltip-content">
                  <div className="row1">
                    <svg width="12" height="18" viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 18V0l12 8.99z" fill="#1BC481" fillRule="evenodd" />
                    </svg>
                    <p>교육형 미니인턴 : 실무경험을 쌓을 수 있습니다.</p>
                  </div>
                  <div className="row2">
                    <svg width="12" height="18" viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 18V0l12 8.99z" fill="#1BC481" fillRule="evenodd" />
                    </svg>
                    <p>채용형 미니인턴 : 실무역량을 평가받을 수 있습니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sub-title">
              <p>이제 집, 학교, 도서관, 카페에서 인턴십을 경험하고, 실무역량평가로 취업하세요</p>
              <a href="!#">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="8" viewBox="0 0 28 8">
                  <path fill="none" stroke="#17a1ff" d="M0 7h28l-7.652-6" />
                </svg>
                모든 기업과제 보기
              </a>
            </div>
          </div>
          <ul className="content-2-ul">
            <li>
              <div className="item-list">
                <div className="img-box">
                  <img src="./img/제니럭스미니인턴랜딩페이지커버이미지.png" alt="동남아시아 시장에 마이크로니들패치 판매를 위한 '활용 가능한' 온라인 마케팅 전략 제안 커버 이미지"/>
                  <div className="card-img">
                    <svg width="60" height="26" viewBox="0 0 60 26">
                      <defs>
                        <filter x="-3.4%" y="-4.2%" width="106.9%" height="116.7%" filterUnits="objectBoundingBox" id="project_recruitment_badge_svg__a">
                          <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                          <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1" />
                        </filter>
                        <path id="project_recruitment_badge_svg__b" d="M16 0h42v24H16L0 12.013z" />
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <g transform="translate(1)">
                          <use fill="#000" filter="url(#project_recruitment_badge_svg__a)" xlinkHref="#project_recruitment_badge_svg__b" />
                          <use fill="#FE883C" xlinkHref="#project_recruitment_badge_svg__b" />
                        </g>
                        <text fontFamily="NotoSansKR-Bold, Noto Sans KR" fontSize="12" fontWeight="bold" fill="#FFF" transform="translate(1)">
                          <tspan x="16.88" y="16">채용형</tspan>
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="info-box">
                  <div className="project-card-info">
                    <div className="project-card-info-current-status">D-20</div>
                    <span className="project-card-current-categories">마케팅</span>
                  </div>
                  <p className="project-info-name">동남아시아 시장에 마이크로니들패치 판매를 위한 '활용 가능한' 온라인 마케팅 전략 제안</p>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <div className="img-box">
                  <img src="./img/나모펀딩미니인턴랜딩페이지커버이미지.png" alt="온라인 투자연계 금융업 사용자(투자 및 대출) 활성화 방안 커버 이미지"/>
                  <div className="card-img">
                    <svg width="60" height="26" viewBox="0 0 60 26">
                      <defs>
                        <filter x="-3.4%" y="-4.2%" width="106.9%" height="116.7%" filterUnits="objectBoundingBox" id="project_recruitment_badge_svg__a">
                          <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                          <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1" />
                        </filter>
                        <path id="project_recruitment_badge_svg__b" d="M16 0h42v24H16L0 12.013z" />
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <g transform="translate(1)">
                          <use fill="#000" filter="url(#project_recruitment_badge_svg__a)" xlinkHref="#project_recruitment_badge_svg__b" />
                          <use fill="#FE883C" xlinkHref="#project_recruitment_badge_svg__b" />
                        </g>
                        <text fontFamily="NotoSansKR-Bold, Noto Sans KR" fontSize="12" fontWeight="bold" fill="#FFF" transform="translate(1)">
                          <tspan x="16.88" y="16">채용형</tspan>
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="info-box">
                  <div className="project-card-info">
                    <div className="project-card-info-current-status">D-6</div>
                    <span className="project-card-current-categories">영업</span>
                  </div>
                  <p className="project-info-name">온라인 투자연계 금융업 사용자(투자 및 대출) 활성화 방안</p>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <div className="img-box">
                  <img src="./img/미니인턴-커버-만들기.png" alt="중장년의 재취업 교육에 필요한 프로그램 기획 및 개발 커버 이미지"/>
                  <div className="card-img">
                    <svg width="60" height="26" viewBox="0 0 60 26">
                      <defs>
                        <filter x="-3.4%" y="-4.2%" width="106.9%" height="116.7%" filterUnits="objectBoundingBox" id="project_recruitment_badge_svg__a">
                          <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                          <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1" />
                        </filter>
                        <path id="project_recruitment_badge_svg__b" d="M16 0h42v24H16L0 12.013z" />
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <g transform="translate(1)">
                          <use fill="#000" filter="url(#project_recruitment_badge_svg__a)" xlinkHref="#project_recruitment_badge_svg__b" />
                          <use fill="#FE883C" xlinkHref="#project_recruitment_badge_svg__b" />
                        </g>
                        <text fontFamily="NotoSansKR-Bold, Noto Sans KR" fontSize="12" fontWeight="bold" fill="#FFF" transform="translate(1)">
                          <tspan x="16.88" y="16">채용형</tspan>
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="info-box">
                  <div className="project-card-info">
                    <div className="project-card-info-current-status">D-20</div>
                    <span className="project-card-current-categories">기획·비즈니스</span>
                  </div>
                  <p className="project-info-name">중장년의 재취업 교육에 필요한 프로그램 기획 및 개발</p>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <div className="img-box eduction">
                  <img src="./img/엔닷라이트미니인턴.png" alt="엔닷캐드의 신규 서비스에 대한 UI/UX 개선점 제안 커버 이미지"/>
                  <div className="card-img">
                    <svg width="60" height="26" viewBox="0 0 60 26" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <filter x="-3.4%" y="-4.2%" width="106.9%" height="116.7%" filterUnits="objectBoundingBox" id="project_recruitment_badge_svg__a">
                          <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                          <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1" />
                        </filter>
                        <path id="project_recruitment_badge_svg__b" d="M16 0h42v24H16L0 12.013z" />
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <g transform="translate(1)">
                          <use fill="#000" filter="url(#project_recruitment_badge_svg__a)" xlinkHref="#project_recruitment_badge_svg__b" />
                          <use fill="#1BC481" xlinkHref="#project_recruitment_badge_svg__b" />
                        </g>
                        <text fontFamily="NotoSansKR-Bold, Noto Sans KR" fontSize="12" fontWeight="bold" fill="#FFF" transform="translate(1)">
                          <tspan x="16.88" y="16">교육형</tspan>
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="info-box">
                  <div className="project-card-info">
                    <div className="project-card-info-current-status">D-7</div>
                    <span className="project-card-current-categories">디자인</span>
                  </div>
                  <p className="project-info-name">엔닷캐드의 신규 서비스에 대한 UI/UX 개선점 제안</p>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <div className="img-box">
                  <img src="./img/듀코젠미니인턴-랜딩커버.jpg" alt="과학 및 공학 분야 VR 콘텐츠 기획 커버 이미지"/>
                  <div className="card-img">
                    <svg width="60" height="26" viewBox="0 0 60 26">
                      <defs>
                        <filter x="-3.4%" y="-4.2%" width="106.9%" height="116.7%" filterUnits="objectBoundingBox" id="project_recruitment_badge_svg__a">
                          <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                          <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1" />
                        </filter>
                        <path id="project_recruitment_badge_svg__b" d="M16 0h42v24H16L0 12.013z" />
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <g transform="translate(1)">
                          <use fill="#000" filter="url(#project_recruitment_badge_svg__a)" xlinkHref="#project_recruitment_badge_svg__b" />
                          <use fill="#FE883C" xlinkHref="#project_recruitment_badge_svg__b" />
                        </g>
                        <text fontFamily="NotoSansKR-Bold, Noto Sans KR" fontSize="12" fontWeight="bold" fill="#FFF" transform="translate(1)">
                          <tspan x="16.88" y="16">채용형</tspan>
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="info-box">
                  <div className="project-card-info">
                    <div className="project-card-info-current-status">D-5</div>
                    <span className="project-card-current-categories">기획·비즈니스</span>
                  </div>
                  <p className="project-info-name">과학 및 공학 분야 VR 콘텐츠 기획</p>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <div className="img-box eduction">
                  <img src="./img/알바임배너-2.png" alt="대학생들의 밈 현상을 유도할 수 있는 영상 리뷰 챌린지 이벤트 기획 커버 이미지"/>
                  <div className="card-img">
                    <svg width="60" height="26" viewBox="0 0 60 26" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <filter x="-3.4%" y="-4.2%" width="106.9%" height="116.7%" filterUnits="objectBoundingBox" id="project_recruitment_badge_svg__a">
                          <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                          <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1" />
                        </filter>
                        <path id="project_recruitment_badge_svg__b" d="M16 0h42v24H16L0 12.013z" />
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <g transform="translate(1)">
                          <use fill="#000" filter="url(#project_recruitment_badge_svg__a)" xlinkHref="#project_recruitment_badge_svg__b" />
                          <use fill="#1BC481" xlinkHref="#project_recruitment_badge_svg__b" />
                        </g>
                        <text fontFamily="NotoSansKR-Bold, Noto Sans KR" fontSize="12" fontWeight="bold" fill="#FFF" transform="translate(1)">
                          <tspan x="16.88" y="16">교육형</tspan>
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="info-box">
                  <div className="project-card-info">
                    <div className="project-card-info-current-status">D-5</div>
                    <span className="project-card-current-categories">마케팅</span>
                  </div>
                  <p className="project-info-name">대학생들의 밈 현상을 유도할 수 있는 영상 리뷰 챌린지 이벤트 기획</p>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <div className="img-box eduction">
                  <img src="./img/오롬미니인턴.png" alt=" 오롬이 추구하는 방향과 부합하는 인플루언서와의 신규 협업 마케팅 기획 커버 이미지"/>
                  <div className="card-img">
                    <svg width="60" height="26" viewBox="0 0 60 26" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <filter x="-3.4%" y="-4.2%" width="106.9%" height="116.7%" filterUnits="objectBoundingBox" id="project_recruitment_badge_svg__a">
                          <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                          <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1" />
                        </filter>
                        <path id="project_recruitment_badge_svg__b" d="M16 0h42v24H16L0 12.013z" />
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <g transform="translate(1)">
                          <use fill="#000" filter="url(#project_recruitment_badge_svg__a)" xlinkHref="#project_recruitment_badge_svg__b" />
                          <use fill="#1BC481" xlinkHref="#project_recruitment_badge_svg__b" />
                        </g>
                        <text fontFamily="NotoSansKR-Bold, Noto Sans KR" fontSize="12" fontWeight="bold" fill="#FFF" transform="translate(1)">
                          <tspan x="16.88" y="16">교육형</tspan>
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="info-box">
                  <div className="project-card-info">
                    <div className="project-card-info-current-status recruiting">진행 중</div>
                    <span className="project-card-current-categories">마케팅</span>
                  </div>
                  <p className="project-info-name"> 오롬이 추구하는 방향과 부합하는 인플루언서와의 신규 협업 마케팅 기획</p>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <div className="img-box education">
                  <img src="./img/코스알엑스미니인턴.jpg" alt="구직자들의 입사 지원을 효과적으로 유도하기 위한 채용공고문 개선 커버 이미지"/>
                  <div className="card-img">
                    <svg width="60" height="26" viewBox="0 0 60 26" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <filter x="-3.4%" y="-4.2%" width="106.9%" height="116.7%" filterUnits="objectBoundingBox" id="project_recruitment_badge_svg__a">
                          <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                          <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1" />
                        </filter>
                        <path id="project_recruitment_badge_svg__b" d="M16 0h42v24H16L0 12.013z" />
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <g transform="translate(1)">
                          <use fill="#000" filter="url(#project_recruitment_badge_svg__a)" xlinkHref="#project_recruitment_badge_svg__b" />
                          <use fill="#1BC481" xlinkHref="#project_recruitment_badge_svg__b" />
                        </g>
                        <text fontFamily="NotoSansKR-Bold, Noto Sans KR" fontSize="12" fontWeight="bold" fill="#FFF" transform="translate(1)">
                          <tspan x="16.88" y="16">교육형</tspan>
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="info-box">
                  <div className="project-card-info">
                    <div className="project-card-info-current-status recruiting">진행 중</div>
                    <span className="project-card-current-categories">회계·인사·총무</span>
                  </div>
                  <p className="project-info-name">구직자들의 입사 지원을 효과적으로 유도하기 위한 채용공고문 개선</p>
                </div>
              </div>
            </li>
          </ul>
          <div className="content-3">
            <div className="banner-img-box">
              <Swiper 
                className ='swiper'
                loop = {true}
                autoplay= {{
                  delay : 2000,
                  disableOnInteraction : false
                }}
                pagination = {{
                  el: '.swiper-pagination-01',
                  clickable: true,
                  bulletClass:"custom_bullet",
                  bulletActiveClass: "swiper-pagination-custom-bullet-active",
                  renderBullet: function (index, className) {
                    return `<button class="${className}"></button>`;
                  }}}
              >
                <SwiperSlide className='swiper-slide'><img src="./img/slide_1.jpg" alt=""/></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="./img/slide_2.jpg" alt=""/></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="./img/slide_3.jpg" alt=""/></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="./img/slide_4.jpg" alt=""/></SwiperSlide>
              </Swiper>
              <div className="swiper-pagination-01"></div>
            </div>
            <div className="banner-info-box">
              <span>서비스런칭</span>
              <p className="happyfolio-banner-info-title">해피폴리오로 취업 정보를 받으세요</p>
              <p className="happyfolio-banner-info-text">
                검증된 현직자의 취업 스토리로 
                <br/>
                취준 전략을 세우세요
              </p>
            </div>
          </div>
          <div className="content-4">
            <p className="title">채용 중인 기업을 확인하세요</p>
            <div className="sub-title">
              <p>내게 맞는 기업을 찾았나요? 바로 지원해 보세요</p>
              <a href="!#">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="8" viewBox="0 0 28 8">
                  <path fill="none" stroke="#17a1ff" d="M0 7h28l-7.652-6" />
                </svg>
                모든 채용정보 보기
              </a>
            </div>
          </div>
          <ul className="content-4-ul">
            <li>
              <div className="item-list">
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect fill="#ABB1B1" fillRule="nonzero" opacity="0.3" width="24" height="24" rx="3" />
                      <path d="M4 4h16v16H4z" />
                      <path d="M4 4h16v16H4z" />
                      <path d="M15 6.5c.882 0 1.68.368 2.251.992.571.623.916 1.496.916 2.508 0 4.039-3.97 6.457-5.882 7.584C9.856 16.472 5.833 14.06 5.833 10c0-1.009.349-1.88.919-2.501A3.034 3.034 0 019 6.5c1.097 0 2.058.599 2.646 1.187.12.119.24.253.354.401a4.32 4.32 0 01.354-.401C12.942 7.099 13.904 6.5 15 6.5z" stroke="#FFF" />
                    </g>
                  </svg>
                </button>
                <div className="img-box">
                  <span>
                    <img src="./img/ZOsUSvO.png" alt=""/>
                  </span>
                </div>
                <div className="info-box">
                  <p className="recruitment-card-info-categories">개발</p>
                  <p className="recruitment-card-info-name">Frontend Engineer (Web)</p>
                  <p className="recruitment-card-info-company-name">루덴시티(주)</p>
                  <div className="recruitment-info-emplyment-box">
                    <div className="recruitment-info-emplyment-type">정규직</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect fill="#ABB1B1" fillRule="nonzero" opacity="0.3" width="24" height="24" rx="3" />
                      <path d="M4 4h16v16H4z" />
                      <path d="M4 4h16v16H4z" />
                      <path d="M15 6.5c.882 0 1.68.368 2.251.992.571.623.916 1.496.916 2.508 0 4.039-3.97 6.457-5.882 7.584C9.856 16.472 5.833 14.06 5.833 10c0-1.009.349-1.88.919-2.501A3.034 3.034 0 019 6.5c1.097 0 2.058.599 2.646 1.187.12.119.24.253.354.401a4.32 4.32 0 01.354-.401C12.942 7.099 13.904 6.5 15 6.5z" stroke="#FFF" />
                    </g>
                  </svg>
                </button>
                <div className="img-box">
                  <span>
                    <img src="./img/5jGBFp7.png" alt=""/>
                  </span>
                </div>
                <div className="info-box">
                  <p className="recruitment-card-info-categories">개발</p>
                  <p className="recruitment-card-info-name">Data Scientist</p>
                  <p className="recruitment-card-info-company-name">(주)지지큐컴퍼니</p>
                  <div className="recruitment-info-emplyment-box">
                    <div className="recruitment-info-emplyment-type">정규직</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect fill="#ABB1B1" fillRule="nonzero" opacity="0.3" width="24" height="24" rx="3" />
                      <path d="M4 4h16v16H4z" />
                      <path d="M4 4h16v16H4z" />
                      <path d="M15 6.5c.882 0 1.68.368 2.251.992.571.623.916 1.496.916 2.508 0 4.039-3.97 6.457-5.882 7.584C9.856 16.472 5.833 14.06 5.833 10c0-1.009.349-1.88.919-2.501A3.034 3.034 0 019 6.5c1.097 0 2.058.599 2.646 1.187.12.119.24.253.354.401a4.32 4.32 0 01.354-.401C12.942 7.099 13.904 6.5 15 6.5z" stroke="#FFF" />
                    </g>
                  </svg>
                </button>
                <div className="img-box">
                  <span>
                    <img src="./img/2Z6gFjY.png" alt=""/>
                  </span>
                </div>
                <div className="info-box">
                  <p className="recruitment-card-info-categories">기획·비즈니스</p>
                  <p className="recruitment-card-info-name">[CG팀] 운영 매니저</p>
                  <p className="recruitment-card-info-company-name">(주)인티그레이션</p>
                  <div className="recruitment-info-emplyment-box">
                    <div className="recruitment-info-emplyment-type">정규직</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect fill="#ABB1B1" fillRule="nonzero" opacity="0.3" width="24" height="24" rx="3" />
                      <path d="M4 4h16v16H4z" />
                      <path d="M4 4h16v16H4z" />
                      <path d="M15 6.5c.882 0 1.68.368 2.251.992.571.623.916 1.496.916 2.508 0 4.039-3.97 6.457-5.882 7.584C9.856 16.472 5.833 14.06 5.833 10c0-1.009.349-1.88.919-2.501A3.034 3.034 0 019 6.5c1.097 0 2.058.599 2.646 1.187.12.119.24.253.354.401a4.32 4.32 0 01.354-.401C12.942 7.099 13.904 6.5 15 6.5z" stroke="#FFF" />
                    </g>
                  </svg>
                </button>
                <div className="img-box">
                  <span>
                    <img src="./img/UrHaSJQ.png" alt=""/>
                  </span>
                </div>
                <div className="info-box">
                  <p className="recruitment-card-info-categories">영업</p>
                  <p className="recruitment-card-info-name">업라이즈 MFO VIP 영업관리 매니저</p>
                  <p className="recruitment-card-info-company-name">업라이즈</p>
                  <div className="recruitment-info-emplyment-box">
                    <div className="recruitment-info-emplyment-type">정규직</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect fill="#ABB1B1" fillRule="nonzero" opacity="0.3" width="24" height="24" rx="3" />
                      <path d="M4 4h16v16H4z" />
                      <path d="M4 4h16v16H4z" />
                      <path d="M15 6.5c.882 0 1.68.368 2.251.992.571.623.916 1.496.916 2.508 0 4.039-3.97 6.457-5.882 7.584C9.856 16.472 5.833 14.06 5.833 10c0-1.009.349-1.88.919-2.501A3.034 3.034 0 019 6.5c1.097 0 2.058.599 2.646 1.187.12.119.24.253.354.401a4.32 4.32 0 01.354-.401C12.942 7.099 13.904 6.5 15 6.5z" stroke="#FFF" />
                    </g>
                  </svg>
                </button>
                <div className="img-box">
                  <span>
                    <img src="./img/CrKvDbk.png" alt=""/>
                  </span>
                </div>
                <div className="info-box">
                  <p className="recruitment-card-info-categories">마케팅</p>
                  <p className="recruitment-card-info-name">퍼포먼스 마케터 (Performance Marketer)</p>
                  <p className="recruitment-card-info-company-name">(주)라포랩스</p>
                  <div className="recruitment-info-emplyment-box">
                    <div className="recruitment-info-emplyment-type">정규직</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect fill="#ABB1B1" fillRule="nonzero" opacity="0.3" width="24" height="24" rx="3" />
                      <path d="M4 4h16v16H4z" />
                      <path d="M4 4h16v16H4z" />
                      <path d="M15 6.5c.882 0 1.68.368 2.251.992.571.623.916 1.496.916 2.508 0 4.039-3.97 6.457-5.882 7.584C9.856 16.472 5.833 14.06 5.833 10c0-1.009.349-1.88.919-2.501A3.034 3.034 0 019 6.5c1.097 0 2.058.599 2.646 1.187.12.119.24.253.354.401a4.32 4.32 0 01.354-.401C12.942 7.099 13.904 6.5 15 6.5z" stroke="#FFF" />
                    </g>
                  </svg>
                </button>
                <div className="img-box">
                  <span>
                    <img src="./img/3FWfLNb.png" alt=""/>
                  </span>
                </div>
                <div className="info-box">
                  <p className="recruitment-card-info-categories">영업</p>
                  <p className="recruitment-card-info-name">기업(B2B) 영업 관리 주니어(사원, 대리 급)</p>
                  <p className="recruitment-card-info-company-name">설로인(주)</p>
                  <div className="recruitment-info-emplyment-box">
                    <div className="recruitment-info-emplyment-type">정규직</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect fill="#ABB1B1" fillRule="nonzero" opacity="0.3" width="24" height="24" rx="3" />
                      <path d="M4 4h16v16H4z" />
                      <path d="M4 4h16v16H4z" />
                      <path d="M15 6.5c.882 0 1.68.368 2.251.992.571.623.916 1.496.916 2.508 0 4.039-3.97 6.457-5.882 7.584C9.856 16.472 5.833 14.06 5.833 10c0-1.009.349-1.88.919-2.501A3.034 3.034 0 019 6.5c1.097 0 2.058.599 2.646 1.187.12.119.24.253.354.401a4.32 4.32 0 01.354-.401C12.942 7.099 13.904 6.5 15 6.5z" stroke="#FFF" />
                    </g>
                  </svg>
                </button>
                <div className="img-box">
                  <span>
                    <img src="./img/PnV52w8.png" alt=""/>
                  </span>
                </div>
                <div className="info-box">
                  <p className="recruitment-card-info-categories">영업</p>
                  <p className="recruitment-card-info-name">국내영업 온라인 팀원</p>
                  <p className="recruitment-card-info-company-name">(주)미미박스</p>
                  <div className="recruitment-info-emplyment-box">
                    <div className="recruitment-info-emplyment-type">정규직</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <rect fill="#ABB1B1" fillRule="nonzero" opacity="0.3" width="24" height="24" rx="3" />
                      <path d="M4 4h16v16H4z" />
                      <path d="M4 4h16v16H4z" />
                      <path d="M15 6.5c.882 0 1.68.368 2.251.992.571.623.916 1.496.916 2.508 0 4.039-3.97 6.457-5.882 7.584C9.856 16.472 5.833 14.06 5.833 10c0-1.009.349-1.88.919-2.501A3.034 3.034 0 019 6.5c1.097 0 2.058.599 2.646 1.187.12.119.24.253.354.401a4.32 4.32 0 01.354-.401C12.942 7.099 13.904 6.5 15 6.5z" stroke="#FFF" />
                    </g>
                  </svg>
                </button>
                <div className="img-box">
                  <span>
                    <img src="./img/FV2HoKG.png" alt=""/>
                  </span>
                </div>
                <div className="info-box">
                  <p className="recruitment-card-info-categories">기획·비즈니스</p>
                  <p className="recruitment-card-info-name">Medical Device Product Owner</p>
                  <p className="recruitment-card-info-company-name">(주)에이슬립</p>
                  <div className="recruitment-info-emplyment-box">
                    <div className="recruitment-info-emplyment-type">정규직</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="content-5">
            <div className="banner-text-area">
              <p><strong>이력서 피드백</strong>도 받고 <strong>회사</strong>도 <strong>추천</strong>받고 싶다면?</p>
              <a href="!#">헤드헌팅 설정하기</a>
            </div>
            <div className="banner-img-box">
              <img src="./img/headhunting_banner_pc.png" alt=""/>
            </div>
          </div>
          <div className="content-6">
            <p className="title">M클래스를 신청하세요</p>
            <div className="sub-title">
              <p>미니인턴만의 색깔을 가진 교육을 제공해 드려요</p>
              <a href="!#">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="8" viewBox="0 0 28 8">
                  <path fill="none" stroke="#17a1ff" d="M0 7h28l-7.652-6" />
                </svg>
                모든 M클래스 보기
              </a>
            </div>
          </div>
          <ul className="content-6-ul">
            <li>
              <div className="item-list">
                <div className="img-box">
                  <img src="./img/배너에디터톡.png" alt="[직무역량강화] 글쓰는 사람들의 이야기 공간, 에디터톡"/>
                </div>
                <div className="payment-type">무료</div>
                <div className="info-box">
                  <p className="event-card-info-category">실무</p>
                  <p className="event-card-info-title">[직무역량강화] 글쓰는 사람들의 이야기 공간, 에디터톡</p>
                  <p className="event-card-info-location">구로청년이룸</p>
                  <p className="event-card-info-number-of-recruiters">28명 모집</p>
                  <div className="event-card-info-stage-box">
                    <p className="event-card-info-stage">기간 선발 모집중</p>
                    <span className="event-card-info-remaining-days">D-20</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <div className="img-box">
                  <img src="./img/2023청년지원사업부코취cover.png" alt="[직무역량강화] 글쓰는 사람들의 이야기 공간, 에디터톡"/>
                </div>
                <div className="payment-type">무료</div>
                <div className="info-box">
                  <p className="event-card-info-category">취업</p>
                  <p className="event-card-info-title">[직무역량강화] 코딩테스트 대비로 취업하기 (코-취)</p>
                  <p className="event-card-info-location">구로청년이룸</p>
                  <p className="event-card-info-number-of-recruiters">15명 모집</p>
                  <div className="event-card-info-stage-box">
                    <p className="event-card-info-stage">기간 선발 모집중</p>
                    <span className="event-card-info-remaining-days">D-19</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <div className="img-box">
                  <img src="./img/클래스취업특강-랜딩커버.png" alt="[직무역량강화] 글쓰는 사람들의 이야기 공간, 에디터톡"/>
                </div>
                <div className="payment-type">무료</div>
                <div className="info-box">
                  <p className="event-card-info-category">창업</p>
                  <p className="event-card-info-title">[창업] 스타트업에 성공의 날개를 달아줄 S-CLASS 창업 특강</p>
                  <p className="event-card-info-location">서울창업카페 낙성대점</p>
                  <p className="event-card-info-number-of-recruiters">00명 모집</p>
                  <div className="event-card-info-stage-box">
                    <p className="event-card-info-stage">기간 선발 모집중</p>
                    <span className="event-card-info-remaining-days">D-12</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <div className="img-box">
                  <img src="./img/20232박3일실무경험프로젝트2기landingpagecover.jpg" alt="[직무역량강화] 글쓰는 사람들의 이야기 공간, 에디터톡"/>
                </div>
                <div className="payment-type">무료</div>
                <div className="info-box">
                  <p className="event-card-info-category">취업</p>
                  <p className="event-card-info-title">[실무경험] 2박3일 실무경험 프로젝트 2기 마케팅</p>
                  <p className="event-card-info-location">중소벤처기업연수원(안산)</p>
                  <p className="event-card-info-number-of-recruiters">30명 모집</p>
                  <div className="event-card-info-stage-box">
                    <p className="event-card-info-stage">기간 선발 모집중</p>
                    <span className="event-card-info-remaining-days">D-12</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="content-7">
            <p className="title">해피폴리오로 취업 정보를 받으세요</p>
            <div className="sub-title">
              <p>검증된 현직자의 취업 스토리로 취준 전략을 세우세요</p>
              <a href="!#">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="8" viewBox="0 0 28 8">
                  <path fill="none" stroke="#17a1ff" d="M0 7h28l-7.652-6" />
                </svg>
                모든 해피폴리오 보기
              </a>
            </div>
          </div>
          <ul className="content-7-ul">
            <li>
              <div className="item-list">
                <div className="img-box">
                  <span>
                    <img src="./img/붙임4-대표이미지.png" alt=""/>
                  </span>
                  <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fillRule="evenodd">
                        <rect fill="#ABB1B1" fillRule="nonzero" opacity="0.3" width="24" height="24" rx="3" />
                        <path d="M4 4h16v16H4z" />
                        <path d="M4 4h16v16H4z" />
                        <path d="M15 6.5c.882 0 1.68.368 2.251.992.571.623.916 1.496.916 2.508 0 4.039-3.97 6.457-5.882 7.584C9.856 16.472 5.833 14.06 5.833 10c0-1.009.349-1.88.919-2.501A3.034 3.034 0 019 6.5c1.097 0 2.058.599 2.646 1.187.12.119.24.253.354.401a4.32 4.32 0 01.354-.401C12.942 7.099 13.904 6.5 15 6.5z" stroke="#FFF" />
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="info-box">
                  <div className="happyfolio-card-info-categories">
                    <div className="happyfolio-card-info-category">취업스토리</div>
                  </div>
                  <div className="happyfolio-card-info-title">30대 비전공자의 개발자 커리어 전환기</div>
                  <div className="happyfolio-card-info-host-and-price-box">
                    <div className="happyfolio-card-info-host">
                      <div className="happyfolio-card-info-host-image-box">
                        <span>
                          <img src="./img/공슬기ddururiiiiiii.jpeg" alt="호스트 이미지"/>
                        </span>
                      </div>
                      <p className="happyfolio-card-info-host-name">뚜루리</p>
                    </div>
                    <div className="happyfolio-card-info-price">5,000원</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <div className="img-box">
                  <span>
                    <img src="./img/알잘딱깔센-취업준비-신입사원-노하우-공유-cover.jpg" alt="알잘딱깔센-취업준비-신입사원-노하우-공유"/>
                  </span>
                  <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fillRule="evenodd">
                        <rect fill="#ABB1B1" fillRule="nonzero" opacity="0.3" width="24" height="24" rx="3" />
                        <path d="M4 4h16v16H4z" />
                        <path d="M4 4h16v16H4z" />
                        <path d="M15 6.5c.882 0 1.68.368 2.251.992.571.623.916 1.496.916 2.508 0 4.039-3.97 6.457-5.882 7.584C9.856 16.472 5.833 14.06 5.833 10c0-1.009.349-1.88.919-2.501A3.034 3.034 0 019 6.5c1.097 0 2.058.599 2.646 1.187.12.119.24.253.354.401a4.32 4.32 0 01.354-.401C12.942 7.099 13.904 6.5 15 6.5z" stroke="#FFF" />
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="info-box">
                  <div className="happyfolio-card-info-categories">
                    <div className="happyfolio-card-info-category">역량개발</div>
                    <div className="happyfolio-card-info-category">직장생활</div>
                  </div>
                  <div className="happyfolio-card-info-title">알잘딱깔센! 취업준비! 신입사원 노하우! 공유</div>
                  <div className="happyfolio-card-info-host-and-price-box">
                    <div className="happyfolio-card-info-host">
                      <div className="happyfolio-card-info-host-image-box">
                        <span>
                          <img src="./img/유창석-캐리커쳐.jpg" alt="호스트 이미지"/>
                        </span>
                      </div>
                      <p className="happyfolio-card-info-host-name">열쩡!열쩡!열쩡</p>
                    </div>
                    <div className="happyfolio-card-info-price">8,000원</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <div className="img-box">
                  <span>
                    <img src="./img/붙임4-대표이미지 (1).png" alt="3년차 제약회사 연구원이 알려주는 자소서&면접 노하우"/>
                  </span>
                  <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fillRule="evenodd">
                        <rect fill="#ABB1B1" fillRule="nonzero" opacity="0.3" width="24" height="24" rx="3" />
                        <path d="M4 4h16v16H4z" />
                        <path d="M4 4h16v16H4z" />
                        <path d="M15 6.5c.882 0 1.68.368 2.251.992.571.623.916 1.496.916 2.508 0 4.039-3.97 6.457-5.882 7.584C9.856 16.472 5.833 14.06 5.833 10c0-1.009.349-1.88.919-2.501A3.034 3.034 0 019 6.5c1.097 0 2.058.599 2.646 1.187.12.119.24.253.354.401a4.32 4.32 0 01.354-.401C12.942 7.099 13.904 6.5 15 6.5z" stroke="#FFF" />
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="info-box">
                  <div className="happyfolio-card-info-categories">
                    <div className="happyfolio-card-info-category">이력서/자소서</div>
                    <div className="happyfolio-card-info-category">면접</div>
                  </div>
                  <div className="happyfolio-card-info-title">3년차 제약회사 연구원이 알려주는 자소서&면접 노하우</div>
                  <div className="happyfolio-card-info-host-and-price-box">
                    <div className="happyfolio-card-info-host">
                      <div className="happyfolio-card-info-host-image-box">
                        <span>
                          <img src="./img/IMG4687.jpg" alt="호스트 이미지"/>
                        </span>
                      </div>
                      <p className="happyfolio-card-info-host-name">둥가둥</p>
                    </div>
                    <div className="happyfolio-card-info-price">15,000원</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item-list">
                <div className="img-box">
                  <span>
                    <img src="./img/지방대-문과생이-IT-취업에-이직까지-성공했다고-cover.jpg" alt="지방대 문과생이 IT 취업에 이직까지 성공했다고?"/>
                  </span>
                  <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fillRule="evenodd">
                        <rect fill="#ABB1B1" fillRule="nonzero" opacity="0.3" width="24" height="24" rx="3" />
                        <path d="M4 4h16v16H4z" />
                        <path d="M4 4h16v16H4z" />
                        <path d="M15 6.5c.882 0 1.68.368 2.251.992.571.623.916 1.496.916 2.508 0 4.039-3.97 6.457-5.882 7.584C9.856 16.472 5.833 14.06 5.833 10c0-1.009.349-1.88.919-2.501A3.034 3.034 0 019 6.5c1.097 0 2.058.599 2.646 1.187.12.119.24.253.354.401a4.32 4.32 0 01.354-.401C12.942 7.099 13.904 6.5 15 6.5z" stroke="#FFF" />
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="info-box">
                  <div className="happyfolio-card-info-categories">
                    <div className="happyfolio-card-info-category">취업스토리</div>
                  </div>
                  <div className="happyfolio-card-info-title">지방대 문과생이 IT 취업에 이직까지 성공했다고?</div>
                  <div className="happyfolio-card-info-host-and-price-box">
                    <div className="happyfolio-card-info-host">
                      <div className="happyfolio-card-info-host-image-box">
                        <span>
                          <img src="./img/host_default.svg" alt="호스트 이미지"/>
                        </span>
                      </div>
                      <p className="happyfolio-card-info-host-name">노을</p>
                    </div>
                    <div className="happyfolio-card-info-price">12,000원</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};