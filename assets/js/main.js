let brandButton = document.querySelector('.brand__button');

brandButton.addEventListener('click', function() {
    let swiperWrapper = document.querySelector('.brand__wrapper');
    if (swiperWrapper.classList.contains('brand__wrapper--cut')) {
        brandButton.classList.remove('brand__button-show');
        brandButton.classList.add('brand__button-hide');
        brandButton.textContent = 'Скрыть';
        swiperWrapper.classList.remove('brand__wrapper--cut');
    } else {
        brandButton.classList.remove('brand__button-hide');
        brandButton.classList.add('brand__button-show');
        brandButton.textContent = 'Показать все';
        swiperWrapper.classList.add('brand__wrapper--cut');
    }
});