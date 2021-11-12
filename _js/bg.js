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
    bg1.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/01.jpg?raw=true')";
    bg2.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/02.jpg?raw=true')";
    bg3.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/03.jpg?raw=true')";
    bg4.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/04.jpg?raw=true')";
    bg5.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/05.jpg?raw=true')";
    bg6.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/06.jpg?raw=true')";
    bg7.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/07.jpg?raw=true')";
    bg8.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/08.jpg?raw=true')";
  } else if (6 <= monthBg && monthBg < 9) {
    bg1.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/09.jpg?raw=true')";
    bg2.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/10.jpg?raw=true')";
    bg3.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/11.jpg?raw=true')";
    bg4.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/12.jpg?raw=true')";
    bg5.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/13.jpg?raw=true')";
    bg6.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/14.jpg?raw=true')";
    bg7.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/15.jpg?raw=true')";
    bg8.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/16.jpg?raw=true')";
  } else if (9 <= monthBg && monthBg < 12) {
    bg1.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/17.jpg?raw=true')";
    bg2.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/18.jpg?raw=true')";
    bg3.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/19.jpg?raw=true')";
    bg4.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/20.jpg?raw=true')";
    bg5.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/21.jpg?raw=true')";
    bg6.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/22.jpg?raw=true')";
    bg7.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/23.jpg?raw=true')";
    bg8.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/24.jpg?raw=true')";
  } else {
    bg1.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/25.jpg?raw=true')";
    bg2.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/26.jpg?raw=true')";
    bg3.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/27.jpg?raw=true')";
    bg4.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/28.jpg?raw=true')";
    bg5.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/29.jpg?raw=true')";
    bg6.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/30.jpg?raw=true')";
    bg7.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/31.jpg?raw=true')";
    bg8.style.backgroundImage =
      "url('https://github.com/seu1goo/design06_todo/blob/master/_img/32.jpg?raw=true')";
  }
}

getBg();
