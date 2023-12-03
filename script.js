Shery.mouseFollower();
Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hvr",{videos : ["./0.mp4", "./2.mp4", "./3.mp4"]} );

gsap.to(".fleftelem",{
    scrollTrigger:{
        trigger: "#fimages",
        pin: true,
        scrub: 1,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last"
    },
    y : "-300%",
    ease: Power1
})

let sections = document.querySelectorAll(".fleftelem");

Shery.imageEffect(".images", {
    style: 3,
    config: {onMouse : {value: 1}},
    slideStyle: (setScroll) => {
      sections.forEach(function(section, index){
        ScrollTrigger.create({
            trigger: section,
            scrub:1,
            start: "top top",
            onUpdate : function(prog){
                console.log(prog);
                setScroll(prog.progress+index);
            },
        })
      })
    },
  });

