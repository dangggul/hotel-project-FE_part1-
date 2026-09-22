class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <div class="header-inner">
          <!-- 로고 -->
          <a href="./home.html" class="header-logo">H</a>
          <!-- 메뉴 -->
          <nav class="header-nav">
            <ul class="nav-list">
              <!-- ABOUT -->
              <li class="nav-item">
                <a href="#" class="nav-link">ABOUT</a>
                <ul class="dropdown">
                  <li><a href="#">호텔소개</a></li>
                  <li><a href="#">오시는길</a></li>
                </ul>
              </li>
              <!-- ROOMS -->
              <li class="nav-item">
                <a href="#" class="nav-link">ROOMS</a>
                <ul class="dropdown">
                  <li><a href="#">ROOM1</a></li>
                  <li><a href="#">ROOM2</a></li>
                  <li><a href="#">ROOM3</a></li>
                </ul>
              </li>
              <!-- RESERVATION -->
              <li class="nav-item">
                <a href="#" class="nav-link">RESERVATION</a>
                <ul class="dropdown">
                  <li><a href="reservation-guide.html">예약안내</a></li>
                  <li><a href="reservation.html">실시간 예약</a></li>
                </ul>
              </li>
              <!-- COMMUNITY -->
              <li class="nav-item">
                <a href="#" class="nav-link">COMMUNITY</a>
                <ul class="dropdown">
                  <li><a href="#">공지사항</a></li>
                  <li><a href="#">이벤트</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}
customElements.define("site-header", SiteHeader);

class ToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <button class="to-top" type="button">
        <img src="../image/hetel/component/TO TOP BUTTON.png"/>
      </button>
    `;
    const button = this.querySelector(".to-top");
    button.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}

customElements.define("to-top", ToTop);

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="footer-inner">

          <!-- 로고 -->
          <h2 class="footer-logo">H</h2>

          <!-- SNS -->
          <div class="footer-sns">

            <!-- Instagram -->
            <div class="sns-item">
              <img
                class="sns-icon sns-default"
                src="../image/hetel/component/instagram-default.png"
                alt="instagram"
              />

              <img
                class="sns-icon sns-hover"
                src="../image/hetel/component/instagram-hover.png"
                alt=""
              />
            </div>
            
            <!-- Facebook -->
            <div class="sns-item">
              <img
                class="sns-icon sns-default"
                src="../image/hetel/component/facebook-default.png"
                alt="facebook"
              />

              <img
                class="sns-icon sns-hover"
                src="../image/hetel/component/facebook-hover.png"
                alt=""
              />
            </div>

            <!-- YouTube -->
            <div class="sns-item">
              <img
                class="sns-icon sns-default"
                src="../image/hetel/component/youtube-default.png"
                alt="youtube"
              />

              <img
                class="sns-icon sns-hover"
                src="../image/hetel/component/youtube-hover.png"
                alt=""
              />
            </div>

          </div>

          <!-- 주소 -->
          <p class="footer-address">
            경기 성남시 분당구 황새울로329번길 5 한국폴리텍대학 융합기술교육원
          </p>

          <!-- 번호 -->
          <p class="footer-num">
            <a>사업자등록번호 000-00-0000 </a>
            <a>전화 012-345-6789</a>
            <a>팩스 01-234-5678</a>
          </p>

          <!-- 약관 -->
          <div class="footer-policy">
            <a>이용약관</a>
            <a>개인정보처리방침</a>
          </div>

          <!-- 저작권 -->
          <p class="copyright">
            Copyright ⓒ 2025 예약연습 All rights reserved.
          </p>

        </div>
      </footer>
    `;
  }
}
customElements.define("site-footer", SiteFooter);
