// Put your slider parameters here, stored as a variable, then export.. (import into index.js)

// Product Slider Params
export let sliderProductParams = {
    slidesPerGroup: 4,
    slidesPerView: 4,
    spaceBetween: 129,
    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 430px
        430: {
            slidesPerGroup: 1,
            slidesPerView: 1
        },
        // when window width is <= 768px
        768: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is <= 980px
        980: {
            // slidesPerGroup: 3,
            // slidesPerView: 3,
            spaceBetween: 40
        },
        // when window width is <= 1200px
        1200: {
            // slidesPerView: 4,
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 80
        },
        // when window width is <= 1441px
        1441: {
            slidesPerView: 4,
            spaceBetween: 100
        }
    },
    pagination: {
        el: '.swiper-pagination-fraction',
        type: 'fraction',
        clickable: true,
        renderFraction: function(currentClass, totalClass) {
            return '<div class="product-pagination">' +
                '<span class="small">Page </span>' +
                '<span class="small ' + currentClass + '"></span>' +
                '<span class="small"> of </span>' +
                '<span class="small ' + totalClass + '"></span>' +
                '</div>';
        }
    },
    navigation: {
        prevEl: '.product-button-prev',
        nextEl: '.product-button-next',
    },
    on: { // for debugging purposes
        init: function () {
          console.log('swiper initialized');
        },
        slideChange: function()  {
            currentIndex = sliderProducts.activeIndex
            console.log(currentIndex);
        },
      }
}
