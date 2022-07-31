import{r as i,o as t,c as o,a as e,b as d,w as r,u as a,d as n,e as u,f as c}from"./index.6da8f072.js";const _={class:"container py-10 mx-auto text-center"},m={class:"max-w-md shadow rounded-2xl mx-auto pt-3"},x=e("h1",{class:"text-2xl"},"Potential buetian hunt",-1),h=e("h3",null,"22 Batch",-1),p=e("div",{class:"px-3"},[e("div",{class:"font-bold text-xl mb-2"}," Exam Rules and Regulations "),c(),e("br"),e("p",null,"Please be polite and careful with the following information. "),e("h2",{class:"text-red-500 font-semibold text-lg"}," Demo Exam Ongoing "),e("pre",null,`
Physics 10
Chemistry 10
Math 10

Per question mark 10
Negative mark 2.5

Total Question: 30
TOtal Marks: 300
Exam Duration: 1 hour
                    `)],-1),f={key:0,class:"pb-5"},b={key:0,class:"text-green-600 font-semibold text-lg"},g={class:"flex justify-center pb-3 gap-3"},k=c("Go to Exam"),B={__name:"Home",setup(v){let s=JSON.parse(localStorage.getItem("buethunt22exam"))||null;return(y,w)=>{const l=i("router-link");return t(),o("div",null,[e("div",_,[e("div",m,[d(l,{to:"/",as:"div",class:"text-center uppercase text-gray-900"},{default:r(()=>[x,h]),_:1}),p,a(s)?(t(),o("div",f,[a(s).score>0?(t(),o("p",b," Thanks for participation. ")):n("",!0)])):n("",!0),e("div",g,[a(s)?(t(),u(l,{key:0,to:"/exam",class:"btn"},{default:r(()=>[k]),_:1})):n("",!0)])])])])}}};export{B as default};
