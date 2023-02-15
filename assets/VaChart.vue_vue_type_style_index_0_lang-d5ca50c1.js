import{h as t,i as o,d as l,j as p,k as r,o as c,b as d,f as n,l as u}from"./index-e63eeb9d.js";const m={plugins:{legend:{position:"bottom",labels:{font:{color:"#34495e",family:"sans-serif",size:14},usePointStyle:!0}},tooltip:{bodyFont:{size:14,family:"sans-serif"},boxPadding:4}},datasets:{line:{fill:"origin",tension:.3,borderColor:"transparent"},bubble:{borderColor:"transparent"},bar:{borderColor:"transparent"}},maintainAspectRatio:!1,animation:!0},f={pie:t(()=>o(()=>import("./PieChart-2f533c5c.js"),["assets/PieChart-2f533c5c.js","assets/index-8fd51c5f.js","assets/index-e63eeb9d.js","assets/index-2d24b7e1.css"])),doughnut:t(()=>o(()=>import("./DoughnutChart-61ff90db.js"),["assets/DoughnutChart-61ff90db.js","assets/index-8fd51c5f.js","assets/index-e63eeb9d.js","assets/index-2d24b7e1.css"])),bubble:t(()=>o(()=>import("./BubbleChart-04f6a4a5.js"),["assets/BubbleChart-04f6a4a5.js","assets/index-8fd51c5f.js","assets/index-e63eeb9d.js","assets/index-2d24b7e1.css"])),line:t(()=>o(()=>import("./LineChart-c48f2e35.js"),["assets/LineChart-c48f2e35.js","assets/index-8fd51c5f.js","assets/index-e63eeb9d.js","assets/index-2d24b7e1.css"])),bar:t(()=>o(()=>import("./BarChart-3451145b.js"),["assets/BarChart-3451145b.js","assets/index-8fd51c5f.js","assets/index-e63eeb9d.js","assets/index-2d24b7e1.css"])),radar:t(()=>o(()=>import("./RadarChart-3586cb6b.js"),["assets/RadarChart-3586cb6b.js","assets/index-8fd51c5f.js","assets/index-e63eeb9d.js","assets/index-2d24b7e1.css"])),"horizontal-bar":t(()=>o(()=>import("./HorizontalBarChart-3557db6c.js"),["assets/HorizontalBarChart-3557db6c.js","assets/index-8fd51c5f.js","assets/index-e63eeb9d.js","assets/index-2d24b7e1.css"]))},v=l({__name:"VaChart",props:{data:null,options:null,type:null},setup(e){const a=e,i=p(),s=r(()=>f[a.type]),_=r(()=>({...m,...a.options}));return(b,h)=>(c(),d(u(n(s)),{ref_key:"chart",ref:i,class:"va-chart","chart-options":n(_),"chart-data":e.data},null,8,["chart-options","chart-data"]))}});export{v as _};
