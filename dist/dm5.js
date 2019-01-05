module.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=4)}([function(t,e){t.exports=require("axios")},function(t,e){t.exports=require("vue")},function(t,e){t.exports=require("clone")},function(t,e){t.exports=require("debounce")},function(t,e,i){"use strict";i.r(e);var n=i(0),o=i.n(n),r=i(2),s=i.n(r),c=i(3),a=i.n(c);function u(t,e){var i={};return t.forEach(function(t){return i[t[e]]=t}),i}var p={instantiateMany:function(t,e){return t.map(function(t){return new e(t)})},instantiateChilds:function(t){var e={};for(var i in t)e[i]=(n=t[i],Array.isArray(n)?n.map(function(t){return new V(t)}):new V(n));var n;return e},clone:function(t){return s()(t)},debounce:function(t,e,i){return a()(t,e,i)},mapById:function(t){return u(t,"id")},mapByUri:function(t){return u(t,"uri")},mapByTypeUri:function(t){return u(t,"typeUri")},forEach:function(t,e){for(var i in t)e(t[i])},filter:function(t,e){var i={};for(var n in t){var o=t[n];e(o)&&(i[n]=o)}return i},isEmpty:function(t){return!Object.keys(t).length},getCookie:function(t){var e=document.cookie.match(new RegExp("\\b"+t+"=(\\w*)"));return e&&e[1]},setCookie:function(t,e){document.cookie=t+"="+e+";path=/"}},l={getTopic:function(t,e,i){return o.a.get("/core/topic/"+t,{params:{include_childs:e,include_assoc_childs:i}}).then(function(t){return new V(t.data)})},getTopicByUri:function(t,e,i){return o.a.get("/core/topic/by_uri/"+t,{params:{include_childs:e,include_assoc_childs:i}}).then(function(t){return new V(t.data)})},getTopicsByType:function(t){return o.a.get("/core/topic/by_type/"+t).then(function(t){return p.instantiateMany(t.data,V)})},getTopicRelatedTopics:function(t,e){return o.a.get("/core/topic/"+t+"/related_topics",{params:y(e)}).then(function(t){return p.instantiateMany(t.data,B)})},searchTopics:function(t,e){var i={params:{search:t,field:e}};return o.a.get("/core/topic",i).then(function(t){return p.instantiateMany(t.data,V)})},createTopic:function(t){return o.a.post("/core/topic",t).then(function(t){var e=new V(t.data);return e.directives=t.data.directives,e})},updateTopic:function(t){return o.a.put("/core/topic/"+t.id,t).then(function(t){return t.data})},deleteTopic:function(t){return o.a.delete("/core/topic/"+t).then(function(t){return t.data})},getAssoc:function(t,e,i){return o.a.get("/core/association/"+t,{params:{include_childs:e,include_assoc_childs:i}}).then(function(t){return new M(t.data)})},getAssocRelatedTopics:function(t,e){return o.a.get("/core/association/"+t+"/related_topics",{params:y(e)}).then(function(t){return p.instantiateMany(t.data,B)})},createAssoc:function(t){return o.a.post("/core/association",t).then(function(t){var e=new M(t.data);return e.directives=t.data.directives,e})},updateAssoc:function(t){return o.a.put("/core/association/"+t.id,t).then(function(t){return t.data})},deleteAssoc:function(t){return o.a.delete("/core/association/"+t).then(function(t){return t.data})},deleteMulti:function(t){return o.a.delete("/core"+f(t)).then(function(t){return t.data})},getAllTopicTypes:function(){return o.a.get("/core/topictype/all").then(function(t){return p.instantiateMany(t.data,L)})},createTopicType:function(t){return o.a.post("/core/topictype",t).then(function(t){return new L(t.data)})},updateTopicType:function(t){return o.a.put("/core/topictype",t).then(function(t){return t.data})},getAllAssocTypes:function(){return o.a.get("/core/assoctype/all").then(function(t){return p.instantiateMany(t.data,W)})},createAssocType:function(t){return o.a.post("/core/assoctype",t).then(function(t){return new W(t.data)})},updateAssocType:function(t){return o.a.put("/core/assoctype",t).then(function(t){return t.data})},getPlugins:function(){return o.a.get("/core/plugin").then(function(t){return t.data})},getWebsocketConfig:function(){return o.a.get("/core/websockets").then(function(t){return t.data})},createTopicmap:function(t,e,i){return o.a.post("/topicmap",void 0,{params:{name:t,renderer_uri:e,private:i}}).then(function(t){return new V(t.data)})},getTopicmap:function(t){return o.a.get("/topicmap/"+t).then(function(t){return new q(t.data)})},addTopicToTopicmap:function(t,e,i){d(i,"dmx.topicmaps.x","dmx.topicmaps.y"),o.a.post("/topicmap/"+t+"/topic/"+e,i)},addAssocToTopicmap:function(t,e,i){o.a.post("/topicmap/"+t+"/association/"+e,i)},addRelatedTopicToTopicmap:function(t,e,i,n){n?d(n,"dmx.topicmaps.x","dmx.topicmaps.y"):n={},o.a.post("/topicmap/"+t+"/topic/"+e+"/association/"+i,n)},setTopicViewProps:function(t,e,i){o.a.put("/topicmap/"+t+"/topic/"+e,i)},setAssocViewProps:function(t,e,i){o.a.put("/topicmap/"+t+"/association/"+e,i)},setTopicPosition:function(t,e,i){d(i,"x","y"),o.a.put("/topicmap/"+t+"/topic/"+e+"/"+i.x+"/"+i.y)},setTopicVisibility:function(t,e,i){o.a.put("/topicmap/"+t+"/topic/"+e+"/"+i)},removeAssocFromTopicmap:function(t,e){o.a.delete("/topicmap/"+t+"/association/"+e)},hideMulti:function(t,e){o.a.put("/topicmap/"+t+f(e)+"/visibility/false")},setTopicPositions:function(t,e){o.a.put("/topicmap/"+t,e)},getGeomap:function(t){return o.a.get("/geomap/"+t).then(function(t){return new X(t.data)})},getDomainTopics:function(t,e,i){return o.a.get("/geomap/coord/"+t,{params:{include_childs:e,include_assoc_childs:i}}).then(function(t){return p.instantiateMany(t.data,V)})},createWorkspace:function(t,e,i){return o.a.post("/workspace",void 0,{params:{name:t,uri:e,sharing_mode_uri:i}}).then(function(t){return t.data})},getAssignedTopics:function(t,e,i,n){return o.a.get("/workspace/"+t+"/topics/"+e,{params:{include_childs:i,include_assoc_childs:n}}).then(function(t){return p.instantiateMany(t.data,V)})},getAssignedWorkspace:function(t){return o.a.get("/workspace/object/"+t).then(function(t){return new V(t.data)})},login:function(t){return o.a.post("/accesscontrol/login",void 0,{auth:t})},logout:function(){return o.a.post("/accesscontrol/logout")},getUsername:function(){return o.a.get("/accesscontrol/user").then(function(t){return t.data})},getTopicPermissions:function(t){return o.a.get("/accesscontrol/topic/"+t).then(function(t){return t.data})},getAssocPermissions:function(t){return o.a.get("/accesscontrol/association/"+t).then(function(t){return t.data})},createUserAccount:function(t,e){return o.a.post("/accesscontrol/user_account",{username:t,password:e}).then(function(t){return new V(t.data)})},getXML:function(t){return o.a.get(t).then(function(t){return t.request.responseXML.documentElement})},setErrorHandler:function(t){o.a.interceptors.response.use(function(t){return t},function(e){return t(e),Promise.reject(e)})}};function f(t){var e="";return t.topicIds.length&&(e+="/topics/"+t.topicIds),t.assocIds.length&&(e+="/assocs/"+t.assocIds),e}function y(t){return t&&{assoc_type_uri:t.assocTypeUri,my_role_type_uri:t.myRoleTypeUri,others_role_type_uri:t.othersRoleTypeUri,others_topic_type_uri:t.othersTopicTypeUri}}function d(t,e,i){t[e]=Math.round(t[e]),t[i]=Math.round(t[i])}var h=i(1),v=i.n(h),T={topicTypes:void 0,assocTypes:void 0,dataTypes:void 0,roleTypes:void 0},g={putTopicType:function(t,e){k(e)},putAssocType:function(t,e){A(e)},_newTopicType:function(t,e){w(e.topicType)},_newAssocType:function(t,e){_(e.assocType)},_processDirectives:function(t,e){e.forEach(function(t){switch(t.type){case"UPDATE_TOPIC_TYPE":w(t.arg);break;case"UPDATE_ASSOCIATION_TYPE":_(t.arg)}}),v.a.nextTick(function(){e.forEach(function(t){switch(t.type){case"DELETE_TOPIC_TYPE":e=t.arg.uri,v.a.delete(T.topicTypes,e);break;case"DELETE_ASSOCIATION_TYPE":!function(t){v.a.delete(T.assocTypes,t)}(t.arg.uri)}var e})})}};function m(t,e){return function(i){var n=T[t][i];if(!n)throw Error(e+' "'+i+'" not in type cache');return n}}function w(t){k(new L(t))}function _(t){A(new W(t))}function k(t){if(!(t instanceof L))throw Error(t+" is not a TopicType");v.a.set(T.topicTypes,t.uri,t)}function A(t){if(!(t instanceof W))throw Error(t+" is not an AssocType");v.a.set(T.assocTypes,t.uri,t)}var x={init:function(t){return t.registerModule("typeCache",{state:T,actions:g}),Promise.all([l.getAllTopicTypes().then(function(t){T.topicTypes=p.mapByUri(t),k(new L({uri:"dmx.core.meta_meta_type",typeUri:"dmx.core.meta_meta_meta_type",value:"Meta Meta Type",dataTypeUri:"dmx.core.text",assocDefs:[],viewConfigTopics:[]}))}),l.getAllAssocTypes().then(function(t){T.assocTypes=p.mapByUri(t)}),l.getTopicsByType("dmx.core.data_type").then(function(t){T.dataTypes=p.mapByUri(t)}),l.getTopicsByType("dmx.core.role_type").then(function(t){T.roleTypes=p.mapByUri(t)})]).then(function(){})},getTopicType:m("topicTypes","Topic type"),getAssocType:m("assocTypes","Assoc type"),getDataType:m("dataTypes","Data type"),getRoleType:m("roleTypes","Role type"),getTypeById:function(t){var e=Object.values(T.topicTypes).concat(Object.values(T.assocTypes)).filter(function(e){return e.id===t});if(1!==e.length)throw Error(e.length+" types with ID "+t+" in type cache");return e[0]}},P={};function b(t,e){return(P[t]||(P[t]=e(t))).then(function(t){return t["dmx.accesscontrol.operation.write"]})}var U={isTopicWritable:function(t){return b(t,l.getTopicPermissions)},isAssocWritable:function(t){return b(t,l.getAssocPermissions)},clear:function(){P={}}},I=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},O=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();function E(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function C(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var D=function(){function t(e){if(j(this,t),"Object"!==e.constructor.name)throw Error("DMXObject constructor expects plain Object, got "+e.constructor.name+" ("+e+")");this.id=e.id,this.uri=e.uri,this.typeUri=e.typeUri,this.value=e.value,this.childs=p.instantiateChilds(e.childs)}return O(t,[{key:"fillChilds",value:function(){var t=this;return this.getType().assocDefs.forEach(function(e){var i=t.childs[e.assocDefUri],n=void 0;i||(n=new V(e.getChildType().emptyInstance())),e.isOne()?(i?i.fillChilds():i=n,i.fillRelatingAssoc(e)):(i?i.forEach(function(t){t.fillChilds()}):i=[n],i.forEach(function(t){t.fillRelatingAssoc(e)})),n&&v.a.set(t.childs,e.assocDefUri,i)}),this}},{key:"clone",value:function(){return p.clone(this)}},{key:"typeName",get:function(){return this.getType().value}}]),t}(),V=function(t){function e(t){j(this,e);var i=E(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return t.assoc&&(i.assoc=new M(t.assoc)),i}return C(e,D),O(e,[{key:"getType",value:function(){return x.getTopicType(this.typeUri)}},{key:"isType",value:function(){return"dmx.core.topic_type"===this.typeUri||"dmx.core.assoc_type"===this.typeUri}},{key:"isAssocDef",value:function(){return!1}},{key:"getRelatedTopics",value:function(){return l.getTopicRelatedTopics(this.id)}},{key:"update",value:function(){return console.log("update",this),l.updateTopic(this)}},{key:"isWritable",value:function(){return U.isTopicWritable(this.id)}},{key:"isTopic",value:function(){return!0}},{key:"isAssoc",value:function(){return!1}},{key:"newViewTopic",value:function(t){return new F({id:this.id,uri:this.uri,typeUri:this.typeUri,value:this.value,childs:{},viewProps:t})}},{key:"asType",value:function(){if("dmx.core.topic_type"===this.typeUri)return x.getTopicType(this.uri);if("dmx.core.assoc_type"===this.typeUri)return x.getAssocType(this.uri);throw Error("Not a type: "+this)}},{key:"fillRelatingAssoc",value:function(t){this.assoc?this.assoc.fillChilds():this.assoc=new M(t.getInstanceLevelAssocType().emptyInstance())}},{key:"icon",get:function(){return this.getType()._getIcon()||""}}]),e}(),M=function(t){function e(t){j(this,e);var i=E(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return t.role1&&(i.role1=new R(t.role1)),t.role2&&(i.role2=new R(t.role2)),i}return C(e,D),O(e,[{key:"getRole",value:function(t){var e=this.role1.roleTypeUri===t,i=this.role2.roleTypeUri===t;if(e&&i)throw Error("Both role types of association "+this.id+" match "+t);return e?this.role1:i?this.role2:void 0}},{key:"isTopicPlayer",value:function(t){return this.role1.topicId===t||this.role2.topicId===t}},{key:"hasAssocPlayer",value:function(){return this.role1.isAssocPlayer()||this.role2.isAssocPlayer()}},{key:"getType",value:function(){return x.getAssocType(this.typeUri)}},{key:"getColor",value:function(){return this.getType()._getColor()||"hsl(0, 0%, 80%)"}},{key:"isType",value:function(){return!1}},{key:"isAssocDef",value:function(){return"dmx.core.composition_def"===this.typeUri}},{key:"getRelatedTopics",value:function(){return l.getAssocRelatedTopics(this.id)}},{key:"update",value:function(){return console.log("update",this),l.updateAssoc(this)}},{key:"isWritable",value:function(){return U.isAssocWritable(this.id)}},{key:"isTopic",value:function(){return!1}},{key:"isAssoc",value:function(){return!0}},{key:"newViewAssoc",value:function(t){return new J({id:this.id,uri:this.uri,typeUri:this.typeUri,value:this.value,childs:{},role1:this.role1,role2:this.role2,viewProps:t})}},{key:"asAssocDef",value:function(){var t=this.getRole("dmx.core.parent_type");return x.getTypeById(t.topicId).getAssocDefById(this.id)}}]),e}(),R=function(){function t(e){if(j(this,t),-1===e.topicId||-1===e.assocId)throw Error("Player ID is -1 in "+JSON.stringify(e));this.topicId=e.topicId,this.topicUri=e.topicUri,this.assocId=e.assocId,this.roleTypeUri=e.roleTypeUri}return O(t,[{key:"getRoleType",value:function(){return x.getRoleType(this.roleTypeUri)}},{key:"isTopicPlayer",value:function(){return this.topicId>=0}},{key:"isAssocPlayer",value:function(){return this.assocId}},{key:"fetch",value:function(){if(this.isTopicPlayer())return l.getTopic(this.topicId);if(this.isAssocPlayer())return l.getAssoc(this.assocId);throw Error("Player ID not set in role "+JSON.stringify(this))}},{key:"roleTypeName",get:function(){return this.getRoleType().value}},{key:"id",get:function(){if(this.isTopicPlayer())return this.topicId;if(this.isAssocPlayer())return this.assocId;throw Error("Player ID not set in role "+JSON.stringify(this))}}]),t}(),B=function(t){function e(t){j(this,e);var i=E(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.assoc=new M(t.assoc),i}return C(e,V),e}(),S=function(t){function e(t){j(this,e);var i=E(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.dataTypeUri=t.dataTypeUri,i.assocDefs=p.instantiateMany(t.assocDefs,N),i.viewConfig=p.mapByTypeUri(p.instantiateMany(t.viewConfigTopics,V)),i}return C(e,V),O(e,[{key:"isSimple",value:function(){return["dmx.core.text","dmx.core.html","dmx.core.number","dmx.core.boolean"].includes(this.dataTypeUri)}},{key:"isComposite",value:function(){return!this.isSimple()}},{key:"isValue",value:function(){return"dmx.core.value"===this.dataTypeUri}},{key:"isIdentity",value:function(){return"dmx.core.identity"===this.dataTypeUri}},{key:"getDataType",value:function(){return x.getDataType(this.dataTypeUri)}},{key:"getAssocDefById",value:function(t){var e=this.assocDefs.filter(function(e){return e.id===t});if(1!==e.length)throw Error('Type "'+this.uri+'" has '+e.length+" assoc defs with ID "+t);return e[0]}},{key:"getViewConfig",value:function(t){var e=this.viewConfig["dmx.webclient.view_config"];if(e){var i=e.childs[t];return i&&i.value}}},{key:"emptyInstance",value:function(){var t,e=this;return{id:-1,uri:"",typeUri:this.uri,value:"",childs:(t={},e.assocDefs.forEach(function(e){var i=e.getChildType().emptyInstance();t[e.assocDefUri]=e.isOne()?i:[i]}),t)}}},{key:"toExternalForm",value:function(){var t=JSON.parse(JSON.stringify(this));return t.assocDefs.forEach(function(t){t.assocTypeUri=t.typeUri,delete t.typeUri}),console.log("toExternalForm",t),t}}]),e}(),L=function(t){function e(){return j(this,e),E(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return C(e,S),O(e,[{key:"newTopicModel",value:function(t){var e=function e(i){var n=x.getTopicType(i);if(n.isSimple())return{value:t};var o=n.assocDefs[0],r=e(o.childTypeUri);return{childs:(s={},c=o.assocDefUri,a=o.isOne()?r:[r],c in s?Object.defineProperty(s,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[c]=a,s)};var s,c,a}(this.uri);return e.typeUri=this.uri,e}},{key:"_getIcon",value:function(){return this.getViewConfig("dmx.webclient.icon")}},{key:"isTopicType",value:function(){return!0}},{key:"isAssocType",value:function(){return!1}},{key:"update",value:function(){return l.updateTopicType(this.toExternalForm())}},{key:"icon",get:function(){return this._getIcon()||""}}]),e}(),W=function(t){function e(){return j(this,e),E(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return C(e,S),O(e,[{key:"_getColor",value:function(){return this.getViewConfig("dmx.webclient.color")}},{key:"isTopicType",value:function(){return!1}},{key:"isAssocType",value:function(){return!0}},{key:"update",value:function(){return l.updateAssocType(this.toExternalForm())}}]),e}(),N=function(t){function e(t){j(this,e);var i=E(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));i.viewConfig=p.mapByTypeUri(p.instantiateMany(t.viewConfigTopics,V)),i.parentTypeUri=i.getRole("dmx.core.parent_type").topicUri,i.childTypeUri=i.getRole("dmx.core.child_type").topicUri;var n=i.childs["dmx.core.assoc_type#dmx.core.custom_assoc_type"];i.customAssocTypeUri=n&&n.uri,i.assocDefUri=i.childTypeUri+(i.customAssocTypeUri?"#"+i.customAssocTypeUri:""),i.instanceLevelAssocTypeUri=i.customAssocTypeUri||i._defaultInstanceLevelAssocTypeUri();var o=i.childs["dmx.core.cardinality"];if(!o)throw Error("Assoc def "+i.assocDefUri+" has no cardinality child (parent type: "+i.parentTypeUri+")");i.childCardinalityUri=o.uri;var r=i.childs["dmx.core.identity_attr"];i.isIdentityAttr=!!r&&r.value;var s=i.childs["dmx.core.include_in_label"];return i.includeInLabel=!!s&&s.value,i}return C(e,M),O(e,[{key:"getChildType",value:function(){return x.getTopicType(this.childTypeUri)}},{key:"getInstanceLevelAssocType",value:function(){return x.getAssocType(this.instanceLevelAssocTypeUri)}},{key:"getCustomAssocType",value:function(){return this.customAssocTypeUri&&x.getAssocType(this.customAssocTypeUri)}},{key:"isOne",value:function(){return"dmx.core.one"===this.childCardinalityUri}},{key:"isMany",value:function(){return"dmx.core.many"===this.childCardinalityUri}},{key:"getViewConfig",value:function(t){var e=this._getViewConfig(t);return e&&e.value}},{key:"_getViewConfig",value:function(t){var e=this.viewConfig["dmx.webclient.view_config"];if(e)return e.childs[t]}},{key:"_defaultInstanceLevelAssocTypeUri",value:function(){if(!this.isAssocDef())throw Error('Unexpected association type URI: "'+this.typeUri+'"');return"dmx.core.composition"}},{key:"emptyChildInstance",value:function(){var t=this.getChildType().emptyInstance();return t.assoc=this.getInstanceLevelAssocType().emptyInstance(),new V(t)}}]),e}(),q=function(t){function e(t){j(this,e);var i=E(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t.info));return i.topics=p.mapById(p.instantiateMany(t.topics,F)),i.assocs=p.mapById(p.instantiateMany(t.assocs,J)),i}return C(e,V),O(e,[{key:"getTopic",value:function(t){var e=this.getTopicIfExists(t);if(!e)throw Error("Topic "+t+" not found in topicmap "+this.id);return e}},{key:"getTopicIfExists",value:function(t){return this.topics[t]}},{key:"hasTopic",value:function(t){return this.getTopicIfExists(t)}},{key:"getTopics",value:function(){return Object.values(this.topics)}},{key:"mapTopics",value:function(t){return this.getTopics().map(t)}},{key:"filterTopics",value:function(t){return this.getTopics().filter(t)}},{key:"addTopic",value:function(t){if(!(t instanceof F))throw Error("addTopic() expects a ViewTopic, got "+t.constructor.name);v.a.set(this.topics,t.id,t)}},{key:"revealTopic",value:function(t,e){var i={},n=this.getTopicIfExists(t.id);if(n)n.isVisible()||(n.setVisibility(!0),i.type="show");else{var o=I({},e?{"dmx.topicmaps.x":e.x,"dmx.topicmaps.y":e.y}:void 0,{"dmx.topicmaps.visibility":!0,"dmx.topicmaps.pinned":!1});this.addTopic(t.newViewTopic(o)),i.type="add",i.viewProps=o}return i}},{key:"removeTopic",value:function(t){v.a.delete(this.topics,t)}},{key:"getAssoc",value:function(t){var e=this.getAssocIfExists(t);if(!e)throw Error("Assoc "+t+" not found in topicmap "+this.id);return e}},{key:"getAssocsWithTopicPlayer",value:function(t){return this.filterAssocs(function(e){return e.isTopicPlayer(t)})}},{key:"getAssocIfExists",value:function(t){return this.assocs[t]}},{key:"hasAssoc",value:function(t){return this.getAssocIfExists(t)}},{key:"getAssocs",value:function(){return Object.values(this.assocs)}},{key:"mapAssocs",value:function(t){return this.getAssocs().map(t)}},{key:"filterAssocs",value:function(t){return this.getAssocs().filter(t)}},{key:"addAssoc",value:function(t){if(!(t instanceof J))throw Error("addAssoc() expects a ViewAssoc, got "+t.constructor.name);v.a.set(this.assocs,t.id,t)}},{key:"revealAssoc",value:function(t){var e={};if(!this.getAssocIfExists(t.id)){var i={"dmx.topicmaps.pinned":!1};this.addAssoc(t.newViewAssoc(i)),e.type="add",e.viewProps=i}return e}},{key:"removeAssoc",value:function(t){v.a.delete(this.assocs,t)}},{key:"removeAssocs",value:function(t){var e=this;this.getAssocsWithTopicPlayer(t).forEach(function(t){e.removeAssoc(t.id)})}},{key:"getObject",value:function(t){var e=this.getTopicIfExists(t)||this.getAssocIfExists(t);if(!e)throw Error("Topic/assoc "+t+" not found in topicmap "+this.id);return e}},{key:"getPosition",value:function(t){var e=this.getObject(t);if(e.isTopic())return e.getPosition();var i=this.getPosition(e.role1.id),n=this.getPosition(e.role2.id);return{x:(i.x+n.x)/2,y:(i.y+n.y)/2}}}]),e}(),F=function(t){function e(t){j(this,e);var i=E(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.viewProps=t.viewProps,i}return C(e,V),O(e,[{key:"getPosition",value:function(){return{x:this.getViewProp("dmx.topicmaps.x"),y:this.getViewProp("dmx.topicmaps.y")}}},{key:"isVisible",value:function(){return this.getViewProp("dmx.topicmaps.visibility")}},{key:"isPinned",value:function(){return this.getViewProp("dmx.topicmaps.pinned")}},{key:"setPosition",value:function(t){this.setViewProp("dmx.topicmaps.x",t.x),this.setViewProp("dmx.topicmaps.y",t.y)}},{key:"setVisibility",value:function(t){this.setViewProp("dmx.topicmaps.visibility",t)}},{key:"setPinned",value:function(t){this.setViewProp("dmx.topicmaps.pinned",t)}},{key:"getViewProp",value:function(t){return this.viewProps[t]}},{key:"setViewProp",value:function(t,e){v.a.set(this.viewProps,t,e)}},{key:"fetchObject",value:function(){return l.getTopic(this.id,!0,!0)}}]),e}(),J=function(t){function e(t){j(this,e);var i=E(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.viewProps=t.viewProps,i}return C(e,M),O(e,[{key:"isPinned",value:function(){return this.getViewProp("dmx.topicmaps.pinned")}},{key:"setPinned",value:function(t){this.setViewProp("dmx.topicmaps.pinned",t)}},{key:"getViewProp",value:function(t){return this.viewProps[t]}},{key:"setViewProp",value:function(t,e){v.a.set(this.viewProps,t,e)}},{key:"fetchObject",value:function(){return l.getAssoc(this.id,!0,!0)}}]),e}(),X=function(t){function e(t){j(this,e);var i=E(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t.info));return i.geoCoordTopics=t.geoCoordTopics,i}return C(e,V),e}();console.log("[DMX] Client API 2019/01/05");e.default={DMXObject:D,Topic:V,Assoc:M,Player:R,RelatedTopic:B,Type:S,TopicType:L,AssocType:W,Topicmap:q,ViewTopic:F,ViewAssoc:J,Geomap:X,restClient:l,permCache:U,utils:p,init:function(t){return t.onHttpError&&l.setErrorHandler(t.onHttpError),x.init(t.store)}}}]);