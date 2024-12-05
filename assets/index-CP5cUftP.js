import{o as te,aN as de,aO as fe,aP as _,ap as ve,aF as me,C as x,a5 as k,aQ as ne,aR as J,N as K,aS as ye,K as pe,aT as ge,J as be,aU as W,af as G,aV as H,B as X,g as R,aW as j,H as h,G as he,a3 as Ce,a4 as we,D as Q,aX as Ee,e as N,f as U,j as V,T as w,h as o,t as ke,w as E,l as q,S as Te,E as Me,V as Z,W as se,A as le,aY as Se,aZ as Be,ah as ae,aj as Ie,a_ as De,ar as ee,r as O,a$ as Le,b0 as Pe,b1 as Oe,O as Ae,X as Fe,b2 as oe,b3 as $e,an as Ne,I as ze,b4 as Ye,Q as Re,b5 as Xe,b6 as Ve,aE as He,R as We,b7 as je,a7 as Ue}from"./index-DC1_nRw7.js";import{g as _e}from"./index-BcRYV9xV.js";const Ke=(e,n,s,d)=>{let l={offsetX:0,offsetY:0};const r=u=>{const y=u.clientX,b=u.clientY,{offsetX:g,offsetY:v}=l,m=e.value.getBoundingClientRect(),C=m.left,c=m.top,A=m.width,T=m.height,z=document.documentElement.clientWidth,Y=document.documentElement.clientHeight,F=-C+g,M=-c+v,S=z-C-A+g,B=Y-c-T+v,I=t=>{let L=g+t.clientX-y,$=v+t.clientY-b;d!=null&&d.value||(L=Math.min(Math.max(L,F),S),$=Math.min(Math.max($,M),B)),l={offsetX:L,offsetY:$},e.value&&(e.value.style.transform=`translate(${_(L)}, ${_($)})`)},D=()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",D)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",D)},i=()=>{n.value&&e.value&&n.value.addEventListener("mousedown",r)},f=()=>{n.value&&e.value&&n.value.removeEventListener("mousedown",r)},a=()=>{l={offsetX:0,offsetY:0},e.value&&(e.value.style.transform="none")};return te(()=>{de(()=>{s.value?i():f()})}),fe(()=>{f()}),{resetPosition:a}},qe=(e,n={})=>{ve(e)||me("[useLockscreen]","You need to pass a ref param to this function");const s=n.ns||x("popup"),d=k(()=>s.bm("parent","hidden"));if(!ne||J(document.body,d.value))return;let l=0,r=!1,i="0";const f=()=>{setTimeout(()=>{typeof document>"u"||(be(document==null?void 0:document.body,d.value),r&&document&&(document.body.style.width=i))},200)};K(e,a=>{if(!a){f();return}r=!J(document.body,d.value),r&&(i=document.body.style.width),l=_e(s.namespace.value);const u=document.documentElement.clientHeight<document.body.scrollHeight,y=ye(document.body,"overflowY");l>0&&(u||y==="scroll")&&r&&(document.body.style.width=`calc(100% - ${l}px)`),pe(document.body,d.value)}),ge(()=>f())},ie=e=>{if(!e)return{onClick:W,onMousedown:W,onMouseup:W};let n=!1,s=!1;return{onClick:i=>{n&&s&&e(i),n=s=!1},onMousedown:i=>{n=i.target===i.currentTarget},onMouseup:i=>{s=i.target===i.currentTarget}}},Ze=G({mask:{type:Boolean,default:!0},customMaskEvent:Boolean,overlayClass:{type:H([String,Array,Object])},zIndex:{type:H([String,Number])}}),xe={click:e=>e instanceof MouseEvent},Ge="overlay";var Je=X({name:"ElOverlay",props:Ze,emits:xe,setup(e,{slots:n,emit:s}){const d=x(Ge),l=a=>{s("click",a)},{onClick:r,onMousedown:i,onMouseup:f}=ie(e.customMaskEvent?void 0:l);return()=>e.mask?R("div",{class:[d.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:r,onMousedown:i,onMouseup:f},[h(n,"default")],j.STYLE|j.CLASS|j.PROPS,["onClick","onMouseup","onMousedown"]):he("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[h(n,"default")])}});const Qe=Je,re=Symbol("dialogInjectionKey"),ue=G({center:Boolean,alignCenter:Boolean,closeIcon:{type:Ce},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),eo={close:()=>!0},oo=X({name:"ElDialogContent"}),to=X({...oo,props:ue,emits:eo,setup(e,{expose:n}){const s=e,{t:d}=we(),{Close:l}=Se,{dialogRef:r,headerRef:i,bodyId:f,ns:a,style:u}=Q(re),{focusTrapRef:y}=Q(Ee),b=k(()=>[a.b(),a.is("fullscreen",s.fullscreen),a.is("draggable",s.draggable),a.is("align-center",s.alignCenter),{[a.m("center")]:s.center}]),g=Be(y,r),v=k(()=>s.draggable),m=k(()=>s.overflow),{resetPosition:C}=Ke(r,i,v,m);return n({resetPosition:C}),(c,A)=>(N(),U("div",{ref:o(g),class:w(o(b)),style:se(o(u)),tabindex:"-1"},[V("header",{ref_key:"headerRef",ref:i,class:w([o(a).e("header"),{"show-close":c.showClose}])},[h(c.$slots,"header",{},()=>[V("span",{role:"heading","aria-level":c.ariaLevel,class:w(o(a).e("title"))},ke(c.title),11,["aria-level"])]),c.showClose?(N(),U("button",{key:0,"aria-label":o(d)("el.dialog.close"),class:w(o(a).e("headerbtn")),type:"button",onClick:T=>c.$emit("close")},[R(o(Me),{class:w(o(a).e("close"))},{default:E(()=>[(N(),q(Te(c.closeIcon||o(l))))]),_:1},8,["class"])],10,["aria-label","onClick"])):Z("v-if",!0)],2),V("div",{id:o(f),class:w(o(a).e("body"))},[h(c.$slots,"default")],10,["id"]),c.$slots.footer?(N(),U("footer",{key:0,class:w(o(a).e("footer"))},[h(c.$slots,"footer")],2)):Z("v-if",!0)],6))}});var no=le(to,[["__file","dialog-content.vue"]]);const so=G({...ue,appendToBody:Boolean,appendTo:{type:H([String,Object]),default:"body"},beforeClose:{type:H(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:Boolean,headerAriaLevel:{type:String,default:"2"}}),lo={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ae]:e=>Ie(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},ao=(e,n)=>{var s;const l=Fe().emit,{nextZIndex:r}=De();let i="";const f=ee(),a=ee(),u=O(!1),y=O(!1),b=O(!1),g=O((s=e.zIndex)!=null?s:r());let v,m;const C=Le("namespace",Pe),c=k(()=>{const p={},P=`--${C.value}-dialog`;return e.fullscreen||(e.top&&(p[`${P}-margin-top`]=e.top),e.width&&(p[`${P}-width`]=_(e.width))),p}),A=k(()=>e.alignCenter?{display:"flex"}:{});function T(){l("opened")}function z(){l("closed"),l(ae,!1),e.destroyOnClose&&(b.value=!1)}function Y(){l("close")}function F(){m==null||m(),v==null||v(),e.openDelay&&e.openDelay>0?{stop:v}=oe(()=>I(),e.openDelay):I()}function M(){v==null||v(),m==null||m(),e.closeDelay&&e.closeDelay>0?{stop:m}=oe(()=>D(),e.closeDelay):D()}function S(){function p(P){P||(y.value=!0,u.value=!1)}e.beforeClose?e.beforeClose(p):M()}function B(){e.closeOnClickModal&&S()}function I(){ne&&(u.value=!0)}function D(){u.value=!1}function t(){l("openAutoFocus")}function L(){l("closeAutoFocus")}function $(p){var P;((P=p.detail)==null?void 0:P.focusReason)==="pointer"&&p.preventDefault()}e.lockScroll&&qe(u);function ce(){e.closeOnPressEscape&&S()}return K(()=>e.modelValue,p=>{p?(y.value=!1,F(),b.value=!0,g.value=Oe(e.zIndex)?r():g.value++,Ae(()=>{l("open"),n.value&&(n.value.scrollTop=0)})):u.value&&M()}),K(()=>e.fullscreen,p=>{n.value&&(p?(i=n.value.style.transform,n.value.style.transform=""):n.value.style.transform=i)}),te(()=>{e.modelValue&&(u.value=!0,b.value=!0,F())}),{afterEnter:T,afterLeave:z,beforeLeave:Y,handleClose:S,onModalClick:B,close:M,doClose:D,onOpenAutoFocus:t,onCloseAutoFocus:L,onCloseRequested:ce,onFocusoutPrevented:$,titleId:f,bodyId:a,closed:y,style:c,overlayDialogStyle:A,rendered:b,visible:u,zIndex:g}},io=X({name:"ElDialog",inheritAttrs:!1}),ro=X({...io,props:so,emits:lo,setup(e,{expose:n}){const s=e,d=$e();Ne({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},k(()=>!!d.title));const l=x("dialog"),r=O(),i=O(),f=O(),{visible:a,titleId:u,bodyId:y,style:b,overlayDialogStyle:g,rendered:v,zIndex:m,afterEnter:C,afterLeave:c,beforeLeave:A,handleClose:T,onModalClick:z,onOpenAutoFocus:Y,onCloseAutoFocus:F,onCloseRequested:M,onFocusoutPrevented:S}=ao(s,r);ze(re,{dialogRef:r,headerRef:i,bodyId:y,ns:l,rendered:v,style:b});const B=ie(z),I=k(()=>s.draggable&&!s.fullscreen);return n({visible:a,dialogContentRef:f,resetPosition:()=>{var t;(t=f.value)==null||t.resetPosition()}}),(t,L)=>(N(),q(o(je),{to:t.appendTo,disabled:t.appendTo!=="body"?!1:!t.appendToBody},{default:E(()=>[R(Ye,{name:"dialog-fade",onAfterEnter:o(C),onAfterLeave:o(c),onBeforeLeave:o(A),persisted:""},{default:E(()=>[Re(R(o(Qe),{"custom-mask-event":"",mask:t.modal,"overlay-class":t.modalClass,"z-index":o(m)},{default:E(()=>[V("div",{role:"dialog","aria-modal":"true","aria-label":t.title||void 0,"aria-labelledby":t.title?void 0:o(u),"aria-describedby":o(y),class:w(`${o(l).namespace.value}-overlay-dialog`),style:se(o(g)),onClick:o(B).onClick,onMousedown:o(B).onMousedown,onMouseup:o(B).onMouseup},[R(o(Xe),{loop:"",trapped:o(a),"focus-start-el":"container",onFocusAfterTrapped:o(Y),onFocusAfterReleased:o(F),onFocusoutPrevented:o(S),onReleaseRequested:o(M)},{default:E(()=>[o(v)?(N(),q(no,Ve({key:0,ref_key:"dialogContentRef",ref:f},t.$attrs,{center:t.center,"align-center":t.alignCenter,"close-icon":t.closeIcon,draggable:o(I),overflow:t.overflow,fullscreen:t.fullscreen,"show-close":t.showClose,title:t.title,"aria-level":t.headerAriaLevel,onClose:o(T)}),He({header:E(()=>[t.$slots.title?h(t.$slots,"title",{key:1}):h(t.$slots,"header",{key:0,close:o(T),titleId:o(u),titleClass:o(l).e("title")})]),default:E(()=>[h(t.$slots,"default")]),_:2},[t.$slots.footer?{name:"footer",fn:E(()=>[h(t.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):Z("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,["aria-label","aria-labelledby","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["mask","overlay-class","z-index"]),[[We,o(a)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});var uo=le(ro,[["__file","dialog.vue"]]);const vo=Ue(uo);export{vo as E};