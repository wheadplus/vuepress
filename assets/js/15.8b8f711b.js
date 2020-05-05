(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{335:function(a,t,e){"use strict";e.r(t);var r=e(33),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"http-缓存有那几种？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存有那几种？"}},[a._v("#")]),a._v(" "),e("code",[a._v("HTTP")]),a._v(" 缓存有那几种？")]),a._v(" "),e("h4",{attrs:{id:"无缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#无缓存"}},[a._v("#")]),a._v(" 无缓存")]),a._v(" "),e("p",[a._v("每次都要重新请求文件，如果文件大，变更少。很浪费带宽。")]),a._v(" "),e("h4",{attrs:{id:"缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[a._v("#")]),a._v(" 缓存")]),a._v(" "),e("p",[a._v("请求资源，把资源缓存在本地，如果调用直接从本地获取。")]),a._v(" "),e("p",[a._v("但是：")]),a._v(" "),e("ul",[e("li",[a._v("节省带宽")]),a._v(" "),e("li",[a._v("如果文件更新，浏览器本地不更新")])]),a._v(" "),e("h4",{attrs:{id:"expires-过期-（缓存-更新机制）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expires-过期-（缓存-更新机制）"}},[a._v("#")]),a._v(" Expires(过期)（缓存+更新机制）")]),a._v(" "),e("p",[a._v("在缓存的基础上加个(Expires)过期时间,如果时间过期，则重新请求资源。")]),a._v(" "),e("p",[a._v("但是：")]),a._v(" "),e("ul",[e("li",[a._v("缓存可控制")]),a._v(" "),e("li",[a._v("过期时间需对比本地时间")]),a._v(" "),e("li",[a._v("控制单一")])]),a._v(" "),e("h4",{attrs:{id:"cachecontrol（缓存-更新机制2-0）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cachecontrol（缓存-更新机制2-0）"}},[a._v("#")]),a._v(" CacheControl（缓存+更新机制2.0）")]),a._v(" "),e("p",[a._v("更新机制"),e("code",[a._v("1.0")]),a._v("版本只有 "),e("code",[a._v("expires")]),a._v(",更新机制"),e("code",[a._v("2.0")]),a._v("更多参数。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Cache-Control: max-age=300\nCache-Control: max-stale[=<seconds>]\nCache-Control: min-fresh=<seconds>\nCache-control: no-cache \n")])])]),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control",target:"_blank",rel:"noopener noreferrer"}},[a._v("详细参数说明看MDN"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("但是还能优化：")]),a._v(" "),e("ul",[e("li",[a._v("如果时间过期了，重新想服务器请求文件，发现文件未修改，则无需更新文件，只需打回消息（文件未更新即可）")])]),a._v(" "),e("h4",{attrs:{id:"etag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag"}},[a._v("#")]),a._v(" ETag")]),a._v(" "),e("h4",{attrs:{id:"更新机制3-0，增加参数etag-如果etag未修改则无需更新文件。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新机制3-0，增加参数etag-如果etag未修改则无需更新文件。"}},[a._v("#")]),a._v(" 更新机制3.0，增加参数ETag,如果ETag未修改则无需更新文件。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('Cache-Control: max-age=300；\nETag:W/"e-cbxLFQW5zapn79tQwb/g6Q"\n')])])]),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/23299600?refer=study-fe",target:"_blank",rel:"noopener noreferrer"}},[a._v("参考1"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"https://imweb.io/topic/5795dcb6fb312541492eda8c",target:"_blank",rel:"noopener noreferrer"}},[a._v("参考2"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);