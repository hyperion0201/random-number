(this["webpackJsonprandom-number"]=this["webpackJsonprandom-number"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(3),c=n.n(a),s=(n(13),n(6)),o=n(4),l=n(5),u=n(8),h=n(7),m=(n(14),n(15),n(0)),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).getInitialBoard=function(){return{min:0,max:100,unique:!1,history:[],current:null}},r.handleSubmit=function(e){e.preventDefault();var t=r.state,n=t.max,i=t.min,a=t.history;if(i<0||n<0)alert("Min ho\u1eb7c max ph\u1ea3i l\u1edbn h\u01a1n 0.");else if(n<=i)alert("Max ph\u1ea3i l\u1edbn h\u01a1n min ch\u1ee9 ?");else{var c=r.getRandom();null!==c?r.setState({current:c,history:[].concat(Object(s.a)(a),[c])}):alert("H\u1ebft s\u1ed1 \u0111\u1ec3 random cho n\xf3 kh\u1ecfi b\u1ecb tr\xf9ng r\u1ed3i...")}},r.handleFormChange=function(e){var t=e.target;switch(t.id){case"minNumber":r.setState({min:e.target.value});break;case"maxNumber":r.setState({max:e.target.value});break;case"useUnique":r.setState({unique:t.checked,history:[],current:null})}},r.renderHistory=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e,t){return Object(m.jsx)("div",{className:"history-item",children:e},e)}))},r.getRandom=function(){var e=r.state,t=e.history,n=e.unique,i=e.min,a=e.max;if(!n)return Math.floor(Math.random()*(a-i+1))+i;if(t.length===a-i+1)return null;for(;;){var c=Math.floor(Math.random()*(a-i+1))+i;if(!t.includes(c))return c}},r.resetBoard=function(){r.setState(r.getInitialBoard())},r.state=r.getInitialBoard(),r}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.min,n=e.max,r=e.unique,i=e.history,a=e.current;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{style:{padding:"10px",textAlign:"center"},children:"Random Number Generator"}),Object(m.jsxs)("div",{className:"main-container",children:[Object(m.jsxs)("div",{className:"history-tab",children:[Object(m.jsx)("h5",{style:{borderBottom:"1px solid #f2f2f2"},children:"HISTORY"}),Object(m.jsx)("div",{className:"history-board",children:this.renderHistory(i)})]}),Object(m.jsxs)("div",{className:"playground",children:[Object(m.jsx)("h5",{children:"PLAYGROUND"}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{className:"num-form",children:[Object(m.jsx)("label",{for:"minNumber",children:"Minimum"}),Object(m.jsx)("input",{type:"number",class:"form-control mb-2",id:"minNumber",value:t,onChange:this.handleFormChange})]}),Object(m.jsxs)("div",{className:"num-form",children:[Object(m.jsx)("label",{for:"maxNumber",children:"Maximum"}),Object(m.jsx)("input",{type:"number",class:"form-control mb-2",id:"maxNumber",value:n,onChange:this.handleFormChange})]}),Object(m.jsxs)("div",{class:"form-check",children:[Object(m.jsx)("input",{type:"checkbox",class:"form-check-input",id:"useUnique",checked:r,onChange:this.handleFormChange}),Object(m.jsx)("label",{class:"form-check-label",for:"useUnique",children:"Unique?"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"}),Object(m.jsx)("button",{type:"button",onClick:this.resetBoard,class:"btn btn-secondary",children:"Reset"})]}),Object(m.jsx)("h1",{className:"result",children:a})]})]}),Object(m.jsx)("footer",{children:Object(m.jsxs)("span",{className:"footer",children:["Vi\u1ebft b\u1edfi Hi\u1ebfu loli trong l\xfac r\u1ea3nh r\u1ed7i.",Object(m.jsx)("a",{href:"https://kobitoninc.slack.com/archives/CQWLH1SBH/p1624635544498400",target:"_blank",rel:"noreferrer",children:" T\u1ea1i sao l\u1ea1i c\xf3 c\xe1i n\xe0y?"})]})})]})}}]),n}(i.a.Component),d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root")),d()}},[[17,1,2]]]);
//# sourceMappingURL=main.6ab2638f.chunk.js.map