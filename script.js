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
    gooey: true,
    config: {"uFrequencyX":{"value":34.35,"range":[0,100]},"uFrequencyY":{"value":40.46,"range":[0,100]},"uFrequencyZ":{"value":12.21,"range":[0,100]},"geoVertex":{"range":[1,64],"value":60.63},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.5900132170290764},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0.6139534883720931},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.06,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}, onMouse :{value : 1}},
    slideStyle: (setScroll) => {
      sections.forEach(function(section, index){
        ScrollTrigger.create({
            trigger: section,
            scrub:1,
            start: "top top",
            onUpdate : function(prog){
                setScroll(prog.progress+index);
            },
        })
      })
    },
  });

