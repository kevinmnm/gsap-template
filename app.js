/** div1 **/
const div1 = gsap.to('.div1', {
   x: () => window.innerWidth - 120,
   ease: 'linear',
   duration: 3,
   repeat: -1,
   yoyo: true
});
/**********/




/** div2 **/
const div2 = gsap.from('.div2', {
   rotate: 360,
   repeat: -1,
   duration: 1,
   ease: 'linear'
});
/**********/




/** div3 **/
const custom_timeline = gsap.timeline({
   // Global props for this timeline.
   repeat: -1,
   yoyo: true
});

custom_timeline.to('.div3', {
   x: () => -window.innerWidth/2,
   xPercent: 50,
   rotate: 360,
   duration: 1
});
// 1 second delay before execution.
custom_timeline.to('.div3', {
   backgroundColor: 'green'
}, 1); 

custom_timeline.fromTo('.div3', {
   scale: 1
}, {
   scale: 1.2,
   duration: 0.5
});

/**********/




/** div4 **/
const custome_timeline_2 = gsap.timeline({
   repeat: -1,
   yoyo: true,
   ease: 'linear'
}).to('.div4', {
   width: () => 'calc(100% - 20px)',
   duration: 3
}).to('.div4', {
   x: () => window.innerWidth - 120,
   width: 100,
   duration: 3
});

/**********/




/** div5 **/
const div5 = gsap.fromTo('.div5', {
   // From values.
   color: 'black',
   backgroundColor: 'white',
   borderRadius: 0,
   scale: 0.8
}, {
   // To values.
   duration: 1,
   color: 'white',
   backgroundColor: 'black',
   borderRadius: '50%',
   scale: 1.2,
   yoyo: true,
   repeat: -1,
   ease: 'linear'
});
/**********/



/** div6 **/
/** Clone multiple elements for div6 **/
for (let i=0; i<100; i++){
   document.querySelector('.div6').innerHTML += `<div class='div6-in'>${i}</div>`;
}

const stagger_timeline = gsap.timeline({
   repeat: -1,
   yoyo: true,
   ease: 'linear'
}).to('.div6-in', {
   scale: 0.1,
   rotate: 360,
   stagger: {
      amount: 1,
      from: 'center',
      grid: [10,10]
   }
}).to('.div6-in', {
   scale: 1,
   backgroundColor: 'blue',
   stagger: {
      each: 0.05,
      from: 'edges',
      grid: [10,10]
   }
}).to('.div6-in', {
   rotateY: 360,
   backgroundColor: 'yellow',
   borderRadius: '50%',
   stagger: {
      each: 0.05,
      from: 'center',
      grid: [10, 10]
   }
});
/**********/






/** Restart on window resize **/
const all_div = [div1, custom_timeline, custome_timeline_2, div5];

window.addEventListener('resize', () => {
   all_div.forEach( tw => {
      tw.pause(0).invalidate().play();
   });

   div2.progress(1).invalidate().play();
});

