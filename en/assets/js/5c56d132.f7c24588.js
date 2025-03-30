"use strict";(self.webpackChunksmartdb_docs=self.webpackChunksmartdb_docs||[]).push([[7744],{5737:e=>{e.exports=JSON.parse('{"permalink":"/smartdb-doc/en/blog/2025-03-29-differences-between-drop-delete","editUrl":"https://github.com/dataleapinfo/smartdb-doc/blob/main/blog/2025-03-29-differences-between-drop-delete.mdx","source":"@site/blog/2025-03-29-differences-between-drop-delete.mdx","title":"\u5728 SQL \u4e2d Truncate \u4e0e Drop\u3001Delete \u7684\u533a\u522b","description":"\u672c\u6587\u5c06\u6df1\u5165\u63a2\u8ba8\u6570\u636e\u5e93\u4e2d DROP\u3001DELETE \u548c TRUNCATE \u64cd\u4f5c\u4e4b\u95f4\u7684\u4e3b\u8981\u533a\u522b\u3002","date":"2025-03-29T00:00:00.000Z","tags":[{"inline":true,"label":"drop","permalink":"/smartdb-doc/en/blog/tags/drop"},{"inline":true,"label":"delete","permalink":"/smartdb-doc/en/blog/tags/delete"},{"inline":true,"label":"truncate","permalink":"/smartdb-doc/en/blog/tags/truncate"}],"readingTime":7.17,"hasTruncateMarker":false,"authors":[{"name":"DataLeap Team","title":"SmartDB Team","url":"https://www.dataleapinfo.com","email":"support@dataleapinfo.com","github":"https://github.com/dataleapinfo","imageURL":"https://github.com/dataleapinfo.png","key":"dataleap","page":null}],"frontMatter":{"slug":"2025-03-29-differences-between-drop-delete","title":"\u5728 SQL \u4e2d Truncate \u4e0e Drop\u3001Delete \u7684\u533a\u522b","authors":["dataleap"],"tags":["drop","delete","truncate"],"description":"\u672c\u6587\u5c06\u6df1\u5165\u63a2\u8ba8\u6570\u636e\u5e93\u4e2d DROP\u3001DELETE \u548c TRUNCATE \u64cd\u4f5c\u4e4b\u95f4\u7684\u4e3b\u8981\u533a\u522b\u3002"},"unlisted":false,"nextItem":{"title":"\u6570\u636e\u5e93\u7d22\u5f15\uff1a\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u7684\u5173\u952e","permalink":"/smartdb-doc/en/blog/database-indexes"}}')},6189:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>x,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var s=d(5737),l=d(4848),r=d(8453);const i={slug:"2025-03-29-differences-between-drop-delete",title:"\u5728 SQL \u4e2d Truncate \u4e0e Drop\u3001Delete \u7684\u533a\u522b",authors:["dataleap"],tags:["drop","delete","truncate"],description:"\u672c\u6587\u5c06\u6df1\u5165\u63a2\u8ba8\u6570\u636e\u5e93\u4e2d DROP\u3001DELETE \u548c TRUNCATE \u64cd\u4f5c\u4e4b\u95f4\u7684\u4e3b\u8981\u533a\u522b\u3002"},t="SQL \u4e2d Drop\u3001Delete \u4e0e Truncate \u7684\u533a\u522b",c={authorsImageUrls:[void 0]},h=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"SQL \u7c7b\u578b",id:"sql-\u7c7b\u578b",level:2},{value:"\u6027\u80fd\u5bf9\u6bd4",id:"\u6027\u80fd\u5bf9\u6bd4",level:2},{value:"1. DROP\u2014\u2014&gt;\u6700\u5feb",id:"1-drop\u6700\u5feb",level:3},{value:"2. DELETE\u2014\u2014&gt;\u6700\u6162",id:"2-delete\u6700\u6162",level:3},{value:"3. TRUNCATE\u2014\u2014&gt;\u8f83\u5feb",id:"3-truncate\u8f83\u5feb",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function o(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u6570\u636e\u5e93\u64cd\u4f5c\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u901a\u8fc7 SQL \u8bed\u53e5\u4e0e\u6570\u636e\u5e93\u8fdb\u884c\u4ea4\u4e92\u3002\u867d\u7136\u5e02\u9762\u4e0a\u6709\u8bb8\u591a\u6570\u636e\u5e93\u56fe\u5f62\u5316\u5de5\u5177\u53ef\u4ee5\u8f85\u52a9\u64cd\u4f5c\uff0c\u4f46\u5f52\u6839\u7ed3\u5e95\uff0c\u8fd9\u4e9b\u5de5\u5177\u7684\u672c\u8d28\u662f\u5c06\u7528\u6237\u7684\u64cd\u4f5c\u8f6c\u5316\u4e3a SQL \u8bed\u53e5\u4e0e\u6570\u636e\u5e93\u901a\u4fe1\u3002\u56e0\u6b64\uff0c\u4f18\u79c0\u7684\u6570\u636e\u5e93\u7ba1\u7406\u5de5\u5177\u65e0\u8bba\u591a\u4e48\u667a\u80fd\uff0c\u5176\u6838\u5fc3\u4ecd\u7136\u662f SQL\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u76ee\u524d\u5e02\u9762\u4e0a\u6709\u8bb8\u591a\u4f18\u79c0\u7684\u6570\u636e\u5e93\u56fe\u5f62\u5316\u5de5\u5177\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u6b3e\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"DataGrip"}),"\uff1a\u7531 JetBrains \u516c\u53f8\u5f00\u53d1\uff0c\u662f\u5f00\u53d1\u8005\u4e2d\u5e7f\u4e3a\u4eba\u77e5\u7684\u6570\u636e\u5e93\u7ba1\u7406\u5de5\u5177\uff0c\u529f\u80fd\u5f3a\u5927\u4e14\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"DBeaver"}),"\uff1a\u4e00\u6b3e\u5f00\u6e90\u7684\u6570\u636e\u5e93\u7ba1\u7406\u5de5\u5177\uff0c\u867d\u7136\u76f8\u5bf9 DataGrip \u77e5\u540d\u5ea6\u7a0d\u4f4e\uff0c\u4f46\u5728\u5f00\u53d1\u8005\u793e\u533a\u4e2d\u4e5f\u5e7f\u53d7\u6b22\u8fce\uff0c\u7279\u522b\u662f\u5728\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\u65b9\u9762\u8868\u73b0\u51fa\u8272\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Navicat"}),"\uff1a\u4f5c\u4e3a\u62e5\u6709 20 \u591a\u5e74\u5386\u53f2\u7684\u8001\u724c\u6570\u636e\u5e93\u7ba1\u7406\u5de5\u5177\uff0cNavicat \u5728\u56fd\u5185\u5e02\u573a\u4eab\u6709\u5f88\u9ad8\u7684\u77e5\u540d\u5ea6\uff0c\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\u5e76\u4e14\u529f\u80fd\u4e30\u5bcc\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"......"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5c3d\u7ba1\u6709\u8bb8\u591a\u4f18\u79c0\u7684\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u5de5\u5177\uff0c\u6211\u4eec\u4f5c\u4e3a\u5f00\u53d1\u8005\u4f9d\u7136\u9700\u8981\u719f\u7ec3\u638c\u63e1 SQL \u8bed\u53e5\u7684\u77e5\u8bc6\uff0c\u624d\u80fd\u66f4\u597d\u5730\u7406\u89e3\u6570\u636e\u5e93\u7684\u8fd0\u884c\u673a\u5236\u3002\u56e0\u6b64\uff0c\u4eca\u5929\u6211\u4eec\u6765\u6df1\u5165\u63a2\u8ba8\u4e00\u4e0b ",(0,l.jsx)(n.code,{children:"DROP"}),"\u3001",(0,l.jsx)(n.code,{children:"DELETE"})," \u548c ",(0,l.jsx)(n.code,{children:"TRUNCATE"})," \u8fd9\u4e09\u79cd\u64cd\u4f5c\u7684\u533a\u522b\u3002"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u64cd\u4f5c"}),(0,l.jsx)(n.th,{children:"SQL \u7c7b\u578b"}),(0,l.jsx)(n.th,{children:"\u4f5c\u7528"}),(0,l.jsx)(n.th,{children:"\u662f\u5426\u4fdd\u7559\u8868\u7ed3\u6784"}),(0,l.jsx)(n.th,{children:"\u652f\u6301\u4e8b\u52a1\u56de\u6eda"}),(0,l.jsx)(n.th,{children:"\u6267\u884c\u901f\u5ea6"}),(0,l.jsx)(n.th,{children:"\u4f7f\u7528\u573a\u666f"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"DROP"}),(0,l.jsx)(n.td,{children:"DDL\uff08\u6570\u636e\u5b9a\u4e49\u8bed\u8a00\uff09"}),(0,l.jsx)(n.td,{children:"\u5220\u9664\u6574\u4e2a\u8868\u6216\u5176\u4ed6\u6570\u636e\u5e93\u5bf9\u8c61"}),(0,l.jsx)(n.td,{children:"\u5426"}),(0,l.jsx)(n.td,{children:"\u5426"}),(0,l.jsx)(n.td,{children:"\u6700\u5feb"}),(0,l.jsx)(n.td,{children:"\u5b8c\u5168\u79fb\u9664\u8868\u53ca\u5176\u6570\u636e\uff0c\u4e0d\u518d\u9700\u8981\u65f6\u4f7f\u7528"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"DELETE"}),(0,l.jsx)(n.td,{children:"DML\uff08\u6570\u636e\u64cd\u4f5c\u8bed\u8a00\uff09"}),(0,l.jsx)(n.td,{children:"\u5220\u9664\u8868\u4e2d\u7684\u7279\u5b9a\u8bb0\u5f55"}),(0,l.jsx)(n.td,{children:"\u662f"}),(0,l.jsx)(n.td,{children:"\u662f"}),(0,l.jsx)(n.td,{children:"\u6162\uff08\u9010\u884c\u5220\u9664\uff09"}),(0,l.jsx)(n.td,{children:"\u5220\u9664\u90e8\u5206\u6216\u5168\u90e8\u8bb0\u5f55\uff0c\u4fdd\u7559\u8868\u7ed3\u6784\u65f6\u4f7f\u7528"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"TRUNCATE"}),(0,l.jsx)(n.td,{children:"DDL\uff08\u6570\u636e\u5b9a\u4e49\u8bed\u8a00\uff09"}),(0,l.jsx)(n.td,{children:"\u5feb\u901f\u5220\u9664\u8868\u4e2d\u7684\u6240\u6709\u8bb0\u5f55"}),(0,l.jsx)(n.td,{children:"\u662f"}),(0,l.jsx)(n.td,{children:"\u5426"}),(0,l.jsx)(n.td,{children:"\u8f83\u5feb"}),(0,l.jsx)(n.td,{children:"\u6e05\u7a7a\u8868\u6570\u636e\u4f46\u4fdd\u7559\u8868\u7ed3\u6784\u65f6\u4f7f\u7528"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"sql-\u7c7b\u578b",children:"SQL \u7c7b\u578b"}),"\n",(0,l.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u6211\u4eec\u4ece SQL \u7684\u7c7b\u578b\u6765\u533a\u5206 ",(0,l.jsx)(n.code,{children:"DROP"}),"\u3001",(0,l.jsx)(n.code,{children:"DELETE"})," \u548c ",(0,l.jsx)(n.code,{children:"TRUNCATE"})," \u8fd9\u4e09\u79cd\u64cd\u4f5c\uff1a"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"DROP"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"SQL"})," ",(0,l.jsx)(n.strong,{children:"\u7c7b\u578b"}),"\uff1a",(0,l.jsx)(n.code,{children:"DROP"})," \u662f\u4e00\u79cd ",(0,l.jsx)(n.strong,{children:"DDL"}),"**\uff08",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.strong,{children:"Data Definition Language"})}),"\uff0c\u6570\u636e\u5b9a\u4e49\u8bed\u8a00\uff09** \u64cd\u4f5c\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u8bed\u6cd5\u683c\u5f0f\uff1a"}),(0,l.jsx)(n.code,{children:"DROP TABLE table_name;"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u4f5c\u7528"}),"\uff1a\u7528\u4e8e\u5220\u9664\u6570\u636e\u5e93\u4e2d\u7684\u6574\u4e2a\u8868\u3001\u89c6\u56fe\u3001\u7d22\u5f15\u6216\u5176\u4ed6\u6570\u636e\u5e93\u5bf9\u8c61\u3002\u4e00\u65e6\u6267\u884c ",(0,l.jsx)(n.code,{children:"DROP"})," \u64cd\u4f5c\uff0c\u5220\u9664\u7684\u5bf9\u8c61\u5c06\u65e0\u6cd5\u6062\u590d\uff0c\u8868\u7ed3\u6784\u548c\u6570\u636e\u90fd\u4f1a\u88ab\u5b8c\u5168\u79fb\u9664\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"DELETE"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"SQL"})," ",(0,l.jsx)(n.strong,{children:"\u7c7b\u578b"}),"\uff1a",(0,l.jsx)(n.code,{children:"DELETE"})," \u662f\u4e00\u79cd ",(0,l.jsx)(n.strong,{children:"DML"}),"**\uff08",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.strong,{children:"Data Manipulation Language"})}),"\uff0c\u6570\u636e\u64cd\u4f5c\u8bed\u8a00\uff09** \u64cd\u4f5c\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u8bed\u6cd5\u683c\u5f0f\uff1a"}),(0,l.jsx)(n.code,{children:"DELETE FROM table_name WHERE condition;"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u4f5c\u7528"}),"\uff1a\u7528\u4e8e\u5220\u9664\u8868\u4e2d\u7684\u7279\u5b9a\u8bb0\u5f55\uff08\u884c\uff09\uff0c\u4f46\u8868\u7ed3\u6784\u548c\u7d22\u5f15\u4fdd\u7559\u3002",(0,l.jsx)(n.code,{children:"DELETE"})," \u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"WHERE"})," \u5b50\u53e5\u6307\u5b9a\u5220\u9664\u7684\u6761\u4ef6\uff0c\u5220\u9664\u7684\u8bb0\u5f55\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4e8b\u52a1\u56de\u6eda\uff08\u5982\u679c\u6570\u636e\u5e93\u652f\u6301\u4e8b\u52a1\uff09\u6062\u590d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"TRUNCATE"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"SQL \u7c7b\u578b"}),"\uff1a",(0,l.jsx)(n.code,{children:"TRUNCATE"})," \u4e5f\u662f\u4e00\u79cd ",(0,l.jsx)(n.strong,{children:"DDL \u64cd\u4f5c"}),"\uff0c\u5c3d\u7ba1\u5b83\u4e3b\u8981\u7528\u4e8e\u6570\u636e\u64cd\u4f5c\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u8bed\u6cd5\u683c\u5f0f\uff1a"}),(0,l.jsx)(n.code,{children:"TRUNCATE TABLE table_name;"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u4f5c\u7528"}),"\uff1a\u7528\u4e8e\u5feb\u901f\u5220\u9664\u8868\u4e2d\u7684\u6240\u6709\u8bb0\u5f55\uff0c\u4fdd\u7559\u8868\u7ed3\u6784\u548c\u7d22\u5f15\u3002\u4e0e ",(0,l.jsx)(n.code,{children:"DELETE"})," \u4e0d\u540c\uff0c",(0,l.jsx)(n.code,{children:"TRUNCATE"})," \u64cd\u4f5c\u65e0\u6cd5\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"WHERE"})," \u5b50\u53e5\u7b5b\u9009\u8bb0\u5f55\uff0c\u4e5f\u4e0d\u652f\u6301\u4e8b\u52a1\u56de\u6eda\u3002",(0,l.jsx)(n.code,{children:"TRUNCATE"})," \u901a\u5e38\u6bd4 ",(0,l.jsx)(n.code,{children:"DELETE"})," \u66f4\u5feb\uff0c\u56e0\u4e3a\u5b83\u4e0d\u4f1a\u9010\u884c\u5220\u9664\u8bb0\u5f55\uff0c\u800c\u662f\u76f4\u63a5\u91ca\u653e\u8868\u4e2d\u7684\u6570\u636e\u7a7a\u95f4\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6027\u80fd\u5bf9\u6bd4",children:"\u6027\u80fd\u5bf9\u6bd4"}),"\n",(0,l.jsx)(n.h3,{id:"1-drop\u6700\u5feb",children:"1. DROP\u2014\u2014>\u6700\u5feb"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"DROP"})})," \u64cd\u4f5c\u4f1a\u4ece\u6570\u636e\u5e93\u7684\u5143\u6570\u636e\u4e2d\u5f7b\u5e95\u79fb\u9664\u6574\u4e2a\u8868\u7684\u5b9a\u4e49\uff0c\u5305\u62ec\u8868\u7ed3\u6784\u3001\u6570\u636e\u3001\u7d22\u5f15\u4ee5\u53ca\u89e6\u53d1\u5668\u7b49\u6240\u6709\u4fe1\u606f\u3002\u4e0d\u9700\u8981\u9010\u884c\u5904\u7406\uff0c\u56e0\u6b64\u901f\u5ea6\u975e\u5e38\u5feb\u3002\u9002\u7528\u4e8e\u4e0d\u518d\u9700\u8981\u8be5\u8868\u65f6\u7684\u5f7b\u5e95\u5220\u9664\u64cd\u4f5c\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6267\u884c ",(0,l.jsx)(n.code,{children:"DROP"})," \u65f6\uff0c\u6570\u636e\u5e93\u4f1a\u5bf9\u8868\u8fdb\u884c\u9501\u5b9a\uff0c\u5e76\u786e\u4fdd\u6240\u6709\u76f8\u5173\u7684\u5916\u952e\u7ea6\u675f\u5f97\u5230\u5904\u7406\u6216\u89e3\u9664\u3002\u82e5\u5b58\u5728\u4f9d\u8d56\u4e8e\u8be5\u8868\u7684\u5176\u4ed6\u5bf9\u8c61\uff08\u5982\u89c6\u56fe\u6216\u5b58\u50a8\u8fc7\u7a0b\uff09\uff0c\u5219\u9700\u8981\u5148\u89e3\u51b3\u8fd9\u4e9b\u4f9d\u8d56\u95ee\u9898\uff0c\u5426\u5219\u6570\u636e\u5e93\u5c06\u629b\u51fa\u9519\u8bef\u3002",(0,l.jsx)(n.code,{children:"DROP"})," \u64cd\u4f5c\u662f\u4e0d\u53ef\u9006\u7684\uff0c\u610f\u5473\u7740\u8868\u53ca\u5176\u6240\u6709\u5173\u8054\u6570\u636e\u5c06\u88ab\u6c38\u4e45\u5220\u9664\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"2-delete\u6700\u6162",children:"2. DELETE\u2014\u2014>\u6700\u6162"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"DELETE"})," \u64cd\u4f5c\u4f1a\u5728\u76ee\u6807\u8868\u4e2d\u9010\u884c\u626b\u63cf\uff0c\u5e76\u4f9d\u636e ",(0,l.jsx)(n.code,{children:"WHERE"})," \u5b50\u53e5\u4e2d\u7684\u6761\u4ef6\u6765\u51b3\u5b9a\u54ea\u4e9b\u884c\u5e94\u88ab\u5220\u9664\uff1b\u5728\u5220\u9664\u6bcf\u884c\u6570\u636e\u65f6\uff0c\u6570\u636e\u5e93\u4f1a\u8bb0\u5f55\u8fd9\u4e9b\u64cd\u4f5c\u4ee5\u4fbf\u652f\u6301\u4e8b\u52a1\u56de\u6eda\u3002\u6b64\u5916\uff0c\u5982\u679c\u8868\u4e0a\u914d\u7f6e\u4e86\u89e6\u53d1\u5668\uff08\u5982 ",(0,l.jsx)(n.code,{children:"BEFORE DELETE"})," \u6216 ",(0,l.jsx)(n.code,{children:"AFTER DELETE"})," \u89e6\u53d1\u5668\uff09\uff0c\u5219\u5728\u5220\u9664\u64cd\u4f5c\u53d1\u751f\u65f6\u4f1a\u89e6\u53d1\u8fd9\u4e9b\u89e6\u53d1\u5668\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8fd9\u79cd\u9010\u884c\u5904\u7406\u65b9\u5f0f\uff0c\u5c24\u5176\u662f\u5728\u6709\u590d\u6742 ",(0,l.jsx)(n.code,{children:"WHERE"})," \u6761\u4ef6\u65f6\uff0c\u9700\u8981\u68c0\u67e5\u6bcf\u4e00\u884c\u6570\u636e\u662f\u5426\u6ee1\u8db3\u6761\u4ef6\uff0c\u4f7f\u5f97 ",(0,l.jsx)(n.code,{children:"DELETE"})," \u6210\u4e3a\u4e09\u8005\u4e2d\u6700\u6162\u7684\u64cd\u4f5c\u3002\u5982\u679c\u8868\u4e2d\u6709\u5f88\u591a\u8bb0\u5f55\u6216\u6761\u4ef6\u8bed\u53e5\u8f83\u590d\u6742\uff0c\u6027\u80fd\u4f1a\u8fdb\u4e00\u6b65\u53d7\u5230\u5f71\u54cd\u3002\u4f46\u597d\u5904\u662f\uff0c",(0,l.jsx)(n.code,{children:"DELETE"})," \u64cd\u4f5c\u63d0\u4f9b\u4e86\u66f4\u9ad8\u7684\u7075\u6d3b\u6027\uff0c\u5141\u8bb8\u901a\u8fc7\u6761\u4ef6\u8bed\u53e5\u7cbe\u786e\u5220\u9664\u7279\u5b9a\u6570\u636e\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"3-truncate\u8f83\u5feb",children:"3. TRUNCATE\u2014\u2014>\u8f83\u5feb"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"TRUNCATE"})," \u64cd\u4f5c\u901a\u8fc7\u76f4\u63a5\u91ca\u653e\u8868\u4e2d\u7684\u6570\u636e\u7a7a\u95f4\u6765\u5220\u9664\u6240\u6709\u8bb0\u5f55\uff0c\u4e0d\u7528\u9010\u884c\u5904\u7406\u6570\u636e\uff0c\u4e14\u4e0d\u4f1a\u89e6\u53d1\u884c\u7ea7\u522b\u7684\u89e6\u53d1\u5668\uff0c\u56e0\u6b64\u6bd4 ",(0,l.jsx)(n.code,{children:"DELETE"})," \u5feb\u5f97\u591a\u3002\u540c\u65f6\u8868\u7684\u7ed3\u6784\u548c\u7d22\u5f15\u4ecd\u7136\u4fdd\u7559\uff0c\u4f1a\u6bd4**",(0,l.jsx)(n.code,{children:"DROP"}),"** \u64cd\u4f5c\u7a0d\u6162\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u53e6\u5916\uff0c\u7531\u4e8e\u5b83\u662f DDL \u64cd\u4f5c\uff0c\u4f1a\u81ea\u52a8\u63d0\u4ea4\u4e8b\u52a1\uff0c\u4e0d\u80fd\u56de\u6eda\uff0c\u6267\u884c ",(0,l.jsx)(n.code,{children:"TRUNCATE"})," \u540e\uff0c\u8868\u4e2d\u7684\u8ba1\u6570\u5668\uff08\u5982 ",(0,l.jsx)(n.code,{children:"AUTO_INCREMENT"}),"\uff09\u901a\u5e38\u4e5f\u4f1a\u88ab\u91cd\u7f6e\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5c0f\u7ed3",children:"\u5c0f\u7ed3"}),"\n",(0,l.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u6267\u884c\u8d77\u6765\u7684\u901f\u5ea6\u5dee\u8ddd\u662f\u663e\u800c\u6613\u89c1\u7684\uff0c\u6700\u5feb\u7684\u65e0\u7591\u662f",(0,l.jsx)(n.code,{children:"DROP"}),"\u64cd\u4f5c\uff0c\u5176\u6b21\u662f",(0,l.jsx)(n.code,{children:"TRUNCATE"}),"\u64cd\u4f5c\uff0c\u6700\u6162\u7684\u5219\u662f",(0,l.jsx)(n.code,{children:"DELETE"}),"\u64cd\u4f5c\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,l.jsx)(n.p,{children:"\u603b\u4e4b\uff0cDROP\u3001DELETE \u548c TRUNCATE \u5404\u6709\u4e0d\u540c\u7684\u76ee\u7684\uff0c\u5bf9\u6570\u636e\u6062\u590d\u548c\u6027\u80fd\u4e5f\u6709\u4e0d\u540c\u7684\u5f71\u54cd\u3002\u4e86\u89e3\u8fd9\u4e9b\u5dee\u5f02\u6709\u52a9\u4e8e\u4e3a\u7279\u5b9a\u60c5\u51b5\u9009\u62e9\u5408\u9002\u7684\u547d\u4ee4\uff0c\u63d0\u9ad8\u6570\u636e\u5e93\u7ba1\u7406\u64cd\u4f5c\u7684\u6548\u7387\u548c\u6709\u6548\u6027\u3002"})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>t});var s=d(6540);const l={},r=s.createContext(l);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);