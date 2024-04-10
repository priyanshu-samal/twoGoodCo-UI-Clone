function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  function navbarAnimation() {
    gsap.to("#nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to("#nav-part2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  }
function videoContainerAnime(){
    let videoContainer =document.querySelector("#video-container");
let playbtn=document.querySelector("#play");

videoContainer.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})

videoContainer.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})
videoContainer.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-50,
        top:dets.y-80
    })
})
}
function loadingAnime(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.2
    
    })
    gsap.from("#page1 h1 .m",{
        y:200,
        opacity:0,
        delay:0.9,
        duration:1,
        stagger:0.2
    
    })

    gsap.from("#page1 #video-container",{
        y:200,
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.9,
       
    
    })
}
function curserAnimation(){
    // document.querySelectorAll(".child").addEventListener("mouseenter",function(){
//     gsap.to("#cursor",{
//         transform: 'translate(-50%,-50%) scale(1)'
//     })
// })
// document.querySelectorAll(".child").addEventListener("mouseleave",function(){
//     gsap.to("#cursor",{
//         transform: 'translate(-50%,-50%) scale(0)'
//     })
// })
    document.addEventListener("mousemove",function
    (dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y
        })
    })
    document.querySelectorAll(".child").forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(1)',
        });
    });
    elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(0)',
    });
    });
    });
}




locomotiveAnimation()
navbarAnimation()
videoContainerAnime()
loadingAnime()
curserAnimation()