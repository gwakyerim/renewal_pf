console.log('[common.js] loaded!');

// before -> after
// 1. 햄버거 메뉴를 클릭한다.
const hamburgerMenu = document.querySelector('.mobile-nav');
hamburgerMenu.addEventListener('click', function() {
    // 2. 모바일용 네비게이션이 오른쪽에서 나온다.
    // 2-1. nav 요소에 class active 붙인다.
    document.querySelector('nav').classList.toggle('active');
    this.classList.toggle('active');
})

const menuList = document.querySelectorAll('.menu-list');
// 1. mobile-menu 를 클릭한다.
for (var i = 0; i < menuList.length; i++) {
    //2. menuList 를 클릭하면 nav창이 닫힌다.
    //3. 햄버거 메뉴에 active 를 삭제시킨다.
    menuList[i].addEventListener('click', function() {
        document.querySelector('nav').classList.remove('active');
        hamburgerMenu.classList.remove('active');
    })
    if (i === 4) {
        break;
    }
}

// 1.윈도우 창 스크롤을 내린다.
const preScrollTop = 100;
window.addEventListener('scroll', function() {
    const nextScrollTop = window.scrollY;
    //2.스크롤 양이 100보다 크면 go-top에 active 클래스를 추가한다.
    //"" header에 active 클래스 추가한다.
    if(preScrollTop < nextScrollTop) {
        document.querySelector('.go-top').classList.add('active');
        document.querySelector('header').classList.add('active');
    }
    //3. 스크롤 양이 100보다 작으면 go-top에 active 클래스를 삭제한다.
    //"" header에 active 클래스 삭제한다.
    else {
        document.querySelector('.go-top').classList.remove('active');
        document.querySelector('header').classList.remove('active');
    }
})

const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.modal-open');
const closeBtn = document.querySelector('.modal-close');
const modalOverlay =document.querySelector('.modal-overlay');

//1.modal-open 버튼을 클릭한다.
//2. modal 에 active를 추가한다.
openBtn.addEventListener('click', function() {
    modal.classList.add('active');
})
//3.modal-colse 버튼을 클릭한다.
//4. modal 에 display를 감춘다.
closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
})
//5. modal-overlay 창을 클릭한다.
//6. modal 에 display를 감춘다.
modalOverlay.addEventListener('click', function() {
    modalOverlay.classList.remove('active');
})