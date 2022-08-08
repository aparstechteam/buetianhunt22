import{r as d,o as e,c as s,a as t,b as n,w as l,u as r,d as c,e as i}from"./index.ecc5ea83.js";const u={class:"container py-10 mx-auto text-center"},_={class:"max-w-md shadow rounded-2xl mx-auto pt-3"},m=t("h1",{class:"text-2xl"},"Potential buetian hunt",-1),x=t("h3",null,"22 Batch",-1),h=t("div",{class:"px-3"},[t("div",{class:"font-bold text-xl mb-2"}," Exam Rules and Regulations "),i(),t("br"),t("p",null,"Exam instructions will be updated soon."),t("h2",{class:"text-red-500 font-semibold text-lg"}," Demo Exam Ongoing "),t("pre",null,`
Physics 10
Chemistry 10
Math 10

Per question mark 10
Negative mark 2.5

Total Question: 30
TOtal Marks: 300
Exam Duration: 1 hour
                    `)],-1),p={key:0,class:"pb-5"},b={key:0,class:"text-green-600 font-semibold text-lg"},f={class:"flex justify-center pb-3 gap-3"},g=i("Go to Exam"),N={__name:"Home",setup(k){let o=JSON.parse(localStorage.getItem("buethunt22exam"))||null;return(v,y)=>{const a=d("router-link");return e(),s("div",null,[t("div",u,[t("div",_,[n(a,{to:"/",as:"div",class:"text-center uppercase text-gray-900"},{default:l(()=>[m,x]),_:1}),h,r(o)?(e(),s("div",p,[r(o).score>0?(e(),s("p",b," Thanks for participation. ")):c("",!0)])):c("",!0),t("div",f,[n(a,{to:"/exam",class:"btn"},{default:l(()=>[g]),_:1})])])])])}}};export{N as default};
