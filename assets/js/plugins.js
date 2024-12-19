// Digital Marketing partner slider setup

if (document.querySelector(".partnerSlider")) {
  new Swiper(".partnerSlider", {
    spaceBetween: 30,
    slidesPerView: 3,
    // centeredSlides: "auto",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
    },
  });
}

// Digital Marketing project Slider

if (document.querySelector(".projectSlider")) {
  new Swiper(".projectSlider", {
    spaceBetween: 30,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".project-slider-next",
      prevEl: ".project-slider-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

// Digital Marketing testimonials slider
if (document.querySelector(".testimonialsSlider")) {
  new Swiper(".testimonialsSlider", {
    spaceBetween: 0,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial-slider-next",
      prevEl: ".testimonial-slider-prev",
    },
  });
}

// Mobile App testimonials slider
if (document.querySelector(".h2-testimonialsSlider")) {
  new Swiper(".h2-testimonialsSlider", {
    direction: "vertical",
    spaceBetween: 0,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial-slider-next",
      prevEl: ".testimonial-slider-prev",
    },
  });
}

// Signup slider
if (document.querySelector(".signupSwiper")) {
  new Swiper(".signupSwiper", {
    effect: 'fade',
    fadeEffect: {
      crossFade: true // Optional: enables crossfade effect
    },
    spaceBetween: 30,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: true,
    speed: 800,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// erp-product slider
if (document.querySelector(".swiper-ess")) {
  new Swiper(".swiper-ess", {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    speed: 800,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// SCM product slider
if (document.querySelector(".lap-screen")) {
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  new Swiper(".lap-screen", {
    spaceBetween: 2,
    speed: 800,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });
}

// planning & manufacturing slider
if (document.querySelector(".swiper-apple")) {
  new Swiper(".swiper-apple", {
    effect: 'fade',
    fadeEffect: {
      crossFade: true // Optional: enables crossfade effect
    },
    spaceBetween: 30,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: true,
    speed: 1000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".apple-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        var icons = ['fa-line-chart', 'fa-cog', 'fa-bell'];
        var icon = icons[index % icons.length];
        return '<span class="' + className + '"><i class="fa fa-3x ' + icon + '" aria-hidden="true"></i></span>';
      }
    },
  });
}

// faq

const faqsWrapper = document.querySelectorAll(".faq-wrapper");

faqsWrapper.forEach((element) => {
  const faqs = element.querySelectorAll(".faq-toggler");
  window.addEventListener("load", (event) => {
    faqs.forEach((item, index) => {
      if (index !== 0) {
        item.classList.remove("active-faq");
        item.style.height = item.children[0].clientHeight + 10 + "px";
      } else {
        item.classList.add("active-faq");
      }
    });
  });
});

faqsWrapper.forEach((element) => {
  const faqs = element.querySelectorAll(".faq-toggler");
  faqs.forEach((item) => {
    item.addEventListener("click", (e) => {
      for (let i = 0; i < e.target.parentElement.children.length; i++) {
        if (e.target.parentElement.children[i] === e.target) {
          e.target.parentElement.children[i].classList.add("active-faq");
          e.target.parentElement.children[i].style.height =
            e.target.parentElement.children[i].children[0].clientHeight +
            e.target.parentElement.children[i].children[1].clientHeight +
            10 +
            "px";
        } else {
          e.target.parentElement.children[i].classList.remove("active-faq");
          e.target.parentElement.children[i].style.height =
            e.target.parentElement.children[i].children[0].clientHeight +
            10 +
            "px";
        }
      }
    });
  });
});

// faq home 2
const h2FaqsWrapper = document.querySelectorAll(".h2-faq-wrapper");

h2FaqsWrapper.forEach((element) => {
  const faqs = element.querySelectorAll(".faq-toggler");
  window.addEventListener("load", (event) => {
    faqs.forEach((item, index) => {
      if (index !== 0) {
        item.classList.remove("active-faq");
        item.style.height = item.children[0].clientHeight + "px";
      } else {
        item.classList.add("active-faq");
      }
    });
  });
});

h2FaqsWrapper.forEach((element) => {
  const faqs = element.querySelectorAll(".faq-toggler");
  faqs.forEach((item) => {
    item.addEventListener("click", (e) => {
      for (let i = 0; i < e.target.parentElement.children.length; i++) {
        if (e.target.parentElement.children[i] === e.target) {
          e.target.parentElement.children[i].classList.add("active-faq");
          e.target.parentElement.children[i].style.height =
            e.target.parentElement.children[i].children[0].clientHeight +
            e.target.parentElement.children[i].children[1].clientHeight +
            "px";
        } else {
          e.target.parentElement.children[i].classList.remove("active-faq");
          e.target.parentElement.children[i].style.height =
            e.target.parentElement.children[i].children[0].clientHeight + "px";
        }
      }
    });
  });
});

// counter

const counter = (item) => {
  let countdown = null;
  const count = Number(item.getAttribute("data-count-fm"));
  const valueType = item.getAttribute("data-type-fm");
  const speed = Number(item.getAttribute("data-speed-fm"));
  let startNumber = 0;
  clearInterval(countdown);
  countdown = setInterval(function () {
    item.innerText = startNumber + valueType;
    if (count > 10000 && startNumber < count - 10000) {
      startNumber += 1000;
    } else if (count > 1000 && startNumber < count - 1000) {
      startNumber += 100;
    } else if (count > 100 && startNumber < count - 100) {
      startNumber += 10;
    } else {
      startNumber++;
    }
    if (startNumber > count) {
      clearInterval(countdown);
    }
  }, speed / count);
};

// scroll control

let running = [];

const scrollAnimate = (event) => {
  const allData = document.querySelectorAll("[data-scroll-fm='scroll']");
  if (allData) {
    allData.forEach((item) => {
      const rect = item.getBoundingClientRect()?.y;
      if (rect - window.innerHeight <= 0 && rect >= 0) {
        if (running.indexOf(item) < 0) {
          const animType = item.getAttribute("data-anim-type");
          switch (animType) {
            case "count-width":
              if (item.classList.value.includes("width-increase")) {
                item.classList.remove("width-increase");
                setTimeout(() => {
                  item.classList.add("width-increase");
                }, 10);
              } else {
                item.classList.add("width-increase");
              }

              break;

            default:
              break;
          }
          if (item.getAttribute("data-count-fm")) {
            counter(item);
          }
          running.push(item);
        }
      } else {
        running = running.filter((value) => value != item);
      }
    });
  }
};

window.addEventListener("load", (event) => {
  scrollAnimate(event);
});

// Function to handle scroll and load events
function handleScroll() {
  scrollAnimate(); // Call your scrollAnimate function

  // Sticky header logic
  const header = document.getElementById("stickyHeader");
  if (!header.classList.contains("bg-white") && window.scrollY > 0) {
    header.classList.add("bg-white", "shadow-card-shadow");
  } else if (
    header.classList.contains("bg-white") && // Adjusted the condition here
    window.scrollY === 0
  ) {
    header.classList.remove("bg-white", "shadow-card-shadow");
  }
}

// Add event listeners for both scroll and load events
window.addEventListener("load", handleScroll);
window.addEventListener("scroll", handleScroll);


// IT Solutions project Slider

if (document.querySelector(".projectSlider-h3")) {
  new Swiper(".projectSlider-h3", {
    spaceBetween: 30,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".project-slider-next",
      prevEl: ".project-slider-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

if (document.querySelector(".testimonials-h3")) {
  new Swiper(".testimonials-h3", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonials-slider-next",
      prevEl: ".testimonials-slider-prev",
    },
    loop: true,
  });
}

// Thumbslider
if (document.querySelector(".project-detail-slider-thumb")) {
  const swiperThumb = new Swiper(".project-detail-slider-thumb", {
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper(".project-detail-slider", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiperThumb,
    },
  });
}

// modal slider
// image slider zoom
let sliderActive = 0;
const swiper3 = new Swiper(".modal-slider", {
  initialSlide: sliderActive,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const zoomBtns = document.querySelectorAll(".zoom-slider");

if (zoomBtns) {
  zoomBtns.forEach((btn, index) => {
    btn.addEventListener("click", (index) => {
      document.getElementById("slider-modal").classList.remove("hidden");
      sliderActive = index;
    });
  });
}

if (document.getElementById("modal-close")) {
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("slider-modal").classList.add("hidden");
  });
}

if (document.querySelector(".ms-swiper")) {
  new Swiper(".ms-swiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
}

// Home four testimonials slider
if (document.querySelector(".h4-testimonialsSlider")) {
  new Swiper(".h4-testimonialsSlider", {
    spaceBetween: 0,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial-slider-next",
      prevEl: ".testimonial-slider-prev",
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });
}

// team slider
if (document.querySelector(".h4-teamSlider")) {
  new Swiper(".h4-teamSlider", {
    spaceBetween: 30,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}
// Navigation bar
let lastScrollTop = 0;
// const navbar = document.getElementById("mnav-menu-item");
const navbar = document.getElementById("stickyHeader");

window.addEventListener("scroll", function (e) {
  e.preventDefault();
  // Check if the window width is greater than 1024px
  if (window.innerWidth > 2500) {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.style.transform = "translateY(-200%)";
    } else {
      // Scrolling up
      navbar.style.transform = "translateY(0)";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  } else {
    // Reset the navbar position if the screen is less than or equal to 1024px
    navbar.style.transform = "translateY(0)";
  }
});
// Dropdown Filter
$(document).ready(function () {

  // Dropdown for products
  const groupItem = 'groupItem';
  const beforeAction = 'beforeAction';
  const header = $('#stickyHeader');
  // Dropdown for Apps
  $('.MainMenu').hide();
  $('.nav-link.prod_menu').click(function () {
    $('.Comm_MainMenu').hide();
    $('.Indus_MainMenu').hide();
    $('.nav-link.comm_menu').removeClass(groupItem).removeClass(beforeAction);
    $('.nav-link.industrie_menu').removeClass(groupItem).removeClass(beforeAction);
    $('.all_prod_tab').not('.products').hide();
    $('.all_prod_tab.products').show()
    $('.tab-category li').removeClass('active').first().addClass('active');
    $('.MainMenu').toggle();
    $('.MainMenu').css("top", "67px");
    $('.MainMenu').css("min-height", "calc(100vh - 160px)");
    // Check if the menu is now visible
    if ($('.MainMenu').is(':visible')) {
      $('#root').css("overflow", "hidden"); // Hide overflow when menu is open
      $('.MainMenu').css("top", "67px");
      $('.nav-link.prod_menu').addClass(groupItem).addClass(beforeAction);
      header.addClass("bg-white shadow-card-shadow");
    } else {
      $('#root').css("overflow", "auto"); // Restore overflow when menu is closed
      $('.nav-link.prod_menu').removeClass(groupItem).removeClass(beforeAction);
      // header.removeClass("bg-white shadow-card-shadow");
      if ($(window).scrollTop() === 0) {
        header.removeClass("bg-white shadow-card-shadow");
      }
    }
    $('.MainMenu .close').click(function () {
      $('.MainMenu').hide();
      $('#root').css("overflow", "auto");
      $('.nav-link.prod_menu').removeClass(groupItem).removeClass(beforeAction);
      if ($(window).scrollTop() === 0) {
        header.removeClass("bg-white shadow-card-shadow");
      }
    });
  });
  // Dropdown for Community
  $('.Comm_MainMenu').hide();
  $('.nav-link.comm_menu').click(function () {
    $('.MainMenu').hide();
    $('.Indus_MainMenu').hide();
    $('.nav-link.prod_menu').removeClass(groupItem).removeClass(beforeAction);
    $('.nav-link.industrie_menu').removeClass(groupItem).removeClass(beforeAction);
    $('.Comm_MainMenu').toggle();
    $('.Comm_MainMenu').css("top", "67px");
    $('.Comm_MainMenu').css("min-height", "calc(100vh - 160px)");
    // Check if the menu is now visible
    if ($('.Comm_MainMenu').is(':visible')) {
      $('#root').css("overflow", "hidden"); // Hide overflow when menu is open
      $('.Comm_MainMenu').css("top", "67px");
      $('.nav-link.comm_menu').addClass(groupItem).addClass(beforeAction);
      header.addClass("bg-white shadow-card-shadow");
    } else {
      $('#root').css("overflow", "auto"); // Restore overflow when menu is closed
      $('.nav-link.comm_menu').removeClass(groupItem).removeClass(beforeAction);
      // header.removeClass("bg-white shadow-card-shadow");
      if ($(window).scrollTop() === 0) {
        header.removeClass("bg-white shadow-card-shadow");
      }
    }
    $('.Comm_MainMenu .close').click(function () {
      $('.Comm_MainMenu').hide();
      $('#root').css("overflow", "auto");
      $('.nav-link.comm_menu').removeClass(groupItem).removeClass(beforeAction);
      if ($(window).scrollTop() === 0) {
        header.removeClass("bg-white shadow-card-shadow");
      }
    });
  });
  // Dropdown for Community
  $('.Indus_MainMenu').hide();
  $('.nav-link.industrie_menu').click(function () {
    $('.MainMenu').hide();
    $('.Comm_MainMenu').hide();
    $('.nav-link.prod_menu').removeClass(groupItem).removeClass(beforeAction);
    $('.nav-link.comm_menu').removeClass(groupItem).removeClass(beforeAction);
    $('.Indus_MainMenu').toggle();
    $('.Indus_MainMenu').css("top", "67px");
    $('.Indus_MainMenu').css("min-height", "calc(100vh - 160px)");
    // Check if the menu is now visible
    if ($('.Indus_MainMenu').is(':visible')) {
      $('#root').css("overflow", "hidden"); // Hide overflow when menu is open
      $('.Indus_MainMenu').css("top", "67px");
      $('.nav-link.industrie_menu').addClass(groupItem).addClass(beforeAction);
      header.addClass("bg-white shadow-card-shadow");
    } else {
      $('#root').css("overflow", "auto"); // Restore overflow when menu is closed
      $('.nav-link.industrie_menu').removeClass(groupItem).removeClass(beforeAction);
      // header.removeClass("bg-white shadow-card-shadow");
      if ($(window).scrollTop() === 0) {
        header.removeClass("bg-white shadow-card-shadow");
      }
    }
    $('.Indus_MainMenu .close').click(function () {
      $('.Indus_MainMenu').hide();
      $('#root').css("overflow", "auto");
      $('.nav-link.industrie_menu').removeClass(groupItem).removeClass(beforeAction);
      if ($(window).scrollTop() === 0) {
        header.removeClass("bg-white shadow-card-shadow");
      }
    });
  });
});

$(document).ready(function () {
  $('.all_prod_tab').not('.products').hide();
  $('.tab-category li').removeClass('active').first().addClass('active');
  $('.tab-category li').click(function () {
    var value = $(this).attr('data-filter');
    $('.all_prod_tab').not('.' + value).hide();
    $('.all_prod_tab').filter('.' + value).show();
    $('.tab-category li').removeClass('active');
    $(this).addClass('active');
    setActiveRMCategory(value);
  });
  $('.RM_prod_categories li').hover(
    function () {
      $('.RM_prod_categories li').removeClass('active');
      $(this).addClass('active');
    },
    function () { }
  );
  function setActiveRMCategory(category) {
    $('.RM_prod_categories li').removeClass('active');
    $('.' + category + ' .RM_prod_categories li').first().addClass('active');
    $('.' + category + ' .RM_prod_details').first().show();
    $('.' + category + ' .RM_prod_details').not('#detail-1').hide();
  }
  //////
  $('.RM_prod_details').not('#detail-1').hide();

  // $('#detail-1').show();

  $('.RM_prod_categories li').hover(
    function () {
      var target = $(this).data('target');
      $('.RM_prod_details').hide();
      $('#detail-' + target).show();
    },
    function () {
      // $('.RM_prod_details').hide();
      // $('#detail-1').show();
    }
  );
});
// All products load more
$(document).ready(function () {
  // Hide all items except the first 8
  $('#product-list .RM-productDiv').slice(8).addClass('hidden-list');

  // Show more items when the button is clicked
  $('#load-more').on('click', function () {
    let hiddenItems = $('#product-list .RM-productDiv.hidden-list');

    // Show up to 4 hidden items at a time
    hiddenItems.slice(0, 4).removeClass('hidden-list');

    // Hide the button if there are no more hidden items
    if (hiddenItems.length <= 4) {
      $(this).addClass('hidden-list');
    }
  });
});
// All products inner-scroll active tab
$(document).ready(function () {
  const $tabs = $(".RM-Left_list li");
  const $rightContainer = $(".RM-Right_container");
  const $sections = $(".RM-Right_element");

  function updateActiveTab() {
    const scrollY = $rightContainer.scrollTop();

    $sections.each(function (index) {
      const $section = $(this);
      const sectionTop = $section.position().top - 10;
      const sectionHeight = $section.outerHeight();

      // Check if the current section is in view
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        $tabs.removeClass("RM-Selectlist");
        $tabs.eq(index).addClass("RM-Selectlist");
      }
    });
  }

  const $tabsLink = $tabs.find('a');

  $tabsLink.click(function (event) {
    event.preventDefault();
    event.stopPropagation();
    const targetId = $(this).attr('data-prod');
    const $targetElement = $('#' + targetId);
    const targetContainer = $('.RM-allproductsect');
    const scrollTo = targetContainer.offset().top + 50;
    $('html, body').scrollTop(scrollTo);
    let scrollToInner;

    if ($targetElement.length) {
      scrollToInner = $targetElement.offset().top - $('.RM-Right_container').offset().top + $('.RM-Right_container').scrollTop();
      $('.RM-Right_container').scrollTop(scrollToInner);
    }
  });

  $rightContainer.on("scroll", function () {
    updateActiveTab();
    const scrollTop = $rightContainer.scrollTop();
    $rightContainer.stop().animate({ scrollTop: scrollTop }, 200);
  });

  $(window).on('resize', updateActiveTab);

  // Back to top
  $('.back-to-top').fadeOut('slow');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
    } else {
      if ($(this).scrollTop() === 0) {
        $('.back-to-top').fadeOut('slow');
      }
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 120, 'easeInOutExpo');
    return false;
  });
  // Validation Signup Form
  if (document.querySelector("#signupForm")) {
    $("#signupForm").validate({
      rules: {
        compyname: { required: true },
        username: { required: true, minlength: 3 },
        password: { required: true, minlength: 6 },
        confPassword: { required: true, equalTo: "#password" },
        mailId: { required: true, email: true },
        mobNum: { required: true, digits: true, minlength: 10, maxlength: 15 },
        selectList: { required: true },
        agreeCheck: { required: true }
      },
      messages: {
        compyname: "Please enter your company name.",
        username: {
          required: "Please enter a username.",
          minlength: "Your username must be at least 3 characters long."
        },
        password: {
          required: "Please provide a password.",
          minlength: "Your password must be at least 6 characters long."
        },
        confPassword: {
          required: "Please confirm your password.",
          equalTo: "Passwords do not match."
        },
        mailId: {
          required: "Please enter your email address.",
          email: "Please enter a valid email address."
        },
        mobNum: {
          required: "Please enter your mobile number.",
          digits: "Please enter only digits.",
          minlength: "Your mobile number must be at least 10 digits long.",
          maxlength: "Your mobile number cannot exceed 15 digits."
        },
        selectList: "Please select a city.",
        agreeCheck: "You must agree to the terms."
      },
      errorElement: 'em',
      errorPlacement: function (label, element) {
        if (element.parent('.form-floating').length) {
          label.insertAfter(element.parent());
          label.addClass('text-danger');
        } else {
          label.insertAfter(element);
          label.addClass('text-danger');
          // default
        }
      }
      // ,
      // submitHandler: function (form) {
      //   form.submit(); // Submit the form if validation passes
      // }
    });
    $(".RM-form-submit").click(function () {
      $("#signupForm").valid(); debugger;
    });
  }

  //<!-- pop up -->
  $(".mytooltip").hover(
    function (e) {
      // e.preventDefault();
      e.stopPropagation();
      $(this).find('.tooltip-content').show();
      $(this).find('.tooltip-content').hover(
        function (e) {
          // e.preventDefault();
          e.stopPropagation();
          $('.tooltip-content').stop(true);
        },
        function (e) {
          // e.preventDefault();
          e.stopPropagation();
          $('.tooltip-content').hide();
          $('.tooltip-content').stop();
        }
      );
      // $(this).find('.tooltip-content').delay(4000).fadeOut();
    },
    function (e) {
      // e.preventDefault();
      e.stopPropagation();
      $('.tooltip-content').stop();
      $('.tooltip-content').hide();
    }
  );
  $('.spl1').click(function () {
    $('.tooltip-content').css("display", "none");
  });
  // owl-carousel
  var owl = $('.rtl_slide');
  if (owl) {
    owl.owlCarousel({
      rtl: false,
      items: 5,
      margin: 10,
      loop: true,
      autoplay: true,
      slideTransition: 'linear',
      autoplayTimeout: 2500,
      autoplaySpeed: 2500,
      autoplayHoverPause: false,
      dots: false,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    }).trigger("play.owl.autoplay");
  }

  if ($('.inventory-owl')) {
    var owl = $(".inventory-owl");

    owl.owlCarousel({
      rtl: false,
      items: 1,
      margin: 0,
      loop: true,
      autoplay: true,
      autoplayTimeout: 7000,
      autoplaySpeed: 3000,
      autoplayHoverPause: false,
      dots: true,
      nav: false,
      slideTransition: 'linear',
      animateOut: 'animate__zoomOut animate__faster animate__animated',
      animateIn: 'animate__fadeInDown animate__faster animate__animated',
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      },
      vertical: true,
      verticalSwiping: true,
      slideBy: 1,
      mouseDrag: true,
      touchDrag: true
    });

    // Trigger autoplay when the page loads
    owl.trigger('play.owl.autoplay');
  }
  // search engin blog
  // Fetching the JSON data from the external file
  $.getJSON('/items.json', function (data) {
    const items = data;  // Use the fetched data

    // Now you can call the searchFunction() or use `items` for displaying
    // Example: Call search function once data is loaded
    $('#searchInput').on('input', function () {
      searchFunction(items);
    });

    // Adding the "Enter" key press functionality to trigger the search
    $('#searchInput').on('keypress', function (event) {
      if (event.key === 'Enter') {
        searchFunction(items);  // Trigger search when Enter key is pressed
      }
    });

    // Remove "No results found" message when clicking outside input
    $(document).on('click', function (e) {
      var searchContainer = $('#searchContainer');
      var resultsContainer = $('#searchResults');
      if (!searchContainer.is(e.target) && searchContainer.has(e.target).length === 0) {
        clearResults();  // Clear the results when click is outside input and results
        resultsContainer.hide();
      }
    });
  });

  // Function to trigger search when typing in the search box
  function searchFunction(items) {
    var input = $('#searchInput');
    var filter = input.val().toUpperCase();
    var resultCountDiv = $('#resultCount');
    var resultsContainer = $('#searchResults');

    // Clear previous results
    resultsContainer.empty();

    var count = 0; // Variable to count the results

    // Loop through the items and check for matching items
    items.forEach(function (item) {
      if (item.title.toUpperCase().indexOf(filter) > -1 && filter !== "") {
        var itemElement = $('<div>').addClass('row item');

        // Create the image, title, and description for the matching item
        var imageElement = $('<img>').addClass('itemImg img-fluid col-4').attr('src', item.image);
        itemElement.append(imageElement);

        var textContainer = $('<div>').addClass('itemContent col-8');

        var titleElement = $('<h1>');
        textContainer.append(titleElement);

        var hyperLink = $('<a>').addClass('text-dark').attr('href', item.link).text(item.title);
        titleElement.append(hyperLink);

        var descriptionElement = $('<p>').text(item.description);
        textContainer.append(descriptionElement);

        // Append the text container to the item element
        itemElement.append(textContainer);

        // Append the item to the results container
        resultsContainer.append(itemElement);
        count++;
      }
    });

    // Display the result count and toggle visibility of the result dropdown
    if (count === 0) {
      resultCountDiv.text("No results found.");
      resultsContainer.hide(); // Hide dropdown when no results
    } else {
      resultCountDiv.text(count + " result(s) found.");
      resultsContainer.show(); // Show dropdown when results exist
    }
  }

  // Function to clear results when typing in the input field
  function clearResults() {
    var resultsContainer = $('#searchResults');
    var resultCountDiv = $('#resultCount');

    // Clear previous results when typing in the search box
    resultsContainer.empty();
    resultCountDiv.text(''); // Hide result count until search button is clicked
  }

  // // social media
  var currentPageUrl = encodeURIComponent(window.location.href);

  // Social media share URLs
  var twitterShareUrl = `https://twitter.com/intent/tweet?url=${currentPageUrl}`;
  var linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${currentPageUrl}`;

  // Create share buttons
  var shareContainer = $('#socialShareContainer');
  var socialButtons = [
    { name: 'Twitter', url: twitterShareUrl, class: 'btn-twitter', icon: 'bi-twitter' },
    { name: 'LinkedIn', url: linkedinShareUrl, class: 'btn-linkedin', icon: 'bi-linkedin' }
  ];

  socialButtons.forEach(function (button) {
    var buttonElement = $('<a>')
      .addClass(`btn ${button.class} me-2 d-flex align-items-center`)
      .attr('href', button.url)
      .attr('target', '_blank')
      .html(`<i class="bi ${button.icon} me-2"></i> Share on ${button.name}`);
    shareContainer.append(buttonElement);
  });

});