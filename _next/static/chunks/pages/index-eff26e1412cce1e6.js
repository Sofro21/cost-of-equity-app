(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{3757:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var l=s(7876),a=s(4232);function n(){let[e,t]=(0,a.useState)("AAPL"),[s,n]=(0,a.useState)("2010-01-01"),[i,r]=(0,a.useState)(new Date().toISOString().split("T")[0]),[o,c]=(0,a.useState)(null),[d,u]=(0,a.useState)(!1),h=async()=>{console.log("Sofrp"),u(!0);let t=await fetch("https://cost-of-equity-app.onrender.com",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ticker:e,startDate:s,endDate:i})});c(await t.json()),u(!1)};return(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h1",{children:"Cost of Equity Explorer"}),(0,l.jsx)("h1",{children:"Sofro"}),(0,l.jsxs)("div",{className:"card",children:[(0,l.jsx)("label",{children:"Ticker"}),(0,l.jsxs)("select",{value:e,onChange:e=>t(e.target.value),children:[(0,l.jsx)("option",{value:"AAPL",children:"AAPL"}),(0,l.jsx)("option",{value:"MSFT",children:"MSFT"}),(0,l.jsx)("option",{value:"GOOGL",children:"GOOGL"}),(0,l.jsx)("option",{value:"TSLA",children:"TSLA"}),(0,l.jsx)("option",{value:"AMZN",children:"AMZN"})]}),(0,l.jsxs)("div",{className:"date-row",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{children:"Start Date"}),(0,l.jsx)("input",{type:"date",value:s,onChange:e=>n(e.target.value)})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{children:"End Date"}),(0,l.jsx)("input",{type:"date",value:i,onChange:e=>r(e.target.value)})]})]}),(0,l.jsx)("button",{onClick:h,disabled:d,children:d?"Calculating...":"Calculate Cost of Equity"})]}),o&&(0,l.jsx)("div",{className:"results",children:(0,l.jsx)("div",{className:"result-box",children:(0,l.jsx)("h2",{children:"CAPM Results"})})})]})}},6760:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3757)}])}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(6760)),_N_E=e.O()}]);