const $=s=>document.querySelector(s),LS={g(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},s(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const R=n=>'₹'+Math.round(n||0).toLocaleString('en-IN'),cl=(x,a,b)=>Math.max(a,Math.min(b,x)),MN=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const toast=(m,t)=>{const e=document.createElement('div');e.className='t '+(t||'');e.textContent=m;$('#toast').append(e);setTimeout(()=>e.remove(),3000)};
const emi=(P,r,n)=>{r/=1200;return r?P*r*(1+r)**n/((1+r)**n-1):P/n},dti=(d,i)=>i?d/i*100:0,sr=(i,o)=>i?(i-o)/i*100:0;
const DISC='MANSHORA provides educational and simulated financial insights. Recommendations are not guaranteed financial advice, loan approval, investment advice, or credit decisions.';
let users=LS.g('mz_u',{}),chat=[],MG={city:'',seg:'',risk:''},yr=new Date().getFullYear(),sel='',side=LS.g('mz_side',0);
const save=()=>LS.s('mz_u',users),me=()=>users[LS.g('mz_s','')];
const hash=async(p,e)=>{try{const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(e+':'+p));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}catch(x){return btoa(e+p)}};
const mkey=(y,m)=>y+'-'+String(m+1).padStart(2,'0');
