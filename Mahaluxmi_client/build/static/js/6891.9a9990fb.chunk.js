"use strict";(self.webpackChunke_commerce_template=self.webpackChunke_commerce_template||[]).push([[6891],{3754:function(e,n,t){t.d(n,{r:function(){return u}});var r,a,i=t(2791),c=["title","titleId"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function l(e,n){var t=e.title,l=e.titleId,u=o(e,c);return i.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-shield-lock",viewBox:"0 0 16 16",ref:n,"aria-labelledby":l},u),t?i.createElement("title",{id:l},t):null,r||(r=i.createElement("path",{d:"M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"})),a||(a=i.createElement("path",{d:"M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"})))}var u=i.forwardRef(l);t.p},6891:function(e,n,t){t.r(n);t(2791);var r=t(6139),a=t(1232),i=t(7781),c=t(1283),s=t(4092),o=t(3754),l=t(184);n.default=(0,i.qC)((0,a.Z)({form:"changepassword"}))((function(e){var n=e.handleSubmit,t=e.submitting,a=e.onSubmit,i=e.submitFailed;return(0,l.jsxs)("div",{className:"card border-info",children:[(0,l.jsxs)("h6",{className:"card-header bg-info text-white",children:[(0,l.jsx)("i",{className:"bi bi-key"})," Change Password"]}),(0,l.jsx)("div",{className:"card-body",children:(0,l.jsxs)("form",{onSubmit:n(a),className:"needs-validation ".concat(i?"was-validated":""),noValidate:!0,children:[(0,l.jsx)(r.Z,{name:"currentPassword",type:"password",label:"Current Password",component:c.Z,placeholder:"******",icon:o.r,validate:[s.C1,s.LV,s.Nb],required:!0,maxLength:"20",minLength:"8",className:"mb-3"}),(0,l.jsx)(r.Z,{name:"password",type:"password",label:"New Password",component:c.Z,placeholder:"******",icon:o.r,validate:[s.C1,s.LV,s.Nb],required:!0,maxLength:"20",minLength:"8",className:"mb-3"}),(0,l.jsx)(r.Z,{name:"confirmPassword",type:"password",label:"Confirm New password",component:c.Z,placeholder:"******",icon:o.r,validate:[s.C1,s.LV,s.Nb],required:!0,maxLength:"20",minLength:"8",className:"mb-3"}),(0,l.jsx)("button",{type:"submit",className:"btn btn-info  d-flex",disabled:t,children:"Submit"})]})})]})}))},1283:function(e,n,t){var r=t(1413),a=(t(2791),t(184));n.Z=function(e){var n=e.input,t=e.label,i=e.tips,c=e.required,s=e.meta,o=s.touched,l=s.error,u=s.warning,d=e.icon;return(0,a.jsxs)("div",{className:"form-group ".concat(e.className),children:[t&&(0,a.jsx)("label",{className:"form-label ".concat(c?"required":""),htmlFor:n.name,children:t}),(0,a.jsxs)("div",{className:"input-group",children:[(0,a.jsx)("span",{className:"input-group-text",children:(0,a.jsx)(d,{})}),(0,a.jsx)("input",(0,r.Z)((0,r.Z)((0,r.Z)({},n),e),{},{id:n.name,className:"form-control"})),o&&(l&&(0,a.jsx)("div",{className:"invalid-feedback",children:l})||u&&(0,a.jsx)("span",{children:u}))]}),i&&(0,a.jsx)("div",{className:"form-text",children:i})]})}},4092:function(e,n,t){t.d(n,{$d:function(){return c},C1:function(){return r},Do:function(){return h},LV:function(){return s},Nb:function(){return m},Py:function(){return o},SB:function(){return a},fO:function(){return d},mG:function(){return l},u2:function(){return p}});var r=function(e){return e||"number"==typeof e&&0===e?void 0:"This field is required"},a=function(e){return e&&!/^[0-9]*$/.test(e)?"Must be a number":void 0},i=function(e){return function(n){return n&&n.length>e?"Must be ".concat(e," characters or less"):void 0}},c=(i(6),i(15)),s=i(20),o=i(50),l=(i(150),i(500),i(1e3)),u=(i(800),function(e){return function(n){return n&&n.length<e?"Must be ".concat(e," characters or more"):void 0}}),d=u(5),m=(u(6),u(8)),f=function(e){return function(n){return n&&n>e?"Must be at least ".concat(e," or less"):void 0}},b=(f(999999999999999),f(2147483647),f(127),f(9),function(e){return function(n){return void 0!==n&&null!==n&&""!==n&&n<e?"Must be at least ".concat(e):void 0}}),h=(b(9999),b(10),b(0),function(e){return e&&!/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i.test(e)?"Invalid email address":void 0}),p=function(e){return e&&!/^[a-zA-Z\s]*$/i.test(e)?"Invalid name":void 0}}}]);
//# sourceMappingURL=6891.9a9990fb.chunk.js.map