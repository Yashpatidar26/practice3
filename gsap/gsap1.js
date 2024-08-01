var tl=gsap.timeline();

tl.from('.wall', {
    width:0,
    stagger: .5,
    opacity:0,
    duration : 1,

    ease:"expo.inOut"
})


tl.from('.box2,.box1,.b2in1 , .b2in2, .b2in3,.box1 h1,.box1 p',{
    y:20,
    stagger:.3,
    opacity:0,
    duration : 2,
    ease:"expo.inOut"
})
tl
.from('.alb,.ein,.wall button', {
    y:20,
    stagger:.1,
    opacity:0,
    duration : 2,

    ease:"expo.inOut"
})


gsap.from(".wl2",{
    scrollTrigger:
    {
        trigger:".wl2",
        scroller:"body",
        markers: true,
        start:"Top 80%",
        end:"bottom 40%"
    },


    width:0,
    stagger: .5,
    opacity:0,
    duration : 1,

    ease:"expo.inOut"
})
gsap.from(".wl3",{
    scrollTrigger:
    {
        trigger:".wl2",
        scroller:"body",
        markers: true,
        start:"Top 80%",
        end:"bottom 40%"
    },


    width:0,
    stagger: .5,
    opacity:0,
    duration : 1,

    ease:"expo.inOut"
})
gsap.from(".mhad",{
    scrollTrigger:
    {
        trigger:".wl2",
        scroller:"body",
        markers: true,
        start:"Top 20%",
        end:"bottom 20%"
    },
    y:20,
    stagger:.1,
    opacity:0,
    duration : 2,

    ease:"expo.inOut"
})
gsap.from(".prag",{
    scrollTrigger:
    {
        trigger:".wl2",
        scroller:"body",
        markers: true,
        start:"Top 20%",
        end:"bottom 20%"
    },
    y:20,
    stagger:.3,
    opacity:0,
    duration : 2,
    ease:"expo.inOut"
})
gsap.from(".prag3",{
    scrollTrigger:
    {
        trigger:".wl2",
        scroller:"body",
        markers: true,
        start:"Top 20%",
        end:"bottom 20%"
    },
    y:20,
    stagger:.3,
    opacity:0,
    duration : 2,
    ease:"expo.inOut"
})
gsap.from(".s2h1,.s2p1,.s2p2",{
    y:20,
    stagger:.3,
    opacity:0,
    duration : 2,
    ease:"expo.inOut"
})