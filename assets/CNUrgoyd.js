import{t as l,v as c,x as n,y as d,q as u,J as x,_ as f,B as r,z as s}from"./S-WXY-wf.js";const b={class:"flex flex-col text-center items-center m-10 transform transition-transform duration-500 hover:scale-105"},I=["src"],m={__name:"homepageItem",props:{title:{type:String,required:!0},image:{type:String,required:!0}},setup(a){const e=a,i=`${u().app.baseURL}${e.image}`;return(o,t)=>(l(),c("div",b,[n("img",{src:`${i}`,class:"h-32"},null,8,I),n("p",null,d(a.title),1)]))}},v=x("/images/selfie.png"),h={name:"IndexPage",components:m,methods:{openLink(a){window.open(a,"_blank")}}},w={class:"flex flex-col items-center text-center p-5"},k={class:"flex flex-wrap justify-center"};function _(a,e,g,p,i,o){const t=m;return l(),c("div",w,[e[2]||(e[2]=n("h1",{class:"text-4xl lg:text-8xl mb-10 text-white"},"Hello.",-1)),e[3]||(e[3]=n("h2",{class:"text-2xl lg:text-4xl m-5"},[r(" I'm Karan, a software engineer studying at "),n("br"),n("span",{class:"text-green-800"},"Cal Poly SLO"),r(". ")],-1)),n("div",{class:"p-4 rounded-full mt-20 mb-20 animate-custom-pulse cursor-pointer transform transition-transform duration-500 hover:scale-105",onClick:e[0]||(e[0]=y=>o.openLink("https://www.linkedin.com/in/karanvir-sandhu-046727254/"))},e[1]||(e[1]=[n("div",{class:"p-6 bg-black bg-opacity-10 rounded-full animate-custom-pulse"},[n("img",{src:v,class:"w-72 rounded-full"})],-1)])),e[4]||(e[4]=n("h3",{class:"mb-20 bg-black rounded-3xl p-2"}," I'm a full stack programmer with knowledge and experience on creating and deploying web-based applications. ",-1)),e[5]||(e[5]=n("h2",{class:"text-2xl mb-20 text-white bg-black rounded-3xl p-2"}," Here's what I have experience in: ",-1)),n("div",k,[s(t,{image:"images/reactIcon.png",title:"React.JS"}),s(t,{image:"images/vueIcon.png",title:"Vue.JS"}),s(t,{image:"images/expressIcon.png",title:"Express.js"}),s(t,{image:"images/nuxtIcon.png",title:"Nuxt.JS"}),s(t,{image:"images/javascriptIcon.png",title:"JavaScript"}),s(t,{image:"images/javaIcon.png",title:"Java"}),s(t,{image:"images/pythonIcon.png",title:"Python"}),s(t,{image:"images/cIcon.png",title:"C"}),s(t,{image:"images/azureIcon.png",title:"Microsoft Azure"}),s(t,{image:"images/awsIcon.png",title:"AWS"}),s(t,{image:"images/jiraIcon.png",title:"Jira Ticketing"})])])}const $=f(h,[["render",_]]);export{$ as default};
