// Interacciones simples de la página
// corazones, modo Umbreon y easter egg

    function togglePoke(card){card.classList.toggle('open');}

    const loveBtn=document.getElementById('loveBtn');
    loveBtn.addEventListener('click',(e)=>{
      const icons=['♡','♥','✦','🌙'];
      for(let i=0;i<19;i++){
        const heart=document.createElement('span');
        heart.className='heart';
        heart.textContent=icons[Math.floor(Math.random()*icons.length)];
        heart.style.left=(e.clientX+(Math.random()*130-65))+'px';
        heart.style.top=(e.clientY+(Math.random()*30-15))+'px';
        heart.style.animationDelay=(Math.random()*.3)+'s';
        heart.style.fontSize=(14+Math.random()*18)+'px';
        document.body.appendChild(heart);
        setTimeout(()=>heart.remove(),1900);
      }
    });

    const nightBtn=document.getElementById('nightBtn');
    nightBtn.addEventListener('click',()=>{
      document.body.classList.toggle('night-mode');
      const active=document.body.classList.contains('night-mode');
      nightBtn.textContent=active?'volver al beige ☀':'activar modo Umbreon 🌙';
    });

    let umbreonClicks=0;
    const badge=document.getElementById('umbreonBadge');
    const toast=document.getElementById('secretToast');
    badge.addEventListener('click',()=>{
      umbreonClicks++;
      badge.animate([
        {transform:'rotate(0deg) scale(1)'},
        {transform:'rotate(-3deg) scale(1.04)'},
        {transform:'rotate(3deg) scale(1.04)'},
        {transform:'rotate(0deg) scale(1)'}
      ],{duration:350});
      if(umbreonClicks===3){
        toast.classList.add('show');
        setTimeout(()=>toast.classList.remove('show'),3600);
        umbreonClicks=0;
      }
    });