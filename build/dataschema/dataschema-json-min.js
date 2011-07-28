/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.4.0
build: nightly
*/
YUI.add("dataschema-json",function(c){var a=c.Lang,b={getPath:function(d){var g=null,f=[],e=0;if(d){d=d.replace(/\[(['"])(.*?)\1\]/g,function(i,h,j){f[e]=j;return".@"+(e++);}).replace(/\[(\d+)\]/g,function(i,h){f[e]=parseInt(h,10)|0;return".@"+(e++);}).replace(/^\./,"");if(!/[^\w\.\$@]/.test(d)){g=d.split(".");for(e=g.length-1;e>=0;--e){if(g[e].charAt(0)==="@"){g[e]=f[parseInt(g[e].substr(1),10)];}}}else{}}return g;},getLocationValue:function(g,f){var e=0,d=g.length;for(;e<d;e++){if(a.isObject(f)&&(g[e] in f)){f=f[g[e]];}else{f=undefined;break;}}return f;},apply:function(g,h){var d=h,f={results:[],meta:{}};if(!a.isObject(h)){try{d=c.JSON.parse(h);}catch(i){f.error=i;return f;}}if(a.isObject(d)&&g){if(!a.isUndefined(g.resultListLocator)){f=b._parseResults.call(this,g,d,f);}if(!a.isUndefined(g.metaFields)){f=b._parseMeta(g.metaFields,d,f);}}else{f.error=new Error("JSON schema parse failure");}return f;},_parseResults:function(h,d,g){var f=[],i,e;if(h.resultListLocator){i=b.getPath(h.resultListLocator);if(i){f=b.getLocationValue(i,d);if(f===undefined){g.results=[];e=new Error("JSON results retrieval failure");}else{if(a.isArray(f)){if(a.isArray(h.resultFields)){g=b._getFieldValues.call(this,h.resultFields,f,g);}else{g.results=f;}}else{g.results=[];e=new Error("JSON Schema fields retrieval failure");}}}else{e=new Error("JSON Schema results locator failure");}if(e){g.error=e;}}return g;},_getFieldValues:function(n,s,e){var g=[],p=n.length,h,f,r,t,m,v,d,l=[],q=[],o=[],u,k;for(h=0;h<p;h++){r=n[h];t=r.key||r;m=r.locator||t;v=b.getPath(m);if(v){if(v.length===1){l[l.length]={key:t,path:v[0]};}else{q[q.length]={key:t,path:v};}}else{}d=(a.isFunction(r.parser))?r.parser:c.Parsers[r.parser+""];if(d){o[o.length]={key:t,parser:d};}}for(h=s.length-1;h>=0;--h){k={};u=s[h];if(u){for(f=l.length-1;f>=0;--f){k[l[f].key]=c.DataSchema.Base.parse.call(this,(a.isUndefined(u[l[f].path])?u[f]:u[l[f].path]),l[f]);}for(f=q.length-1;f>=0;--f){k[q[f].key]=c.DataSchema.Base.parse.call(this,(b.getLocationValue(q[f].path,u)),q[f]);}for(f=o.length-1;f>=0;--f){t=o[f].key;k[t]=o[f].parser.call(this,k[t]);if(a.isUndefined(k[t])){k[t]=null;}}g[h]=k;}}e.results=g;return e;},_parseMeta:function(g,d,f){if(a.isObject(g)){var e,h;for(e in g){if(g.hasOwnProperty(e)){h=b.getPath(g[e]);if(h&&d){f.meta[e]=b.getLocationValue(h,d);}}}}else{f.error=new Error("JSON meta data retrieval failure");}return f;}};c.DataSchema.JSON=c.mix(b,c.DataSchema.Base);},"3.4.0",{requires:["dataschema-base","json"]});