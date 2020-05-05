(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{339:function(t,e,a){"use strict";a.r(e);var n=a(33),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),a("p",[t._v("http 状态码用来表示浏览器响应的状态。通过状态码可以判断请求成功或失败，具体操作到哪里。")]),t._v(" "),a("p",[t._v("状态码分类如下：")]),t._v(" "),a("ul",[a("li",[t._v("100-199 表示客户端的一些动作")]),t._v(" "),a("li",[t._v("200-199 表示请求成功")]),t._v(" "),a("li",[t._v("300-199 表示需要网络进一步操作")]),t._v(" "),a("li",[t._v("400-199 表示浏览器方面出错")]),t._v(" "),a("li",[t._v("500-199 表示服务器方面出错")])]),t._v(" "),a("p",[t._v("记住他们的分类和一些常见的状态码，如（404找不到ip网站，200链接成功等）")]),t._v(" "),a("h2",{attrs:{id:"httpcat记忆法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httpcat记忆法"}},[t._v("#")]),t._v(" httpcat记忆法")]),t._v(" "),a("p",[t._v("虽然这种东西只能靠记忆，但"),a("a",{attrs:{href:"https://http.cat/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://http.cat/"),a("OutboundLink")],1),t._v("很形象地表达各个状态码。如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://ww1.sinaimg.cn/large/8afe7f49gy1geh7sxwmd7j21c90o1x6p.jpg",alt:"HTTPCat.png"}})]),t._v(" "),a("h2",{attrs:{id:"查字典记忆法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查字典记忆法"}},[t._v("#")]),t._v(" 查字典记忆法")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("状态代码")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("状态信息")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("100")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Continue")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("初始的请求已经接受，客户应当继续发送请求的其余部分。（HTTP 1.1新）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("101")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Switching Protocols")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器将遵从客户的请求转换到另外一种协议（HTTP 1.1新）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("200")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("OK")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("一切正常，对GET和POST请求的应答文档跟在后面。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("201")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Created")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器已经创建了文档，Location头给出了它的URL。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("202")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Accepted")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("已经接受请求，但处理尚未完成。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("203")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Non-Authoritative Information")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("文档已经正常地返回，但一些应答头可能不正确，因为使用的是文档的拷贝（HTTP 1.1新）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("204")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No Content")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("没有新文档，浏览器应该继续显示原来的文档。如果用户定期地刷新页面，而Servlet可以确定用户文档足够新，这个状态代码是很有用的。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("205")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Reset Content")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("没有新的内容，但浏览器应该重置它所显示的内容。用来强制浏览器清除表单输入内容（HTTP 1.1新）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("206")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Partial Content")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("客户发送了一个带有Range头的GET请求，服务器完成了它（HTTP 1.1新）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("300")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Multiple Choices")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("客户请求的文档可以在多个位置找到，这些位置已经在返回的文档内列出。如果服务器要提出优先选择，则应该在Location应答头指明。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("301")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Moved Permanently")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("客户请求的文档在其他地方，新的URL在Location头中给出，浏览器应该自动地访问新的URL。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("302")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Found")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("类似于301，但新的URL应该被视为临时性的替代，而不是永久性的。注意，在HTTP1.0中对应的状态信息是“Moved Temporatily”。出现该状态代码时，浏览器能够自动访问新的URL，因此它是一个很有用的状态代码。注意这个状态代码有时候可以和301替换使用。例如，如果浏览器错误地请求http://host/~user（缺少了后面的斜杠），有的服务器 返回301，有的则返回302。严格地说，我们只能假定只有当原来的请求是GET时浏览器才会自动重定向。请参见307。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("303")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("See Other")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("类似于301/302，不同之处在于，如果原来的请求是POST，Location头指定的重定向目标文档应该通过GET提取（HTTP 1.1新）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("304")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Not Modified")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("客户端有缓冲的文档并发出了一个条件性的请求（一般是提供If-Modified-Since头表示客户只想比指定日期更新的文档）。服务器告 诉客户，原来缓冲的文档还可以继续使用。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("305")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Use Proxy")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("客户请求的文档应该通过Location头所指明的代理服务器提取（HTTP 1.1新）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("307")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Temporary Redirect")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("和302 （Found）相同。许多浏览器会错误地响应302应答进行重定向，即使原来的请求是POST，即使它实际上只能在POST请求的应答是303时才能重定 向。由于这个原因，HTTP 1.1新增了307，以便更加清除地区分几个状态代码：当出现303应答时，浏览器可以跟随重定向的GET和POST请求；如果是307应答，则浏览器只 能跟随对GET请求的重定向。（HTTP 1.1新）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("400")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Bad Request")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("请求出现语法错误。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("401")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Unauthorized")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("客户试图未经授权访问受密码保护的页面。应答中会包含一个WWW-Authenticate头，浏览器据此显示用户名字/密码对话框，然后在填 写合适的Authorization头后再次发出请求。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("403")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Forbidden")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("资源不可用。服务器理解客户的请求，但拒绝处理它。通常由于服务器上文件或目录的权限设置导致。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("404")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Not Found")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无法找到指定位置的资源。这也是一个常用的应答。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("405")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Method Not Allowed")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("请求方法（GET、POST、HEAD、DELETE、PUT、TRACE等）对指定的资源不适用。（HTTP 1.1新）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("406")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Not Acceptable")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("指定的资源已经找到，但它的MIME类型和客户在Accpet头中所指定的不兼容（HTTP 1.1新）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("407")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Proxy Authentication Required")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("类似于401，表示客户必须先经过代理服务器的授权。（HTTP 1.1新）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("408")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Request Timeout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在服务器许可的等待时间内，客户一直没有发出任何请求。客户可以在以后重复同一请求。（HTTP 1.1新）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("409")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Conflict")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("通常和PUT请求有关。由于请求和资源的当前状态相冲突，因此请求不能成功。（HTTP 1.1新）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("410")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Gone")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("所请求的文档已经不再可用，而且服务器不知道应该重定向到哪一个地址。它和404的不同在于，返回407表示文档永久地离开了指定的位置，而 404表示由于未知的原因文档不可用。（HTTP 1.1新）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("411")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Length Required")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器不能处理请求，除非客户发送一个Content-Length头。（HTTP 1.1新）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("412")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Precondition Failed")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("请求头中指定的一些前提条件失败（HTTP 1.1新）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("413")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Request Entity Too Large")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("目标文档的大小超过服务器当前愿意处理的大小。如果服务器认为自己能够稍后再处理该请求，则应该提供一个Retry-After头（HTTP 1.1新）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("414")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Request URI Too Long")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("URI太长（HTTP 1.1新）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("416")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Requested Range Not Satisfiable")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器不能满足客户在请求中指定的Range头。（HTTP 1.1新）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("500")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Internal Server Error")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器遇到了意料不到的情况，不能完成客户的请求。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("501")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Not Implemented")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器不支持实现请求所需要的功能。例如，客户发出了一个服务器不支持的PUT请求。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("502")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Bad Gateway")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器作为网关或者代理时，为了完成请求访问下一个服务器，但该服务器返回了非法的应答。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("503")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Service Unavailable")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器由于维护或者负载过重未能应答。例如，Servlet可能在数据库连接池已满的情况下返回503。服务器返回503时可以提供一个 Retry-After头。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("504")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Gateway Timeout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("由作为代理或网关的服务器使用，表示不能及时地从远程服务器获得应答。（HTTP 1.1新）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("505")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("HTTP Version Not Supported")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器不支持请求中所指明的HTTP版本。（HTTP 1.1新）")])])])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"}},[t._v("mdn http state code"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);