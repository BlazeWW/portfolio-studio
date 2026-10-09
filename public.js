/* Minimal visitor-only renderer; no builder, storage, editor or publisher. */
(()=>{'use strict';
const data=window.PORTFOLIO_DATA||{};
const $=id=>document.getElementById(id);
const text=(id,value)=>{const node=$(id);if(node)node.textContent=value||''};
const safeUrl=(url,fallback='#')=>{try{const str=String(url||'');if(/^data:image\/(?:png|jpeg|webp|gif|svg\+xml);base64,/i.test(str)||/^data:application\/pdf;base64,/i.test(str))return str;const u=new URL(str,location.href);return ['http:','https:','mailto:'].includes(u.protocol)?u.href:fallback}catch{return fallback}};
const cleanImage=src=>safeUrl(src,'');
const el=(tag,cls,content)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(content!==undefined)n.textContent=content;return n};
function draw(){
 document.body.dataset.motion=['subtle','expressive','off'].includes(data.motion)?data.motion:'subtle';
 const motionSelect=$('motionSelect');if(motionSelect)motionSelect.value=document.body.dataset.motion;
 const parts = data.name.trim().split(/\s+/); const first=parts[0] || 'There';
 document.title = `${data.name} — ${data.role} | Portfolio`;
 text('wordmark',parts.map(p=>p[0]||'').slice(0,2).join('').toUpperCase()+'.');
 text('availability',data.availability); text('heroName',first+'.');text('heroRole',data.role);text('tagline',data.tagline);text('location','⌖ '+data.location);text('aboutText',data.about);text('footerName','© '+new Date().getFullYear()+' '+data.name);
 $('avatar').src=cleanImage(data.avatar)||'assets/portrait.svg';$('avatar').alt=`Portrait of ${data.name}`;
 $('cvLink').href=safeUrl(data.resume,''); if(data.resume && !/^https?:/i.test(data.resume)) $('cvLink').setAttribute('download',''); else $('cvLink').removeAttribute('download');
 const projects=$('projects');projects.replaceChildren();
 (data.projects || []).forEach(item=>{const card=el('article','project');const photo=el('div','project-photo');const img=el('img');img.src=cleanImage(item.image)||'assets/project.svg';img.alt=item.title+' project preview';img.loading='lazy';img.onerror=()=>{img.onerror=null;img.src='assets/project.svg';};photo.append(img);const info=el('div','project-content'); info.append(el('div','project-category',[item.category,item.year].filter(Boolean).join(' · ')),el('h3','',item.title),el('p','',item.description));if(item.site||item.studio||item.tools){const metadata=el('div','project-metadata',[item.site,item.studio,item.tools].filter(Boolean).join(' · '));info.append(metadata)}if(item.process){const process=el('p','project-process','Process: '+item.process);info.append(process)}if(Array.isArray(item.gallery)&&item.gallery.length){const gallery=el('div','project-gallery');for(const path of item.gallery){const thumb=el('img');thumb.src=cleanImage(path)||'assets/project.svg';thumb.alt='Additional view of '+item.title;thumb.loading='lazy';thumb.tabIndex=0;thumb.setAttribute('role','button');thumb.setAttribute('aria-label','Enlarge '+item.title+' drawing');const show=()=>{const viewer=$('galleryViewer');$('galleryFull').src=thumb.src;$('galleryFull').alt=thumb.alt;viewer.showModal()};thumb.addEventListener('click',show);thumb.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show()}});gallery.append(thumb)}info.append(gallery)}if(item.link&&safeUrl(item.link,'')){const a=el('a','project-link','View project ↗');a.href=safeUrl(item.link,'');a.target='_blank';a.rel='noopener noreferrer';info.append(a)}card.append(photo,info);if(!projects.childElementCount){const ribbon=el('span','featured-ribbon','✦ Featured project');card.append(ribbon)}projects.append(card)});
 const skills=$('skills');skills.replaceChildren();(data.skills||[]).forEach(s=>skills.append(el('span','chip',s)));
 for (const [container,key,heading,secondary] of [['experience','experience','role','company'],['education','education','degree','institution']]){const parent=$(container);parent.replaceChildren();(data[key]||[]).forEach(item=>{const box=el('article','resume-item');box.append(el('div','resume-period',item.period),el('h4','',item[heading]),el('strong','',item[secondary]));if(item.description)box.append(el('p','',item.description));parent.append(box)})}
 $('emailLink').textContent=(data.email||'')+' ↗';$('emailLink').href=data.email?safeUrl('mailto:'+data.email,''):'';
 document.dispatchEvent(new Event('portfolio-rendered'));
 const socials=$('socials');socials.replaceChildren();for(const [label,value] of [['Website',data.website],['LinkedIn',data.linkedin],['GitHub',data.github],['Phone',data.phone]]){if(!value)continue;const a=el('a','',label+' ↗');a.href=label==='Phone'?'tel:'+value.replace(/[^+\d]/g,''):safeUrl(value,'');if(!a.href||a.getAttribute('href')==='#')continue;if(label!=='Phone'){a.target='_blank';a.rel='noopener noreferrer'}socials.append(a)}
}

const course=(window.PORTFOLIO_COURSES||[]).find(c=>c.theme===data.theme);
document.body.dataset.theme=data.theme||'aurora';document.body.dataset.layout=course?.layout||data.layout||'';
if(data.accent)document.body.style.setProperty('--accent',data.accent);
if(data.cornerRadius!==undefined)document.body.style.setProperty('--radius',String(data.cornerRadius)+'px');
const order=data.sectionOrder||['home','work','about','resume','contact'];
const main=$('main');main.style.display='flex';main.style.flexDirection='column';
for(const id of ['home','work','about','resume','contact']){const section=$(id);section.style.order=String(order.indexOf(id)+1);section.hidden=(data.hiddenSections||[]).includes(id)}
draw();
})();
