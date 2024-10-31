var tl = gsap.timeline()
    
    tl.from(".main h3" ,{
    y:-50,
    opacity:0,
    delay:0.2,
    duration:1,
    stagger:0.1
    });
    
    tl.from(".main1 h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.2
    
    })
    
    tl.from(".main1 img",{
    x:200,
    opacity:0,
    duration:0.5,
    rotate:45,
    stagger:0.5
    })