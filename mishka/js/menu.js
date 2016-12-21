  var mainNav=document.querySelector('.main-nav');
  var btnToggle=document.querySelector('.btn-toggle');
  var userBlock=document.querySelector('.user-block');
  var pageHeader=document.querySelector('.page-header');
  pageHeader.classList.remove('page-header--nojs');
  btnToggle.classList.remove('btn-toggle--nojs');

  btnToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('page-header--menu-closed')) {
      pageHeader.classList.add('page-header--menu-opened');
      pageHeader.classList.remove('page-header--menu-closed');
      btnToggle.classList.add('btn-toggle--opened');
      btnToggle.classList.remove('btn-toggle--closed');
    }
    else {
      pageHeader.classList.add('page-header--menu-closed');
      pageHeader.classList.remove('page-header--menu-opened');
      btnToggle.classList.add('btn-toggle--closed');
      btnToggle.classList.remove('btn-toggle--opened');
    }
  });