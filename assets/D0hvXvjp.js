import{J as t,_ as i,v as r,x as s,B as a,K as d,t as c}from"./CJPGDBKz.js";const p=t("/images/foodfunds/foodfunds-mobile2.png"),x=t("/images/foodfunds/foodfunds-bcrypt.png"),u=t("/images/foodfunds/foodfunds-mobile.png"),f=t("/images/foodfunds/foodfunds-mobile3.png"),g={name:"FoodFunds",methods:{openLink(o){window.open(o,"_blank")}}},m={class:"flex flex-col items-center text-center p-10 space-y-5"},b={class:"animate-pulse text-sea-green cursor-pointer"};function v(o,e,h,y,k,l){return c(),r("div",m,[e[2]||(e[2]=s("h1",{class:"text-4xl lg:text-8xl"},[a(" {"),s("span",{class:"text-neon-blue"},"FoodFunds"),a("} ")],-1)),e[3]||(e[3]=s("h3",{class:"text-3xl"},"A grocery tracking app.",-1)),s("div",b,[s("p",{onClick:e[0]||(e[0]=n=>l.openLink("https://github.com/realkaranvir/food-funds")),class:"hover:text-blue-600"}," View Github Repo -> "),s("p",{onClick:e[1]||(e[1]=n=>l.openLink("https://victorious-ocean-0c8e10110.5.azurestaticapps.net")),class:"hover:text-blue-600"}," Website Link -> ")]),e[4]||(e[4]=d('<div class="flex flex-col lg:flex-row items-center justify-center flex-wrap"><h3 class="text-lg lg:text-3xl max-w-xl"> FoodFunds uses React.js for the frontend, Express.js for the backend, and PostgreSQL for the database. The app is currently hosted on Azure, with a CI/CD pipeline implemented via GitHub Actions. You can check it out for yourself using the link at the top of this page. </h3><div class="bg-black bg-opacity-10 p-4 rounded-3xl m-5"><div class="bg-black bg-opacity-10 p-2 rounded-3xl"><img src="'+p+'" class="w-72 rounded-3xl"></div></div></div><div class="flex flex-col-reverse lg:flex-row items-center justify-center flex-wrap"><div class="bg-black bg-opacity-10 p-4 rounded-3xl m-5"><div class="bg-black bg-opacity-10 p-2 rounded-3xl"><img src="'+x+'" class="w-72 rounded-3xl"></div></div><h3 class="text-lg lg:text-3xl max-w-xl"> Once you sign up or login, your password is hashed and stored securely in Supabase. Your browser then recieves a signed JWT token. </h3></div><div class="flex flex-col lg:flex-row items-center justify-center flex-wrap"><h3 class="text-lg lg:text-3xl max-w-xl"> I needed a way to track my grocery spending now that I&#39;m cooking for myself. The app currently monitors upcoming expirations, tracks all purchased foods, and calculates monthly grocery spending. Additional features and data analysis tools are being added. </h3><div class="bg-black bg-opacity-10 p-4 rounded-3xl m-5"><div class="bg-black bg-opacity-10 p-2 rounded-3xl"><img src="'+u+'" class="w-72 rounded-3xl"></div></div></div><div class="flex flex-col-reverse lg:flex-row items-center justify-center flex-wrap"><div class="bg-black bg-opacity-10 p-4 rounded-3xl m-5"><div class="bg-black bg-opacity-10 p-2 rounded-3xl"><img src="'+f+'" class="w-72 rounded-3xl"></div></div><h3 class="text-lg lg:text-3xl max-w-xl"> Most of the metrics below aren&#39;t in use currently but will be as I add more features. I plan on creating a shopping list component and a calorie/macro tracker. </h3></div>',4))])}const _=i(g,[["render",v]]);export{_ as default};
