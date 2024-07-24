
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

// document.addEventListener('DOMContentLoaded', function () {
//   new KeenSlider('.keen-slider', {
//     loop: true,
//     duration: 20000,
//     slidesPerView: 1,
//     spacing: 0,
//     controls: true,
//   });
// });