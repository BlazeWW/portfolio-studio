/* Motion is optional progressive enhancement. Exported profile settings control the published site. */
(()=>{
 'use strict';
 const modes=['subtle','expressive','off'];
 const selector=document.getElementById('motionSelect');
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
 let observer;
 function sync(){
   const value=window.Studio?.get()?.motion ?? window.PORTFOLIO_DATA?.motion;const mode=modes.includes(value)?value:'subtle';
   document.body.dataset.motion=mode;
   if(selector)selector.value=mode;
   refresh();
 }
 function refresh(){
   if(observer)observer.disconnect();
   const nodes=[...document.querySelectorAll('.section-heading,.about-grid>*,.project,.resume-item,.chip,.contact-inner>*')];
   const disabled=document.body.dataset.motion==='off'||reduce.matches||!('IntersectionObserver' in window);
   for(const node of nodes){node.classList.add('reveal');node.classList.remove('is-visible');node.style.removeProperty('--reveal-delay')}
   if(disabled){nodes.forEach(n=>n.classList.add('is-visible'));return}
   observer=new IntersectionObserver((entries)=>{for(const e of entries){if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}}},{threshold:0.08,rootMargin:'0px 0px 40px 0px'});
   nodes.forEach((node,i)=>{node.style.setProperty('--reveal-delay',((i%3)*65)+'ms');observer.observe(node)});
 }
 if(selector)selector.addEventListener('change',()=>{
   document.body.dataset.motion=selector.value;
   // app.js owns the editable data; an app event ensures export and import stay in sync.
   window.dispatchEvent(new CustomEvent('portfolio-motion-change',{detail:selector.value}));
   refresh();
 });
 if(reduce.addEventListener)reduce.addEventListener('change',refresh);
 // App redraws after editing/course selection; observe newly-created cards.
 document.addEventListener('portfolio-rendered',refresh);
 document.addEventListener('portfolio-motion-sync',sync);
 sync();
 document.body.classList.add('motion-ready');
})();
