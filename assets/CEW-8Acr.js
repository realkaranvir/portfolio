import{t as d,v as u,x as t,_,r as b,g as m,z as e,A as l,L as v,B as a,M as g,T as k,N as w,O as h}from"./dRaJTB09.js";function T(i,o){return d(),u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})])}const j={name:"Sidebar",components:{ChevronRightIcon:T},setup(){const i=b(!1);function o(){i.value=!i.value}return{isProjectsOpen:i,toggleProjects:o}}},C={class:"w-64 bg-gray-800 h-screen fixed top-0 left-0 bg-opacity-20"},P={class:"p-6"},y={class:"mb-4"},S={class:"flex items-center space-x-2 cursor-pointer"},N={class:"mb-4"},$={class:"flex items-center space-x-2 cursor-pointer"},I={class:"mb-4"},B={class:"flex items-center space-x-2 cursor-pointer"},O={key:0,class:"mb-2 ml-8 text-white animate-fade"};function R(i,o,f,c,x,n){const r=m("ChevronRightIcon"),s=m("router-link");return d(),u("aside",C,[t("div",P,[o[10]||(o[10]=t("div",{class:"text-2xl mb-6"},[t("p",null,"Karan Sandhu")],-1)),t("nav",null,[t("ul",null,[t("li",y,[e(s,{to:"/",class:"block hover:text-blue-800"},{default:l(()=>[t("div",S,[e(r,{class:"h-4 w-4 text-white"}),o[1]||(o[1]=t("p",null,"Home",-1))])]),_:1})]),t("li",N,[e(s,{to:"/resume",class:"block hover:text-blue-800"},{default:l(()=>[t("div",$,[e(r,{class:"h-4 w-4 text-white"}),o[2]||(o[2]=t("p",null,"Resume",-1))])]),_:1})]),t("li",I,[e(s,{to:"/about",class:"block hover:text-blue-800"},{default:l(()=>[t("div",B,[e(r,{class:"h-4 w-4 text-white"}),o[3]||(o[3]=t("p",null,"About",-1))])]),_:1})])]),t("div",null,[t("div",{onClick:o[0]||(o[0]=(...p)=>c.toggleProjects&&c.toggleProjects(...p)),class:"flex items-center space-x-2 cursor-pointer"},[e(r,{class:v([{"rotate-90":c.isProjectsOpen,"rotate-0":!c.isProjectsOpen},"h-4 w-4 text-white transition-transform duration-300"])},null,8,["class"]),o[4]||(o[4]=t("p",{class:"block hover:text-blue-800 non-selectable"},"Projects",-1))]),e(k,{name:"fade-in-out"},{default:l(()=>[c.isProjectsOpen?(d(),u("div",O,[e(s,{to:"/Haggle",class:"block hover:text-blue-600"},{default:l(()=>o[5]||(o[5]=[a(" Haggle.js ")])),_:1}),e(s,{to:"/FoodFunds",class:"block hover:text-blue-600"},{default:l(()=>o[6]||(o[6]=[a(" FoodFunds.js ")])),_:1}),e(s,{to:"/Tar",class:"block hover:text-blue-600"},{default:l(()=>o[7]||(o[7]=[a(" Tar.c ")])),_:1}),e(s,{to:"/Portfolio",class:"block hover:text-blue-800"},{default:l(()=>o[8]||(o[8]=[a(" Portfolio.vue ")])),_:1}),e(s,{to:"/projects",class:"block font-bold text-sea-green hover:text-blue-800"},{default:l(()=>o[9]||(o[9]=[a(" All Projects -> ")])),_:1})])):g("",!0)]),_:1})])])])])}const z=_(j,[["render",R],["__scopeId","data-v-6daf1e5f"]]),A={data(){return{scrollY:0}},computed:{backgroundStyle(){return{backgroundColor:`rgba(0, 120, 148, ${this.scrollY>50?.8:0})`}}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){this.scrollY=window.scrollY||document.documentElement.scrollTop},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}},E={class:"fixed top-0 w-screen p-2 pt-8 justify-center z-50"},F={class:"flex justify-around"};function H(i,o,f,c,x,n){const r=m("router-link");return d(),u("div",E,[t("nav",{style:w(n.backgroundStyle),class:"flex-1 text-white p-2 rounded-3xl transition-bg"},[t("ul",F,[t("li",{onClick:o[0]||(o[0]=(...s)=>n.scrollToTop&&n.scrollToTop(...s))},[e(r,{to:"/"},{default:l(()=>o[4]||(o[4]=[a("Home")])),_:1})]),t("li",{onClick:o[1]||(o[1]=(...s)=>n.scrollToTop&&n.scrollToTop(...s))},[e(r,{to:"/resume"},{default:l(()=>o[5]||(o[5]=[a("Resume")])),_:1})]),t("li",{onClick:o[2]||(o[2]=(...s)=>n.scrollToTop&&n.scrollToTop(...s))},[e(r,{to:"/about"},{default:l(()=>o[6]||(o[6]=[a("About")])),_:1})]),t("li",{onClick:o[3]||(o[3]=(...s)=>n.scrollToTop&&n.scrollToTop(...s))},[e(r,{to:"/projects"},{default:l(()=>o[7]||(o[7]=[a("Projects")])),_:1})])])],4)])}const V=_(A,[["render",H],["__scopeId","data-v-0b40086f"]]),Y={mounted(){window.scrollTo({top:0,behavior:"smooth"})}},L={class:"flex h-screen lg:flex-col"},D={class:"flex-1 lg:ml-64 lg:mt-0 ml-0 mt-32"};function K(i,o,f,c,x,n){const r=z,s=V,p=h;return d(),u("div",L,[e(r,{class:"hidden lg:block"}),e(s,{class:"block lg:hidden"}),t("div",D,[e(p,{class:"animate-fade"})])])}const q=_(Y,[["render",K],["__scopeId","data-v-1d4b8ec2"]]);export{q as default};
