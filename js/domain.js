/* ---- domain ---- */
const derive=c=>{c.out=c.exp+c.emi;c.sr=sr(c.inc,c.out);c.dti=dti(c.emi,c.inc);c.em=c.out?c.cash/c.out:0;c.nw=c.cash+c.invT-c.loan;
c.score=Math.round(cl(c.sr/30,0,1)*35+cl(1-c.dti/50,0,1)*25+cl(c.em/6,0,1)*25+cl(c.invT/(c.inc*6||1),0,1)*15);
c.risk=c.score<45||(c.credit>0&&c.credit<620)?'High':c.score<65?'Medium':'Low';c.seg=c.risk=='High'?'At Risk':c.eng<40?'Low Engagement':c.inc>=100000?'High Value':c.adopt>=75?'Digitally Active':'Growth Opportunity';return c};
const ms=u=>Object.keys(u.rec).sort();
function userC(u){const k=ms(u),r=k.length?u.rec[k[k.length-1]]:{inc:u.prof.income,exp:u.prof.expenses||0,inv:0,emi:0,oi:0,oe:0};
let cash=0,invT=0;k.forEach(x=>{cash+=+u.rec[x].sav;invT+=+u.rec[x].inv});
return derive({id:'YOU',name:u.name,age:+u.prof.age||0,city:u.prof.location,inc:+r.inc+ +r.oi,exp:+r.exp+ +r.oe,emi:+r.emi,cash,invT,invM:+r.inv,loan:+u.prof.loan||0,credit:+u.prof.credit||0,adopt:dscore(u)||+u.prof.adopt||0,eng:Math.min(100,k.length*12),ins:+X(u).ins||0,u,has:k.length>0})}
const ALLC=()=>Object.keys(users).map((k,i)=>{const c=userC(users[k]);c.id='ACC-'+(1001+i);return c}).filter(c=>c.has);
function agents(c){const dt=c.dti,hr=Math.max(0,.4*c.inc-c.emi);return[
['Financial Analyst',c.sr>=20?'ok':c.sr>=10?'warn':'bad',c.sr>=20?'Savings discipline is strong; keep it up.':'Raise savings toward 20% of income.',88,`Savings rate ${c.sr.toFixed(1)}% of income.`],
['Risk Agent',c.risk=='Low'?'ok':c.risk=='Medium'?'warn':'bad',c.risk=='High'?'Reduce debt load and build a buffer.':'Risk indicators are manageable.',82,`DTI ${dt.toFixed(0)}%, credit ${c.credit||'n/a'}, health ${c.score}.`],
['Investment Agent',c.invM>=c.inc*.1?'ok':'warn',c.invM>=c.inc*.1?'Investing regularly; review diversification.':`Start a SIP near ${R(c.inc*.1)}/month.`,76,`Investing ${R(c.invM)}/month vs 10% target.`],
['Loan Agent',dt<=35?'ok':dt<=50?'warn':'bad',dt<=50?`Headroom for about ${R(hr)} extra EMI.`:'Avoid new debt until DTI falls.',80,'Uses a 40% total-EMI guideline.'],
['Engagement Agent',c.eng>=60?'ok':'warn',c.eng>=60?'Engaged customer; offer relevant products.':'Re-engage with a personalised nudge.',72,`Engagement score ${c.eng}/100.`],
['Digital Adoption Agent',c.adopt>=70?'ok':'warn',c.adopt>=70?'High usage; introduce online investing.':'Promote UPI and app-based services.',78,c.adopt?`Digital adoption ${c.adopt}/100.`:'Digital usage not provided.']]}
const council=c=>{const inv=c.invM<c.inc*.1,risk=c.dti>35||(c.credit>0&&c.credit<650);return{h:c.score>=70?'Strong':c.score>=50?'Moderate':'Needs attention',o:inv?'Investment adoption is low relative to income.':'Diversify and grow existing investments.',r:risk?'Debt burden or credit score needs attention.':'No major risk indicator.',n:c.dti>40?'Pay down high-cost debt first.':c.em<3?'Build an emergency fund to 3-6 months.':inv?'Start a small monthly SIP.':'Review goals and rebalance.'}};
