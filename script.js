document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.navlinks');
  if(toggle&&nav){
    function setOpen(open){toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close site navigation menu':'Open site navigation menu');nav.classList.toggle('open',open);}
    toggle.addEventListener('click',()=>setOpen(toggle.getAttribute('aria-expanded')!=='true'));
    document.addEventListener('click',ev=>{if(!toggle.contains(ev.target)&&!nav.contains(ev.target))setOpen(false)});
    document.addEventListener('keydown',ev=>{if(ev.key==='Escape'){setOpen(false);toggle.focus()}});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
  }
  document.querySelectorAll('form#email-form').forEach(form=>form.addEventListener('submit',ev=>{
    ev.preventDefault(); if(!form.reportValidity())return;
    const first=(form.querySelector('#sender-firstname')?.value||'').trim();
    const last=(form.querySelector('#sender-lastname')?.value||'').trim();
    const name=(first+' '+last).trim()||(form.querySelector('#sender-name')?.value||'').trim();
    const email=(form.querySelector('#sender-email')?.value||'').trim();
    const msg=(form.querySelector('#sender-message')?.value||'').trim();
    const subject=encodeURIComponent('Research website inquiry from '+name);
    const body=encodeURIComponent('From: '+name+' ('+email+')\n\n'+msg);
    window.location.href='mailto:en596624@ohio.edu?subject='+subject+'&body='+body;
  }));
});