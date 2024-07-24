// footer부분 고객센터 전문가센터 버튼의 색 변경 + 마우스 땠을 때 원래색으로 돌아오는 js
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.butncmucs');

  buttons.forEach((button) => {
    button.addEventListener('mouseenter', function () {
      button.style.backgroundColor = '#f0f0f0'; // 마우스 오버 시 색 변경
    });

    button.addEventListener('mouseleave', function () {
      button.style.backgroundColor = ''; // 마우스가 버튼을 벗어날 때 원래 색으로 복귀
    });
  });
});
// footer부분 goole play App Store 버튼 마우스 올렸을 때 내렸을 때 색 변경부분 js
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.footbuticonall');

  buttons.forEach((button) => {
    button.addEventListener('mouseenter', function () {
      button.style.backgroundColor = '#f0f0f0'; // 마우스 오버 시 색 변경
    });

    button.addEventListener('mouseleave', function () {
      button.style.backgroundColor = ''; // 마우스가 버튼을 벗어날 때 원래 색으로 복귀
    });
  });
});
// footer부분 사업자정보확인 버튼 마우스 올렸을 때 내렸을 때 색 변경부분 js
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.footcominfobut');

  buttons.forEach((button) => {
    button.addEventListener('mouseenter', function () {
      button.style.backgroundColor = '#f0f0f0'; // 마우스 오버 시 색 변경
    });

    button.addEventListener('mouseleave', function () {
      button.style.backgroundColor = ''; // 마우스가 버튼을 벗어날 때 원래 색으로 복귀
    });
  });
});

//header의 검색창 부분 마우스 올렸을 때 색 변경부분
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.header-serachmain');

  buttons.forEach((button) => {
    button.addEventListener('mouseenter', function () {
      button.style.backgroundColor = '#f0f0f0'; // 마우스 오버 시 색 변경
    });

    button.addEventListener('mouseleave', function () {
      button.style.backgroundColor = ''; // 마우스가 버튼을 벗어날 때 원래 색으로 복귀
    });
  });
});

//회원가입 버튼 마우스 올리면 색 변경되는 js
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.header-signup-but');

  buttons.forEach((button) => {
    button.addEventListener('mouseenter', function () {
      button.style.backgroundColor = '#f0f0f0'; // 마우스 오버 시 색 변경
    });

    button.addEventListener('mouseleave', function () {
      button.style.backgroundColor = ''; // 마우스가 버튼을 벗어날 때 원래 색으로 복귀
    });
  });
});

// 숨긴 카테고리 마지막에해보자
// document.querySelector('.section-categori-first-but').addEventListener('click', function() {
//   const expanded = this.getAttribute('aria-expanded') === 'true';
//   this.setAttribute('aria-expanded', !expanded);
//   document.querySelector('.section-categori-linebox').classList.toggle('expanded', !expanded);
// });

// 슬라이드 배너부분 js
document.addEventListener('DOMContentLoaded', () => {
  const banner = document.querySelector('ul.keen-slider');
  const slides = document.querySelectorAll('.keen-slider__slide');
  const firstSlideClone = slides[0].cloneNode(true);
  const lastSlideClone = slides[slides.length - 1].cloneNode(true);
  const prev = document.querySelector('div.prev');
  const next = document.querySelector('div.next');
  const dots = document.querySelectorAll('div.dot');
  let count = 1;
  let autoSlideInterval;

  // Append clones to the banner
  banner.appendChild(firstSlideClone);
  banner.insertBefore(lastSlideClone, slides[0]);

  // Set initial position
  banner.style.transform = `translateX(${-700 * count}px)`;

  // Auto Slide
  autoSlideInterval = setInterval(autoSlide, 2000);

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.style.background = i + 1 === count ? '#313131' : 'none';
    });
  }

  function handleDotClick(dot, index) {
    dot.addEventListener('click', () => {
      clearInterval(autoSlideInterval);
      count = index + 1;
      banner.style.transform = `translateX(${-700 * count}px)`;
      banner.style.transition = 'transform 0.7s';
      updateDots();
      autoSlideInterval = setInterval(autoSlide, 2000);
    });
  }

  dots.forEach((dot, i) => handleDotClick(dot, i));

  prev.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    count = count === 1 ? slides.length : count - 1;
    banner.style.transform = `translateX(${-700 * count}px)`;
    banner.style.transition = 'transform 0.7s';
    updateDots();
    autoSlideInterval = setInterval(autoSlide, 2000);
  });

  next.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    count = count === slides.length ? 1 : count + 1;
    banner.style.transform = `translateX(${-700 * count}px)`;
    banner.style.transition = 'transform 0.7s';
    updateDots();
    autoSlideInterval = setInterval(autoSlide, 2000);
  });

  function autoSlide() {
    count = count === slides.length ? 1 : count + 1;
    banner.style.transform = `translateX(${-700 * count}px)`;
    banner.style.transition = 'transform 0.7s';
    updateDots();
  }
});
