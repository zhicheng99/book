(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{291:function(e,t,r){"use strict";r.r(t);var n=r(10),_=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"nginx代理导致请求头header中的信息丢失问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx代理导致请求头header中的信息丢失问题"}},[e._v("#")]),e._v(" NGINX代理导致请求头header中的信息丢失问题")]),e._v(" "),r("p",[e._v("解决：")]),e._v(" "),r("p",[e._v("1.NGINX代理时加上请求头信息：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("   location / \n\t{\n        proxy_next_upstream http_502 http_504 error timeout invalid_header;\n        proxy_set_header Host  $host;\n\t    proxy_set_header X-Real-IP $remote_addr;\n\t    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\t    proxy_pass http://web1;\n        }\n12345678\n")])])]),r("p",[e._v("发现没有解决，最后发现是NGINX对header有所限制，下划线（_）不支持。")]),e._v(" "),r("p",[e._v("方法一：不用下划线")]),e._v(" "),r("p",[e._v("把下划线_改成其他的，如sign_val改成sign-val")]),e._v(" "),r("p",[e._v("方法二：从根本解除nginx的限制")]),e._v(" "),r("p",[e._v("nginx默认request的header的那么中包含’_’时，会自动忽略掉。")]),e._v(" "),r("p",[e._v("解决方法是：在nginx里的nginx.conf配置文件中的http部分中添加如下配置：")]),e._v(" "),r("p",[e._v("underscores_in_headers on; （默认 underscores_in_headers 为off）")]),e._v(" "),r("p",[e._v("我使用的是方法一，方法二没有试。")]),e._v(" "),r("p",[e._v("文章来源：https://blog.csdn.net/shidebin/article/details/86133762")]),e._v(" "),r("backTop")],1)}),[],!1,null,null,null);t.default=_.exports}}]);