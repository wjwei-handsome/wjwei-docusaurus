import{o as d,e as k,f as e,z as y,A as z,q as h,d as M,B as S,v as p,C as B,_ as P,D as H,E as D,c as C,a as R,G as $,H as A,I,J as U,K as E,L,M as j,N as q,O as F,P as O,s as W,Q as Z,R as G,g as i,l as u,t as J,n as w,i as N,S as V,T,m as K,U as Q,j as X,V as x,W as Y,X as ee,F as te,Y as se,Z as oe,$ as le,a0 as ae,a1 as ne,a2 as ie,a3 as re}from"./index-765607b2.js";import{N as ce}from"./NoteDisplay-85e3155c.js";import ue from"./DrawingControls-c4442d6d.js";const de={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_e=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),me=[_e];function ve(o,a){return d(),k("svg",de,me)}const pe={name:"carbon-renew",render:ve},he={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fe=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),ge=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[fe,ge];function xe(o,a){return d(),k("svg",he,we)}const ye={name:"carbon-time",render:xe},Se="/assets/logo-title-horizontal-96c3c915.png";function ke(){const o=y(Date.now()),a=z({interval:1e3}),_=h(()=>{const t=(a.value-o.value)/1e3,l=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${l}`});function m(){o.value=a.value}return{timer:_,resetTimer:m}}const be=M({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(o){const a=o,_=h(()=>{var t,l,s;return(s=(l=(t=S.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.note}),m=h(()=>{var t,l,s;return(s=(l=(t=S.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.noteHTML});return(t,l)=>(d(),p(ce,{class:B(a.class),note:_.value,"note-html":m.value},null,8,["class","note","note-html"]))}}),Ce=P(be,[["__file","/Users/wjwei/my-website/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=o=>(ae("data-v-62249bea"),o=o(),ne(),o),$e={class:"bg-main h-full slidev-presenter"},Ne={class:"grid-container"},Ve={class:"grid-section top flex"},Te=f(()=>e("img",{src:Se,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"}},null,-1)),Me=f(()=>e("div",{class:"flex-auto"},null,-1)),Be={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Pe=f(()=>e("div",{class:"context"}," current ",-1)),ze=f(()=>e("div",{class:"context"}," next ",-1)),He={class:"grid-section note overflow-auto"},De={class:"grid-section bottom"},Re={class:"progress-bar"},Ae=M({__name:"Presenter",setup(o){const a=y();H(),D(a);const _=C.titleTemplate.replace("%s",C.title||"Slidev");R({title:`Presenter - ${_}`});const{timer:m,resetTimer:t}=ke(),l=y([]),s=h(()=>$.value<A.value?{route:S.value,clicks:$.value+1}:I.value?{route:U.value,clicks:0}:null);return E(),L(()=>{const b=a.value.querySelector("#slide-content"),r=j(q()),g=F();O(()=>{if(!g.value||Z.value||!G.value)return;const c=b.getBoundingClientRect(),n=(r.x-c.left)/c.width*100,v=(r.y-c.top)/c.height*100;if(!(n<0||n>100||v<0||v>100))return{x:n,y:v}},c=>{W.cursor=c})}),(b,r)=>{const g=ye,c=pe;return d(),k(te,null,[e("div",$e,[e("div",Ne,[e("div",Ve,[Te,Me,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...n)=>i(t)&&i(t)(...n))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Be,J(i(m)),1)]),e("div",{ref_key:"main",ref:a,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:w(i(N))},[u(T,{key:"main",class:"h-full w-full"},{default:V(()=>[u(se,{"render-context":"presenter"})]),_:1}),Pe],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:w(i(N))},[s.value?(d(),p(T,{key:"next",class:"h-full w-full"},{default:V(()=>{var n;return[u(i(le),{is:(n=s.value.route)==null?void 0:n.component,"clicks-elements":l.value,"onUpdate:clicksElements":r[1]||(r[1]=v=>l.value=v),clicks:s.value.clicks,"clicks-disabled":!1,class:B(i(oe)(s.value.route)),route:s.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):K("v-if",!0),ze],4),e("div",He,[(d(),p(Ce,{key:2,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",De,[u(ie,{persist:!0})]),(d(),p(ue,{key:0}))]),e("div",Re,[e("div",{class:"progress h-2px bg-primary transition-all",style:w({width:`${(i(Q)-1)/(i(X)-1)*100}%`})},null,4)])]),u(re),u(ee,{modelValue:i(x),"onUpdate:modelValue":r[2]||(r[2]=n=>Y(x)?x.value=n:null)},null,8,["modelValue"])],64)}}});const Le=P(Ae,[["__scopeId","data-v-62249bea"],["__file","/Users/wjwei/my-website/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Le as default};
