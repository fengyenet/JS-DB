function DB(a){this.__store={};this.__cache=[];this.__proto__.__output=[];this.__updatecache=[];this.item=function(d){if(!d){return this.__output}d=d.split(",");var b=[];for(var e=0;e<this.__output.length;e++){var c={};for(let key in this.__output[e]){if(d.indexOf(key)!=-1){c[key]=this.__output[e][key]}}if(JSON.stringify(c)==="{}"){return[]}b.push(c)}return b};this.put=function(e,g,h,b){this.__updatecache=[];if(!this.__store[e]){this.__store[e]=[]}if(!h){if(g.length!=undefined){this.__store[e]=this.__store[e].concat(g)}else{this.__store[e].push(g)}return true}else{if(!g||g==1){var f=this.__store[e];for(var c=0;c<f.length;c++){if(b!==undefined&&b!==""&&b.length==2){if(c>=b[0]&&c<b[0]+b[1]){for(let key in h){if(typeof(h[key])=="string"&&h[key].indexOf("++")>=0){h[key]=h[key].replace("++","");h[key]=Number(h[key]);if(isNaN(h[key])||typeof(f[c][key])!="number"){continue}f[c][key]=f[c][key]+h[key]}else{if(typeof(h[key])=="string"&&h[key].indexOf("--")>=0){h[key]=h[key].replace("--","");h[key]=Number(h[key]);if(isNaN(h[key])||typeof(f[c][key])!="number"){continue}f[c][key]=f[c][key]-h[key]}else{f[c][key]=h[key]}}}}}else{for(let key in h){if(typeof(h[key])=="string"&&h[key].indexOf("++")>=0){h[key]=h[key].replace("++","");h[key]=Number(h[key]);if(isNaN(h[key])||typeof(f[c][key])!="number"){continue}f[c][key]=f[c][key]+h[key]}else{if(typeof(h[key])=="string"&&h[key].indexOf("--")>=0){h[key]=h[key].replace("--","");h[key]=Number(h[key]);if(isNaN(h[key])||typeof(f[c][key])!="number"){continue}f[c][key]=f[c][key]-h[key]}else{f[c][key]=h[key]}}}}}return true}else{if(typeof(g)=="string"){oper=this.splitOperator(g);if(oper.length<1){return false}var f=this.__store[e];for(var c=0;c<f.length;c++){if(b!==undefined&&b!==""&&b.length==2){if(c>=b[0]&&c<b[0]+b[1]){isMatch=this.dataMatch(f[c],oper);if(isMatch){for(let key in h){if(typeof(h[key])=="string"&&h[key].indexOf("++")>=0){h[key]=h[key].replace("++","");h[key]=Number(h[key]);if(isNaN(h[key])||typeof(f[c][key])!="number"){continue}f[c][key]=f[c][key]+h[key]}else{if(typeof(h[key])=="string"&&h[key].indexOf("--")>=0){h[key]=h[key].replace("--","");h[key]=Number(h[key]);if(isNaN(h[key])||typeof(f[c][key])!="number"){continue}f[c][key]=f[c][key]-h[key]}else{f[c][key]=h[key]}}}}}}else{isMatch=this.dataMatch(f[c],oper);if(isMatch){for(let key in h){if(typeof(h[key])=="string"&&h[key].indexOf("++")>=0){h[key]=h[key].replace("++","");h[key]=Number(h[key]);if(isNaN(h[key])||typeof(f[c][key])!="number"){continue}f[c][key]=f[c][key]+h[key]}else{if(typeof(h[key])=="string"&&h[key].indexOf("--")>=0){h[key]=h[key].replace("--","");h[key]=Number(h[key]);if(isNaN(h[key])||typeof(f[c][key])!="number"){continue}f[c][key]=f[c][key]-h[key]}else{f[c][key]=h[key]}}}}}}return true}else{if(typeof(g)=="object"){if(g.length!=undefined){var f=this.__store[e];this.__updatecache=[];for(var c=0;c<f.length;c++){if(b!==undefined&&b!==""&&b.length==2){if(c>=b[0]&&c<b[0]+b[1]){this.__updatecache.push(f[c])}}else{this.__updatecache.push(f[c])}}for(let operItem in g){var d=[];oper=this.splitOperator(g[operItem]);if(oper.length<1||this.__updatecache.length<1){continue}for(var c=0;c<this.__updatecache.length;c++){isMatch=this.dataMatch(this.__updatecache[c],oper);if(isMatch){d.push(this.__updatecache[c])}}this.__updatecache=d}if(this.__updatecache.length>0){for(var c=0;c<this.__updatecache.length;c++){for(let key in h){if(typeof(h[key])=="string"&&h[key].indexOf("++")>=0){h[key]=h[key].replace("++","");h[key]=Number(h[key]);if(isNaN(h[key])||typeof(this.__updatecache[c][key])!="number"){continue}this.__updatecache[c][key]=this.__updatecache[c][key]+h[key]}else{if(typeof(h[key])=="string"&&h[key].indexOf("--")>=0){h[key]=h[key].replace("--","");h[key]=Number(h[key]);if(isNaN(h[key])||typeof(this.__updatecache[c][key])!="number"){continue}this.__updatecache[c][key]=this.__updatecache[c][key]-h[key]}else{this.__updatecache[c][key]=h[key]}}}}}this.__updatecache=[];return true}return false}else{return false}}}}};this.del=function(f,h,b){if(b!==undefined&&b!==""&&b.length==2&&(h==1||!h)){var g=this.__store[f];var e=[];for(var d=0;d<g.length;d++){if(d<b[0]||d>=b[0]+b[1]){e.push(g[d])}}this.__store[f]=e;return true}if(typeof(h)=="string"){oper=this.splitOperator(h);if(oper.length<1){return false}var g=this.__store[f];var e=[];for(var d=0;d<g.length;d++){if(b!==undefined&&b!==""&&b.length==2){if(d<b[0]||d>=b[0]+b[1]){isMatch=this.dataMatch(g[d],oper);if(!isMatch){e.push(g[d])}}}else{isMatch=this.dataMatch(g[d],oper);if(!isMatch){e.push(g[d])}}}this.__store[f]=e;return true}else{if(typeof(h)=="object"){if(h.length!=undefined){var g=this.__store[f];var j=[];for(let operItem in h){var e=[];oper=this.splitOperator(h[operItem]);if(oper.length<1){continue}for(var d=0;d<g.length;d++){if(b!==undefined&&b!==""&&b.length==2){if(d<b[0]||d>=b[0]+b[1]){isMatch=this.dataMatch(g[d],oper);if(isMatch){e.push(d)}}}else{isMatch=this.dataMatch(g[d],oper);if(isMatch){e.push(d)}}}if(e.length>0){j.push(e)}}if(j.length>0){var c=j[0];for(let d=0;d<j.length;d++){c=j[d].filter(function(i){return c.indexOf(i)!==-1})}var e=[];for(var d=0;d<g.length;d++){if(c.indexOf(d)<0){e.push(g[d])}}this.__store[f]=e}return true}return false}}};this.clear=function(b){this.__store[b]=[];this.__cache=[];this.__output=[];return true};Object.defineProperty(this.__proto__,"_compare",{value:function(b,c){return function(f,d){if(!f[b]){return false}if(!d[b]){return false}var g=f[b];var e=d[b];if(c==true){return g-e}else{return e-g}}},configurable:true});Object.defineProperty(this.__proto__,"splitOperator",{value:function(b){orField=b.split(" or ");oper=[];for(var c=0;c<orField.length;c++){itemString=orField[c];if(itemString.indexOf(">=")!=-1){oper.push([itemString.split(">="),">="])}else{if(itemString.indexOf("<=")!=-1){oper.push([itemString.split("<="),"<="])}else{if(itemString.indexOf(">")!=-1){oper.push([itemString.split(">"),">"])}else{if(itemString.indexOf("<")!=-1){oper.push([itemString.split("<"),"<"])}else{if(itemString.indexOf("=")!=-1){oper.push([itemString.split("="),"="])}else{if(itemString.indexOf(" like ")!=-1){oper.push([itemString.split(" like "),"like"])}}}}}}}return oper},configurable:true});Object.defineProperty(this.__proto__,"dataMatch",{value:function(c,e){var b=[];for(var d=0;d<e.length;d++){oper_type=e[d][1];condition=e[d][0];switch(oper_type){case">=":if(condition[1].indexOf("`")!=-1){secondField=condition[1].replace(/\`/g,"");if(c[condition[0]]>=c[secondField]){b.push(1)}}else{if(c[condition[0]]>=condition[1]){b.push(1)}}break;case"<=":if(condition[1].indexOf("`")!=-1){secondField=condition[1].replace(/\`/g,"");if(c[condition[0]]<=c[secondField]){b.push(1)}}else{if(c[condition[0]]<=condition[1]){b.push(1)}}break;case">":if(condition[1].indexOf("`")!=-1){secondField=condition[1].replace(/\`/g,"");if(c[condition[0]]>c[secondField]){b.push(1)}}else{if(c[condition[0]]>condition[1]){b.push(1)}}break;case"<":if(condition[1].indexOf("`")!=-1){secondField=condition[1].replace(/\`/g,"");if(c[condition[0]]<c[secondField]){b.push(1)}}else{if(c[condition[0]]<condition[1]){b.push(1)}}break;case"=":if(condition[1].indexOf("`")!=-1){secondField=condition[1].replace(/\`/g,"");if(c[condition[0]]==c[secondField]){b.push(1)}}else{if(c[condition[0]]==condition[1]){b.push(1)}}break;case"like":if(c[condition[0]].indexOf(condition[1])!=-1){b.push(1)}break}}if(b.indexOf(1)!=-1){return true}return false},configurable:true});Object.defineProperty(this.__proto__,"where",{value:function(e,d){if(!e){this.__output=this.__cache;return this.__output}if(this.__output.length<1){this.__output=[];Object.defineProperty(this.__output.__proto__,"__output",{value:[],configurable:true});return this.__output}var b=[];if(!d){oper=this.splitOperator(e);if(oper.length<1){this.__output=[];return this.__output}for(var c=0;c<this.__output.length;c++){items=this.__output[c];isMatch=this.dataMatch(items,oper);if(isMatch){b.push(items)}}}else{for(var c=0;c<this.__output.length;c++){items=this.__output[c];isMatch=this.dataMatch(items,[[[e,d],"like"]]);if(isMatch){b.push(items)}}}this.__output=b;Object.defineProperty(this.__output.__proto__,"__output",{value:b,configurable:true});return this.__output},configurable:true});Object.defineProperty(this.__proto__,"sortBy",{value:function(c,b){if(this.__output.length<1){this.__output=[];Object.defineProperty(this.__output.__proto__,"__output",{value:[],configurable:true});return this.__output}if(!b){b="asc"}b=b.toLowerCase();if(b=="asc"){compare=this._compare(c,true);this.__output=this.__output.sort(compare)}else{compare=this._compare(c,false);this.__output=this.__output.sort(compare)}Object.defineProperty(this.__output.__proto__,"__output",{value:this.__output,configurable:true});return this.__output},configurable:true});Object.defineProperty(this.__proto__,"limit",{value:function(e,b){if(this.__output.length<1){this.__output=[];Object.defineProperty(this.__output.__proto__,"__output",{value:[],configurable:true});return this.__output}var c=[];if(!e){e=0}if(!b){b=20}for(var d=0;d<this.__output.length;d++){if(b){if(d>=e&&d<e+b){c.push(this.__output[d])}}else{if(d>=e){c.push(this.__output[d])}}}this.__output=c;Object.defineProperty(this.__output.__proto__,"__output",{value:c,configurable:true});return this.__output},configurable:true});Object.defineProperty(this.__proto__,"getItem",{value:function(d){if(this.__output.length<1){this.__output=[];Object.defineProperty(this.__output.__proto__,"__output",{value:[],configurable:true});return this.__output}if(!d){d=[]}else{d=d.split(",")}var b=[];for(var e=0;e<this.__output.length;e++){var c={};for(let key in this.__output[e]){if(d==[]||d.indexOf(key)!=-1){c[key]=this.__output[e][key]}}if(JSON.stringify(c)==="{}"){return[]}b.push(c)}return b},configurable:true});Object.defineProperty(this.__proto__,"setProto",{value:function(d,b){for(var c in b){Object.defineProperty(d.__proto__,c,{value:b[c],configurable:true})}return d},configurable:true});Object.defineProperty(this.__proto__,"extendProto",{value:{where:this.__proto__.where,sortBy:this.__proto__.sortBy,limit:this.__proto__.limit,splitOperator:this.__proto__.splitOperator,dataMatch:this.__proto__.dataMatch,__output:this.__proto__.__output,setProto:this.__proto__.setProto,_compare:this.__proto__._compare,getItem:this.__proto__.getItem},configurable:true});this.setProto(this.__cache,this.extendProto);this.setProto(this.__output,this.extendProto);Object.defineProperty(this.__proto__,"table",{value:function(b){if(!this.__store.hasOwnProperty(b)){this.__store[b]=[];this.__cache=[];this.__output=this.__cache;return this}this.__cache=this.__store[b];this.__output=this.__cache;return this},configurable:true})}function DBUtils(){this.table="table";this.db=new DB();this.use=function(a){if(a){this.table=a;return this}else{this.table="";return this}};this.where=function(b,a){if(!this.table){return[]}tableTarget=this.db.table(this.table);if(!a){return tableTarget.where(b)}else{return tableTarget.where(b,a)}};this.put=function(b,c,a){if(!this.table||!b){return false}tableTarget=this.db;if(!c){return tableTarget.put(this.table,b)}else{if(a===undefined||a===""||(typeof(a)!="object"&&typeof(a)!="number")){return tableTarget.put(this.table,b,c)}else{if(typeof(a)=="number"){return tableTarget.put(this.table,b,c,[a,1])}else{return tableTarget.put(this.table,b,c,a)}}}};this.clear=function(){if(!this.table){return false}return this.db.clear(this.table)};this.del=function(b,a){if(!this.table||!b){return false}tableTarget=this.db;if(a===undefined||a===""||(typeof(a)!="object"&&typeof(a)!="number")){return tableTarget.del(this.table,b)}else{if(typeof(a)=="number"){return tableTarget.del(this.table,b,[a,1])}else{return tableTarget.del(this.table,b,a)}}};this.item=function(a){if(!this.table){return[]}tableTarget=this.db.table(this.table);if(a){return tableTarget.item(a)}else{return tableTarget.item()}};return this};
