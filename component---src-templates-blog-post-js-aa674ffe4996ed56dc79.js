(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u});var n=a(0),r=a.n(n),i=a(149);t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))};var u="861893041"},146:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),u=a.n(i),o=a(145),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(146),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},148:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(153),r=a.n(n),i=a(154),u=a.n(i),o=new r.a(u.a),c=o.rhythm},149:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),u=a(152),o=a(147),c=a(148);t.a=function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"3892401927",render:function(e){return i.a.createElement("div",{className:Object(u.a)("margin:0 auto;max-width:700px;padding:",Object(c.a)(2),";padding-top:",Object(c.a)(1.5),";")},i.a.createElement(o.Link,{to:"/"},i.a.createElement("h3",{className:Object(u.a)("margin-bottom:",Object(c.a)(2),";display:inline-block;font-style:normal;")},e.site.siteMetadata.title)),i.a.createElement(o.Link,{to:"/about/",className:Object(u.a)("float:right;")},"About"),t)},data:n})}},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Phils Blog"}}}}},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),u=a.n(i),o=a(48),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-aa674ffe4996ed56dc79.js.map