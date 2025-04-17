"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[137],{3537:(e,t,r)=>{r.d(t,{jH:()=>l});var n=r(2149);r(8081);var o=n.createContext(void 0);function l(e){let t=n.useContext(o);return e||t||"ltr"}},4861:(e,t,r)=>{r.d(t,{C:()=>i});var n=r(2149),o=r(949),l=r(5973),i=e=>{let{present:t,children:r}=e,i=function(e){var t,r;let[o,i]=n.useState(),s=n.useRef({}),c=n.useRef(e),u=n.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>{let n=r[e][t];return null!=n?n:e},t));return n.useEffect(()=>{let e=a(s.current);u.current="mounted"===d?e:"none"},[d]),(0,l.N)(()=>{let t=s.current,r=c.current;if(r!==e){let n=u.current,o=a(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):r&&n!==o?f("ANIMATION_OUT"):f("UNMOUNT"),c.current=e}},[e,f]),(0,l.N)(()=>{if(o){var e;let t;let r=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,n=e=>{let n=a(s.current).includes(e.animationName);if(e.target===o&&n&&(f("ANIMATION_END"),!c.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=r.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},l=e=>{e.target===o&&(u.current=a(s.current))};return o.addEventListener("animationstart",l),o.addEventListener("animationcancel",n),o.addEventListener("animationend",n),()=>{r.clearTimeout(t),o.removeEventListener("animationstart",l),o.removeEventListener("animationcancel",n),o.removeEventListener("animationend",n)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:n.useCallback(e=>{e&&(s.current=getComputedStyle(e)),i(e)},[])}}(t),s="function"==typeof r?r({present:i.isPresent}):n.Children.only(r),c=(0,o.s)(i.ref,function(e){var t,r;let n=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?e.ref:(o=(n=null===(r=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in n&&n.isReactWarning)?e.props.ref:e.props.ref||e.ref}(s));return"function"==typeof r||i.isPresent?n.cloneElement(s,{ref:c}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},5973:(e,t,r)=>{r.d(t,{N:()=>o});var n=r(2149),o=globalThis?.document?n.useLayoutEffect:()=>{}},5990:(e,t,r)=>{r.d(t,{m:()=>n});function n(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}},7192:(e,t,r)=>{r.d(t,{c:()=>o});var n=r(2149);function o(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}},8137:(e,t,r)=>{r.d(t,{OK:()=>q,bL:()=>B,VM:()=>y,lr:()=>j,LM:()=>G});var n=r(2149),o=r(6394),l=r(4861),i=r(8337),a=r(949),s=r(7192),c=r(3537),u=r(5973),d=r(5990),f=r(8081),p="ScrollArea",[v,h]=(0,i.A)(p),[w,m]=v(p),g=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,type:l="hover",dir:i,scrollHideDelay:s=600,...u}=e,[d,p]=n.useState(null),[v,h]=n.useState(null),[m,g]=n.useState(null),[b,S]=n.useState(null),[E,y]=n.useState(null),[T,C]=n.useState(0),[R,x]=n.useState(0),[N,L]=n.useState(!1),[P,_]=n.useState(!1),A=(0,a.s)(t,e=>p(e)),D=(0,c.jH)(i);return(0,f.jsx)(w,{scope:r,type:l,dir:D,scrollHideDelay:s,scrollArea:d,viewport:v,onViewportChange:h,content:m,onContentChange:g,scrollbarX:b,onScrollbarXChange:S,scrollbarXEnabled:N,onScrollbarXEnabledChange:L,scrollbarY:E,onScrollbarYChange:y,scrollbarYEnabled:P,onScrollbarYEnabledChange:_,onCornerWidthChange:C,onCornerHeightChange:x,children:(0,f.jsx)(o.sG.div,{dir:D,...u,ref:A,style:{position:"relative","--radix-scroll-area-corner-width":T+"px","--radix-scroll-area-corner-height":R+"px",...e.style}})})});g.displayName=p;var b="ScrollAreaViewport",S=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,children:l,nonce:i,...s}=e,c=m(b,r),u=n.useRef(null),d=(0,a.s)(t,u,c.onViewportChange);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:i}),(0,f.jsx)(o.sG.div,{"data-radix-scroll-area-viewport":"",...s,ref:d,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style},children:(0,f.jsx)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"},children:l})})]})});S.displayName=b;var E="ScrollAreaScrollbar",y=n.forwardRef((e,t)=>{let{forceMount:r,...o}=e,l=m(E,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:a}=l,s="horizontal"===e.orientation;return n.useEffect(()=>(s?i(!0):a(!0),()=>{s?i(!1):a(!1)}),[s,i,a]),"hover"===l.type?(0,f.jsx)(T,{...o,ref:t,forceMount:r}):"scroll"===l.type?(0,f.jsx)(C,{...o,ref:t,forceMount:r}):"auto"===l.type?(0,f.jsx)(R,{...o,ref:t,forceMount:r}):"always"===l.type?(0,f.jsx)(x,{...o,ref:t}):null});y.displayName=E;var T=n.forwardRef((e,t)=>{let{forceMount:r,...o}=e,i=m(E,e.__scopeScrollArea),[a,s]=n.useState(!1);return n.useEffect(()=>{let e=i.scrollArea,t=0;if(e){let r=()=>{window.clearTimeout(t),s(!0)},n=()=>{t=window.setTimeout(()=>s(!1),i.scrollHideDelay)};return e.addEventListener("pointerenter",r),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",r),e.removeEventListener("pointerleave",n)}}},[i.scrollArea,i.scrollHideDelay]),(0,f.jsx)(l.C,{present:r||a,children:(0,f.jsx)(R,{"data-state":a?"visible":"hidden",...o,ref:t})})}),C=n.forwardRef((e,t)=>{var r;let{forceMount:o,...i}=e,a=m(E,e.__scopeScrollArea),s="horizontal"===e.orientation,c=F(()=>p("SCROLL_END"),100),[u,p]=(r={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},n.useReducer((e,t)=>{let n=r[e][t];return null!=n?n:e},"hidden"));return n.useEffect(()=>{if("idle"===u){let e=window.setTimeout(()=>p("HIDE"),a.scrollHideDelay);return()=>window.clearTimeout(e)}},[u,a.scrollHideDelay,p]),n.useEffect(()=>{let e=a.viewport,t=s?"scrollLeft":"scrollTop";if(e){let r=e[t],n=()=>{let n=e[t];r!==n&&(p("SCROLL"),c()),r=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[a.viewport,s,p,c]),(0,f.jsx)(l.C,{present:o||"hidden"!==u,children:(0,f.jsx)(x,{"data-state":"hidden"===u?"hidden":"visible",...i,ref:t,onPointerEnter:(0,d.m)(e.onPointerEnter,()=>p("POINTER_ENTER")),onPointerLeave:(0,d.m)(e.onPointerLeave,()=>p("POINTER_LEAVE"))})})}),R=n.forwardRef((e,t)=>{let r=m(E,e.__scopeScrollArea),{forceMount:o,...i}=e,[a,s]=n.useState(!1),c="horizontal"===e.orientation,u=F(()=>{if(r.viewport){let e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;s(c?e:t)}},10);return V(r.viewport,u),V(r.content,u),(0,f.jsx)(l.C,{present:o||a,children:(0,f.jsx)(x,{"data-state":a?"visible":"hidden",...i,ref:t})})}),x=n.forwardRef((e,t)=>{let{orientation:r="vertical",...o}=e,l=m(E,e.__scopeScrollArea),i=n.useRef(null),a=n.useRef(0),[s,c]=n.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=H(s.viewport,s.content),d={...o,sizes:s,onSizesChange:c,hasThumb:!!(u>0&&u<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>a.current=0,onThumbPointerDown:e=>a.current=e};function p(e,t){return function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ltr",o=z(r),l=t||o/2,i=r.scrollbar.paddingStart+l,a=r.scrollbar.size-r.scrollbar.paddingEnd-(o-l),s=r.content-r.viewport;return X([i,a],"ltr"===n?[0,s]:[-1*s,0])(e)}(e,a.current,s,t)}return"horizontal"===r?(0,f.jsx)(N,{...d,ref:t,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=k(l.viewport.scrollLeft,s,l.dir);i.current.style.transform="translate3d(".concat(e,"px, 0, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollLeft=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollLeft=p(e,l.dir))}}):"vertical"===r?(0,f.jsx)(L,{...d,ref:t,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=k(l.viewport.scrollTop,s);i.current.style.transform="translate3d(0, ".concat(e,"px, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollTop=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollTop=p(e))}}):null}),N=n.forwardRef((e,t)=>{let{sizes:r,onSizesChange:o,...l}=e,i=m(E,e.__scopeScrollArea),[s,c]=n.useState(),u=n.useRef(null),d=(0,a.s)(t,u,i.onScrollbarXChange);return n.useEffect(()=>{u.current&&c(getComputedStyle(u.current))},[u]),(0,f.jsx)(A,{"data-orientation":"horizontal",...l,ref:d,sizes:r,style:{bottom:0,left:"rtl"===i.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===i.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":z(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(i.viewport){let n=i.viewport.scrollLeft+t.deltaX;e.onWheelScroll(n),function(e,t){return e>0&&e<t}(n,r)&&t.preventDefault()}},onResize:()=>{u.current&&i.viewport&&s&&o({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:W(s.paddingLeft),paddingEnd:W(s.paddingRight)}})}})}),L=n.forwardRef((e,t)=>{let{sizes:r,onSizesChange:o,...l}=e,i=m(E,e.__scopeScrollArea),[s,c]=n.useState(),u=n.useRef(null),d=(0,a.s)(t,u,i.onScrollbarYChange);return n.useEffect(()=>{u.current&&c(getComputedStyle(u.current))},[u]),(0,f.jsx)(A,{"data-orientation":"vertical",...l,ref:d,sizes:r,style:{top:0,right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":z(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(i.viewport){let n=i.viewport.scrollTop+t.deltaY;e.onWheelScroll(n),function(e,t){return e>0&&e<t}(n,r)&&t.preventDefault()}},onResize:()=>{u.current&&i.viewport&&s&&o({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:W(s.paddingTop),paddingEnd:W(s.paddingBottom)}})}})}),[P,_]=v(E),A=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,sizes:l,hasThumb:i,onThumbChange:c,onThumbPointerUp:u,onThumbPointerDown:p,onThumbPositionChange:v,onDragScroll:h,onWheelScroll:w,onResize:g,...b}=e,S=m(E,r),[y,T]=n.useState(null),C=(0,a.s)(t,e=>T(e)),R=n.useRef(null),x=n.useRef(""),N=S.viewport,L=l.content-l.viewport,_=(0,s.c)(w),A=(0,s.c)(v),D=F(g,10);function j(e){R.current&&h({x:e.clientX-R.current.left,y:e.clientY-R.current.top})}return n.useEffect(()=>{let e=e=>{let t=e.target;(null==y?void 0:y.contains(t))&&_(e,L)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[N,y,L,_]),n.useEffect(A,[l,A]),V(y,D),V(S.content,D),(0,f.jsx)(P,{scope:r,scrollbar:y,hasThumb:i,onThumbChange:(0,s.c)(c),onThumbPointerUp:(0,s.c)(u),onThumbPositionChange:A,onThumbPointerDown:(0,s.c)(p),children:(0,f.jsx)(o.sG.div,{...b,ref:C,style:{position:"absolute",...b.style},onPointerDown:(0,d.m)(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),R.current=y.getBoundingClientRect(),x.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",S.viewport&&(S.viewport.style.scrollBehavior="auto"),j(e))}),onPointerMove:(0,d.m)(e.onPointerMove,j),onPointerUp:(0,d.m)(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=x.current,S.viewport&&(S.viewport.style.scrollBehavior=""),R.current=null})})})}),D="ScrollAreaThumb",j=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,o=_(D,e.__scopeScrollArea);return(0,f.jsx)(l.C,{present:r||o.hasThumb,children:(0,f.jsx)(O,{ref:t,...n})})}),O=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,style:l,...i}=e,s=m(D,r),c=_(D,r),{onThumbPositionChange:u}=c,p=(0,a.s)(t,e=>c.onThumbChange(e)),v=n.useRef(void 0),h=F(()=>{v.current&&(v.current(),v.current=void 0)},100);return n.useEffect(()=>{let e=s.viewport;if(e){let t=()=>{h(),v.current||(v.current=Y(e,u),u())};return u(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[s.viewport,h,u]),(0,f.jsx)(o.sG.div,{"data-state":c.hasThumb?"visible":"hidden",...i,ref:p,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:(0,d.m)(e.onPointerDownCapture,e=>{let t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=e.clientY-t.top;c.onThumbPointerDown({x:r,y:n})}),onPointerUp:(0,d.m)(e.onPointerUp,c.onThumbPointerUp)})});j.displayName=D;var M="ScrollAreaCorner",I=n.forwardRef((e,t)=>{let r=m(M,e.__scopeScrollArea),n=!!(r.scrollbarX&&r.scrollbarY);return"scroll"!==r.type&&n?(0,f.jsx)(U,{...e,ref:t}):null});I.displayName=M;var U=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,...l}=e,i=m(M,r),[a,s]=n.useState(0),[c,u]=n.useState(0),d=!!(a&&c);return V(i.scrollbarX,()=>{var e;let t=(null===(e=i.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;i.onCornerHeightChange(t),u(t)}),V(i.scrollbarY,()=>{var e;let t=(null===(e=i.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;i.onCornerWidthChange(t),s(t)}),d?(0,f.jsx)(o.sG.div,{...l,ref:t,style:{width:a,height:c,position:"absolute",right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:0,...e.style}}):null});function W(e){return e?parseInt(e,10):0}function H(e,t){let r=e/t;return isNaN(r)?0:r}function z(e){let t=H(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-r)*t,18)}function k(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",n=z(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,l=t.scrollbar.size-o,i=t.content-t.viewport,a=function(e,[t,r]){return Math.min(r,Math.max(t,e))}(e,"ltr"===r?[0,i]:[-1*i,0]);return X([0,i],[0,l-n])(a)}function X(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}var Y=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},r={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let l={left:e.scrollLeft,top:e.scrollTop},i=r.left!==l.left,a=r.top!==l.top;(i||a)&&t(),r=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function F(e,t){let r=(0,s.c)(e),o=n.useRef(0);return n.useEffect(()=>()=>window.clearTimeout(o.current),[]),n.useCallback(()=>{window.clearTimeout(o.current),o.current=window.setTimeout(r,t)},[r,t])}function V(e,t){let r=(0,s.c)(t);(0,u.N)(()=>{let t=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}},[e,r])}var B=g,G=S,q=I}}]);