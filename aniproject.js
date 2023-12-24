 
 var crsr=document.querySelector("#cursor")
 var blur=document.querySelector("#cursor-blur")
 document.addEventListener("mousemove",function (dets) {
      crsr.style.left=dets.x+"px"
      crsr.style.top=dets.y+"px"
      blur.style.left=dets.x-200+"px"
    blur.style.top=dets.y-200+"px"
 })
 var h4all=document.querySelectorAll("#nav h4")
 h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function () {
        crsr.style.transform="scale(3)";
        crsr.style.border="1px solid #fff";
        crsr.style.backgroundColor="transparaent";
        
    });
    elem.addEventListener("mouseleave",function () {
        crsr.style.transform="scale(1)";
        crsr.style.border="0px solid #95C11E";
        crsr.style.backgroundColor="#95C11E";
        
    });
 });

 gsap.to("#nav",{
backgroundColor:"black",
duration:0.4,
delay:1,
height:"110px",
scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
   // markers:true,
    start:"top-10%",
    end:"top-11%",
    scrub:2,
}
 });
gsap.to("#main",{
backgroundColor:"#000",
scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    //markers:true,
    start:"top-20%",
    end:"top-80%",
    scrub:2
}
})
gsap.from("#about-us img,about-us-in",{
y:50,
opacity:0,
duration:1,
stagger:0.4,
scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    //markers:true,

    start:"top 60%",
    end:"top 58%",

    scrub:3,
}


})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        //markers:true,
    
        start:"top 70%",
        end:"top 65%",
    
        scrub:2,
    }
    
    
    })





function login() {
    alert("Login button clicked!");
}

gsap.from("#page4 h5",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page4 h5",
        scroller:"body",
        //markers:true,
    
        start:"top 60%",
        end:"top 58%",
    
        scrub:3,
    }
    
    
    })

