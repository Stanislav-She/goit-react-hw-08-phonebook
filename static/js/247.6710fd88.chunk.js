"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[247],{2247:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(6187),s=n(9439),r=n(6351),c=n(2791),o=n(9434),l=n(8547),i="ContactForm_form__dhl+T",u="ContactForm_input__Bl93P",d="ContactForm_button__eSwX9",m=n(8174),h=n(3329),_=function(){var e=(0,o.v9)(r.K2),t=(0,o.I0)(),n=(0,c.useState)(""),a=(0,s.Z)(n,2),_=a[0],p=a[1],b=(0,c.useState)(""),f=(0,s.Z)(b,2),x=f[0],j=f[1],v=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":p(a);break;case"number":j(a);break;default:return}},C=function(){p(""),j("")};return(0,h.jsxs)("form",{className:i,onSubmit:function(n){n.preventDefault(),function(n,a){null!==e&&void 0!==e&&e.find((function(e){return e.name===n}))?m.Am.error("".concat(n," is already in contacts")):t((0,l.el)({name:n,number:a}))}(_,x),m.Am.success("".concat(_," added to contacts.")),C()},children:[(0,h.jsx)("label",{title:"Name",htmlFor:"name"}),(0,h.jsx)("input",{className:u,type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:v,value:_,required:!0}),(0,h.jsx)("label",{htmlFor:"number"}),(0,h.jsx)("input",{className:u,type:"tel",name:"number",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:v,value:x,required:!0}),(0,h.jsx)("button",{className:d,type:"submit",children:"Add contact"})]})},p="ContactList_item__EZYHO",b="ContactList_button__7kL4l",f=function(){var e=(0,o.v9)(r.F4),t=(0,o.I0)();(0,c.useEffect)((function(){t((0,l.yF)())}),[t]);var n=function(e){t((0,l.GK)(e.target.dataset.id))};return(0,h.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(e){var t=e.id,a=e.name,s=e.number;return(0,h.jsxs)("li",{className:p,children:[(0,h.jsx)("button",{className:b,onClick:n,type:"button","data-id":t,children:"Delete"}),(0,h.jsx)("p",{children:"".concat(a,": ").concat(s)})]},t)}))})},x=n(3002),j="Filter_input__N7T3z",v=function(){var e=(0,o.v9)(r.zK),t=(0,o.I0)();return(0,h.jsx)("label",{children:(0,h.jsx)("input",{className:j,type:"text",name:"filter",value:e,placeholder:"Find contacts by name",onChange:function(e){t((0,x.CR)(e.target.value))}})})},C="ContactsPage_box__hZjJ3",N="ContactsPage_primeryTitle__xjAYf",g="ContactsPage_secondaryTitle__b7mK0";function y(){return(0,h.jsx)(a.x,{children:(0,h.jsxs)("div",{className:C,children:[(0,h.jsx)("h1",{className:N,children:"Phonebook"}),(0,h.jsx)(_,{}),(0,h.jsx)("h2",{className:g,children:"Contacts"}),(0,h.jsx)(v,{}),(0,h.jsx)(f,{})]})})}}}]);
//# sourceMappingURL=247.6710fd88.chunk.js.map