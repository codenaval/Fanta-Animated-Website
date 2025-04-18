var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
        // markers: true,
        scroller: "body",
    }
})

tl.to("#fanta",{
    top:"130%",
    left:"3%",
},'orange')

tl.to("#sliceOrange2",{
    top:"165%",
    left:"20%"
},'orange')

tl.to("#orange1",{
    top:"165%",
    right:"10%"
},'orange')

tl.to("#leaf",{
    top:"110%",
    left:"80%",
    rotate:"-45deg"
},'orange')

tl.to("#leaf2",{
    top:"105%",
    left:"5%",
    rotate:"-45deg"
},'orange')

var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
        markers: true,
        scroller: "body",
    }
})

tl1.from("#lemon",{
    rotate:"-90deg",
    left:"-100%",
    top:"110%"
},'coca')

tl1.from("#sprite",{
    rotate:"-90deg",
    top:"110%",
    left:"-100%"
},'coca')

tl1.from("#orangeSlice",{
    rotate:"90deg",
    left:"100%",
    top:"110%"
},'coca')

tl1.from("#cocaCola",{
    rotate:"90deg",
    top:"110%",
    left:"100%"
},'coca')

tl1.to("#fanta",{
    top:"222%",
    left:"33%",
},'coca')

tl1.to("#sliceOrange2",{
    top:"210%",
    left:"50%"
},'coca')
