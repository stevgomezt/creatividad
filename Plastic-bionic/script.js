gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




var clutter = '0';

var line = document.querySelector("#line");

setInterval(function(){
  if(clutter<100){
    clutter++;
    line.style.width = clutter + `%`
  }
}, 20)

var tml = gsap.timeline()

tml.to("#text1",{
   top:0,
   ease: Power1,
   delay: -1,
})
.to("#text2",{
  top:0,
  ease: Power1,
  delay: -.92,

})
.to("#text3",{
  top:0,
  ease: Power1,
})
.to("#text4",{
  top:0,
  ease: Power1,
  delay:-.09,
})
.to("#text5",{
  top:0,
  ease: Power1,
  delay:-.07,


})
.to("#text6",{
  top:0,
  ease: Power1,
  delay:-.05,


})
.to("#text7",{
  top:0,
  ease: Power1,
  delay:-.03,


})
.to("#text13",{
  top:0,
  ease: Power1,
  delay:-5
})
.to("#text12",{
  top:0,
  ease: Power1,
  delay: -2.6
})
.to("#text11",{
  top:0,
  ease: Power1,
  delay:-2.09
})
.to("#text10",{
  top:0,
  ease: Power1,
  delay:-1.9
})
.to("#text9",{
  top:0,
  ease: Power1,
  delay:-1.7
})
.to("#text8",{
  top:0,
  ease: Power1,
  delay:-1
})

var timeline = gsap.timeline();

timeline.to("#loder1",{
  delay:2,
  ease: Power1,
  scale:1
})
.to("#loder1",{
  delay:.5,
  height:`0%`,
  top:`50%`,
  opacity:0
})
.to("#loder2",{
  delay:-0.55,
  opacity:1,
  scale:1,
})
.to("#loder2",{
  delay:.5,
  width:`0%`,
  top:`50%`,
  left:`50%`,
  opacity:0
})
.to("#loder3",{
  delay:-0.55,
  opacity:1,
  scale:1,
})
.to("#loder3",{
  scale:6,
  opacity:0
})
.to("#text",{
  opacity:0,
  delay: 0.12
})
.to("#main",{
  delay:-0.12,
  scale:1
})

setTimeout(function(){
  document.querySelector("#intro").style.display = `none`;
},5575)
setTimeout(function(){
  document.querySelector("#main").style.opacity = 1;
},4000)


var centim = gsap.timeline();


centim.to("#home-text9",{
  top:0,
  delay:5.5
})
.to("#home-text8",{
  top:0,
  delay: -0.30,
})
.to("#home-text7",{
  top:0,
  delay: -0.29,

})
.to("#home-text6",{
  top:0,
  delay: -0.28,
})
.to("#home-text5",{
  top:0,
  delay: -0.27,

})
.to("#home-text4",{
  top:0,
  delay: -0.26,

})
.to("#home-text3",{
  top:0,
  delay:-0.25
})
.to("#home-text2",{
  top:0,
  delay:-0.24
})
.to("#home-text1",{
  top:0,
  delay:-0.23
})

var lol = gsap.timeline()

lol.to("#home-center-text1",{
  top:0,
  delay:5.5
})
.to("#home-center-text2",{
  top:0,
})
.to("#home-center-text3",{
  top:0,
})
.to("#home-center-text4",{
  top:0,
})
.to("#home-center-text5",{
  top:0,
})


var flag = 0;

var centerbtm = document.querySelector("#home-center1-btm");

document.querySelector("#home-center1").addEventListener("mouseenter",function(){
      if(flag === 0){
        centerbtm.style.width = `25%`
        document.querySelector("#home-center-btm").style.width = `37%`
      }
})


document.querySelector("#home-center1").addEventListener("mouseleave",function(){
    centerbtm.style.width = 0;
    document.querySelector("#home-center-btm").style.width = 0;
})



document.querySelector("#home-center").addEventListener("mouseenter",function(){
      if(flag === 0){
        document.querySelector("#home-center-btm").style.width = `37%`
        centerbtm.style.width = `25%`
      }
})


document.querySelector("#home-center").addEventListener("mouseleave",function(){
    centerbtm.style.width = 0;
    document.querySelector("#home-center-btm").style.width = 0;
})


gsap.to("#home>#home-center",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#home-center",
    start:"170% 61.5%",
    end:"280%, 0%",

    pin:true,
    scrub:1,
  },
})
gsap.to("#home>#home-center1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#home-center1",
    start:"170% 79.7%",
    end:"280%, 0%",

    pin:true,
    scrub:5
  },
})
gsap.to("#home>#home-center-btm",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#home-center-btm",
    start:"170% 50%",
    end:"280%, 0%",

    pin:true,
    scrub:1,
  },
})
gsap.to("#home>#home-center1-btm",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#home-center1-btm",
    start:"170% 50%",
    end:"280%, 0%",

    pin:true,
    scrub:1,
  },
})

gsap.to("#second",{
  scrollTrigger:{
     scroller:"#main",
    trigger:"#second>h1",
    start:"280% bottom" ,
    end:"680% top",
    scrub:1,
    pin:true
  },
})
gsap.to("#third",{
  scrollTrigger:{
     scroller:"#main",
    trigger:"#third>h1",
    start:"290% bottom",
    end:"5080% top",
    scrub:1,
    pin:true
  },
})
gsap.to("#fourth",{
  scrollTrigger:{
     scroller:"#main",
    trigger:"#fourth>h1",
    start:"290% bottom",
    end:"5080% top",
    scrub:1,
    pin:true
  },
})
gsap.to("#fifth",{
  scrollTrigger:{
     scroller:"#main",
    trigger:"#fifth>h1",
    start:"290% bottom",
    end:"5080% top",
    scrub:1,
    pin:true
  },
})
gsap.to("#sixth",{
  scrollTrigger:{
     scroller:"#main",
    trigger:"#sixth>h1",
    start:"290% bottom",
    end:"5080% top",
    scrub:1,
    pin:true
  },
})
gsap.to("#seventh",{
  scrollTrigger:{
     scroller:"#main",
    trigger:"#seventh>h1",
    start:"290% bottom",
    end:"5080% top",
    scrub:1,
    pin:true
  },
})
gsap.to("#eight",{
  scrollTrigger:{
     scroller:"#main",
    trigger:"#eight>h1",
    start:"290% bottom",
    end:"5080% top",
    scrub:1,
    pin:true
  },
})
gsap.to("#nine",{
  scrollTrigger:{
     scroller:"#main",
    trigger:"#nine>h1",
    start:"290% bottom",
    end:"5080% top",
    scrub:1,
    pin:true
  },
})
gsap.to("#ten",{
  scrollTrigger:{
     scroller:"#main",
    trigger:"#ten>h1",
    start:"290% bottom",
    end:"5080% top",
    scrub:1,
    pin:true
  },
})
gsap.to("#eleven",{
  scrollTrigger:{
     scroller:"#main",
    trigger:"#eleven>h1",
    start:"180% bottom",
    end:"5080% top",
    scrub:1,
    pin:true,
  },
})
gsap.to("#twelve",{
  scrollTrigger:{
     scroller:"#main",
    trigger:"#twelve>h1",
    start:"180% bottom",
    end:"5080% top",
    scrub:1,
    pin:true,
  },
})
gsap.to("#thirteen",{
  scrollTrigger:{
     scroller:"#main",
    trigger:"#thirteen>h1",
    start:"135% bottom",
    end:"5080% top",
    scrub:1,
    pin:true,
  },
})
gsap.to("#fourteen",{
  scrollTrigger:{
     scroller:"#main",
    trigger:"#fourteen>h1",
    start:"180% bottom",
    end:"5080% top",
    scrub:1,
    pin:true,
  },
})
gsap.to("#fifteen",{
  scrollTrigger:{
     scroller:"#main",
    trigger:"#fifteen>h1",
    start:"300% bottom",
    end:"5080% top",
    scrub:1,
    pin:true,
  },
})
gsap.to("#sixteen",{
  scrollTrigger:{
     scroller:"#main",
    trigger:"#sixteen>h1",
    start:"180% bottom",
    end:"5080% top",
    scrub:1,
    pin:true,
  },
})



document.querySelector("#nav2").addEventListener("mouseenter",function(){
  if(flag === 0){
    document.querySelector("#inner-nav-2").style.top = `0%`
    document.querySelector("#inner-nav-2").style.cursor = `pointer`
  }
})

document.querySelector("#nav2").addEventListener("mouseleave",function(){
  document.querySelector("#inner-nav-2").style.top = `97%`;
})

gsap.to("#nav",{
  scrollTrigger:{
     scroller:"#main",
    trigger:"#nav",
    start:"top top",
    end:"20080% bottom",
    scrub:1,
    pin:true,
  },
})


gsap.to("#nav2",{
  scrollTrigger:{
     scroller:"#main",
    trigger:"#nav2",
    start:"top top",
    end:"20080% bottom",
    scrub:1,
    pin:true,
  },
})

