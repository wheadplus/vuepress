(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{352:function(t,s,a){"use strict";a.r(s);var n=a(33),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"原型和原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型和原型链"}},[t._v("#")]),t._v(" 原型和原型链")]),t._v(" "),a("p",[t._v("原型表示一个类/对象的继承关系。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jim'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sayName")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\np1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[a("img",{attrs:{src:"http://ww1.sinaimg.cn/mw690/8afe7f49gy1gdvh7a9zrbj20c608njrg.jpg",alt:"原型链.png"}})]),t._v(" "),a("ul",[a("li",[t._v("通过函数定义了类 "),a("code",[t._v("Person")]),t._v(", 类（函数）自动获取熟悉"),a("code",[t._v("prototype")])]),t._v(" "),a("li",[t._v("每个类的实例如"),a("code",[t._v("p1")]),t._v("都会有个内部属性"),a("code",[t._v("__proto__")])])]),t._v(" "),a("h2",{attrs:{id:"原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),a("p",[t._v("原型链就是对象上的"),a("code",[t._v("__proto__")]),t._v("，通过原型链可以获得基础方法。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var str = [1,2,3,4]\nstr.push()\n")])])]),a("p",[t._v(".push() 方法就是通过 "),a("code",[t._v("str.__proto__")]),t._v("获取的。通过constructor可以看出它的原型是Array。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://ww1.sinaimg.cn/mw690/8afe7f49gy1gdvh7jkj99j20ca0iegm1.jpg",alt:"原型链2.png"}})]),t._v(" "),a("p",[a("code",[t._v(".toString")]),t._v("则是通过"),a("code",[t._v("Array.__proto__")]),t._v("找到的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://ww1.sinaimg.cn/mw690/8afe7f49gy1gdvh7qzwhfj20cj0hr3z2.jpg",alt:"原型链3.png"}})]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("实例通过"),a("code",[t._v("__proto__")]),t._v("获取类上的方法。")])]),t._v(" "),a("li",[a("p",[t._v("可以通过"),a("code",[t._v("__proto__.constructor")]),t._v("可以知道实例的父类")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);