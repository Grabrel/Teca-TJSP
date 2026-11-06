
(function(){
 'use strict';
 const $=id=>document.getElementById(id);
 const htmlEsc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let noiseCtx=null,noiseSrc=null,noiseGain=null,noiseOn=false;
 function getHelp(){try{return typeof window.tecaContextHelp==='function'?window.tecaContextHelp():{title:'Como usar',body:'Escolha uma das opções nesta página para começar.'}}catch(e){return {title:'Ajuda',body:'Use o menu para selecionar sua próxima atividade.'}}}
 function openHelp(){const obj=getHelp(),modal=$('teca-help-panel');$('teca-help-title').textContent=obj.title||'Como usar';$('teca-help-body').innerHTML=obj.body||'';modal.classList.add('open');modal.setAttribute('aria-hidden','false');$('teca-help-close').focus()}
 function closeHelp(){$('teca-help-panel').classList.remove('open');$('teca-help-panel').setAttribute('aria-hidden','true')}
 function setNoise(isOn){if(!isOn){if(noiseSrc){try{noiseSrc.stop()}catch(e){}noiseSrc.disconnect();noiseSrc=null}noiseOn=false;$('teca-audio').textContent='♫ Som ambiente';return}
 try{const AC=window.AudioContext||window.webkitAudioContext;if(!AC)throw Error('Sem suporte');noiseCtx=noiseCtx||new AC();noiseCtx.resume();let len=noiseCtx.sampleRate*3,b=noiseCtx.createBuffer(1,len,noiseCtx.sampleRate),d=b.getChannelData(0),last=0;for(let i=0;i<len;i++){let white=Math.random()*2-1;last=(last+0.02*white)/1.02;d[i]=last*3.5}noiseSrc=noiseCtx.createBufferSource();noiseSrc.buffer=b;noiseSrc.loop=true;noiseGain=noiseCtx.createGain();noiseGain.gain.value=.035;noiseSrc.connect(noiseGain).connect(noiseCtx.destination);noiseSrc.start();noiseOn=true;$('teca-audio').textContent='♫ Desligar som'}catch(e){alert('O navegador não permitiu iniciar o áudio.')}}
 function build(){let controls=document.createElement('nav');controls.className='teca-global';controls.setAttribute('aria-label','Navegação e ajuda da plataforma');controls.innerHTML='<a href="index.html" title="Ir ao painel inicial">⌂ Painel</a><button type="button" class="teca-question" id="teca-help-button" title="Ajuda desta página" aria-label="Ajuda desta página">?</button>'+(document.body.dataset.tecaAudio==='true'?'<button type="button" id="teca-audio">♫ Som ambiente</button>':'');document.body.appendChild(controls);
 let overlay=document.createElement('div');overlay.id='teca-help-panel';overlay.className='teca-overlay';overlay.setAttribute('aria-hidden','true');overlay.innerHTML='<section class="teca-modal" role="dialog" aria-modal="true" aria-labelledby="teca-help-title"><button id="teca-help-close" class="close" type="button" aria-label="Fechar ajuda">✕</button><h2 id="teca-help-title"></h2><div id="teca-help-body"></div></section>';document.body.appendChild(overlay);
 $('teca-help-button').onclick=openHelp;$('teca-help-close').onclick=closeHelp;overlay.addEventListener('click',e=>{if(e.target===overlay)closeHelp()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay.classList.contains('open'))closeHelp()});if($('teca-audio'))$('teca-audio').onclick=()=>setNoise(!noiseOn);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);else build();
 window.tecaOpenHelp=openHelp;
})();
