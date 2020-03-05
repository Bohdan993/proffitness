import { log } from "./main"

export default function(){

 $('.brands__wrap').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
  autoplay:true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
         slidesToShow: 2,
      }
    }
  ]
 })
}