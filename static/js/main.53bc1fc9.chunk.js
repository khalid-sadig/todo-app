(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(7),d=n.n(a),s=n(2),i=n(5),l=n(0);var j=function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onAddTodo()},children:[Object(l.jsx)("input",{className:"AddTodo",type:"text",value:e.todoText,onChange:function(t){e.onTodoTextChange(t.target.value)}}),Object(l.jsx)("button",{className:"addButton",children:"Add Task"})]})})};var r=function(e){var t=e.index;return Object(l.jsxs)("div",{className:"TodoItem",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{style:{display:"none"},type:"checkbox",id:e.index,checked:e.completed,onChange:function(n){e.onTaskStatusChange(e.completed,t)}}),Object(l.jsxs)("label",{htmlFor:e.index,children:[" ",e.todoText," "]})]}),Object(l.jsx)("button",{onClick:function(){e.onTodoDeletion(t)},children:"Delete"})]})};var u=function(e){return Object(l.jsx)("div",{className:"ListTodo",children:e.todoList.map((function(t,n){return"all"===e.filter?Object(l.jsx)(r,{todoText:t.text,index:n,onTodoDeletion:e.onTodoDeletion,completed:t.completed,onTaskStatusChange:e.onTaskStatusChange},n):"active"===e.filter?t.completed?null:Object(l.jsx)(r,{todoText:t.text,index:n,onTodoDeletion:e.onTodoDeletion,completed:t.completed,onTaskStatusChange:e.onTaskStatusChange},n):"completed"===e.filter&&t.completed?Object(l.jsx)(r,{todoText:t.text,index:n,onTodoDeletion:e.onTodoDeletion,completed:t.completed,onTaskStatusChange:e.onTaskStatusChange},n):null}))})};var b=function(){var e=Object(o.useState)("What needs to be done?"),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)([]),d=Object(i.a)(a,2),r=d[0],b=d[1],x=Object(o.useState)("all"),h=Object(i.a)(x,2),p=h[0],O=h[1];function T(e){O(e.target.textContent)}return Object(l.jsxs)("div",{className:"TodoApp",children:[Object(l.jsxs)("div",{className:"background",children:[Object(l.jsx)("h2",{className:"app-header",children:"todo"}),Object(l.jsx)(j,{todoText:n,onTodoTextChange:function(e){c(e)},onAddTodo:function(){b((function(e){return[].concat(Object(s.a)(e),[{text:n,completed:!1}])})),c("")}})]}),Object(l.jsx)(u,{filter:p,todoList:r,onTodoDeletion:function(e){b((function(t){var n=Object(s.a)(t);return n.splice(e,1),Object(s.a)(n)}))},onTaskStatusChange:function(e,t){b((function(n){var o=Object(s.a)(n);return o[t].completed=!e,Object(s.a)(o)}))}}),Object(l.jsxs)("div",{className:"filter",children:[Object(l.jsx)("button",{onClick:T,children:"all"}),Object(l.jsx)("button",{onClick:T,children:"active"}),Object(l.jsx)("button",{onClick:T,children:"completed"})]})]})};var x=function(){return Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(b,{})})};d.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.53bc1fc9.chunk.js.map