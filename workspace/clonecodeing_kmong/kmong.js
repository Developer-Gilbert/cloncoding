
// footer부분 고객센터 전문가센터 버튼의 색 변경 + 마우스 땠을 때 원래색으로 돌아오는 js
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.butncmucs');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      button.style.backgroundColor = '#f0f0f0'; // 마우스 오버 시 색 변경
    });

    button.addEventListener('mouseleave', function() {
      button.style.backgroundColor = ''; // 마우스가 버튼을 벗어날 때 원래 색으로 복귀
    });
  });
});
// footer부분 goole play App Store 버튼 마우스 올렸을 때 내렸을 때 색 변경부분 js
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.footbuticonall');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      button.style.backgroundColor = '#f0f0f0'; // 마우스 오버 시 색 변경
    });

    button.addEventListener('mouseleave', function() {
      button.style.backgroundColor = ''; // 마우스가 버튼을 벗어날 때 원래 색으로 복귀
    });
  });
});
// footer부분 사업자정보확인 버튼 마우스 올렸을 때 내렸을 때 색 변경부분 js
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.footcominfobut');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      button.style.backgroundColor = '#f0f0f0'; // 마우스 오버 시 색 변경
    });

    button.addEventListener('mouseleave', function() {
      button.style.backgroundColor = ''; // 마우스가 버튼을 벗어날 때 원래 색으로 복귀
    });
  });
});

//header의 검색창 부분 마우스 올렸을 때 색 변경부분
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.header-serachmain');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      button.style.backgroundColor = '#f0f0f0'; // 마우스 오버 시 색 변경
    });

    button.addEventListener('mouseleave', function() {
      button.style.backgroundColor = ''; // 마우스가 버튼을 벗어날 때 원래 색으로 복귀
    });
  });
});

//회원가입 버튼 마우스 올리면 색 변경되는 js
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.header-signup-but');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      button.style.backgroundColor = '#f0f0f0'; // 마우스 오버 시 색 변경
    });

    button.addEventListener('mouseleave', function() {
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

// 슬라이드베너 부분
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.main-slider');
  const slides = document.querySelectorAll('.keen-slider__slide');
  const slideWidth = slides[0].offsetWidth;
  const totalSlides = slides.length;
  let currentIndex = 0;

  // Clone slides and append to the end
  const firstSlideClone = slides[0].cloneNode(true);
  slider.appendChild(firstSlideClone);
  
  function moveSlider() {
      currentIndex++;
      if (currentIndex >= totalSlides) {
          slider.style.transition = 'none'; // Disable transition for the reset
          slider.style.transform = `translateX(0px)`;
          currentIndex = 1; // Reset to the first slide (after the cloned one)
          setTimeout(() => {
              slider.style.transition = 'transform 0.5s ease'; // Re-enable transition
              slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
          }, 20); // Short delay to allow reset
      } else {
          slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
      }
  }

  setInterval(moveSlider, 3000); // Change slide every 3 seconds
});