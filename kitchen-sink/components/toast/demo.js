webpackJsonp([18,141],{8:function(n,a,t){"use strict";t(13),t(12)},12:function(n,a){},13:function(n,a){},16:function(n,a,t){"use strict";t(20)},17:function(n,a){"use strict";a.__esModule=!0,a["default"]=function(n,a){var t={};for(var s in n)a.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t}},20:function(n,a){},21:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(6),o=s(e),p=t(2),l=s(p),c=t(4),u=s(c),i=t(3),r=s(i),f="/Users/temupsc/git/antd/ant-design-mobile/components/white-space/index.web.tsx",d=t(1),k=s(d),m=t(7),g=s(m),h=function(n){function a(){return(0,l["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.size,e=a.className,p=a.style,l=a.onClick,c=(0,g["default"])((n={},(0,o["default"])(n,""+t,!0),(0,o["default"])(n,t+"-"+s,!0),(0,o["default"])(n,e,!!e),n));return k["default"].createElement("div",{className:c,style:p,onClick:l,__source:{fileName:f,lineNumber:11}})},a}(k["default"].Component);a["default"]=h,h.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},22:function(n,a,t){"use strict";t(8),t(25)},25:function(n,a){},30:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(6),o=s(e),p=t(2),l=s(p),c=t(4),u=s(c),i=t(3),r=s(i),f="/Users/temupsc/git/antd/ant-design-mobile/components/wing-blank/index.web.tsx",d=t(1),k=s(d),m=t(7),g=s(m),h=function(n){function a(){return(0,l["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.size,e=a.className,p=a.children,l=a.style,c=(0,g["default"])((n={},(0,o["default"])(n,""+t,!0),(0,o["default"])(n,t+"-"+s,!0),(0,o["default"])(n,e,!!e),n));return k["default"].createElement("div",{className:c,style:l,__source:{fileName:f,lineNumber:11}},p)},a}(k["default"].Component);a["default"]=h,h.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},31:function(n,a,t){"use strict";t(8),t(41)},33:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function o(n){return e(n.type)&&T(n.props.children)?v["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(T(n)&&(n=n.split("").join(" ")),v["default"].createElement("span",{__source:{fileName:g,lineNumber:28}},n)):n}Object.defineProperty(a,"__esModule",{value:!0});var p=t(5),l=s(p),c=t(6),u=s(c),i=t(2),r=s(i),f=t(4),d=s(f),k=t(3),m=s(k),g="/Users/temupsc/git/antd/ant-design-mobile/components/button/index.web.tsx",h=t(1),v=s(h),y=t(7),b=s(y),_=t(24),x=s(_),C=t(40),N=s(C),w=function(n,a){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&a.indexOf(s)<0&&(t[s]=n[s]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,s=Object.getOwnPropertySymbols(n);e<s.length;e++)a.indexOf(s[e])<0&&(t[s[e]]=n[s[e]]);return t},E=/^[\u4e00-\u9fa5]{2}$/,T=E.test.bind(E),M=function(n){function a(){return(0,r["default"])(this,a),(0,d["default"])(this,n.apply(this,arguments))}return(0,m["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.children,s=a.className,e=a.prefixCls,p=a.type,c=a.size,i=a.inline,r=a.across,f=a.disabled,d=a.icon,k=a.loading,m=a.activeStyle,h=a.onClick,y=a.delayPressIn,_=a.delayPressOut,C=w(a,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","activeStyle","onClick","delayPressIn","delayPressOut"]),E=(n={},(0,u["default"])(n,s,s),(0,u["default"])(n,e,!0),(0,u["default"])(n,e+"-primary","primary"===p),(0,u["default"])(n,e+"-ghost","ghost"===p),(0,u["default"])(n,e+"-warning","warning"===p),(0,u["default"])(n,e+"-small","small"===c),(0,u["default"])(n,e+"-inline",i),(0,u["default"])(n,e+"-across",r),(0,u["default"])(n,e+"-disabled",f),(0,u["default"])(n,e+"-loading",k),n),T=k?"loading":d,M=v["default"].Children.map(t,o);T&&(E[e+"-icon"]=!0);var O={};return y&&(O.delayPressIn=y),_&&(O.delayPressOut=_),v["default"].createElement(N["default"],(0,l["default"])({activeClassName:m?e+"-active":void 0,disabled:f,activeStyle:m},O,{__source:{fileName:g,lineNumber:60}}),v["default"].createElement("a",(0,l["default"])({role:"button",className:(0,b["default"])(E)},C,{onClick:f?void 0:h,"aria-disabled":f,__source:{fileName:g,lineNumber:61}}),T?v["default"].createElement(x["default"],{"aria-hidden":"true",type:T,size:"small"===c?"xxs":"md",__source:{fileName:g,lineNumber:62}}):null,M))},a}(v["default"].Component);M.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1,activeStyle:{}},a["default"]=M,n.exports=a["default"]},34:function(n,a,t){"use strict";t(8),t(16),t(43)},41:function(n,a){},43:function(n,a){},165:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a;return h&&(h.destroy(),h=null),h=f["default"].newInstance({prefixCls:v,style:{},transitionName:"am-fade",className:(0,g["default"])((a={},(0,l["default"])(a,v+"-mask",n),(0,l["default"])(a,v+"-nomask",!n),a))})}function o(n,a){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,o=arguments[3],p=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],l={info:"",success:t(182),fail:t(181),offline:t(180),loading:"loading"}[a],u=e(p);u.notice({duration:s,style:{},content:l?i["default"].createElement("div",{className:v+"-text "+v+"-text-icon",role:"alert","aria-live":"assertive",__source:{fileName:c,lineNumber:35}},i["default"].createElement(k["default"],{type:l,size:"lg",__source:{fileName:c,lineNumber:36}}),i["default"].createElement("div",{className:v+"-text-info",__source:{fileName:c,lineNumber:37}},n)):i["default"].createElement("div",{className:v+"-text",role:"alert","aria-live":"assertive",__source:{fileName:c,lineNumber:38}},i["default"].createElement("div",{__source:{fileName:c,lineNumber:39}},n)),onClose:function(){o&&o(),u.destroy(),u=null,h=null}})}Object.defineProperty(a,"__esModule",{value:!0});var p=t(6),l=s(p),c="/Users/temupsc/git/antd/ant-design-mobile/components/toast/index.web.tsx",u=t(1),i=s(u),r=t(176),f=s(r),d=t(24),k=s(d),m=t(7),g=s(m),h=void 0,v="am-toast";a["default"]={SHORT:3,LONG:8,show:function(n,a,t){return o(n,"info",a,function(){},t)},info:function(n,a,t,s){return o(n,"info",a,t,s)},success:function(n,a,t,s){return o(n,"success",a,t,s)},fail:function(n,a,t,s){return o(n,"fail",a,t,s)},offline:function(n,a,t,s){return o(n,"offline",a,t,s)},loading:function(n,a,t,s){return o(n,"loading",a,t,s)},hide:function(){h&&(h.destroy(),h=null)}},n.exports=a["default"]},166:function(n,a,t){"use strict";t(8),t(16),t(172)},172:function(n,a){},174:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(6),o=s(e),p=t(2),l=s(p),c=t(14),u=s(c),i=t(4),r=s(i),f=t(3),d=s(f),k=t(1),m=s(k),g=t(7),h=s(g),v=t(11),y=s(v),b=function(n){function a(){var n,t,s,e;(0,l["default"])(this,a);for(var o=arguments.length,p=Array(o),c=0;c<o;c++)p[c]=arguments[c];return t=s=(0,r["default"])(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(p))),s.clearCloseTimer=function(){s.closeTimer&&(clearTimeout(s.closeTimer),s.closeTimer=null)},s.close=function(){s.clearCloseTimer(),s.props.onClose()},e=t,(0,r["default"])(s,e)}return(0,d["default"])(a,n),(0,u["default"])(a,[{key:"componentDidMount",value:function(){var n=this;this.props.duration&&(this.closeTimer=setTimeout(function(){n.close()},1e3*this.props.duration))}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"render",value:function(){var n,a=this.props,t=a.prefixCls+"-notice",s=(n={},(0,o["default"])(n,""+t,1),(0,o["default"])(n,t+"-closable",a.closable),(0,o["default"])(n,a.className,!!a.className),n);return m["default"].createElement("div",{className:(0,h["default"])(s),style:a.style},m["default"].createElement("div",{className:t+"-content"},a.children),a.closable?m["default"].createElement("a",{tabIndex:"0",onClick:this.close,className:t+"-close"},m["default"].createElement("span",{className:t+"-close-x"})):null)}}]),a}(k.Component);b.propTypes={duration:y["default"].number,onClose:y["default"].func,children:y["default"].any},b.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}},a["default"]=b,n.exports=a["default"]},175:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(){return"rcNotification_"+B+"_"+F++}Object.defineProperty(a,"__esModule",{value:!0});var o=t(17),p=s(o),l=t(6),c=s(l),u=t(5),i=s(u),r=t(2),f=s(r),d=t(14),k=s(d),m=t(4),g=s(m),h=t(3),v=s(h),y=t(1),b=s(y),_=t(11),x=s(_),C=t(9),N=s(C),w=t(156),E=s(w),T=t(177),M=s(T),O=t(7),S=s(O),j=t(174),P=s(j),F=0,B=Date.now(),z=function(n){function a(){var n,t,s,o;(0,f["default"])(this,a);for(var p=arguments.length,l=Array(p),c=0;c<p;c++)l[c]=arguments[c];return t=s=(0,g["default"])(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(l))),s.state={notices:[]},s.add=function(n){var a=n.key=n.key||e();s.setState(function(t){var s=t.notices;if(!s.filter(function(n){return n.key===a}).length)return{notices:s.concat(n)}})},s.remove=function(n){s.setState(function(a){return{notices:a.notices.filter(function(a){return a.key!==n})}})},o=t,(0,g["default"])(s,o)}return(0,v["default"])(a,n),(0,k["default"])(a,[{key:"getTransitionName",value:function(){var n=this.props,a=n.transitionName;return!a&&n.animation&&(a=n.prefixCls+"-"+n.animation),a}},{key:"render",value:function(){var n,a=this,t=this.props,s=this.state.notices.map(function(n){var s=(0,M["default"])(a.remove.bind(a,n.key),n.onClose);return b["default"].createElement(P["default"],(0,i["default"])({prefixCls:t.prefixCls},n,{onClose:s}),n.content)}),e=(n={},(0,c["default"])(n,t.prefixCls,1),(0,c["default"])(n,t.className,!!t.className),n),o={};return this.state.notices.length<=1&&(o.component=""),b["default"].createElement("div",{className:(0,S["default"])(e),style:t.style},b["default"].createElement(E["default"],(0,i["default"])({transitionName:this.getTransitionName()},o),s))}}]),a}(y.Component);z.propTypes={prefixCls:x["default"].string,transitionName:x["default"].string,animation:x["default"].oneOfType([x["default"].string,x["default"].object]),style:x["default"].object},z.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},z.newInstance=function(n){var a=n||{},t=a.getContainer,s=(0,p["default"])(a,["getContainer"]),e=void 0;t?e=t():(e=document.createElement("div"),document.body.appendChild(e));var o=N["default"].render(b["default"].createElement(z,s),e);return{notice:function(n){o.add(n)},removeNotice:function(n){o.remove(n)},component:o,destroy:function(){N["default"].unmountComponentAtNode(e),document.body.removeChild(e)}}},a["default"]=z,n.exports=a["default"]},176:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(175),o=s(e);a["default"]=o["default"],n.exports=a["default"]},177:function(n,a){"use strict";function t(){var n=[].slice.call(arguments,0);return 1===n.length?n[0]:function(){for(var a=0;a<n.length;a++)n[a]&&n[a].apply&&n[a].apply(this,arguments)}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=t,n.exports=a["default"]},180:function(n,a,t){var s=t(19),e='<symbol viewBox="0 0 72 72" id="dislike" ><title>&#x54ED;&#x8138;</title><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path fill="#FFF" d="M47 22h2v6h-2zM23 22h2v6h-2z"/><path d="M21 51s4.6-7 15-7 15 7 15 7" stroke="#FFF" stroke-width="2"/></g></symbol>';n.exports=s.add(e,"dislike")},181:function(n,a,t){var s=t(19),e='<symbol viewBox="0 0 72 72" id="fail" ><title>&#x5931;&#x8D25;</title><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path d="M22 22l28.304 28.304M22 50.304L50.304 22" stroke="#FFF" stroke-width="2"/></g></symbol>';n.exports=s.add(e,"fail")},182:function(n,a,t){var s=t(19),e='<symbol viewBox="0 0 72 72" id="success" ><title>&#x6210;&#x529F;</title><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path stroke="#FFF" stroke-width="2" d="M19 34.54l11.545 11.923L52.815 24"/></g></symbol>';n.exports=s.add(e,"success")},683:function(n,a,t){n.exports={content:[["p","text\u3001icon\u3001success\u3001failure\u3001offline\u3001loading"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/toast/demo/basic.md",id:"components-toast-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Toast<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'This is a toast tips !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">showToastNoMask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'Toast without mask !!!\'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">successToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'Load success !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">failToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">\'Load failed !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">offline</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">offline</span><span class="token punctuation">(</span><span class="token string">\'Network connection failed !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">loadingToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">\'Loading...\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Load complete !!!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment" spellcheck="true">/* eslint global-require: 0 */</span>\n<span class="token keyword">const</span> ToastExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Text toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showToastNoMask<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Without mask<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Icon type<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./reload.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>\n      Cumstom Icon\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>successToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Success toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>failToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Failed toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>offline<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Network failure toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loadingToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Loading toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ToastExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(){v["default"].info("This is a toast tips !!!",1)}function s(){v["default"].info("Toast without mask !!!",2,null,!1)}function e(){v["default"].success("Load success !!!",1)}function o(){v["default"].fail("Load failed !!!",1)}function p(){v["default"].offline("Network connection failed !!!",1)}function l(){v["default"].loading("Loading...",1,function(){console.log("Load complete !!!")})}var c=t(1),u=(t(9),t(31),t(30)),i=n(u),r=(t(16),t(24)),f=n(r),d=(t(34),t(33)),k=n(d),m=(t(22),t(21)),g=n(m),h=(t(166),t(165)),v=n(h),y=function(){return c.createElement(i["default"],null,c.createElement(g["default"],null),c.createElement(k["default"],{onClick:a},"Text toast"),c.createElement(g["default"],null),c.createElement(k["default"],{onClick:s},"Without mask"),c.createElement(g["default"],null),c.createElement(k["default"],{onClick:function(){return v["default"].info(c.createElement(f["default"],{type:t(957)}),1)}},"Cumstom Icon"),c.createElement(g["default"],null),c.createElement(k["default"],{onClick:e},"Success toast"),c.createElement(g["default"],null),c.createElement(k["default"],{onClick:o},"Failed toast"),c.createElement(g["default"],null),c.createElement(k["default"],{onClick:p},"Network failure toast"),c.createElement(g["default"],null),c.createElement(k["default"],{onClick:l},"Loading toast"),c.createElement(g["default"],null))};return c.createElement(y,null)}}},738:function(n,a,t){n.exports={basic:t(683)}},957:function(n,a,t){var s=t(19),e='<symbol viewBox="0 0 64 64" id="reload" ><title>Share Icons Copy</title><path d="M59.177 29.5s-1.25 0-1.25 2.5c0 14.471-11.786 26.244-26.253 26.244C17.206 58.244 5.417 46.47 5.417 32c0-13.837 11.414-25.29 25.005-26.26v6.252c0 .622-.318 1.635.198 1.985a1.88 1.88 0 0 0 1.75.19l21.37-8.545c.837-.334 1.687-1.133 1.687-2.384C55.425 1.99 53.944 2 53.044 2h-21.37C15.134 2 1.667 15.46 1.667 32c0 16.543 13.467 30 30.007 30 16.538 0 29.918-13.458 29.993-30 .01-2.5-1.24-2.5-1.24-2.5h-1.25" fill-rule="evenodd"/></symbol>';n.exports=s.add(e,"reload")}});