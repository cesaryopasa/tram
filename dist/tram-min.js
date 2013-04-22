/*!
  * tram.js v0.5.5-global
  * Cross-browser CSS3 transitions in JavaScript.
  * https://github.com/bkwld/tram
  * MIT License
  */
window.tram=function(t){function e(t,e){var i=new T.Bare;return i.init(t,e)}function i(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}function n(t){var e=parseInt(t.slice(1),16),i=255&e>>16,n=255&e>>8,r=255&e;return[i,n,r]}function r(t,e,i){return"#"+(1<<24|t<<16|e<<8|i).toString(16).slice(1)}function s(){}function a(t,e){W("Type warning: Expected: ["+t+"] Got: ["+typeof e+"] "+e)}function o(t,e,i){W("Units do not match ["+t+"]: "+e+", "+i)}function u(t){for(var e=-1,i=t?t.length:0,n=[];i>++e;){var r=t[e];r&&n.push(r)}return n}var c=function(t,e,i){function n(t){return"object"==typeof t}function r(t){return"function"==typeof t}function s(){}function a(o,u){function c(){var t=new h;return r(t.init)&&t.init.apply(t,arguments),t}function h(){}u===i&&(u=o,o=Object),c.Bare=h;var l,f=s[t]=o[t],d=h[t]=c[t]=new s;return d.constructor=c,c.mixin=function(e){return h[t]=c[t]=a(c,e)[t],c},c.open=function(t){if(l={},r(t)?l=t.call(c,d,f,c,o):n(t)&&(l=t),n(l))for(var i in l)e.call(l,i)&&(d[i]=l[i]);return r(d.init)||(d.init=o),c},c.open(u)}return a}("prototype",{}.hasOwnProperty),h={ease:["ease",function(t,e,i,n){var r=(t/=n)*t,s=r*t;return e+i*(-2.75*s*r+11*r*r+-15.5*s+8*r+.25*t)}],"ease-in":["ease-in",function(t,e,i,n){var r=(t/=n)*t,s=r*t;return e+i*(-1*s*r+3*r*r+-3*s+2*r)}],"ease-out":["ease-out",function(t,e,i,n){var r=(t/=n)*t,s=r*t;return e+i*(.3*s*r+-1.6*r*r+2.2*s+-1.8*r+1.9*t)}],"ease-in-out":["ease-in-out",function(t,e,i,n){var r=(t/=n)*t,s=r*t;return e+i*(2*s*r+-5*r*r+2*s+2*r)}],linear:["linear",function(t,e,i,n){return i*t/n+e}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(t,e,i,n){return i*(t/=n)*t+e}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(t,e,i,n){return-i*(t/=n)*(t-2)+e}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(t,e,i,n){return 1>(t/=n/2)?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(t,e,i,n){return i*(t/=n)*t*t+e}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(t,e,i,n){return i*((t=t/n-1)*t*t+1)+e}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(t,e,i,n){return 1>(t/=n/2)?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(t,e,i,n){return i*(t/=n)*t*t*t+e}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(t,e,i,n){return-i*((t=t/n-1)*t*t*t-1)+e}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(t,e,i,n){return 1>(t/=n/2)?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(t,e,i,n){return i*(t/=n)*t*t*t*t+e}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(t,e,i,n){return i*((t=t/n-1)*t*t*t*t+1)+e}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(t,e,i,n){return 1>(t/=n/2)?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(t,e,i,n){return-i*Math.cos(t/n*(Math.PI/2))+i+e}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(t,e,i,n){return i*Math.sin(t/n*(Math.PI/2))+e}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(t,e,i,n){return-i/2*(Math.cos(Math.PI*t/n)-1)+e}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(t,e,i,n){return 0===t?e:i*Math.pow(2,10*(t/n-1))+e}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(t,e,i,n){return t===n?e+i:i*(-Math.pow(2,-10*t/n)+1)+e}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(t,e,i,n){return 0===t?e:t===n?e+i:1>(t/=n/2)?i/2*Math.pow(2,10*(t-1))+e:i/2*(-Math.pow(2,-10*--t)+2)+e}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(t,e,i,n){return-i*(Math.sqrt(1-(t/=n)*t)-1)+e}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(t,e,i,n){return i*Math.sqrt(1-(t=t/n-1)*t)+e}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(t,e,i,n){return 1>(t/=n/2)?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(t,e,i,n,r){return void 0===r&&(r=1.70158),i*(t/=n)*t*((r+1)*t-r)+e}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(t,e,i,n,r){return void 0===r&&(r=1.70158),i*((t=t/n-1)*t*((r+1)*t+r)+1)+e}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(t,e,i,n,r){return void 0===r&&(r=1.70158),1>(t/=n/2)?i/2*t*t*(((r*=1.525)+1)*t-r)+e:i/2*((t-=2)*t*(((r*=1.525)+1)*t+r)+2)+e}]},l={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},f=document,d=window,p="bkwld-tram-js",m=/[\-\.0-9]/g,b=/[A-Z]/,v="number",g=/^(rgb|#)/,y=/(em|cm|mm|in|pt|pc|px)$/,w=/(em|cm|mm|in|pt|pc|px|%)$/,k=/(deg|rad|turn)$/,x="unitless",z=" ",q=f.createElement("a"),$=["Webkit","Moz","O","ms"],M=["-webkit-","-moz-","-o-","-ms-"],A=function(t){if(t in q.style)return{dom:t,css:t};var e,i,n="",r=t.split("-");for(e=0;r.length>e;e++)n+=r[e].charAt(0).toUpperCase()+r[e].slice(1);for(e=0;$.length>e;e++)if(i=$[e]+n,i in q.style)return{dom:i,css:M[e]+t}},B=e.support={bind:Function.prototype.bind,transform:A("transform"),transition:A("transition"),backface:A("backface-visibility"),timing:A("transition-timing-function")};if(B.transition){var R=B.timing.dom;if(q.style[R]=h["ease-in-back"][0],!q.style[R])for(var F in l)h[F][0]=l[F]}var j=e.frame=function(){return d.requestAnimationFrame||d.webkitRequestAnimationFrame||d.mozRequestAnimationFrame||d.oRequestAnimationFrame||d.msRequestAnimationFrame||function(t){d.setTimeout(t,16)}}(),U=e.now=function(){var t=d.performance,e=t&&(t.now||t.webkitNow||t.msNow||t.mozNow);return e&&B.bind?e.bind(t):Date.now||function(){return+new Date}}(),G=c(function(e){function n(t,e){var i=u((""+t).split(z)),n=i[0];e=e||{};var r=L[n];if(!r)return W("Unsupported property: "+n);if(!e.weak||!this.props[n]){var s=r[0],a=this.props[n];return a||(a=this.props[n]=new s.Bare),a.init(this.$el,i,r,e),a}}function r(t,e){if(t){var i=typeof t;if(e||(this.timer&&this.timer.destroy(),this.queue=[]),"string"==i&&E[t])return r.call(this,E[t]);if("function"==i)return t.call(this,this),void 0;if("object"==i){var n=0;d.call(this,t,function(t,e){t.span>n&&(n=t.span),t.stop(),t.animate(e)}),f.call(this),n>0&&(this.timer=new P({duration:n,context:this}),e&&(this.timer.complete=a));var s=this,o=!1,u={};j(function(){d.call(s,t,function(t){t.active&&(o=!0,u[t.name]=t.nextStyle)}),o&&s.$el.css(u)})}}}function s(t){return this.timer&&this.timer.active?(this.queue.push(t),this.timer.complete=a,void 0):W("No active transition timer. Use start() before then().")}function a(){if(this.timer&&this.timer.destroy(),this.queue.length){var t=this.queue.shift();r.call(this,t,!0)}}function o(t){this.timer&&this.timer.destroy(),this.queue=[];var e;"string"==typeof t?(e={},e[t]=1):e="object"==typeof t?t:this.props,d.call(this,e,p),f.call(this)}function c(t){o.call(this,t),d.call(this,t,m,v)}function h(t){"string"!=typeof t&&(t="block"),this.el.style.display=t}function l(){o.call(this),this.el.style.display="none"}function f(){var t,e,i=[];for(t in this.props)e=this.props[t],e.active&&i.push(e.string);i=i.join(","),this.style!==i&&(this.style=i,this.el.style[B.transition.dom]=i)}function d(t,e,r){var s,a,o,u,c=e!==p,h={};for(s in t)o=t[s],s in Q?(h.transform||(h.transform={}),h.transform[s]=o):(b.test(s)&&(s=i(s)),s in L?h[s]=o:(u||(u={}),u[s]=o));for(s in h){if(o=h[s],a=this.props[s],!a){if(!c)continue;a=n.call(this,s)}e.call(this,a,o)}r&&u&&r.call(this,u)}function p(t){t.stop()}function m(t,e){t.set(e)}function v(t){this.$el.css(t)}function g(t,i){e[t]=function(){return this.children?y.call(this,i,arguments):(i.apply(this,arguments),this)}}function y(t,e){var i,n=this.children.length;for(i=0;n>i;i++)t.apply(this.children[i],e);return this}e.init=function(e){this.$el=t(e),this.el=this.$el[0],this.props={},this.queue=[],this.style="",B.backface&&Y.hideBackface&&(this.el.style[B.backface.dom]="hidden")},g("add",n),g("start",r),g("then",s),g("next",a),g("stop",o),g("set",c),g("show",h),g("hide",l)}),T=c(G,function(e){function i(e,i){var n=t.data(e,p)||t.data(e,p,new G.Bare);return n.el||n.init(e),i?n.start(i):n}e.init=function(e,n){var r=t(e);if(!r.length)return this;if(1===r.length)return i(r[0],n);var s=[];return r.each(function(t,e){s.push(i(e,n))}),this.children=s,this}}),I=c(function(t){function e(t,e,i){if(void 0!==e&&(i=e),void 0===t)return i;var n=i;return o.test(t)||!u.test(t)?n=parseInt(t,10):u.test(t)&&(n=1e3*parseFloat(t)),0>n&&(n=0),n===n?n:i}function i(t,e,i){return void 0!==e&&(i=e),t in h?t:i}function n(t){var e=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);return(e?r(e[1],e[2],e[3]):t).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var s={duration:500,ease:"ease",delay:0};t.init=function(t,n,r,a){this.$el=t,this.el=t[0];var o=n[0];r[2]&&(o=r[2]),D[o]&&(o=D[o]),this.name=o,this.type=r[1],this.duration=e(n[1],this.duration,s.duration),this.ease=i(n[2],this.ease,s.ease),this.delay=e(n[3],this.delay,s.delay),this.span=this.duration+this.delay,this.active=!1,Y.fallback||a.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+z+this.duration+"ms"+("ease"!=this.ease?z+h[this.ease][0]:"")+(this.delay?z+this.delay+"ms":""))},t.set=function(t){t=this.convert(t,this.type),H(this.el,this.name,t),this.redraw()},t.transition=function(t){this.active=!0,this.nextStyle=this.convert(t,this.type)},t.fallback=function(t){this.tween=new O({from:this.convert(this.get(),this.type),to:this.convert(t,this.type),duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.get=function(){return C(this.el,this.name)},t.update=function(t){H(this.el,this.name,t)},t.stop=function(){this.tween&&this.tween.destroy(),this.active&&(this.active=!1,H(this.el,this.name,this.get()))},t.convert=function(t,e){var i,r="number"==typeof t,s="string"==typeof t;switch(e){case v:if(r)return t;if(s&&""===t.replace(m,""))return+t;i="number(unitless)";break;case g:if(s){if(""===t&&this.original)return this.original;if(e.test(t))return"#"==t.charAt(0)&&7==t.length?t:n(t)}i="hex or rgb string";break;case y:if(r)return t+Y.defaultUnit;if(s&&e.test(t))return t;i="number(px) or string(unit)";break;case w:if(r)return t+Y.defaultUnit;if(s&&e.test(t))return t;i="number(px) or string(unit or %)";break;case k:if(r)return t+Y.defaultAngle;if(s&&e.test(t))return t;i="number(deg) or string(angle)";break;case x:if(r)return t;if(s&&w.test(t))return t;i="number(unitless) or string(unit or %)"}return a(i,t),t},t.redraw=function(){this.el.offsetHeight};var o=/ms/,u=/s|\./}),S=c(I,function(t,e){t.init=function(){e.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),g))}}),Z=c(I,function(t,e){t.init=function(){e.init.apply(this,arguments),this.animate=this.fallback},t.get=function(){return this.$el[this.name]()},t.update=function(t){this.$el[this.name](t)}}),N=c(I,function(t,e){function i(t,e){var i,n,r,s,a;for(i in t)s=Q[i],r=s[0],n=s[1]||i,a=this.convert(t[i],r),e.call(this,n,a,r)}t.init=function(){e.init.apply(this,arguments),this.current||(this.current={},Q.perspective&&(this.current.perspective="1000px",H(this.el,this.name,this.style(this.current)),this.redraw()))},t.set=function(t){i.call(this,t,function(t,e){this.current[t]=e}),H(this.el,this.name,this.style(this.current)),this.redraw()},t.transition=function(t){var e=this.values(t);this.tween=new X({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease});var i,n={};for(i in this.current)n[i]=i in e?e[i]:this.current[i];this.active=!0,this.nextStyle=this.style(n)},t.fallback=function(t){var e=this.values(t);this.tween=new X({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.update=function(){H(this.el,this.name,this.style(this.current))},t.style=function(t){var e,i="";for(e in t)i+=e+"("+t[e]+") ";return i},t.values=function(t){var e,n={};return i.call(this,t,function(t,i,r){n[t]=i,void 0===this.current[t]&&(e=0,~t.indexOf("scale")&&(e=1),this.current[t]=this.convert(e,r))}),n}}),O=c(function(e){function i(t){1===d.push(t)&&j(a)}function a(){var t,e,i=d.length;if(i)for(j(a),e=U(),t=i;t--;)d[t].render(e)}function u(e){var i,n=t.inArray(e,d);n>=0&&(i=d.slice(n+1),d.length=n,i.length&&(d=d.concat(i)))}function c(t){return Math.round(t*p)/p}function l(t,e,i){return r(t[0]+i*(e[0]-t[0]),t[1]+i*(e[1]-t[1]),t[2]+i*(e[2]-t[2]))}var f={ease:h.ease[1],from:0,to:1};e.init=function(t){this.duration=t.duration||0,this.delay=t.delay||0;var e=t.ease||f.ease;h[e]&&(e=h[e][1]),"function"!=typeof e&&(e=f.ease),this.ease=e,this.update=t.update||s,this.complete=t.complete||s,this.context=t.context||this,this.name=t.name;var i=t.from,n=t.to;void 0===i&&(i=f.from),void 0===n&&(n=f.to),this.unit=t.unit||"","number"==typeof i&&"number"==typeof n?(this.begin=i,this.change=n-i):this.format(n,i),this.start=U(),t.autoplay!==!1&&this.play()},e.play=function(){this.active||(this.start||(this.start=U()),this.active=!0,i(this))},e.stop=function(){this.active&&(this.active=!1,u(this))},e.render=function(t){var e,i=t-this.start;if(this.delay){if(this.delay>=i)return;i-=this.delay}if(this.duration>i){var n=this.ease(i,0,1,this.duration);return e=this.startRGB?l(this.startRGB,this.endRGB,n):c(this.begin+n*this.change),this.unit&&(e+=this.unit),this.value=e,this.update.call(this.context,e),void 0}e=this.endHex||this.begin+this.change,this.unit&&(e+=this.unit),this.value=e,this.update.call(this.context,e),this.complete.call(this.context),this.destroy()},e.format=function(t,e){if(e+="",t+="","#"==t.charAt(0))return this.startRGB=n(e),this.endRGB=n(t),this.endHex=t,this.begin=0,this.change=1,void 0;if(!this.unit){var i=e.replace(m,""),r=t.replace(m,"");i!==r&&o("tween",e,t),this.unit=i}e=parseFloat(e),t=parseFloat(t),this.begin=this.value=e,this.change=t-e},e.destroy=function(){this.stop(),this.ease=this.update=this.complete=this.context=null};var d=[],p=1e3}),P=c(O,function(t){t.init=function(t){this.duration=t.duration||0,this.complete=t.complete||s,this.context=t.context,this.play()},t.render=function(t){var e=t-this.start;this.duration>e||(this.complete.call(this.context),this.destroy())}}),X=c(O,function(t,e){t.init=function(t){this.context=t.context,this.update=t.update,this.tweens=[],this.current=t.current;var e,i;for(e in t.values)i=t.values[e],this.current[e]!==i&&this.tweens.push(new O({name:e,from:this.current[e],to:i,duration:t.duration,delay:t.delay,ease:t.ease,autoplay:!1}));this.play()},t.render=function(t){var e,i,n=this.tweens.length,r=!1;for(e=n;e--;)i=this.tweens[e],i.ease&&(i.render(t),this.current[i.name]=i.value,r=!0);return r?(this.update&&this.update.call(this.context),void 0):this.destroy()},t.destroy=function(){if(e.destroy.call(this),this.tweens){var t,i=this.tweens.length;for(t=i;t--;)this.tweens[t].destroy();this.tweens=null,this.current=null}}}),Y=e.config={defaultUnit:"px",defaultAngle:"deg",hideBackface:!0,fallback:!B.transition,agentTests:[]};e.fallback=function(t){if(!B.transition)return Y.fallback=!0;Y.agentTests.push("("+t+")");var e=RegExp(Y.agentTests.join("|"),"i");Y.fallback=e.test(navigator.userAgent)},e.fallback("6.0.(2|3) Safari");var E={};e.macro=function(t,e){E[t]=e},e.tween=function(t){return new O(t)},e.delay=function(t,e,i){return new P({complete:t,duration:e,context:i})},t.fn.tram=function(t){return new T(this,t),this};var H=t.style,C=t.css,D={transform:B.transform&&B.transform.css},L={color:[S,g],background:[S,g,"background-color"],"outline-color":[S,g],"border-color":[S,g],"border-top-color":[S,g],"border-right-color":[S,g],"border-bottom-color":[S,g],"border-left-color":[S,g],"border-width":[I,y],"border-top-width":[I,y],"border-right-width":[I,y],"border-bottom-width":[I,y],"border-left-width":[I,y],"border-spacing":[I,y],"letter-spacing":[I,y],margin:[I,y],"margin-top":[I,y],"margin-right":[I,y],"margin-bottom":[I,y],"margin-left":[I,y],padding:[I,y],"padding-top":[I,y],"padding-right":[I,y],"padding-bottom":[I,y],"padding-left":[I,y],"outline-width":[I,y],opacity:[I,v],top:[I,w],right:[I,w],bottom:[I,w],left:[I,w],"font-size":[I,w],"text-indent":[I,w],"word-spacing":[I,w],width:[I,w],"min-width":[I,w],"max-width":[I,w],height:[I,w],"min-height":[I,w],"max-height":[I,w],"line-height":[I,x],"scroll-top":[Z,v,"scrollTop"],"scroll-left":[Z,v,"scrollLeft"]},Q={};B.transform&&(L.transform=[N],Q={x:[w,"translateX"],y:[w,"translateY"],rotate:[k],rotateX:[k],rotateY:[k],scale:[v],scaleX:[v],scaleY:[v],skew:[k],skewX:[k],skewY:[k]}),B.transform&&B.backface&&(Q.z=[w,"translateZ"],Q.rotateZ=[k],Q.scaleZ=[v],Q.perspective=[y]);var W=function(){var t="warn",e=window.console;return e&&e[t]?function(i){e[t](i)}:s}();return t.tram=e}(window.jQuery);