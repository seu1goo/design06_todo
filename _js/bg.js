new Swiper(".mySwiper", {
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
});

function getBg() {
  const todayDate = new Date();
  const bg1 = document.querySelector(".bg1");
  const bg2 = document.querySelector(".bg2");
  const bg3 = document.querySelector(".bg3");
  const bg4 = document.querySelector(".bg4");
  const bg5 = document.querySelector(".bg5");
  const bg6 = document.querySelector(".bg6");
  const bg7 = document.querySelector(".bg7");
  const bg8 = document.querySelector(".bg8");

  const monthBg = todayDate.getMonth() + 1;

  if (3 <= monthBg && monthBg < 6) {
    bg1.style.backgroundImage = "url('../_img/01.jpg')";
    bg2.style.backgroundImage = "url('../_img/02.jpg')";
    bg3.style.backgroundImage = "url('../_img/03.jpg')";
    bg4.style.backgroundImage = "url('../_img/04.jpg')";
    bg5.style.backgroundImage = "url('../_img/05.jpg')";
    bg6.style.backgroundImage = "url('../_img/06.jpg')";
    bg7.style.backgroundImage = "url('../_img/07.jpg')";
    bg8.style.backgroundImage = "url('../_img/08.jpg')";
  } else if (6 <= monthBg && monthBg < 9) {
    bg1.style.backgroundImage = "url('../_img/09.jpg')";
    bg2.style.backgroundImage = "url('../_img/10.jpg')";
    bg3.style.backgroundImage = "url('../_img/11.jpg')";
    bg4.style.backgroundImage = "url('../_img/12.jpg')";
    bg5.style.backgroundImage = "url('../_img/13.jpg')";
    bg6.style.backgroundImage = "url('../_img/14.jpg')";
    bg7.style.backgroundImage = "url('../_img/15.jpg')";
    bg8.style.backgroundImage = "url('../_img/16.jpg')";
  } else if (9 <= monthBg && monthBg < 12) {
    bg1.style.backgroundImage = "url('../_img/17.jpg')";
    bg2.style.backgroundImage = "url('../_img/18.jpg')";
    bg3.style.backgroundImage = "url('../_img/19.jpg')";
    bg4.style.backgroundImage = "url('../_img/20.jpg')";
    bg5.style.backgroundImage = "url('../_img/21.jpg')";
    bg6.style.backgroundImage = "url('../_img/22.jpg')";
    bg7.style.backgroundImage = "url('../_img/23.jpg')";
    bg8.style.backgroundImage = "url('../_img/24.jpg')";
  } else {
    bg1.style.backgroundImage = "url('../_img/25.jpg')";
    bg2.style.backgroundImage = "url('../_img/26.jpg')";
    bg3.style.backgroundImage = "url('../_img/27.jpg')";
    bg4.style.backgroundImage = "url('../_img/28.jpg')";
    bg5.style.backgroundImage = "url('../_img/29.jpg')";
    bg6.style.backgroundImage = "url('../_img/30.jpg')";
    bg7.style.backgroundImage = "url('../_img/31.jpg')";
    bg8.style.backgroundImage = "url('../_img/32.jpg')";
  }
}

getBg();
