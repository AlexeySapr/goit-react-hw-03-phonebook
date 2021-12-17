(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{22:function(n,t,e){},27:function(n,t,e){"use strict";e.r(t);var r,o=e(1),a=e.n(o),c=e(13),i=e.n(c),s=e(28),u=Object.freeze({colors:{primary:"#57d0e6",white:"#fff",borderColor:"#bdbdbd",textColor:"#212529",inputBoxShadow:"0 0 0 0.2rem rgba(87, 208, 230, 0.5)"}}),l=(e(22),e(16)),d=e(7),b=e(8),h=e(10),m=e(9),p=e(17),f=e(2),j=e(3),x=j.a.div(r||(r=Object(f.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1170px;\n  padding: 15px;\n"]))),g=e(0);var O,v,C=function(n){var t=n.children;return Object(g.jsx)(x,{children:t})},w=j.a.div(O||(O=Object(f.a)(["\n  margin-top: 15px;\n  margin-bottom: 15px;\n"]))),y=j.a.h2(v||(v=Object(f.a)(["\n  font-weight: 500;\n  text-transform: uppercase;\n"])));var S,k,z,A,D,N,B,I,J,L,F,M=function(n){var t=n.title,e=n.children;return Object(g.jsxs)(w,{children:[Object(g.jsx)(y,{children:t}),e]})},P=e(15),Z=j.a.form(S||(S=Object(f.a)(["\n  border: ",";\n  padding: 30px;\n  width: 500px;\n"])),(function(n){return"2px solid ".concat(n.theme.colors.primary)})),q=j.a.label(k||(k=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: 500;\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n"]))),T=j.a.input(z||(z=Object(f.a)(["\n  width: 300px;\n  margin-top: 5px;\n\n  padding: 0.375rem 0.75rem;\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: ",";\n  border: ",";\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n  &:focus {\n    border-color: ",";\n    outline: 0;\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return"1px solid ".concat(n.theme.colors.borderColor)}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.inputBoxShadow})),E=j.a.button(A||(A=Object(f.a)(["\n  background-color: transparent;\n  padding: 5px 10px;\n  border-radius: 5px;\n  width: 120px;\n  font-size: 1rem;\n  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: ",";\n    outline: 0;\n    cursor: pointer;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary})),U=function(n){Object(h.a)(e,n);var t=Object(m.a)(e);function e(){var n;Object(d.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=t.call.apply(t,[this].concat(o))).state={name:"",number:""},n.handleNameChange=function(t){var e=t.currentTarget,r=e.name,o=e.value;n.setState(Object(P.a)({},r,o))},n.onSubmit=function(t){t.preventDefault(),n.props.handleSubmit(n.state),n.resset()},n.resset=function(){n.setState({name:"",number:""})},n}return Object(b.a)(e,[{key:"render",value:function(){return Object(g.jsxs)(Z,{onSubmit:this.onSubmit,children:[Object(g.jsxs)(q,{children:["Name",Object(g.jsx)(T,{type:"text",name:"name",value:this.state.name,onChange:this.handleNameChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(g.jsxs)(q,{children:["Number",Object(g.jsx)(T,{type:"tel",name:"number",value:this.state.number,onChange:this.handleNameChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(g.jsx)(E,{type:"submit",children:"Add contact"})]})}}]),e}(o.Component),$=U,G=j.a.ul(D||(D=Object(f.a)(["\n  padding: 0;\n  width: 380px;\n"]))),H=j.a.li(N||(N=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: ",";\n"])),(function(n){return"1px solid ".concat(n.theme.colors.primary)})),K=j.a.p(B||(B=Object(f.a)(["\n  font-size: 1.1rem;\n"]))),Q=j.a.button(I||(I=Object(f.a)(["\n  background-color: transparent;\n  padding: 5px 10px;\n  border-radius: 5px;\n  width: 75px;\n  font-size: 0.8rem;\n  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: ",";\n    outline: 0;\n    cursor: pointer;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary})),R=function(n){var t=n.contacts,e=n.onDeleteContact;return Object(g.jsx)(G,{children:t.map((function(n){return Object(g.jsxs)(H,{children:[Object(g.jsxs)(K,{children:[n.name,": ",n.number]}),Object(g.jsx)(Q,{type:"button",onClick:function(){return e(n.id)},children:"Delete"})]},n.id)}))})},V=j.a.label(J||(J=Object(f.a)(["\n  font-size: 1.1rem;\n  font-weight: 500;\n"]))),W=j.a.input(L||(L=Object(f.a)(["\n  margin-left: 20px;\n\n  padding: 0.2rem 0.4rem;\n  color: ",";\n  border: ",";\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n  &:focus {\n    border-color: ",";\n    outline: 0;\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.colors.textColor}),(function(n){return"1px solid ".concat(n.theme.colors.borderColor)}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.inputBoxShadow})),X=function(n){var t=n.value,e=n.onChange;return Object(g.jsxs)(V,{children:["Find contacts by name:",Object(g.jsx)(W,{type:"text",name:"filter",value:t,onChange:e})]})},Y=j.a.h2(F||(F=Object(f.a)(["\n  text-align: center;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.primary}));var _=function(n){var t=n.title,e=n.children;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Y,{children:t}),e]})},nn=function(n){Object(h.a)(e,n);var t=Object(m.a)(e);function e(){var n;Object(d.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=t.call.apply(t,[this].concat(o))).state={contacts:[],filter:""},n.isInContacts=function(t){var e=t.name,r=t.number,o=e.toLowerCase().replace(/\s+/g,""),a=r.replace(/\D/g,"");return n.state.contacts.some((function(n){return n.name.toLowerCase().replace(/\s+/g,"")===o||n.number.replace(/\D/g,"")===a}))},n.addContact=function(t){var e=t.name,r=t.number;if(n.isInContacts(t))alert("".concat(e," is already in contacts"));else{var o={id:Object(p.a)(),name:e,number:r};n.setState((function(n){return{contacts:[o].concat(Object(l.a)(n.contacts))}}))}},n.delContact=function(t){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==t}))}}))},n.filterChange=function(t){n.setState({filter:t.currentTarget.value})},n}return Object(b.a)(e,[{key:"componentDidUpdate",value:function(n,t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var n=JSON.parse(localStorage.getItem("contacts"));n&&this.setState({contacts:n})}},{key:"render",value:function(){var n=this.state,t=n.contacts,e=n.filter.toLowerCase(),r=t.filter((function(n){return n.name.toLowerCase().includes(e)}));return Object(g.jsx)(_,{title:"Phonebook",children:Object(g.jsxs)(C,{children:[Object(g.jsx)(M,{title:"Phonebook",children:Object(g.jsx)($,{handleSubmit:this.addContact})}),Object(g.jsxs)(M,{title:"Contacts",children:[Object(g.jsx)(X,{value:this.state.filter,onChange:this.filterChange}),Object(g.jsx)(R,{contacts:r,onDeleteContact:this.delContact})]})]})})}}]),e}(a.a.Component),tn=nn;i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(s.b,{theme:u,children:Object(g.jsx)(tn,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.890ebb12.chunk.js.map