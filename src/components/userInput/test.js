jQuery(document).ready(function () {


    //Service 1
  jQuery("#service1").hover(function () {
    var sliderInstance = document.querySelector("#carousel .swiper-container")
      .swiper

    var allIcons = document.querySelectorAll(
      "#section_services span.elementor-icon"
    )

    for (i = 0; i < allIcons.length; i++) {
      allIcons[i].classList.remove("activeSection")
    }

    jQuery("#service1 span.elementor-icon").addClass("activeSection")

    sliderInstance.slideTo(1)
  })


  //Service 2
  jQuery("#service2").hover(function () {
    var sliderInstance = document.querySelector("#carousel .swiper-container")
      .swiper

    var allIcons = document.querySelectorAll(
      "#section_services span.elementor-icon"
    )

    for (i = 0; i < allIcons.length; i++) {
      allIcons[i].classList.remove("activeSection")
    }

    jQuery("#service2 span.elementor-icon").addClass("activeSection")

    sliderInstance.slideTo(2)
  })


  //Service 3
  jQuery("#service3").hover(function () {
    var sliderInstance = document.querySelector("#carousel .swiper-container")
      .swiper

    var allIcons = document.querySelectorAll(
      "#section_services span.elementor-icon"
    )

    for (i = 0; i < allIcons.length; i++) {
      allIcons[i].classList.remove("activeSection")
    }

    jQuery("#service3 span.elementor-icon").addClass("activeSection")

    sliderInstance.slideTo(3)
  })

  //Service 4
  jQuery("#service4").hover(function () {
    var sliderInstance = document.querySelector("#carousel .swiper-container")
      .swiper

    var allIcons = document.querySelectorAll(
      "#section_services span.elementor-icon"
    )

    for (i = 0; i < allIcons.length; i++) {
      allIcons[i].classList.remove("activeSection")
    }

    jQuery("#service4 span.elementor-icon").addClass("activeSection")

    sliderInstance.slideTo(4)
  })

  //Service 5
  jQuery("#service5").hover(function () {
    var sliderInstance = document.querySelector("#carousel .swiper-container")
      .swiper

    var allIcons = document.querySelectorAll(
      "#section_services span.elementor-icon"
    )

    for (i = 0; i < allIcons.length; i++) {
      allIcons[i].classList.remove("activeSection")
    }
    
    jQuery("#service5 span.elementor-icon").addClass("activeSection")

    sliderInstance.slideTo(5)
  })

  //Service 6
  jQuery("#service6").hover(function () {
    var sliderInstance = document.querySelector("#carousel .swiper-container")
      .swiper
    var allIcons = document.querySelectorAll(
      "#section_services span.elementor-icon"
    )

    for (i = 0; i < allIcons.length; i++) {
      allIcons[i].classList.remove("activeSection")
    }

    jQuery("#service6 span.elementor-icon").addClass("activeSection")

    sliderInstance.slideTo(6)
  })
})
