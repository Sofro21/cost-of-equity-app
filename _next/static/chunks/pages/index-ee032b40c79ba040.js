(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{3757:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var a=s(7876),l=s(4232);function n(){let[e,t]=(0,l.useState)("AAPL"),[s,n]=(0,l.useState)("2010-01-01"),[i,r]=(0,l.useState)(new Date().toISOString().split("T")[0]),[c,d]=(0,l.useState)(null),[o,u]=(0,l.useState)(!1),h=async()=>{u(!0);let t=await fetch("https://cost-of-equity-app.onrender.com",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ticker:e,startDate:s,endDate:i})});d(await t.json()),u(!1)};return(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("h1",{children:"Cost of Equity Explorer"}),(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("label",{children:"Ticker"}),(0,a.jsxs)("select",{value:e,onChange:e=>t(e.target.value),children:[(0,a.jsx)("option",{value:"AAPL",children:"AAPL"}),(0,a.jsx)("option",{value:"MSFT",children:"MSFT"}),(0,a.jsx)("option",{value:"GOOGL",children:"GOOGL"}),(0,a.jsx)("option",{value:"TSLA",children:"TSLA"}),(0,a.jsx)("option",{value:"AMZN",children:"AMZN"})]}),(0,a.jsxs)("div",{className:"date-row",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"Start Date"}),(0,a.jsx)("input",{type:"date",value:s,onChange:e=>n(e.target.value)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"End Date"}),(0,a.jsx)("input",{type:"date",value:i,onChange:e=>r(e.target.value)})]})]}),(0,a.jsx)("button",{onClick:h,disabled:o,children:o?"Calculating...":"Calculate Cost of Equity"})]}),c&&(0,a.jsx)("div",{className:"results",children:(0,a.jsx)("div",{className:"result-box",children:(0,a.jsx)("h2",{children:"CAPM Results"})})})]})}},6760:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3757)}])}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(6760)),_N_E=e.O()}]);