(() => {
'use strict';
const defaults = structuredClone(window.PORTFOLIO_DATA);
const architectureSample = {name:'Sam Nkosi',role:'Architecture Student · Selected Works',location:'Bloemfontein, South Africa',tagline:'Designing thoughtful places through drawing, research, making and material experimentation.',about:'I am an architecture student exploring climate-responsive spaces, inclusive public places and adaptive reuse. My process moves from site investigation and hand sketches to drawings, physical models and spatial visualisations.',email:'sam.architecture@example.com',phone:'',website:'',linkedin:'',github:'',avatar:'assets/architecture-profile.svg',resume:'assets/cv-placeholder.txt',availability:'Seeking architectural internships and studio opportunities',skills:['Site analysis','Architectural drawing','Concept development','Physical model making','AutoCAD','Revit','SketchUp','Rhino','Adobe InDesign','Sustainable design'],experience:[{role:'Design Studio Participant',company:'University architecture studio',period:'2025 – 2026',description:'Worked collaboratively on site research, concept iterations and project presentations.'}],education:[{degree:'Bachelor of Architectural Studies (in progress)',institution:'Example University · Replace with your institution',period:'2024 – Present'}],projects:[{title:'The Civic Courtyard',category:'Public Architecture · Studio 03',year:'2026',site:'Bloemfontein, Free State',studio:'Third-year design studio',tools:'Revit · SketchUp · InDesign',process:'Site mapping → pedestrian circulation → massing studies → courtyard daylight and passive cooling.',description:'A neighbourhood learning and gathering space organised around shaded courtyards and an accessible public spine.',image:'assets/architecture-civic.svg',gallery:['assets/architecture-civic.svg','assets/architecture-plan.svg','assets/architecture-model.svg'],link:''},{title:'House of Light',category:'Residential Architecture · Studio 02',year:'2025',site:'South Africa · hypothetical site',studio:'Second-year residential studio',tools:'AutoCAD · Rhino · Photoshop',process:'Solar orientation → sectional studies → iterative façade tests → final presentation board.',description:'A compact dwelling centred on daylight, privacy and natural ventilation.',image:'assets/architecture-house.svg',gallery:['assets/architecture-house.svg','assets/architecture-plan.svg'],link:''},{title:'Material & Form',category:'Model Making · Workshop',year:'2025',site:'Design workshop',studio:'Materials experimentation',tools:'Cardboard · Basswood · Photography',process:'Material trials → structural iterations → model photography → reflection.',description:'A series of physical form-finding studies investigating structure, repetition and enclosure.',image:'assets/architecture-model.svg',gallery:['assets/architecture-model.svg'],link:''}]};
let data = structuredClone(defaults);
const $ = id => document.getElementById(id);
const text = (id,value) => { $(id).textContent = value || ''; };
const safeUrl = (url, fallback = '#') => { try { const u = new URL(String(url || ''), location.href); return ['http:','https:','mailto:'].includes(u.protocol) ? u.href : fallback; } catch { return fallback; } };
const cleanImage = src => safeUrl(src, '');
const el = (tag, cls, content) => { const n=document.createElement(tag); if(cls)n.className=cls; if(content!==undefined)n.textContent=content; return n; };
function draw(){
 document.body.dataset.motion=['subtle','expressive','off'].includes(data.motion)?data.motion:'subtle';
 const motionSelect=$('motionSelect');if(motionSelect)motionSelect.value=document.body.dataset.motion;
 const parts = data.name.trim().split(/\s+/); const first=parts[0] || 'There';
 document.title = `${data.name} — ${data.role} | Portfolio`;
 text('wordmark',parts.map(p=>p[0]||'').slice(0,2).join('').toUpperCase()+'.');
 text('availability',data.availability); text('heroName',first+'.');text('heroRole',data.role);text('tagline',data.tagline);text('location','⌖ '+data.location);text('aboutText',data.about);text('footerName','© '+new Date().getFullYear()+' '+data.name);
 $('avatar').src=cleanImage(data.avatar)||'assets/portrait.svg';$('avatar').alt=`Portrait of ${data.name}`;
 $('cvLink').href=safeUrl(data.resume); if(data.resume && !/^https?:/i.test(data.resume)) $('cvLink').setAttribute('download',''); else $('cvLink').removeAttribute('download');
 const projects=$('projects');projects.replaceChildren();
 (data.projects || []).forEach(item=>{const card=el('article','project');const photo=el('div','project-photo');const img=el('img');img.src=cleanImage(item.image)||'assets/project.svg';img.alt=item.title+' project preview';img.loading='lazy';img.onerror=()=>{img.onerror=null;img.src='assets/project.svg';};photo.append(img);const info=el('div','project-content'); info.append(el('div','project-category',[item.category,item.year].filter(Boolean).join(' · ')),el('h3','',item.title),el('p','',item.description));if(item.site||item.studio||item.tools){const metadata=el('div','project-metadata',[item.site,item.studio,item.tools].filter(Boolean).join(' · '));info.append(metadata)}if(item.process){const process=el('p','project-process','Process: '+item.process);info.append(process)}if(Array.isArray(item.gallery)&&item.gallery.length){const gallery=el('div','project-gallery');for(const path of item.gallery){const thumb=el('img');thumb.src=cleanImage(path)||'assets/project.svg';thumb.alt='Additional view of '+item.title;thumb.loading='lazy';thumb.tabIndex=0;thumb.setAttribute('role','button');thumb.setAttribute('aria-label','Enlarge '+item.title+' drawing');const show=()=>{const viewer=$('galleryViewer');$('galleryFull').src=thumb.src;$('galleryFull').alt=thumb.alt;viewer.showModal()};thumb.addEventListener('click',show);thumb.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show()}});gallery.append(thumb)}info.append(gallery)}if(item.link){const a=el('a','project-link','View project ↗');a.href=safeUrl(item.link);a.target='_blank';a.rel='noopener noreferrer';info.append(a)}card.append(photo,info);if(!projects.childElementCount){const ribbon=el('span','featured-ribbon','✦ Featured project');card.append(ribbon)}projects.append(card)});
 const skills=$('skills');skills.replaceChildren();(data.skills||[]).forEach(s=>skills.append(el('span','chip',s)));
 for (const [container,key,heading,secondary] of [['experience','experience','role','company'],['education','education','degree','institution']]){const parent=$(container);parent.replaceChildren();(data[key]||[]).forEach(item=>{const box=el('article','resume-item');box.append(el('div','resume-period',item.period),el('h4','',item[heading]),el('strong','',item[secondary]));if(item.description)box.append(el('p','',item.description));parent.append(box)})}
 $('emailLink').textContent=data.email+' ↗';$('emailLink').href=safeUrl('mailto:'+data.email);
 document.dispatchEvent(new Event('portfolio-rendered'));
 const socials=$('socials');socials.replaceChildren();for(const [label,value] of [['Website',data.website],['LinkedIn',data.linkedin],['GitHub',data.github],['Phone',data.phone]]){if(!value)continue;const a=el('a','',label+' ↗');a.href=label==='Phone'?'tel:'+value.replace(/[^+\d]/g,''):safeUrl(value);if(label!=='Phone'){a.target='_blank';a.rel='noopener noreferrer'}socials.append(a)}
}
const fields=[['name','Full name'],['role','Professional title'],['tagline','Tagline','full'],['location','Location'],['availability','Availability'],['about','About me','full','textarea'],['email','Email'],['phone','Phone'],['website','Website URL'],['linkedin','LinkedIn URL'],['github','GitHub URL'],['avatar','Portrait URL or image path','full'],['resume','CV PDF path or URL','full']];
function buildEditor(){const holder=$('editorFields');holder.replaceChildren();fields.forEach(([key,label,span,type])=>{const l=el('label',span==='full'?'full':'',label);const input=el(type==='textarea'?'textarea':'input');input.id='edit_'+key;input.value=data[key]||'';input.addEventListener('input',()=>{data[key]=input.value;draw();markDirty()});l.append(input);holder.append(l)});$('editSkills').value=(data.skills||[]).join('\n');$('editExperience').value=JSON.stringify(data.experience,null,2);$('editEducation').value=JSON.stringify(data.education,null,2);drawProjects();}
function inputFor(key,value,callback,full=false){const label=el('label',full?'full':'',key[0].toUpperCase()+key.slice(1));const field=el('input');field.value=value||'';field.addEventListener('input',()=>callback(field.value));label.append(field);return label}
function drawProjects(){const holder=$('editProjects');holder.replaceChildren();data.projects.forEach((p,i)=>{const box=el('div','edit-project');const row=el('div','project-fields');for(const key of ['title','category','year','description','image','link','site','studio','tools','process','gallery'])row.append(inputFor(key,key==='gallery'?(p.gallery||[]).join(' | '):p[key],v=>{p[key]=key==='gallery'?v.split('|').map(s=>s.trim()).filter(Boolean):v;draw();markDirty()},['description','image','link','site','studio','tools','process','gallery'].includes(key)));box.append(row);const remove=el('button','remove-project','Remove project');remove.type='button';remove.addEventListener('click',()=>{data.projects.splice(i,1);drawProjects();draw();markDirty()});box.append(remove);holder.append(box)})}
window.addEventListener('portfolio-motion-change',e=>{data.motion=e.detail;markDirty()});
function markDirty(){text('saveStatus','● Unpublished changes')}
$('theme').addEventListener('change',e=>{applyTheme(e.target.value);markDirty()});
const savedTheme=defaults.theme || 'aurora'; // Published portfolio wins over a previous visitor's local preference.
function applyTheme(theme){const course=(window.PORTFOLIO_COURSES||[]).find(c=>c.theme===theme);const allowed=['aurora','editorial','terminal','playful','architecture'].includes(theme)||!!course;if(!allowed)return;document.body.dataset.theme=theme;document.body.dataset.layout=course?.layout || '';if(!$('theme').querySelector('option[value="'+CSS.escape(theme)+'"]')){const opt=new Option(course?.name||theme,theme);opt.dataset.courseTheme='';$('theme').append(opt)}$('theme').value=theme;data.theme=theme;}
applyTheme(savedTheme);
const qualificationCatalog = window.PORTFOLIO_COURSES || [];
const coursePicker = $('course');
const groups = {};
for (const course of qualificationCatalog){
  const key = course.level+' / '+course.area;
  if(!groups[key]){groups[key]=document.createElement('optgroup');groups[key].label=key;coursePicker.append(groups[key]);}
  const opt=document.createElement('option');opt.value=course.id;opt.textContent=course.name;groups[key].append(opt);
  const themeOption=new Option('CTU · '+course.name,course.theme);themeOption.dataset.courseTheme='';$('theme').append(themeOption);
}
function makeCourseSample(course){
  const name='Alex Student';
  const areaDescription={
    'IT & Software':'I develop practical technical solutions, document my approach, and test ideas through coursework and self-directed experiments.',
    'Design & Architecture':'I explore visual and spatial ideas through research, sketches, prototypes and considered presentations.',
    'Business & Management':'I bring structure to complex problems through planning, communication, analysis and measurable outcomes.',
    'Engineering & Technical':'I develop technical solutions through accurate documentation, modelling, testing and iterative design.',
    'Education & Sustainability':'I explore practical ways to support people, communities and the environment through evidence-based projects.'
  };
  const sample=structuredClone(defaults);
  Object.assign(sample,{
    name,role:course.name+' · Student Portfolio',location:'Bloemfontein, South Africa',
    tagline:'Projects, evidence of learning and career ambitions in '+course.name+'.',
    about:areaDescription[course.area]+' This is illustrative starter text. Replace it with your real experience and explain your contribution to each project.',
    availability:'Open to internships, workplace experience and graduate opportunities',
    skills:[...course.skills],email:'student@example.com',phone:'',linkedin:'',github:'',website:'',
    avatar:course.theme==='architecture'?'assets/architecture-profile.svg':'assets/portrait.svg',
    resume:'assets/cv-placeholder.txt',courseId:course.id,theme:course.theme,
    experience:[{role:'Student Project Contributor',company:'Example coursework (replace this)',period:'2026',description:'Add the real learning outcomes, your individual responsibilities, and links to evidence.'}],
    education:[{degree:course.name+' (in progress — example)',institution:'CTU Training Solutions — confirm your campus and enrolment',period:'Add your actual dates'}],
    projects:course.projects.map((title,i)=>({title,category:course.area+' · Example Project '+(i+1),year:'Example',description:'Illustrative coursework idea only — replace with your actual project objectives, your contribution, process, results and evidence.',image:course.theme==='architecture'?(['assets/architecture-civic.svg','assets/architecture-plan.svg','assets/architecture-model.svg'][i]):'assets/project.svg',tools:course.skills.slice(0,3).join(' · '),process:'Problem → planning → development → testing → reflection',gallery:[],link:''}))
  });
  if(course.level==='Legacy NATED')sample.about+=' Note: this is a legacy engineering qualification; verify continuation eligibility with CTU.';
  return sample;
}
$('loadCourse').addEventListener('click',()=>{
  const course=qualificationCatalog.find(c=>c.id===coursePicker.value);
  if(!course){alert('Choose a course first.');coursePicker.focus();return;}
  if(!confirm('Load an illustrative '+course.name+' portfolio? This replaces unpublished changes in the preview.'))return;
  data=makeCourseSample(course);applyTheme(course.theme);draw();markDirty();
});
$('closeGallery').addEventListener('click',()=>$('galleryViewer').close());$('galleryViewer').addEventListener('click',e=>{if(e.target===$('galleryViewer'))$('galleryViewer').close()});
$('editBtn').addEventListener('click',()=>{buildEditor();$('editor').showModal()});$('closeEditor').addEventListener('click',()=>$('editor').close());$('editor').addEventListener('click',e=>{if(e.target===$('editor'))$('editor').close()});
$('editSkills').addEventListener('input',e=>{data.skills=e.target.value.split('\n').map(x=>x.trim()).filter(Boolean);draw();markDirty()});
for (const key of ['experience','education'])$('edit'+key[0].toUpperCase()+key.slice(1)).addEventListener('change',e=>{try{const value=JSON.parse(e.target.value);if(!Array.isArray(value))throw Error('Expected an array');data[key]=value;draw();markDirty();text('saveStatus','✓ '+key+' updated')}catch(err){text('saveStatus','⚠ Invalid '+key+' JSON: '+err.message)}});
$('addProject').addEventListener('click',()=>{data.projects.push({title:'New project',category:'Portfolio',year:String(new Date().getFullYear()),description:'Describe your work.',image:'assets/project.svg',link:''});drawProjects();draw();markDirty()});
$('resetEditor').addEventListener('click',()=>{if(!confirm('Reset all current edits to the sample content?'))return;data=structuredClone(defaults);applyTheme(data.theme);buildEditor();draw();text('saveStatus','Demo content restored')});
$('exportData').addEventListener('click',()=>{for(const key of ['experience','education']){try{const raw=$('edit'+key[0].toUpperCase()+key.slice(1)).value;const val=JSON.parse(raw);if(!Array.isArray(val))throw Error('Expected an array');data[key]=val}catch(err){alert('Fix the '+key+' JSON before exporting: '+err.message);return}}const content='/* Portfolio Studio: generated content. Upload this file to your GitHub repository root. */\nwindow.PORTFOLIO_DATA = '+JSON.stringify(data,null,2)+';\n';const blob=new Blob([content],{type:'text/javascript;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='data.js';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);text('saveStatus','✓ Exported data.js — upload it to GitHub to publish')});
$('importData').addEventListener('change',async e=>{const file=e.target.files?.[0];if(!file)return;const raw=await file.text();try{let parsed;if(file.name.endsWith('.json'))parsed=JSON.parse(raw);else{const match=raw.match(/window\.PORTFOLIO_DATA\s*=\s*([\s\S]*);\s*$/);if(!match)throw Error('File does not contain PORTFOLIO_DATA');parsed=JSON.parse(match[1])}if(!parsed||typeof parsed.name!=='string'||!Array.isArray(parsed.projects)||!Array.isArray(parsed.skills))throw Error('Missing profile fields');data={...structuredClone(defaults),...parsed};if(data.theme)applyTheme(data.theme);buildEditor();draw();markDirty();text('saveStatus','✓ Imported — export to save')}catch(err){text('saveStatus','⚠ Import failed: '+err.message)}e.target.value=''});
draw();
})();
