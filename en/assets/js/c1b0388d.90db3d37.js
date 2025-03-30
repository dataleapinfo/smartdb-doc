"use strict";(self.webpackChunksmartdb_docs=self.webpackChunksmartdb_docs||[]).push([[5828],{352:e=>{e.exports=JSON.parse('{"permalink":"/smartdb-doc/en/blog/database-indexes","editUrl":"https://github.com/dataleapinfo/smartdb-doc/blob/main/blog/2024-03-28-database-indexes.md","source":"@site/blog/2024-03-28-database-indexes.md","title":"\u6570\u636e\u5e93\u7d22\u5f15\uff1a\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u7684\u5173\u952e","description":"\u6570\u636e\u5e93\u7d22\u5f15\u662f\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u7684\u91cd\u8981\u5de5\u5177\u3002\u672c\u6587\u5c06\u6df1\u5165\u63a2\u8ba8\u6570\u636e\u5e93\u7d22\u5f15\u7684\u5de5\u4f5c\u539f\u7406\u3001\u7c7b\u578b\u4ee5\u53ca\u6700\u4f73\u5b9e\u8df5\u3002","date":"2024-03-28T00:00:00.000Z","tags":[{"inline":false,"label":"\u6570\u636e\u5e93","permalink":"/smartdb-doc/en/blog/tags/database","description":"\u6570\u636e\u5e93\u57fa\u7840\u77e5\u8bc6"},{"inline":false,"label":"\u6027\u80fd\u4f18\u5316","permalink":"/smartdb-doc/en/blog/tags/\u6027\u80fd\u4f18\u5316","description":"\u6570\u636e\u5e93\u6027\u80fd\u4f18\u5316\u76f8\u5173"},{"inline":false,"label":"\u7d22\u5f15","permalink":"/smartdb-doc/en/blog/tags/\u7d22\u5f15","description":"\u6570\u636e\u5e93\u7d22\u5f15\u76f8\u5173"}],"readingTime":2.975,"hasTruncateMarker":false,"authors":[{"name":"DataLeap Team","title":"SmartDB Team","url":"https://www.dataleapinfo.com","email":"support@dataleapinfo.com","github":"https://github.com/dataleapinfo","imageURL":"https://github.com/dataleapinfo.png","key":"dataleap","page":null}],"frontMatter":{"slug":"database-indexes","title":"\u6570\u636e\u5e93\u7d22\u5f15\uff1a\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u7684\u5173\u952e","authors":["dataleap"],"tags":["database","\u6027\u80fd\u4f18\u5316","\u7d22\u5f15"]},"unlisted":false,"prevItem":{"title":"\u5728 SQL \u4e2d Truncate \u4e0e Drop\u3001Delete \u7684\u533a\u522b","permalink":"/smartdb-doc/en/blog/2025-03-29-differences-between-drop-delete"},"nextItem":{"title":"\u6570\u636e\u5e93\u4e8b\u52a1\uff1a\u786e\u4fdd\u6570\u636e\u4e00\u81f4\u6027\u7684\u5173\u952e","permalink":"/smartdb-doc/en/blog/database-transactions"}}')},4350:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>a,metadata:()=>i,toc:()=>t});var i=l(352),s=l(4848),d=l(8453);const a={slug:"database-indexes",title:"\u6570\u636e\u5e93\u7d22\u5f15\uff1a\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u7684\u5173\u952e",authors:["dataleap"],tags:["database","\u6027\u80fd\u4f18\u5316","\u7d22\u5f15"]},r=void 0,c={authorsImageUrls:[void 0]},t=[{value:"\u4ec0\u4e48\u662f\u6570\u636e\u5e93\u7d22\u5f15\uff1f",id:"\u4ec0\u4e48\u662f\u6570\u636e\u5e93\u7d22\u5f15",level:2},{value:"\u7d22\u5f15\u7684\u7c7b\u578b",id:"\u7d22\u5f15\u7684\u7c7b\u578b",level:2},{value:"1. B\u6811\u7d22\u5f15",id:"1-b\u6811\u7d22\u5f15",level:3},{value:"2. \u54c8\u5e0c\u7d22\u5f15",id:"2-\u54c8\u5e0c\u7d22\u5f15",level:3},{value:"3. \u5168\u6587\u7d22\u5f15",id:"3-\u5168\u6587\u7d22\u5f15",level:3},{value:"\u521b\u5efa\u7d22\u5f15\u7684\u8bed\u6cd5",id:"\u521b\u5efa\u7d22\u5f15\u7684\u8bed\u6cd5",level:2},{value:"\u7d22\u5f15\u7684\u6700\u4f73\u5b9e\u8df5",id:"\u7d22\u5f15\u7684\u6700\u4f73\u5b9e\u8df5",level:2},{value:"1. \u9009\u62e9\u5408\u9002\u7684\u5217",id:"1-\u9009\u62e9\u5408\u9002\u7684\u5217",level:3},{value:"2. \u907f\u514d\u8fc7\u5ea6\u7d22\u5f15",id:"2-\u907f\u514d\u8fc7\u5ea6\u7d22\u5f15",level:3},{value:"3. \u8003\u8651\u7d22\u5f15\u987a\u5e8f",id:"3-\u8003\u8651\u7d22\u5f15\u987a\u5e8f",level:3},{value:"\u7d22\u5f15\u6027\u80fd\u5206\u6790",id:"\u7d22\u5f15\u6027\u80fd\u5206\u6790",level:2},{value:"\u4f7f\u7528 EXPLAIN \u5206\u6790\u67e5\u8be2",id:"\u4f7f\u7528-explain-\u5206\u6790\u67e5\u8be2",level:3},{value:"\u5e38\u89c1\u6027\u80fd\u95ee\u9898",id:"\u5e38\u89c1\u6027\u80fd\u95ee\u9898",level:3},{value:"\u7ef4\u62a4\u7d22\u5f15",id:"\u7ef4\u62a4\u7d22\u5f15",level:2},{value:"1. \u5b9a\u671f\u91cd\u5efa\u7d22\u5f15",id:"1-\u5b9a\u671f\u91cd\u5efa\u7d22\u5f15",level:3},{value:"2. \u76d1\u63a7\u7d22\u5f15\u4f7f\u7528\u60c5\u51b5",id:"2-\u76d1\u63a7\u7d22\u5f15\u4f7f\u7528\u60c5\u51b5",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u6570\u636e\u5e93\u7d22\u5f15\u662f\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u7684\u91cd\u8981\u5de5\u5177\u3002\u672c\u6587\u5c06\u6df1\u5165\u63a2\u8ba8\u6570\u636e\u5e93\u7d22\u5f15\u7684\u5de5\u4f5c\u539f\u7406\u3001\u7c7b\u578b\u4ee5\u53ca\u6700\u4f73\u5b9e\u8df5\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f\u6570\u636e\u5e93\u7d22\u5f15",children:"\u4ec0\u4e48\u662f\u6570\u636e\u5e93\u7d22\u5f15\uff1f"}),"\n",(0,s.jsx)(n.p,{children:"\u6570\u636e\u5e93\u7d22\u5f15\u7c7b\u4f3c\u4e8e\u4e66\u7c4d\u7684\u76ee\u5f55\uff0c\u5b83\u5e2e\u52a9\u6570\u636e\u5e93\u5feb\u901f\u5b9a\u4f4d\u6570\u636e\uff0c\u800c\u4e0d\u9700\u8981\u626b\u63cf\u6574\u4e2a\u8868\u3002\u7d22\u5f15\u53ef\u4ee5\u663e\u8457\u63d0\u9ad8\u67e5\u8be2\u6027\u80fd\uff0c\u4f46\u4e5f\u4f1a\u5360\u7528\u989d\u5916\u7684\u5b58\u50a8\u7a7a\u95f4\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u7d22\u5f15\u7684\u7c7b\u578b",children:"\u7d22\u5f15\u7684\u7c7b\u578b"}),"\n",(0,s.jsx)(n.h3,{id:"1-b\u6811\u7d22\u5f15",children:"1. B\u6811\u7d22\u5f15"}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u5e38\u7528\u7684\u7d22\u5f15\u7c7b\u578b\uff0c\u9002\u7528\u4e8e\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7cbe\u786e\u5339\u914d\u67e5\u8be2"}),"\n",(0,s.jsx)(n.li,{children:"\u8303\u56f4\u67e5\u8be2"}),"\n",(0,s.jsx)(n.li,{children:"\u6392\u5e8f\u64cd\u4f5c"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-\u54c8\u5e0c\u7d22\u5f15",children:"2. \u54c8\u5e0c\u7d22\u5f15"}),"\n",(0,s.jsx)(n.p,{children:"\u9002\u7528\u4e8e\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7cbe\u786e\u5339\u914d\u67e5\u8be2"}),"\n",(0,s.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u8303\u56f4\u67e5\u8be2"}),"\n",(0,s.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u6392\u5e8f\u64cd\u4f5c"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-\u5168\u6587\u7d22\u5f15",children:"3. \u5168\u6587\u7d22\u5f15"}),"\n",(0,s.jsx)(n.p,{children:"\u9002\u7528\u4e8e\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6587\u672c\u641c\u7d22"}),"\n",(0,s.jsx)(n.li,{children:"\u6a21\u7cca\u5339\u914d"}),"\n",(0,s.jsx)(n.li,{children:"\u5173\u952e\u8bcd\u641c\u7d22"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u521b\u5efa\u7d22\u5f15\u7684\u8bed\u6cd5",children:"\u521b\u5efa\u7d22\u5f15\u7684\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u521b\u5efa\u5355\u5217\u7d22\u5f15\nCREATE INDEX idx_name ON table_name (column_name);\n\n-- \u521b\u5efa\u591a\u5217\u7d22\u5f15\nCREATE INDEX idx_name ON table_name (column1, column2);\n\n-- \u521b\u5efa\u552f\u4e00\u7d22\u5f15\nCREATE UNIQUE INDEX idx_name ON table_name (column_name);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7d22\u5f15\u7684\u6700\u4f73\u5b9e\u8df5",children:"\u7d22\u5f15\u7684\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,s.jsx)(n.h3,{id:"1-\u9009\u62e9\u5408\u9002\u7684\u5217",children:"1. \u9009\u62e9\u5408\u9002\u7684\u5217"}),"\n",(0,s.jsx)(n.p,{children:"\u5e94\u8be5\u4e3a\u4ee5\u4e0b\u5217\u521b\u5efa\u7d22\u5f15\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e3b\u952e\u5217"}),"\n",(0,s.jsx)(n.li,{children:"\u5916\u952e\u5217"}),"\n",(0,s.jsx)(n.li,{children:"\u7ecf\u5e38\u7528\u4e8e\u67e5\u8be2\u6761\u4ef6\u7684\u5217"}),"\n",(0,s.jsx)(n.li,{children:"\u7ecf\u5e38\u7528\u4e8e\u6392\u5e8f\u7684\u5217"}),"\n",(0,s.jsx)(n.li,{children:"\u7ecf\u5e38\u7528\u4e8e\u8fde\u63a5\u7684\u5217"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-\u907f\u514d\u8fc7\u5ea6\u7d22\u5f15",children:"2. \u907f\u514d\u8fc7\u5ea6\u7d22\u5f15"}),"\n",(0,s.jsx)(n.p,{children:"\u8fc7\u591a\u7684\u7d22\u5f15\u4f1a\u5e26\u6765\u4ee5\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5360\u7528\u66f4\u591a\u5b58\u50a8\u7a7a\u95f4"}),"\n",(0,s.jsx)(n.li,{children:"\u964d\u4f4e\u5199\u5165\u6027\u80fd"}),"\n",(0,s.jsx)(n.li,{children:"\u589e\u52a0\u7ef4\u62a4\u6210\u672c"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-\u8003\u8651\u7d22\u5f15\u987a\u5e8f",children:"3. \u8003\u8651\u7d22\u5f15\u987a\u5e8f"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u591a\u5217\u7d22\u5f15\uff0c\u5217\u7684\u987a\u5e8f\u5f88\u91cd\u8981\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6700\u5e38\u7528\u7684\u5217\u653e\u5728\u6700\u524d\u9762"}),"\n",(0,s.jsx)(n.li,{children:"\u9009\u62e9\u6027\u9ad8\u7684\u5217\u653e\u5728\u524d\u9762"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7d22\u5f15\u6027\u80fd\u5206\u6790",children:"\u7d22\u5f15\u6027\u80fd\u5206\u6790"}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528-explain-\u5206\u6790\u67e5\u8be2",children:"\u4f7f\u7528 EXPLAIN \u5206\u6790\u67e5\u8be2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"EXPLAIN SELECT * FROM users WHERE name = '\u5f20\u4e09';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5e38\u89c1\u6027\u80fd\u95ee\u9898",children:"\u5e38\u89c1\u6027\u80fd\u95ee\u9898"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7d22\u5f15\u5931\u6548"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u51fd\u6570\u6216\u8fd0\u7b97\u7b26"}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528 LIKE '%pattern%'"}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528 OR \u6761\u4ef6"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7d22\u5f15\u9009\u62e9\u4e0d\u5f53"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7d22\u5f15\u5217\u987a\u5e8f\u4e0d\u5408\u7406"}),"\n",(0,s.jsx)(n.li,{children:"\u7d22\u5f15\u7c7b\u578b\u4e0d\u5339\u914d"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7ef4\u62a4\u7d22\u5f15",children:"\u7ef4\u62a4\u7d22\u5f15"}),"\n",(0,s.jsx)(n.h3,{id:"1-\u5b9a\u671f\u91cd\u5efa\u7d22\u5f15",children:"1. \u5b9a\u671f\u91cd\u5efa\u7d22\u5f15"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- MySQL\nALTER TABLE table_name REBUILD INDEX index_name;\n\n-- PostgreSQL\nREINDEX INDEX index_name;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-\u76d1\u63a7\u7d22\u5f15\u4f7f\u7528\u60c5\u51b5",children:"2. \u76d1\u63a7\u7d22\u5f15\u4f7f\u7528\u60c5\u51b5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- MySQL\nSHOW INDEX FROM table_name;\n\n-- PostgreSQL\nSELECT * FROM pg_stat_user_indexes;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,s.jsx)(n.p,{children:"\u5408\u7406\u4f7f\u7528\u7d22\u5f15\u53ef\u4ee5\u663e\u8457\u63d0\u5347\u6570\u636e\u5e93\u6027\u80fd\uff0c\u4f46\u9700\u8981\u6743\u8861\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u67e5\u8be2\u6027\u80fd\u63d0\u5347"}),"\n",(0,s.jsx)(n.li,{children:"\u5b58\u50a8\u7a7a\u95f4\u5f00\u9500"}),"\n",(0,s.jsx)(n.li,{children:"\u5199\u5165\u6027\u80fd\u5f71\u54cd"}),"\n",(0,s.jsx)(n.li,{children:"\u7ef4\u62a4\u6210\u672c"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u540e\u7eed\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u63a2\u8ba8\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7d22\u5f15\u4f18\u5316\u7b56\u7565"}),"\n",(0,s.jsx)(n.li,{children:"\u67e5\u8be2\u4f18\u5316\u6280\u5de7"}),"\n",(0,s.jsx)(n.li,{children:"\u6570\u636e\u5e93\u6027\u80fd\u76d1\u63a7"}),"\n",(0,s.jsx)(n.li,{children:"\u5206\u5e93\u5206\u8868\u7b56\u7565"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u656c\u8bf7\u671f\u5f85\u66f4\u591a\u5185\u5bb9!"})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>r});var i=l(6540);const s={},d=i.createContext(s);function a(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);