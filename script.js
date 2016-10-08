$(document).ready(function(){
    $('.carusel-body').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='img/left-arrow.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='img/right-arrow.png'>",
        responsive: [
            {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
           prevArrow: "<img class='a-left control-c prev slick-prev' src='img/left-arrow.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='img/right-arrow.png'>",         
        
      }
    },
        {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
           prevArrow: "<img class='a-left control-c prev slick-prev' src='img/left-arrow.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='img/right-arrow.png'>",         
        
      }
    },     
            
            {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
           prevArrow: "<img class='a-left control-c prev slick-prev' src='img/left-arrow.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='img/right-arrow.png'>",         
        
      }
    },
            {
      breakpoint: 413,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
           prevArrow: "<img class='a-left control-c prev slick-prev' src='img/left-arrow.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='img/right-arrow.png'>",         
        
      }
    },
            
        ]
 
    });
    
    $('.poducts-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      variableWidth: true,
      prevArrow: "display:none",
      nextArrow: "display:none",
        responsive: [
        {
            breakpoint:992,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        ]
    
    });
});