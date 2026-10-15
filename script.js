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
  document.querySelectorAll('form#email-form').forEach(form=>form.addEventListener('submit',async ev=>{
    ev.preventDefault();
    if(form.dataset.sending==='true'||!form.reportValidity())return;
    const status=form.querySelector('.form-status');
    const button=form.querySelector('[type="submit"]');
    const first=(form.querySelector('#sender-firstname')?.value||'').trim();
    const last=(form.querySelector('#sender-lastname')?.value||'').trim();
    const name=(first+' '+last).trim()||(form.querySelector('#sender-name')?.value||'').trim();
    const email=(form.querySelector('#sender-email')?.value||'').trim();
    const message=(form.querySelector('#sender-message')?.value||'').trim();
    const honeypot=form.querySelector('[name="_honey"]')?.value||'';
    status.textContent='Sending your message...';
    status.dataset.state='pending';
    form.dataset.sending='true';
    form.setAttribute('aria-busy','true');
    button.disabled=true;
    button.textContent='Sending...';
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),20000);
    try{
      const response=await fetch(form.action,{
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify({name,email,message,_subject:'Research website inquiry from '+name,_honey:honeypot}),
        signal:controller.signal
      });
      const result=await response.json();
      if(!response.ok||!(result.success===true||result.success==='true'))throw new Error('Submission failed');
      status.textContent='Thank you. Your message has been submitted.';
      status.dataset.state='success';
      form.reset();
    }catch(error){
      status.textContent=error.name==='AbortError'?'The request timed out. Your message is still here. Please try again or email en596624@ohio.edu directly.':'Your message could not be submitted. Please try again or email en596624@ohio.edu directly.';
      status.dataset.state='error';
    }finally{
      clearTimeout(timeout);
      form.dataset.sending='false';
      form.removeAttribute('aria-busy');
      button.disabled=false;
      button.textContent='Submit';
    }
  }));
});
