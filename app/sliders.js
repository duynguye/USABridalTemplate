// Put your slider parameters here, stored as a variable, then export.. (import into index.js)

// Product Slider Params
let sliderProductParams = {
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
            slidesPerGroup: 4,
            slidesPerView: 4,
            spaceBetween: 100
        }
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

export let sliderBridalParams = {
    ...sliderProductParams,
    pagination: {
        el: '.slider-bridal-pagination',
        type: 'fraction',
        clickable: true,
        renderFraction: function(currentClass, totalClass) {
            return "<span>Page </span><span class='" +currentClass+ "'></span>" + "<span> of </span><span class='" +totalClass+
            "'></span>" ;
        }
    },
    navigation: {
        prevEl: '.slider-bridal-prev',
        nextEl: '.slider-bridal-next',
    },
}
export let sliderPromParams = {
    ...sliderProductParams,
    pagination: {
        el: '.slider-prom-pagination',
        type: 'fraction',
        clickable: true,
        renderFraction: function(currentClass, totalClass) {
            return "<span>Page </span><span class='" +currentClass+ "'></span>" + "<span> of </span><span class='" +totalClass+
            "'></span>" ;
        }
    },
    navigation: {
        prevEl: '.slider-prom-prev',
        nextEl: '.slider-prom-next',
    },
}
export let sliderQuinceaneraParams = {
    ...sliderProductParams,
    pagination: {
        el: '.slider-quinceanera-pagination',
        type: 'fraction',
        clickable: true,
        renderFraction: function(currentClass, totalClass) {
            return "<span>Page </span><span class='" +currentClass+ "'></span>" + "<span> of </span><span class='" +totalClass+
            "'></span>" ;
        }
    },
    navigation: {
        prevEl: '.slider-quinceanera-prev',
        nextEl: '.slider-quinceanera-next',
    },
}