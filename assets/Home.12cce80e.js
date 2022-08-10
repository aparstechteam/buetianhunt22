import{r as i,o as e,c as s,a as t,b as n,w as r,u as c,d as l,e as d}from"./index.3c735363.js";const u={class:"container py-10 mx-auto text-center"},_={class:"max-w-md shadow rounded-2xl mx-auto pt-3"},m=t("h1",{class:"text-2xl"},"Potential buetian hunt",-1),h=t("h3",null,"22 Batch",-1),x=t("div",{class:"px-3"},[t("br"),t("h2",{class:"text-red-500 font-semibold text-lg"}," Marks Distribution "),t("pre",null,`
Physics 10
Chemistry 10
Math 10

Per question mark 10
Negative mark 2.5

Total Question: 30
Total Marks: 300
Exam Duration: 1 hour
                    `)],-1),p={key:0,class:"pb-5"},f={key:0,class:"text-green-600 font-semibold text-lg"},k={class:"flex justify-center pb-3 gap-3"},b=d("Go to Exam"),w={__name:"Home",setup(v){let o=JSON.parse(localStorage.getItem("buethunt22exam"))||null;return(g,y)=>{const a=i("router-link");return e(),s("div",null,[t("div",u,[t("div",_,[n(a,{to:"/",as:"div",class:"text-center uppercase text-gray-900"},{default:r(()=>[m,h]),_:1}),x,c(o)?(e(),s("div",p,[c(o).score>0?(e(),s("p",f," Thanks for participation. ")):l("",!0)])):l("",!0),t("div",k,[n(a,{to:"/exam",class:"btn"},{default:r(()=>[b]),_:1})])])])])}}};export{w as default};
