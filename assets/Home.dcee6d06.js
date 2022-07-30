import{r as d,o as s,c as a,a as e,b as c,w as l,u as o,n as u,t as _,d as i,e as x,f as r}from"./index.3d56b9ba.js";const m={class:"container py-10 mx-auto text-center"},h={class:"max-w-md shadow rounded-2xl mx-auto pt-3"},p=e("h1",{class:"text-2xl"},"Potential buetian hunt",-1),f=e("h3",null,"22 Batch",-1),b=e("div",{class:"px-3"},[e("div",{class:"font-bold text-xl mb-2"}," Exam Rules and Regulations "),r(),e("br"),e("p",null,"Please be polite and careful with the following information. "),e("h2",{class:"text-red-500 font-semibold text-lg"}," Demo Exam Ongoing "),e("pre",null,`
Physics 10
Chemistry 10
Math 10

Per question mark 10
Negative mark 2.5

Total Question: 30
TOtal Marks: 300
Exam Duration: 1 hour
                    `)],-1),g={key:0,class:"pb-5"},k=e("h2",{class:"text-xl font-semibold"},"You Scored",-1),y={key:0,class:"text-green-600 font-semibold text-lg"},v={key:1,class:"text-red-600 font-semibold text-lg"},w={class:"flex justify-center pb-3 gap-3"},N=r("Go to Exam"),B=r("Leaderboard"),V={__name:"Home",setup(C){let t=JSON.parse(localStorage.getItem("buethunt22exam"))||null;return(E,S)=>{const n=d("router-link");return s(),a("div",null,[e("div",m,[e("div",h,[c(n,{to:"/",as:"div",class:"text-center uppercase text-gray-900"},{default:l(()=>[p,f]),_:1}),b,o(t)?(s(),a("div",g,[k,e("h1",{class:u(["text-5xl font-bold",{"text-red-500":o(t).score<0,"text-green-600":o(t).score>0}])},_(o(t).score),3),o(t).score>0?(s(),a("p",y," You are selected for enrollment. ")):(s(),a("p",v," Sorry! You are not selected for enrollment. "))])):i("",!0),e("div",w,[o(t)?i("",!0):(s(),x(n,{key:0,to:"/exam",class:"btn"},{default:l(()=>[N]),_:1})),c(n,{to:"/ranking",class:"btn"},{default:l(()=>[B]),_:1})])])])])}}};export{V as default};
