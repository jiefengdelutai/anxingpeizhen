import{x as se,a as G,y as xe,z as Se,A as le,B as ce,C as Z,D as V,G as pe,H as ke,I as X,r as w,J as oe,K as Ae,L as Ie,E as Te,M as Be,N as B,O as de,P as Le,c as z,Q as te,R as ne,e as I,f as _,j as H,l as R,w as S,S as $e,T as $,U as M,V as J,g as E,W as Oe,F as he,k as Ce,X as ve,Y as ze,Z as Me,$ as ge,o as me,a0 as Fe,a1 as _e,a2 as F,a3 as Pe,a4 as qe,a5 as je,a6 as Re,t as He,a7 as Ue,_ as Ve,u as We,a8 as Ye,h as ye,i as ae,a9 as Ge,aa as Je,ab as Qe,p as Xe,q as Ze,s as et,v as tt}from"./index-DC1_nRw7.js";import{f as nt,s as ot,E as at,b as st,c as dt}from"./index-BcRYV9xV.js";import{E as rt}from"./index-CP5cUftP.js";const U="$treeNodeId",Ne=function(t,e){!e||e[U]||Object.defineProperty(e,U,{value:t.id,enumerable:!1,configurable:!1,writable:!1})},ue=function(t,e){return t?e[t]:e[U]},re=(t,e,n)=>{const o=t.value.currentNode;n();const a=t.value.currentNode;o!==a&&e("current-change",a?a.data:null,a)},ie=t=>{let e=!0,n=!0,o=!0;for(let a=0,s=t.length;a<s;a++){const d=t[a];(d.checked!==!0||d.indeterminate)&&(e=!1,d.disabled||(o=!1)),(d.checked!==!1||d.indeterminate)&&(n=!1)}return{all:e,none:n,allWithoutDisable:o,half:!e&&!n}},Q=function(t){if(t.childNodes.length===0||t.loading)return;const{all:e,none:n,half:o}=ie(t.childNodes);e?(t.checked=!0,t.indeterminate=!1):o?(t.checked=!1,t.indeterminate=!0):n&&(t.checked=!1,t.indeterminate=!1);const a=t.parent;!a||a.level===0||t.store.checkStrictly||Q(a)},ee=function(t,e){const n=t.store.props,o=t.data||{},a=n[e];if(typeof a=="function")return a(o,t);if(typeof a=="string")return o[a];if(typeof a>"u"){const s=o[e];return s===void 0?"":s}};let it=0;class P{constructor(e){this.id=it++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const n in e)se(e,n)&&(this[n]=e[n]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const n=e.props;if(n&&typeof n.isLeaf<"u"){const s=ee(this,"isLeaf");typeof s=="boolean"&&(this.isLeafByUser=s)}if(e.lazy!==!0&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&!this.isLeafByUser&&this.expand(),Array.isArray(this.data)||Ne(this,this.data),!this.data)return;const o=e.defaultExpandedKeys,a=e.key;a&&o&&o.includes(this.key)&&this.expand(null,e.autoExpandParent),a&&e.currentNodeKey!==void 0&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(e){Array.isArray(e)||Ne(this,e),this.data=e,this.childNodes=[];let n;this.level===0&&Array.isArray(this.data)?n=this.data:n=ee(this,"children")||[];for(let o=0,a=n.length;o<a;o++)this.insertChild({data:n[o]})}get label(){return ee(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return ee(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return e.childNodes[n+1]}return null}get previousSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return n>0?e.childNodes[n-1]:null}return null}contains(e,n=!0){return(this.childNodes||[]).some(o=>o===e||n&&o.contains(e))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,n,o){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof P)){if(!o){const a=this.getChildren(!0);a.includes(e.data)||(typeof n>"u"||n<0?a.push(e.data):a.splice(n,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=G(new P(e)),e instanceof P&&e.initialize()}e.level=this.level+1,typeof n>"u"||n<0?this.childNodes.push(e):this.childNodes.splice(n,0,e),this.updateLeafState()}insertBefore(e,n){let o;n&&(o=this.childNodes.indexOf(n)),this.insertChild(e,o)}insertAfter(e,n){let o;n&&(o=this.childNodes.indexOf(n),o!==-1&&(o+=1)),this.insertChild(e,o)}removeChild(e){const n=this.getChildren()||[],o=n.indexOf(e.data);o>-1&&n.splice(o,1);const a=this.childNodes.indexOf(e);a>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(a,1)),this.updateLeafState()}removeChildByData(e){let n=null;for(let o=0;o<this.childNodes.length;o++)if(this.childNodes[o].data===e){n=this.childNodes[o];break}n&&this.removeChild(n)}expand(e,n){const o=()=>{if(n){let a=this.parent;for(;a.level>0;)a.expanded=!0,a=a.parent}this.expanded=!0,e&&e(),this.childNodes.forEach(a=>{a.canFocus=!0})};this.shouldLoadData()?this.loadData(a=>{Array.isArray(a)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||Q(this),o())}):o()}doCreateChildren(e,n={}){e.forEach(o=>{this.insertChild(Object.assign({data:o},n),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(e=>{e.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const e=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!e||e.length===0;return}this.isLeaf=!1}setChecked(e,n,o,a){if(this.indeterminate=e==="half",this.checked=e===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:d,allWithoutDisable:r}=ie(this.childNodes);!this.isLeaf&&!d&&r&&(this.checked=!1,e=!1);const f=()=>{if(n){const y=this.childNodes;for(let h=0,p=y.length;h<p;h++){const N=y[h];a=a||e!==!1;const m=N.disabled?N.checked:a;N.setChecked(m,n,!0,a)}const{half:l,all:c}=ie(y);c||(this.checked=c,this.indeterminate=l)}};if(this.shouldLoadData()){this.loadData(()=>{f(),Q(this)},{checked:e!==!1});return}else f()}const s=this.parent;!s||s.level===0||o||Q(s)}getChildren(e=!1){if(this.level===0)return this.data;const n=this.data;if(!n)return null;const o=this.store.props;let a="children";return o&&(a=o.children||"children"),n[a]===void 0&&(n[a]=null),e&&!n[a]&&(n[a]=[]),n[a]}updateChildren(){const e=this.getChildren()||[],n=this.childNodes.map(s=>s.data),o={},a=[];e.forEach((s,d)=>{const r=s[U];!!r&&n.findIndex(y=>y[U]===r)>=0?o[r]={index:d,data:s}:a.push({index:d,data:s})}),this.store.lazy||n.forEach(s=>{o[s[U]]||this.removeChildByData(s)}),a.forEach(({index:s,data:d})=>{this.insertChild({data:d},s)}),this.updateLeafState()}loadData(e,n={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(n).length)){this.loading=!0;const o=s=>{this.childNodes=[],this.doCreateChildren(s,n),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,s)},a=()=>{this.loading=!1};this.store.load(this,o,a)}else e&&e.call(this)}eachNode(e){const n=[this];for(;n.length;){const o=n.shift();n.unshift(...o.childNodes),e(o)}}reInitChecked(){this.store.checkStrictly||Q(this)}}class lt{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const n in e)se(e,n)&&(this[n]=e[n]);this.nodesMap={}}initialize(){if(this.root=new P({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,n=>{this.root.doCreateChildren(n),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const n=this.filterNodeMethod,o=this.lazy,a=function(s){const d=s.root?s.root.childNodes:s.childNodes;if(d.forEach(r=>{r.visible=n.call(r,e,r.data,r),a(r)}),!s.visible&&d.length){let r=!0;r=!d.some(f=>f.visible),s.root?s.root.visible=r===!1:s.visible=r===!1}e&&s.visible&&!s.isLeaf&&(!o||s.loaded)&&s.expand()};a(this)}setData(e){e!==this.root.data?(this.nodesMap={},this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof P)return e;const n=xe(e)?ue(this.key,e):e;return this.nodesMap[n]||null}insertBefore(e,n){const o=this.getNode(n);o.parent.insertBefore({data:e},o)}insertAfter(e,n){const o=this.getNode(n);o.parent.insertAfter({data:e},o)}remove(e){const n=this.getNode(e);n&&n.parent&&(n===this.currentNode&&(this.currentNode=null),n.parent.removeChild(n))}append(e,n){const o=Se(n)?this.root:this.getNode(n);o&&o.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],n=this.nodesMap;e.forEach(o=>{const a=n[o];a&&a.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const n=this.key;!e||!e.data||(n?e.key!==void 0&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}deregisterNode(e){!this.key||!e||!e.data||(e.childNodes.forEach(o=>{this.deregisterNode(o)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,n=!1){const o=[],a=function(s){(s.root?s.root.childNodes:s.childNodes).forEach(r=>{(r.checked||n&&r.indeterminate)&&(!e||e&&r.isLeaf)&&o.push(r.data),a(r)})};return a(this),o}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map(n=>(n||{})[this.key])}getHalfCheckedNodes(){const e=[],n=function(o){(o.root?o.root.childNodes:o.childNodes).forEach(s=>{s.indeterminate&&e.push(s.data),n(s)})};return n(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],n=this.nodesMap;for(const o in n)se(n,o)&&e.push(n[o]);return e}updateChildren(e,n){const o=this.nodesMap[e];if(!o)return;const a=o.childNodes;for(let s=a.length-1;s>=0;s--){const d=a[s];this.remove(d.data)}for(let s=0,d=n.length;s<d;s++){const r=n[s];this.append(r,o.data)}}_setCheckedKeys(e,n=!1,o){const a=this._getAllNodes().sort((f,y)=>f.level-y.level),s=Object.create(null),d=Object.keys(o);a.forEach(f=>f.setChecked(!1,!1));const r=f=>{f.childNodes.forEach(y=>{var l;s[y.data[e]]=!0,(l=y.childNodes)!=null&&l.length&&r(y)})};for(let f=0,y=a.length;f<y;f++){const l=a[f],c=l.data[e].toString();if(!d.includes(c)){l.checked&&!s[c]&&l.setChecked(!1,!1);continue}if(l.childNodes.length&&r(l),l.isLeaf||this.checkStrictly){l.setChecked(!0,!1);continue}if(l.setChecked(!0,!0),n){l.setChecked(!1,!1);const p=function(N){N.childNodes.forEach(v=>{v.isLeaf||v.setChecked(!1,!1),p(v)})};p(l)}}}setCheckedNodes(e,n=!1){const o=this.key,a={};e.forEach(s=>{a[(s||{})[o]]=!0}),this._setCheckedKeys(o,n,a)}setCheckedKeys(e,n=!1){this.defaultCheckedKeys=e;const o=this.key,a={};e.forEach(s=>{a[s]=!0}),this._setCheckedKeys(o,n,a)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(n=>{const o=this.getNode(n);o&&o.expand(null,this.autoExpandParent)})}setChecked(e,n,o){const a=this.getNode(e);a&&a.setChecked(!!n,o)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const n=this.currentNode;n&&(n.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,n=!0){const o=e[this.key],a=this.nodesMap[o];this.setCurrentNode(a),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,n=!0){if(e==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const o=this.getNode(e);o&&(this.setCurrentNode(o),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const ct=ce({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(t){const e=Z("tree"),n=V("NodeInstance"),o=V("RootTree");return()=>{const a=t.node,{data:s,store:d}=a;return t.renderContent?t.renderContent(pe,{_self:n,node:a,data:s,store:d}):ke(o.ctx.slots,"default",{node:a,data:s},()=>[pe("span",{class:e.be("node","label")},[a.label])])}}});var ht=le(ct,[["__file","tree-node-content.vue"]]);function be(t){const e=V("TreeNodeMap",null),n={treeNodeExpand:o=>{t.node!==o&&t.node.collapse()},children:[]};return e&&e.children.push(n),X("TreeNodeMap",n),{broadcastExpanded:o=>{if(t.accordion)for(const a of n.children)a.treeNodeExpand(o)}}}const Ee=Symbol("dragEvents");function ut({props:t,ctx:e,el$:n,dropIndicator$:o,store:a}){const s=Z("tree"),d=w({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return X(Ee,{treeNodeDragStart:({event:l,treeNode:c})=>{if(typeof t.allowDrag=="function"&&!t.allowDrag(c.node))return l.preventDefault(),!1;l.dataTransfer.effectAllowed="move";try{l.dataTransfer.setData("text/plain","")}catch{}d.value.draggingNode=c,e.emit("node-drag-start",c.node,l)},treeNodeDragOver:({event:l,treeNode:c})=>{const h=c,p=d.value.dropNode;p&&p.node.id!==h.node.id&&oe(p.$el,s.is("drop-inner"));const N=d.value.draggingNode;if(!N||!h)return;let m=!0,v=!0,k=!0,g=!0;typeof t.allowDrop=="function"&&(m=t.allowDrop(N.node,h.node,"prev"),g=v=t.allowDrop(N.node,h.node,"inner"),k=t.allowDrop(N.node,h.node,"next")),l.dataTransfer.dropEffect=v||m||k?"move":"none",(m||v||k)&&(p==null?void 0:p.node.id)!==h.node.id&&(p&&e.emit("node-drag-leave",N.node,p.node,l),e.emit("node-drag-enter",N.node,h.node,l)),m||v||k?d.value.dropNode=h:d.value.dropNode=null,h.node.nextSibling===N.node&&(k=!1),h.node.previousSibling===N.node&&(m=!1),h.node.contains(N.node,!1)&&(v=!1),(N.node===h.node||N.node.contains(h.node))&&(m=!1,v=!1,k=!1);const x=h.$el.querySelector(`.${s.be("node","content")}`).getBoundingClientRect(),T=n.value.getBoundingClientRect();let K;const q=m?v?.25:k?.45:1:-1,j=k?v?.75:m?.55:0:1;let L=-9999;const u=l.clientY-x.top;u<x.height*q?K="before":u>x.height*j?K="after":v?K="inner":K="none";const b=h.$el.querySelector(`.${s.be("node","expand-icon")}`).getBoundingClientRect(),D=o.value;K==="before"?L=b.top-T.top:K==="after"&&(L=b.bottom-T.top),D.style.top=`${L}px`,D.style.left=`${b.right-T.left}px`,K==="inner"?Ae(h.$el,s.is("drop-inner")):oe(h.$el,s.is("drop-inner")),d.value.showDropIndicator=K==="before"||K==="after",d.value.allowDrop=d.value.showDropIndicator||g,d.value.dropType=K,e.emit("node-drag-over",N.node,h.node,l)},treeNodeDragEnd:l=>{const{draggingNode:c,dropType:h,dropNode:p}=d.value;if(l.preventDefault(),l.dataTransfer&&(l.dataTransfer.dropEffect="move"),c&&p){const N={data:c.node.data};h!=="none"&&c.node.remove(),h==="before"?p.node.parent.insertBefore(N,p.node):h==="after"?p.node.parent.insertAfter(N,p.node):h==="inner"&&p.node.insertChild(N),h!=="none"&&(a.value.registerNode(N),a.value.key&&c.node.eachNode(m=>{var v;(v=a.value.nodesMap[m.data[a.value.key]])==null||v.setChecked(m.checked,!a.value.checkStrictly)})),oe(p.$el,s.is("drop-inner")),e.emit("node-drag-end",c.node,p.node,h,l),h!=="none"&&e.emit("node-drop",c.node,p.node,h,l)}c&&!p&&e.emit("node-drag-end",c.node,null,h,l),d.value.showDropIndicator=!1,d.value.draggingNode=null,d.value.dropNode=null,d.value.allowDrop=!0}}),{dragState:d}}const ft=ce({name:"ElTreeNode",components:{ElCollapseTransition:Ie,ElCheckbox:nt,NodeContent:ht,ElIcon:Te,Loading:Be},props:{node:{type:P,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(t,e){const n=Z("tree"),{broadcastExpanded:o}=be(t),a=V("RootTree"),s=w(!1),d=w(!1),r=w(null),f=w(null),y=w(null),l=V(Ee),c=ve();X("NodeInstance",c),t.node.expanded&&(s.value=!0,d.value=!0);const h=a.props.props.children||"children";B(()=>{const u=t.node.data[h];return u&&[...u]},()=>{t.node.updateChildren()}),B(()=>t.node.indeterminate,u=>{m(t.node.checked,u)}),B(()=>t.node.checked,u=>{m(u,t.node.indeterminate)}),B(()=>t.node.childNodes.length,()=>t.node.reInitChecked()),B(()=>t.node.expanded,u=>{de(()=>s.value=u),u&&(d.value=!0)});const p=u=>ue(a.props.nodeKey,u.data),N=u=>{const b=t.props.class;if(!b)return{};let D;if(ze(b)){const{data:W}=u;D=b(W,u)}else D=b;return Me(D)?{[D]:!0}:D},m=(u,b)=>{(r.value!==u||f.value!==b)&&a.ctx.emit("check-change",t.node.data,u,b),r.value=u,f.value=b},v=u=>{re(a.store,a.ctx.emit,()=>a.store.value.setCurrentNode(t.node)),a.currentNode.value=t.node,a.props.expandOnClickNode&&g(),a.props.checkOnClickNode&&!t.node.disabled&&x(null,{target:{checked:!t.node.checked}}),a.ctx.emit("node-click",t.node.data,t.node,c,u)},k=u=>{a.instance.vnode.props.onNodeContextmenu&&(u.stopPropagation(),u.preventDefault()),a.ctx.emit("node-contextmenu",u,t.node.data,t.node,c)},g=()=>{t.node.isLeaf||(s.value?(a.ctx.emit("node-collapse",t.node.data,t.node,c),t.node.collapse()):t.node.expand(()=>{e.emit("node-expand",t.node.data,t.node,c)}))},x=(u,b)=>{t.node.setChecked(b.target.checked,!a.props.checkStrictly),de(()=>{const D=a.store.value;a.ctx.emit("check",t.node.data,{checkedNodes:D.getCheckedNodes(),checkedKeys:D.getCheckedKeys(),halfCheckedNodes:D.getHalfCheckedNodes(),halfCheckedKeys:D.getHalfCheckedKeys()})})};return{ns:n,node$:y,tree:a,expanded:s,childNodeRendered:d,oldChecked:r,oldIndeterminate:f,getNodeKey:p,getNodeClass:N,handleSelectChange:m,handleClick:v,handleContextMenu:k,handleExpandIconClick:g,handleCheckChange:x,handleChildNodeExpand:(u,b,D)=>{o(b),a.ctx.emit("node-expand",u,b,D)},handleDragStart:u=>{a.props.draggable&&l.treeNodeDragStart({event:u,treeNode:t})},handleDragOver:u=>{u.preventDefault(),a.props.draggable&&l.treeNodeDragOver({event:u,treeNode:{$el:y.value,node:t.node}})},handleDrop:u=>{u.preventDefault()},handleDragEnd:u=>{a.props.draggable&&l.treeNodeDragEnd(u)},CaretRight:Le}}});function pt(t,e,n,o,a,s){const d=z("el-icon"),r=z("el-checkbox"),f=z("loading"),y=z("node-content"),l=z("el-tree-node"),c=z("el-collapse-transition");return te((I(),_("div",{ref:"node$",class:$([t.ns.b("node"),t.ns.is("expanded",t.expanded),t.ns.is("current",t.node.isCurrent),t.ns.is("hidden",!t.node.visible),t.ns.is("focusable",!t.node.disabled),t.ns.is("checked",!t.node.disabled&&t.node.checked),t.getNodeClass(t.node)]),role:"treeitem",tabindex:"-1","aria-expanded":t.expanded,"aria-disabled":t.node.disabled,"aria-checked":t.node.checked,draggable:t.tree.props.draggable,"data-key":t.getNodeKey(t.node),onClick:M(t.handleClick,["stop"]),onContextmenu:t.handleContextMenu,onDragstart:M(t.handleDragStart,["stop"]),onDragover:M(t.handleDragOver,["stop"]),onDragend:M(t.handleDragEnd,["stop"]),onDrop:M(t.handleDrop,["stop"])},[H("div",{class:$(t.ns.be("node","content")),style:Oe({paddingLeft:(t.node.level-1)*t.tree.props.indent+"px"})},[t.tree.props.icon||t.CaretRight?(I(),R(d,{key:0,class:$([t.ns.be("node","expand-icon"),t.ns.is("leaf",t.node.isLeaf),{expanded:!t.node.isLeaf&&t.expanded}]),onClick:M(t.handleExpandIconClick,["stop"])},{default:S(()=>[(I(),R($e(t.tree.props.icon||t.CaretRight)))]),_:1},8,["class","onClick"])):J("v-if",!0),t.showCheckbox?(I(),R(r,{key:1,"model-value":t.node.checked,indeterminate:t.node.indeterminate,disabled:!!t.node.disabled,onClick:M(()=>{},["stop"]),onChange:t.handleCheckChange},null,8,["model-value","indeterminate","disabled","onClick","onChange"])):J("v-if",!0),t.node.loading?(I(),R(d,{key:2,class:$([t.ns.be("node","loading-icon"),t.ns.is("loading")])},{default:S(()=>[E(f)]),_:1},8,["class"])):J("v-if",!0),E(y,{node:t.node,"render-content":t.renderContent},null,8,["node","render-content"])],6),E(c,null,{default:S(()=>[!t.renderAfterExpand||t.childNodeRendered?te((I(),_("div",{key:0,class:$(t.ns.be("node","children")),role:"group","aria-expanded":t.expanded},[(I(!0),_(he,null,Ce(t.node.childNodes,h=>(I(),R(l,{key:t.getNodeKey(h),"render-content":t.renderContent,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,node:h,accordion:t.accordion,props:t.props,onNodeExpand:t.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,["aria-expanded"])),[[ne,t.expanded]]):J("v-if",!0)]),_:1})],42,["aria-expanded","aria-disabled","aria-checked","draggable","data-key","onClick","onContextmenu","onDragstart","onDragover","onDragend","onDrop"])),[[ne,t.node.visible]])}var gt=le(ft,[["render",pt],["__file","tree-node.vue"]]);function yt({el$:t},e){const n=Z("tree"),o=ge([]),a=ge([]);me(()=>{d()}),Fe(()=>{o.value=Array.from(t.value.querySelectorAll("[role=treeitem]")),a.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"))}),B(a,r=>{r.forEach(f=>{f.setAttribute("tabindex","-1")})}),_e(t,"keydown",r=>{const f=r.target;if(!f.className.includes(n.b("node")))return;const y=r.code;o.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));const l=o.value.indexOf(f);let c;if([F.up,F.down].includes(y)){if(r.preventDefault(),y===F.up){c=l===-1?0:l!==0?l-1:o.value.length-1;const p=c;for(;!e.value.getNode(o.value[c].dataset.key).canFocus;){if(c--,c===p){c=-1;break}c<0&&(c=o.value.length-1)}}else{c=l===-1?0:l<o.value.length-1?l+1:0;const p=c;for(;!e.value.getNode(o.value[c].dataset.key).canFocus;){if(c++,c===p){c=-1;break}c>=o.value.length&&(c=0)}}c!==-1&&o.value[c].focus()}[F.left,F.right].includes(y)&&(r.preventDefault(),f.click());const h=f.querySelector('[type="checkbox"]');[F.enter,F.space].includes(y)&&h&&(r.preventDefault(),h.click())});const d=()=>{var r;o.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)),a.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"));const f=t.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);if(f.length){f[0].setAttribute("tabindex","0");return}(r=o.value[0])==null||r.setAttribute("tabindex","0")}}const Nt=ce({name:"ElTree",components:{ElTreeNode:gt},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:Pe}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(t,e){const{t:n}=qe(),o=Z("tree"),a=V(ot,null),s=w(new lt({key:t.nodeKey,data:t.data,lazy:t.lazy,props:t.props,load:t.load,currentNodeKey:t.currentNodeKey,checkStrictly:t.checkStrictly,checkDescendants:t.checkDescendants,defaultCheckedKeys:t.defaultCheckedKeys,defaultExpandedKeys:t.defaultExpandedKeys,autoExpandParent:t.autoExpandParent,defaultExpandAll:t.defaultExpandAll,filterNodeMethod:t.filterNodeMethod}));s.value.initialize();const d=w(s.value.root),r=w(null),f=w(null),y=w(null),{broadcastExpanded:l}=be(t),{dragState:c}=ut({props:t,ctx:e,el$:f,dropIndicator$:y,store:s});yt({el$:f},s);const h=je(()=>{const{childNodes:i}=d.value,C=a?a.hasFilteredOptions!==0:!1;return(!i||i.length===0||i.every(({visible:O})=>!O))&&!C});B(()=>t.currentNodeKey,i=>{s.value.setCurrentNodeKey(i)}),B(()=>t.defaultCheckedKeys,i=>{s.value.setDefaultCheckedKey(i)}),B(()=>t.defaultExpandedKeys,i=>{s.value.setDefaultExpandedKeys(i)}),B(()=>t.data,i=>{s.value.setData(i)},{deep:!0}),B(()=>t.checkStrictly,i=>{s.value.checkStrictly=i});const p=i=>{if(!t.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");s.value.filter(i)},N=i=>ue(t.nodeKey,i.data),m=i=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const C=s.value.getNode(i);if(!C)return[];const O=[C.data];let Y=C.parent;for(;Y&&Y!==d.value;)O.push(Y.data),Y=Y.parent;return O.reverse()},v=(i,C)=>s.value.getCheckedNodes(i,C),k=i=>s.value.getCheckedKeys(i),g=()=>{const i=s.value.getCurrentNode();return i?i.data:null},x=()=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const i=g();return i?i[t.nodeKey]:null},T=(i,C)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");s.value.setCheckedNodes(i,C)},K=(i,C)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");s.value.setCheckedKeys(i,C)},q=(i,C,O)=>{s.value.setChecked(i,C,O)},j=()=>s.value.getHalfCheckedNodes(),L=()=>s.value.getHalfCheckedKeys(),u=(i,C=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");re(s,e.emit,()=>{l(i),s.value.setUserCurrentNode(i,C)})},b=(i,C=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");re(s,e.emit,()=>{l(),s.value.setCurrentNodeKey(i,C)})},D=i=>s.value.getNode(i),W=i=>{s.value.remove(i)},A=(i,C)=>{s.value.append(i,C)},fe=(i,C)=>{s.value.insertBefore(i,C)},Ke=(i,C)=>{s.value.insertAfter(i,C)},De=(i,C,O)=>{l(C),e.emit("node-expand",i,C,O)},we=(i,C)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");s.value.updateChildren(i,C)};return X("RootTree",{ctx:e,props:t,store:s,root:d,currentNode:r,instance:ve()}),X(Re,void 0),{ns:o,store:s,root:d,currentNode:r,dragState:c,el$:f,dropIndicator$:y,isEmpty:h,filter:p,getNodeKey:N,getNodePath:m,getCheckedNodes:v,getCheckedKeys:k,getCurrentNode:g,getCurrentKey:x,setCheckedNodes:T,setCheckedKeys:K,setChecked:q,getHalfCheckedNodes:j,getHalfCheckedKeys:L,setCurrentNode:u,setCurrentKey:b,t:n,getNode:D,remove:W,append:A,insertBefore:fe,insertAfter:Ke,handleNodeExpand:De,updateKeyChildren:we}}});function kt(t,e,n,o,a,s){const d=z("el-tree-node");return I(),_("div",{ref:"el$",class:$([t.ns.b(),t.ns.is("dragging",!!t.dragState.draggingNode),t.ns.is("drop-not-allow",!t.dragState.allowDrop),t.ns.is("drop-inner",t.dragState.dropType==="inner"),{[t.ns.m("highlight-current")]:t.highlightCurrent}]),role:"tree"},[(I(!0),_(he,null,Ce(t.root.childNodes,r=>(I(),R(d,{key:t.getNodeKey(r),node:r,props:t.props,accordion:t.accordion,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,"render-content":t.renderContent,onNodeExpand:t.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),t.isEmpty?(I(),_("div",{key:0,class:$(t.ns.e("empty-block"))},[ke(t.$slots,"empty",{},()=>{var r;return[H("span",{class:$(t.ns.e("empty-text"))},He((r=t.emptyText)!=null?r:t.t("el.tree.emptyText")),3)]})],2)):J("v-if",!0),te(H("div",{ref:"dropIndicator$",class:$(t.ns.e("drop-indicator"))},null,2),[[ne,t.dragState.showDropIndicator]])],2)}var Ct=le(Nt,[["render",kt],["__file","tree.vue"]]);const vt=Ue(Ct),mt={class:"btns"},bt={class:"pagination-info"},Et={class:"dialog-footer"},Kt={__name:"index",setup(t){const e=We(),n=w(!1),o=G({id:"",name:"",permissions:""}),a=w([]),s=[4,5],d=w(),r=w(),f=G({pageNum:1,pageSize:10}),y=k=>{f.pageSize=k,h()},l=k=>{f.pageNum=k,h()},c=k=>{n.value=!0,de(()=>{k&&(Object.assign(o,{id:k.id,name:k.name}),d.value.setCheckedKeys(k.permission))})},h=()=>{Je(f).then(({data:k})=>{const{list:g,total:x}=k.data;p.list=g,p.total=x})};me(()=>{Ye().then(({data:k})=>{a.value=k.data}),h()});const p=G({list:[],total:0}),N=G({name:[{required:!0,trigger:"blur",message:"请输入权限名称"}]}),m=async k=>{k&&await k.validate((g,x)=>{if(g){const T=JSON.stringify(d.value.getCheckedKeys());Qe({name:o.name,permissions:T,id:o.id}).then(({data:K})=>{v(),h()})}else console.log("error submit!",x)})},v=()=>{n.value=!1,r.value.resetFields(),d.value.setCheckedKeys(s)};return(k,g)=>{const x=z("PanelHead"),T=Xe,K=at,q=st,j=dt,L=Ze,u=et,b=vt,D=tt,W=rt;return I(),_(he,null,[E(x,{route:ye(e)},null,8,["route"]),H("div",mt,[E(T,{icon:ye(Ge),type:"primary",onClick:g[0]||(g[0]=A=>c(null)),size:"small"},{default:S(()=>g[6]||(g[6]=[ae("新增")])),_:1},8,["icon"])]),E(q,{data:p.list,style:{width:"100%"}},{default:S(()=>[E(K,{prop:"id",label:"id"}),E(K,{prop:"name",label:"昵称"}),E(K,{prop:"permissionName",label:"菜单权限",width:"500px"}),E(K,{label:"操作"},{default:S(A=>[E(T,{type:"primary",onClick:fe=>c(A.row)},{default:S(()=>g[7]||(g[7]=[ae("编辑")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),H("div",bt,[E(j,{"current-page":f.pageNum,"onUpdate:currentPage":g[1]||(g[1]=A=>f.pageNum=A),"page-size":f.pageSize,background:!1,size:"small",layout:"total, prev, pager, next",total:p.total,onSizeChange:y,onCurrentChange:l},null,8,["current-page","page-size","total"])]),E(W,{modelValue:n.value,"onUpdate:modelValue":g[5]||(g[5]=A=>n.value=A),"before-close":v,title:"添加权限",width:"500"},{footer:S(()=>[H("div",Et,[E(T,{type:"primary",onClick:g[4]||(g[4]=A=>m(r.value))},{default:S(()=>g[8]||(g[8]=[ae("确认")])),_:1})])]),default:S(()=>[E(D,{ref_key:"formRef",ref:r,"label-width":"100px","label-position":"left",model:o,rules:N},{default:S(()=>[te(E(u,{prop:"id"},{default:S(()=>[E(L,{modelValue:o.id,"onUpdate:modelValue":g[2]||(g[2]=A=>o.id=A)},null,8,["modelValue"])]),_:1},512),[[ne,!1]]),E(u,{label:"名称",prop:"name"},{default:S(()=>[E(L,{modelValue:o.name,"onUpdate:modelValue":g[3]||(g[3]=A=>o.name=A),placeholder:"请填写权限名称"},null,8,["modelValue"])]),_:1}),E(u,{label:"权限",prop:"permissions"},{default:S(()=>[E(b,{ref_key:"treeRef",ref:d,style:{"max-width":"600px"},data:a.value,"node-key":"id","show-checkbox":"","default-checked-keys":s,"default-expanded-keys":[2]},null,8,["data"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])],64)}}},St=Ve(Kt,[["__scopeId","data-v-bd5e1daa"]]);export{St as default};