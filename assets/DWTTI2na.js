import{J as t,_ as o,v as i,x as s,B as a,K as r,t as c}from"./DzpJMti_.js";const d=t("/images/huffman/huffman_usage.png"),f=t("/images/huffman/huffman_makefile.png"),g=t("/images/huffman/huffman_files.png"),p={name:"huffman",methods:{openLink(n){window.open(n,"_blank")}}},m={class:"flex flex-col items-center text-center p-10 space-y-5"},u={class:"animate-pulse text-sea-green cursor-pointer"};function x(n,e,h,b,v,l){return c(),i("div",m,[e[1]||(e[1]=s("h1",{class:"text-4xl lg:text-8xl"},[a(" {"),s("span",{class:"text-neon-blue"},"Huffman"),a("} ")],-1)),e[2]||(e[2]=s("h3",{class:"text-3xl"},"Huffman encoder and decoder",-1)),s("div",u,[s("p",{onClick:e[0]||(e[0]=w=>l.openLink("https://github.com/realkaranvir/huffman")),class:"hover:text-blue-600"}," View Github Repo -> ")]),e[3]||(e[3]=r('<div class="flex flex-col items-center justify-center flex-wrap"><div class="bg-black bg-opacity-10 p-2 rounded-3xl"><img src="'+d+'" class="w-lg rounded-3xl"></div><h3 class="text-lg lg:text-3xl w-lg bg-black rounded-3xl p-2"> The Huffman encoding project is a command-line tool designed for efficient file compression and decompression using the Huffman coding algorithm. It supports encoding text files to create compressed binary representations, as well as decoding these compressed files to restore the original content. </h3></div><div class="flex flex-col lg:flex-row items-center justify-center flex-wrap"><div class="bg-black bg-opacity-10 p-2 rounded-3xl"><img src="'+f+'" class="w-lg rounded-3xl"></div><h3 class="text-lg lg:text-3xl w-lg bg-black rounded-3xl p-2"> The Makefile for the Huffman encoding project automates the build process, ensuring consistency by using make to compile the source files and manage dependencies. It defines rules for building the hencode and hdecode executables with gcc, applying flags for warnings and standards compliance. The Makefile also features a clean target for easy removal of generated files, streamlining the development workflow. </h3></div><div class="flex flex-col lg:flex-row items-center justify-center flex-wrap"><div class="bg-black bg-opacity-10 p-2 rounded-3xl"><img src="'+g+'" class="w-lg rounded-3xl"></div></div>',3))])}const _=o(p,[["render",x]]);export{_ as default};
