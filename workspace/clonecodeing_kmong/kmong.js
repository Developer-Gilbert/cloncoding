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
// 객체를 생성하는 개념과 비슷하다
document.addEventListener('DOMContentLoaded', () => {
  // DOM이 완전히 로드되면 코드를 실행한다
  const banner = document.querySelector('ul.keen-slider');
  // 슬라이더 컨테이너를 선택한다
  const slides = document.querySelectorAll('.keen-slider__slide');
  // 모든 배너를 선택한다
  const firstSlideClone = slides[0].cloneNode(true);
  // 첫번째 슬라이더를 복재한다
  const lastSlideClone = slides[slides.length - 1].cloneNode(true);
  // 마지막 슬라이더를 복제한다
  const prev = document.querySelector('div.prev');
  const next = document.querySelector('div.next');
  const dots = document.querySelectorAll('div.dot');
  // 모든 점을 선택한다
  let count = 1;
  // 현재 슬라이드의 인덱스 초기값은 1이다
  let autoSlideInterval;
  // 자동슬라이드 제어하는 간격 타이머

//  첫번째슬라이드복재본을 맨뒤에 추가하고 마지막슬라이드 복제본을 맨 앞에 추가
  banner.appendChild(firstSlideClone);
  banner.insertBefore(lastSlideClone, slides[0]);

// translateX를 이용해 2번째 슬라이드부터 보이게한다
  banner.style.transform = `translateX(${-700 * count}px)`;

//  4초마다 슬라이드 실행
  autoSlideInterval = setInterval(autoSlide, 4000);

  // dot의 배경색을 변경하는 js
  function updateDots() {
    dots.forEach((dot, i) => {
      dot.style.background = i + 1 === count ? '#313131' : 'none';
    });
  }
// handleDotClick이 함수로 dot을 클릭할수있게해준다 클릭하면 해당 인덱스로 슬라이드를 이동시키고 자동슬라이드 재설정
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
// dot에 클릭을 할 수 있게 만들어주는 함수
  dots.forEach((dot, i) => handleDotClick(dot, i));

// 이전 버튼을 클릭할수있게해주는 함수 이전버튼을 클릭하면  하나 이전으로 이동시키고 슬라이드 초기화
  prev.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    count = count === 1 ? slides.length : count - 1;
    banner.style.transform = `translateX(${-700 * count}px)`;
    banner.style.transition = 'transform 0.7s';
    updateDots();
    autoSlideInterval = setInterval(autoSlide, 2000);
  });
// 다음 버튼을 클릭할수있게해주는 함수 다음버튼을 클릭하면  하나 다음으로 이동시키고 슬라이드 초기화
  next.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    count = count === slides.length ? 1 : count + 1;
    banner.style.transform = `translateX(${-700 * count}px)`;
    banner.style.transition = 'transform 0.7s';
    updateDots();
    autoSlideInterval = setInterval(autoSlide, 2000);
  });

  // 자동 슬라이드함수 슬라이드를 하나씩 이동시키고 마지막에가면 첫번째 슬라이드로 이동함
  function autoSlide() {
    count = count === slides.length ? 1 : count + 1;
    banner.style.transform = `translateX(${-700 * count}px)`;
    banner.style.transition = 'transform 0.7s';
    updateDots();
  }
});
