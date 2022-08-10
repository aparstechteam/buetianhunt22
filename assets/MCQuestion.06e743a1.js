import{_ as x,m as v,s as w,r as k,o as r,c as o,F as _,a as y,b as s,d,t as u,e as S,n as m,f,p as T,g as L}from"./index.825cbad6.js";const M={data(){return{timing:null,solutionv:!1,retake:!1,questions:[],solution:[],result:[],unknown:!1,loading:!0,eload:!1,minute:0,second:0,end:Date.now()+12e6,show:!1,url:"",solutionpdf:"",starttime:Date.now(),ended:null,inttime:109090,immediate:!0,viewDetails:!1,score:null,status:{Correct:0,Wrong:0,Not_Answered:0}}},beforeRouteEnter(i,n,l){var t;if((t=JSON.parse(localStorage.getItem("buethunt22")))==null?void 0:t.roll){l();return}l({path:"/login"})},methods:{makeTitle(i){return i.charAt(0).toUpperCase()+i.slice(1)},endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){this.loading=!0;let i=null;this.url="https://script.google.com/macros/s/AKfycbyKHz7jvyUsAMXNtJuIOAmG3TgwJtts0uz13K49foBmL2ToRl5AWT9DiKXAtEyaC8MeZQ/exec?sheet=11ErcfVKrtNFDnbsR1ah5NUeVUuEieuSoIWqFSijiHMg",this.ended=new Date("10 August 2025").getTime(),this.timelimit=5*6e4,this.immediate=!1,i=60,JSON.parse(localStorage.getItem("buethunt22")).roll,this.unknown=!0,fetch(this.url+"&type=question").then(n=>n.json()).then(n=>{let l=localStorage.getItem(`attempt${this.$route.params.id}`);l?localStorage.setItem(`attempt${this.$route.params.id}`,Number(l)+1):localStorage.setItem(`attempt${this.$route.params.id}`,1),this.questions=n.map(t=>({...t,selected:""}));let g=i;this.inttime=g*6e4,this.end=g*6e4,this.loading=!1,this.showRemaining(this.end+Date.now()),this.autoSubmit()})},startRetake(){this.retake=!0,this.showRemaining(Date.now()+this.end)},retakeResult(){let i=this.solution.reduce((n,l)=>(l.correct==l.selected?n+=10:l.selected?n-=2.5:this.status.Not_Answered+=1,n),0);this.$swal({icon:"success",title:"Success",text:`You Scored ${i}`}).then(()=>{this.retake=!1,this.show=!1,this.questions=this.solution,this.viewDetails=!this.viewDetails,this.inttime=this.solution.length,this.score=i,this.solution=this.solution.map(n=>({...n,selected:""})),window.scroll(0,0)})},submitAns(){this.eload=!0;let i=Date.now()-this.starttime,n=this.questions.reduce((a,e)=>(e.correct==e.selected?(a+=10,this.status.Correct+=1):e.selected?(a-=2.5,this.status.Wrong+=1):this.status.Not_Answered+=1,a),0);if(clearTimeout(this.timing),localStorage.getItem("buethunt22exam")){this.$swal({icon:"success",title:"Success",text:"\u09B0\u09C7\u099C\u09BE\u09B2\u09CD\u099F \u099C\u09BE\u09A8\u09A4\u09C7 \u099A\u09CB\u0996 \u09B0\u09BE\u0996\u09CB, Apar's Student Group (ASG), Chinmoy's Physics Solutions (CPS) \u098F\u09AC\u0982 Rhombus Parallel Science Hub \u0997\u09CD\u09B0\u09C1\u09AA\u09C7\u0964"}).then(()=>{this.gotoLeaderboard()});return}let{roll:l,name:g,college:t}=JSON.parse(localStorage.getItem("buethunt22")),c=this.questions.map(a=>{let h=[a.a,a.b,a.c,a.d].indexOf(a.selected);return{id:a.id,s:h,correct:a.correct==h}});fetch(this.url,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify({roll:l,name:g,attempt:localStorage.getItem(`attempt${this.$route.params.id}`)||1,score:n,college:t,duration:i,submission:JSON.stringify(c)})}).then(()=>{clearTimeout(this.timing),this.$swal({icon:"success",title:"Success",text:"\u09B0\u09C7\u099C\u09BE\u09B2\u09CD\u099F \u099C\u09BE\u09A8\u09A4\u09C7 \u099A\u09CB\u0996 \u09B0\u09BE\u0996\u09CB, Apar's Student Group (ASG), Chinmoy's Physics Solutions (CPS) \u098F\u09AC\u0982 Rhombus Parallel Science Hub \u0997\u09CD\u09B0\u09C1\u09AA\u09C7\u0964"}).then(()=>{localStorage.removeItem("attempt"),localStorage.setItem("buethunt22exam",JSON.stringify({duration:i,attempt:localStorage.getItem("attempt")||1,roll:l,name:g,college:t})),this.gotoLeaderboard()})})},gotoLeaderboard(){this.$router.replace("/")},autoSubmit(){this.timing=setTimeout(()=>{this.show=!1,this.submitAns()},this.inttime)},showRemaining(i){this.show=!0;const n=setInterval(()=>{const l=i-Date.now();if(l<0){clearInterval(n);return}const g=Math.floor(l/this._days),t=Math.floor(l%this._days/this._hours),c=Math.floor(l%this._hours/this._minutes),a=Math.floor(l%this._minutes/this._seconds);this.second=a<10?"0"+a:a,this.minute=c<10?"0"+c:c,this.hours=t<10?"0"+t:t,this.days=g<10?"0"+g:g},1e3)}},created(){this.getQuestionLink(),window.scrollTo(0,0)},computed:{...v(["user"]),_seconds:()=>1e3,_minutes(){return this._seconds*60},_hours(){return this._minutes*60},_days(){return this._hours*24},currentTime:()=>w.state.currentTime}},p=i=>(T("data-v-03c8c228"),i=i(),L(),i),C={key:0,class:"pb-10"},H=p(()=>s("div",{class:"py-4 text-center space-y-2"},[s("h1",{class:"text-2xl font-bold text-gray-900"}," POTENTIAL BUETIAN HUNT "),s("h2",{class:"text-2xl font-bold text-gray-700"},"BATCH 22 EXAM"),s("p",{class:"text-center dark:text-white"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ")],-1)),A={key:0,class:"mx-2 md:w-2/3 md:mx-auto"},N=["innerHTML"],I={class:"flex gap-3 my-2"},D={class:"badge badge-success"},O={class:"badge badge-success"},R=p(()=>s("span",{class:"badge badge-success"},"10 Marks",-1)),E={class:"mt-3"},j=["innerHTML","onClick"],J=["innerHTML","onClick"],P=["innerHTML","onClick"],B=["innerHTML","onClick"],W={key:0,class:"my-2 text-center"},Q={key:1,class:"mb-10 text-center"},U=["disabled"],V={key:1,class:"mx-2 md:w-2/3 md:mx-auto"},G={class:"flex flex-wrap justify-center"},K={class:"w-full p-3 md:w-1/2"},z={class:"text-center"},F={class:"text-lg font-semibold text-gray-900 dark:text-white"},X={class:"text-gray-600 dark:text-white"},Y={class:"flex flex-wrap items-center justify-center gap-3 p-3 rounded bg-gray-50"},Z={class:"text-gray-900"},$={class:"text-lg font-bold"},q={class:"text-lg font-bold"},ee={class:"text-lg font-bold"},te={class:"text-lg font-bold"},se=["innerHTML"],re={class:"mt-3"},oe=["innerHTML"],ne=["innerHTML"],ie=["innerHTML"],le=["innerHTML"],ae={key:0,class:"my-2 poppins"},de=["innerHTML"],ce={class:"material-icons"},ue={key:0,class:"my-2 text-center"},he={key:1,class:"mb-10 text-center"},ge=["disabled"],me={key:1,class:"white--text fixed__timer"},be={class:"text-white bg-blue-500 border border-white shadow"},_e={key:1,class:"flex items-center justify-center w-full h-screen"},pe=p(()=>s("div",{class:"flex items-center justify-center -mt-24 space-x-1 text-sm text-gray-700"},[s("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[s("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})]),s("div",{class:"text-lg dark:text-white"},"Loading ...")],-1)),ye=[pe];function fe(i,n,l,g,t,c){const a=k("pie-chart");return t.loading?(r(),o("div",_e,ye)):(r(),o("div",{key:0,onContextmenu:e=>!1},[t.questions.length>0?(r(),o("div",C,[H,t.viewDetails?(r(),o("div",V,[s("div",null,[s("div",G,[s("div",K,[s("div",z,[s("h3",F," You Scored: "+u(t.score),1),s("p",X," out of "+u(t.questions.length),1)])])])]),s("div",null,[s("div",Y,[s("div",null,[S(a,{data:t.status},null,8,["data"])]),s("div",Z,[s("p",$," Total: "+u(t.questions.length),1),s("p",q," Correct: "+u(t.status.Correct),1),s("p",ee," Incorrect: "+u(t.status.Wrong),1),s("p",te," Not Answered: "+u(t.status.Not_Answered),1)])])]),(r(!0),o(_,null,y(t.questions,(e,h)=>(r(),o("div",{key:h,class:"p-5 mx-auto my-3 text-lg border border-gray-300 rounded-md shadow-lg bg-gray-50 dark:bg-black dark:text-white kalpurush"},[s("div",{class:"inline-flex mb-2 text-lg font-semibold",innerHTML:`<span class='mr-2'>${h+1})</span>`+e.question},null,8,se),s("div",re,[e.a?(r(),o("div",{key:0,innerHTML:e.a,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-black  my-3 p-3 rounded   ${e.a==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"} ${e.a==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,oe)):d("",!0),e.b?(r(),o("div",{key:1,innerHTML:e.b,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.b==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"} ${e.b==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,ne)):d("",!0),e.c?(r(),o("div",{key:2,innerHTML:e.c,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.c==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"} ${e.c==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,ie)):d("",!0),e.d?(r(),o("div",{key:3,innerHTML:e.d,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded   ${e.d==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"} ${e.d==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-gray-200 dark:text-white"}`)},null,10,le)):d("",!0)]),e.explain?(r(),o("h2",ae,"Explain:")):d("",!0),e.explain?(r(),o("div",{key:1,class:"p-3 my-3 bg-gray-200 border border-green-500 rounded dark:bg-gray-600",innerHTML:e.explain},null,8,de)):d("",!0),s("div",{class:m(["flex gap-2 my-2 text-xl font-semibold",{"text-red-500":e.correct!=e.selected,"text-green-500":e.correct==e.selected}])},[s("span",ce,u(e.correct==e.selected?"done":"close"),1),e.selected?(r(),o(_,{key:0},[f(u(e.correct==e.selected?"Correct":"Wrong"),1)],64)):d("",!0),f(" "+u(e.selected?"":"Not answered"),1)],2)]))),128)),t.viewDetails?(r(),o("div",ue,[s("button",{onClick:n[2]||(n[2]=(...e)=>c.gotoLeaderboard&&c.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):d("",!0),t.viewDetails?d("",!0):(r(),o("div",he,[s("button",{onClick:n[3]||(n[3]=(...e)=>c.submitAns&&c.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},u(t.eload?"Loading...":"Submit"),9,ge)]))])):(r(),o("div",A,[(r(!0),o(_,null,y(t.questions,(e,h)=>(r(),o("div",{key:h,class:m(["p-5 mx-auto my-3 text-lg border border-gray-300 rounded-md shadow-lg bg-gray-50 kalpurush",{"stop-events":t.questions[h].selected}])},[s("div",{class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,N),s("div",I,[s("span",D,"Q no. "+u(h+1),1),s("span",O,u(c.makeTitle(e.subject)),1),R]),s("div",E,[e.a?(r(),o("div",{key:0,innerHTML:e.a,onClick:b=>t.questions[h].selected=e.a,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,j)):d("",!0),e.b?(r(),o("div",{key:1,innerHTML:e.b,onClick:b=>t.questions[h].selected=e.b,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,J)):d("",!0),e.c?(r(),o("div",{key:2,innerHTML:e.c,onClick:b=>t.questions[h].selected=e.c,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,P)):d("",!0),e.d?(r(),o("div",{key:3,innerHTML:e.d,onClick:b=>t.questions[h].selected=e.d,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-green-300  ":" bg-gray-200 "}`)},null,10,B)):d("",!0)])],2))),128)),t.viewDetails?(r(),o("div",W,[s("button",{onClick:n[0]||(n[0]=(...e)=>c.gotoLeaderboard&&c.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):d("",!0),t.viewDetails?d("",!0):(r(),o("div",Q,[s("button",{onClick:n[1]||(n[1]=(...e)=>c.submitAns&&c.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},u(t.eload?"Loading...":"Submit"),9,U)]))]))])):d("",!0),t.show?(r(),o("div",me,[s("div",be,u(t.minute)+" : "+u(t.second),1)])):d("",!0)],32))}const ve=x(M,[["render",fe],["__scopeId","data-v-03c8c228"]]);export{ve as default};
