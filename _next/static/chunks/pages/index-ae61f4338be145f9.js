(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{3757:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var n=s(7876),a=s(4232);function l(){let[e,t]=(0,a.useState)("AAPL"),[s,l]=(0,a.useState)("2010-01-01"),[i,c]=(0,a.useState)(new Date().toISOString().split("T")[0]),[r,d]=(0,a.useState)(null),[o,x]=(0,a.useState)(!1),h=async()=>{x(!0),console.log("Sofrp");let t=await fetch("https://cost-of-equity-app.onrender.com/calculate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ticker:e,startDate:s,endDate:i})});d(await t.json()),x(!1)};return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h1",{children:"Cost of Equity Explorer"}),(0,n.jsx)("h1",{children:"Sofro"}),(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("label",{children:"Ticker"}),(0,n.jsxs)("select",{value:e,onChange:e=>t(e.target.value),children:[(0,n.jsx)("option",{value:"AAPL",children:"AAPL"}),(0,n.jsx)("option",{value:"MSFT",children:"MSFT"}),(0,n.jsx)("option",{value:"GOOGL",children:"GOOGL"}),(0,n.jsx)("option",{value:"TSLA",children:"TSLA"}),(0,n.jsx)("option",{value:"AMZN",children:"AMZN"})]}),(0,n.jsxs)("div",{className:"date-row",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{children:"Start Date"}),(0,n.jsx)("input",{type:"date",value:s,onChange:e=>l(e.target.value)})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{children:"End Date"}),(0,n.jsx)("input",{type:"date",value:i,onChange:e=>c(e.target.value)})]})]}),(0,n.jsx)("button",{onClick:h,disabled:o,children:o?"Calculating...":"Calculate Cost of Equity"})]}),r&&(0,n.jsxs)("div",{className:"results",children:[(0,n.jsxs)("div",{className:"result-box",children:[(0,n.jsx)("h2",{children:"CAPM Results"}),(0,n.jsxs)("p",{children:["Intercept: ",r.capm.intercept.toFixed(4)]}),(0,n.jsxs)("p",{children:["Beta: ",r.capm.beta.toFixed(4)]}),(0,n.jsxs)("p",{children:["R\xb2: ",r.capm.R2.toFixed(4)]}),(0,n.jsxs)("p",{children:["Expected Return: ",(100*r.capm.expected_return_annual).toFixed(2),"%"]})]}),(0,n.jsxs)("div",{className:"result-box",children:[(0,n.jsx)("h2",{children:"Fama-French 3-Factor Results"}),(0,n.jsxs)("p",{children:["Intercept: ",r.ff3.intercept.toFixed(4)]}),(0,n.jsxs)("p",{children:["Beta (Mkt-RF): ",r.ff3.beta_mkt.toFixed(4)]}),(0,n.jsxs)("p",{children:["Beta (SMB): ",r.ff3.beta_smb.toFixed(4)]}),(0,n.jsxs)("p",{children:["Beta (HML): ",r.ff3.beta_hml.toFixed(4)]}),(0,n.jsxs)("p",{children:["R\xb2: ",r.ff3.R2.toFixed(4)]}),(0,n.jsxs)("p",{children:["Expected Return: ",(100*r.ff3.expected_return_annual).toFixed(2),"%"]})]})]})]})}},6760:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3757)}])}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(6760)),_N_E=e.O()}]);