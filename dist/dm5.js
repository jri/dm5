module.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=3)}([function(t,e){t.exports=require("axios")},function(t,e){t.exports=require("vue")},function(t,e){t.exports=require("clone")},function(t,e,i){"use strict";i.r(e);var n=i(0),o=i.n(n),r=i(2),s=i.n(r);function c(t){return Array.isArray(t)?t.map(function(t){return new V(t)}):new V(t)}function a(t,e){var i={};return t.forEach(function(t){return i[t[e]]=t}),i}var u={instantiateMany:function(t,e){return t.map(function(t){return new e(t)})},instantiateChilds:function(t){var e={};for(var i in t)e[i]=c(t[i]);return e},clone:function(t){return s()(t)},mapById:function(t){return a(t,"id")},mapByUri:function(t){return a(t,"uri")},mapByTypeUri:function(t){return a(t,"typeUri")},forEach:function(t,e){for(var i in t)e(t[i])},filter:function(t,e){var i={};for(var n in t){var o=t[n];e(o)&&(i[n]=o)}return i},isEmpty:function(t){return!Object.keys(t).length},getCookie:function(t){var e=document.cookie.match(new RegExp("\\b"+t+"=(\\w*)"));return e&&e[1]},setCookie:function(t,e){document.cookie=t+"="+e+";path=/"}},p={getTopic:function(t,e,i){return o.a.get("/core/topic/"+t,{params:{include_childs:e,include_assoc_childs:i}}).then(function(t){return new V(t.data)})},getTopicsByType:function(t){return o.a.get("/core/topic/by_type/"+t).then(function(t){return u.instantiateMany(t.data,V)})},getTopicRelatedTopics:function(t,e){return o.a.get("/core/topic/"+t+"/related_topics",{params:f(e)}).then(function(t){return u.instantiateMany(t.data,R)})},searchTopics:function(t,e){var i={params:{search:t,field:e}};return o.a.get("/core/topic",i).then(function(t){return u.instantiateMany(t.data,V)})},createTopic:function(t){return o.a.post("/core/topic",t).then(function(t){var e=new V(t.data);return e.directives=t.data.directives,e})},updateTopic:function(t){return o.a.put("/core/topic/"+t.id,t).then(function(t){return t.data})},deleteTopic:function(t){return o.a.delete("/core/topic/"+t).then(function(t){return t.data})},getAssoc:function(t,e,i){return o.a.get("/core/association/"+t,{params:{include_childs:e,include_assoc_childs:i}}).then(function(t){return new M(t.data)})},getAssocRelatedTopics:function(t,e){return o.a.get("/core/association/"+t+"/related_topics",{params:f(e)}).then(function(t){return u.instantiateMany(t.data,R)})},createAssoc:function(t){return o.a.post("/core/association",t).then(function(t){var e=new M(t.data);return e.directives=t.data.directives,e})},updateAssoc:function(t){return o.a.put("/core/association/"+t.id,t).then(function(t){return t.data})},deleteAssoc:function(t){return o.a.delete("/core/association/"+t).then(function(t){return t.data})},deleteMulti:function(t){return o.a.delete("/core"+l(t)).then(function(t){return t.data})},getAllTopicTypes:function(){return o.a.get("/core/topictype/all").then(function(t){return u.instantiateMany(t.data,S)})},createTopicType:function(t){return o.a.post("/core/topictype",t).then(function(t){return new S(t.data)})},updateTopicType:function(t){return o.a.put("/core/topictype",t).then(function(t){return t.data})},getAllAssocTypes:function(){return o.a.get("/core/assoctype/all").then(function(t){return u.instantiateMany(t.data,L)})},createAssocType:function(t){return o.a.post("/core/assoctype",t).then(function(t){return new L(t.data)})},updateAssocType:function(t){return o.a.put("/core/assoctype",t).then(function(t){return t.data})},getPlugins:function(){return o.a.get("/core/plugin").then(function(t){return t.data})},getWebsocketConfig:function(){return o.a.get("/core/websockets").then(function(t){return t.data})},createTopicmap:function(t,e,i){return o.a.post("/topicmap",void 0,{params:{name:t,renderer_uri:e,private:i}}).then(function(t){return new V(t.data)})},getTopicmap:function(t){return o.a.get("/topicmap/"+t).then(function(t){return new N(t.data)})},addTopicToTopicmap:function(t,e,i){y(i,"dmx.topicmaps.x","dmx.topicmaps.y"),o.a.post("/topicmap/"+t+"/topic/"+e,i)},addAssocToTopicmap:function(t,e,i){o.a.post("/topicmap/"+t+"/association/"+e,i)},addRelatedTopicToTopicmap:function(t,e,i,n){n?y(n,"dmx.topicmaps.x","dmx.topicmaps.y"):n={},o.a.post("/topicmap/"+t+"/topic/"+e+"/association/"+i,n)},setTopicViewProps:function(t,e,i){o.a.put("/topicmap/"+t+"/topic/"+e,i)},setAssocViewProps:function(t,e,i){o.a.put("/topicmap/"+t+"/association/"+e,i)},setTopicPosition:function(t,e,i){y(i,"x","y"),o.a.put("/topicmap/"+t+"/topic/"+e+"/"+i.x+"/"+i.y)},setTopicVisibility:function(t,e,i){o.a.put("/topicmap/"+t+"/topic/"+e+"/"+i)},removeAssocFromTopicmap:function(t,e){o.a.delete("/topicmap/"+t+"/association/"+e)},hideMulti:function(t,e){o.a.put("/topicmap/"+t+l(e)+"/visibility/false")},setTopicPositions:function(t,e){o.a.put("/topicmap/"+t,e)},createWorkspace:function(t,e,i){return o.a.post("/workspace",void 0,{params:{name:t,uri:e,sharing_mode_uri:i}}).then(function(t){return t.data})},getAssignedTopics:function(t,e,i,n){return o.a.get("/workspace/"+t+"/topics/"+e,{params:{include_childs:i,include_assoc_childs:n}}).then(function(t){return u.instantiateMany(t.data,V)})},getAssignedWorkspace:function(t){return o.a.get("/workspace/object/"+t).then(function(t){return new V(t.data)})},login:function(t){return o.a.post("/accesscontrol/login",void 0,{auth:t})},logout:function(){return o.a.post("/accesscontrol/logout")},getUsername:function(){return o.a.get("/accesscontrol/user").then(function(t){return t.data})},getTopicPermissions:function(t){return o.a.get("/accesscontrol/topic/"+t).then(function(t){return t.data})},getAssocPermissions:function(t){return o.a.get("/accesscontrol/association/"+t).then(function(t){return t.data})},getXML:function(t){return o.a.get(t).then(function(t){return t.request.responseXML.documentElement})},setErrorHandler:function(t){o.a.interceptors.response.use(function(t){return t},function(e){return t(e),Promise.reject(e)})}};function l(t){var e="";return t.topicIds.length&&(e+="/topics/"+t.topicIds),t.assocIds.length&&(e+="/assocs/"+t.assocIds),e}function f(t){return t&&{assoc_type_uri:t.assocTypeUri,my_role_type_uri:t.myRoleTypeUri,others_role_type_uri:t.othersRoleTypeUri,others_topic_type_uri:t.othersTopicTypeUri}}function y(t,e,i){t[e]=Math.round(t[e]),t[i]=Math.round(t[i])}var d=i(1),h=i.n(d),v={topicTypes:void 0,assocTypes:void 0,dataTypes:void 0,roleTypes:void 0},T={putTopicType:function(t,e){_(e)},putAssocType:function(t,e){k(e)},_newTopicType:function(t,e){m(e.topicType)},_newAssocType:function(t,e){w(e.assocType)},_processDirectives:function(t,e){console.log("Type-cache: processing "+e.length+" directives (UPDATE_TYPE)"),e.forEach(function(t){switch(t.type){case"UPDATE_TOPIC_TYPE":m(t.arg);break;case"UPDATE_ASSOCIATION_TYPE":w(t.arg)}}),h.a.nextTick(function(){console.log("Type-cache: processing "+e.length+" directives (DELETE_TYPE)"),e.forEach(function(t){switch(t.type){case"DELETE_TOPIC_TYPE":!function(t){h.a.delete(v.topicTypes,t)}(t.arg.uri);break;case"DELETE_ASSOCIATION_TYPE":!function(t){h.a.delete(v.assocTypes,t)}(t.arg.uri)}})})}};function g(t,e){return function(i){var n=v[t][i];if(!n)throw Error(e+' "'+i+'" not found in type cache');return n}}function m(t){_(new S(t))}function w(t){k(new L(t))}function _(t){if(!(t instanceof S))throw Error(t+" is not a TopicType");h.a.set(v.topicTypes,t.uri,t)}function k(t){if(!(t instanceof L))throw Error(t+" is not an AssocType");h.a.set(v.assocTypes,t.uri,t)}var x={init:function(t){return t.registerModule("typeCache",{state:v,actions:T}),Promise.all([p.getAllTopicTypes().then(function(t){v.topicTypes=u.mapByUri(t),_(new S({uri:"dmx.core.meta_meta_type",typeUri:"dmx.core.meta_meta_meta_type",value:"Meta Meta Type",dataTypeUri:"dmx.core.text",assocDefs:[],viewConfigTopics:[]}))}),p.getAllAssocTypes().then(function(t){v.assocTypes=u.mapByUri(t)}),p.getTopicsByType("dmx.core.data_type").then(function(t){v.dataTypes=u.mapByUri(t)}),p.getTopicsByType("dmx.core.role_type").then(function(t){v.roleTypes=u.mapByUri(t)})]).then(function(){})},getTopicType:g("topicTypes","Topic type"),getAssocType:g("assocTypes","Assoc type"),getDataType:g("dataTypes","Data type"),getRoleType:g("roleTypes","Role type")},A={};function P(t,e){return(A[t]||(A[t]=e(t))).then(function(t){return t["dmx.accesscontrol.operation.write"]})}var b={isTopicWritable:function(t){return P(t,p.getTopicPermissions)},isAssocWritable:function(t){return P(t,p.getAssocPermissions)},clear:function(){A={}}},U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},E=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();function I(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function O(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function C(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var j=function(){function t(e){if(C(this,t),"Object"!==e.constructor.name)throw Error("DeepaMehtaObject constructor expects plain Object, got "+e.constructor.name+" ("+e+")");this.id=e.id,this.uri=e.uri,this.typeUri=e.typeUri,this.value=e.value,this.childs=u.instantiateChilds(e.childs)}return E(t,[{key:"getChildTopic",value:function(t){return this.childs[t]}},{key:"fillChilds",value:function(){var t=this;return this.getType().assocDefs.forEach(function(e){var i=t.childs[e.assocDefUri],n=void 0;i||(n=new V(e.getChildType().emptyInstance())),e.isOne()?(i?i.fillChilds():i=n,i.fillRelatingAssoc(e)):(i?i.forEach(function(t){t.fillChilds()}):i=[n],i.forEach(function(t){t.fillRelatingAssoc(e)})),n&&h.a.set(t.childs,e.assocDefUri,i)}),this}},{key:"clone",value:function(){return u.clone(this)}},{key:"typeName",get:function(){return this.getType().value}}]),t}(),V=function(t){function e(t){C(this,e);var i=I(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return t.assoc&&(i.assoc=new M(t.assoc)),i}return O(e,j),E(e,[{key:"getType",value:function(){return x.getTopicType(this.typeUri)}},{key:"isType",value:function(){return"dmx.core.topic_type"===this.typeUri||"dmx.core.assoc_type"===this.typeUri}},{key:"getRelatedTopics",value:function(){return p.getTopicRelatedTopics(this.id)}},{key:"update",value:function(){return console.log("update",this),p.updateTopic(this)}},{key:"isWritable",value:function(){return b.isTopicWritable(this.id)}},{key:"isTopic",value:function(){return!0}},{key:"isAssoc",value:function(){return!1}},{key:"newViewTopic",value:function(t){return new Y({id:this.id,uri:this.uri,typeUri:this.typeUri,value:this.value,childs:{},viewProps:t})}},{key:"asType",value:function(){if("dmx.core.topic_type"===this.typeUri)return x.getTopicType(this.uri);if("dmx.core.assoc_type"===this.typeUri)return x.getAssocType(this.uri);throw Error("Not a type: "+this)}},{key:"getIcon",value:function(){return this.getType().getIcon()||""}},{key:"fillRelatingAssoc",value:function(t){this.assoc?this.assoc.fillChilds():this.assoc=new M(t.getInstanceLevelAssocType().emptyInstance())}}]),e}(),M=function(t){function e(t){C(this,e);var i=I(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return t.role1&&(i.role1=new D(t.role1)),t.role2&&(i.role2=new D(t.role2)),i}return O(e,j),E(e,[{key:"getRole",value:function(t){var e=this.role1.roleTypeUri===t,i=this.role2.roleTypeUri===t;if(e&&i)throw Error("Both role types of association "+this.id+" match "+t);return e?this.role1:i?this.role2:void 0}},{key:"isTopicPlayer",value:function(t){return this.role1.topicId===t||this.role2.topicId===t}},{key:"hasAssocPlayer",value:function(){return this.role1.hasAssocPlayer()||this.role2.hasAssocPlayer()}},{key:"getType",value:function(){return x.getAssocType(this.typeUri)}},{key:"isType",value:function(){return!1}},{key:"getRelatedTopics",value:function(){return p.getAssocRelatedTopics(this.id)}},{key:"update",value:function(){return console.log("update",this),p.updateAssoc(this)}},{key:"isWritable",value:function(){return b.isAssocWritable(this.id)}},{key:"isTopic",value:function(){return!1}},{key:"isAssoc",value:function(){return!0}},{key:"newViewAssoc",value:function(t){return new F({id:this.id,uri:this.uri,typeUri:this.typeUri,value:this.value,childs:{},role1:this.role1,role2:this.role2,viewProps:t})}}]),e}(),D=function(){function t(e){C(this,t),this.topicId=e.topicId,this.topicUri=e.topicUri,this.assocId=e.assocId,this.roleTypeUri=e.roleTypeUri}return E(t,[{key:"getType",value:function(){return x.getRoleType(this.roleTypeUri)}},{key:"hasAssocPlayer",value:function(){return this.assocId}},{key:"getPlayerId",value:function(){if(this.hasAssocPlayer())return this.assocId;if(void 0!==this.topicId)return this.topicId;throw Error("getPlayerId() called when a topic player is specified by URI")}},{key:"getPlayer",value:function(){if(!this.topicId)throw Error("Assoc role "+JSON.stringify(this)+" has no topic player");return p.getTopic(this.topicId)}},{key:"typeName",get:function(){return this.getType().value}}]),t}(),R=function(t){function e(t){C(this,e);var i=I(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.assoc=new M(t.assoc),i}return O(e,V),e}(),B=function(t){function e(t){C(this,e);var i=I(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.dataTypeUri=t.dataTypeUri,i.indexModes=t.indexModeUris,i.assocDefs=u.instantiateMany(t.assocDefs,W),i.viewConfig=u.mapByTypeUri(u.instantiateMany(t.viewConfigTopics,V)),i}return O(e,V),E(e,[{key:"isSimple",value:function(){return["dmx.core.text","dmx.core.html","dmx.core.number","dmx.core.boolean"].includes(this.dataTypeUri)}},{key:"isComposite",value:function(){return["dmx.core.value","dmx.core.identity"].includes(this.dataTypeUri)}},{key:"getDataType",value:function(){return x.getDataType(this.dataTypeUri)}},{key:"getViewConfig",value:function(t){var e=this.viewConfig["dmx.webclient.view_config"];if(e){var i=e.childs[t];return i&&i.value}}},{key:"emptyInstance",value:function(){var t=this;return{id:-1,uri:"",typeUri:this.uri,value:"",childs:function(){var e={};return t.assocDefs.forEach(function(t){var i=t.getChildType().emptyInstance();e[t.assocDefUri]=t.isOne()?i:[i]}),e}()}}},{key:"toExternalForm",value:function(){var t=JSON.parse(JSON.stringify(this));return t.assocDefs.forEach(function(t){t.assocTypeUri=t.typeUri,delete t.typeUri}),console.log("toExternalForm",t),t}}]),e}(),S=function(t){function e(){return C(this,e),I(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return O(e,B),E(e,[{key:"newTopicModel",value:function(t){var e=function e(i){var n=x.getTopicType(i);if(n.isSimple())return{value:t};var o=n.assocDefs[0],r=e(o.childTypeUri);return{childs:function(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}({},o.assocDefUri,o.isOne()?r:[r])}}(this.uri);return e.typeUri=this.uri,e}},{key:"getIcon",value:function(){return this.getViewConfig("dmx.webclient.icon")}},{key:"update",value:function(){return p.updateTopicType(this.toExternalForm())}}]),e}(),L=function(t){function e(){return C(this,e),I(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return O(e,B),E(e,[{key:"getColor",value:function(){return this.getViewConfig("dmx.webclient.color")}},{key:"update",value:function(){return p.updateAssocType(this.toExternalForm())}}]),e}(),W=function(t){function e(t){C(this,e);var i=I(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));i.viewConfig=u.mapByTypeUri(u.instantiateMany(t.viewConfigTopics,V)),i.parentTypeUri=i.getRole("dmx.core.parent_type").topicUri,i.childTypeUri=i.getRole("dmx.core.child_type").topicUri;var n=i.childs["dmx.core.assoc_type#dmx.core.custom_assoc_type"];i.customAssocTypeUri=n&&n.uri,i.assocDefUri=i.childTypeUri+(i.customAssocTypeUri?"#"+i.customAssocTypeUri:""),i.instanceLevelAssocTypeUri=i.customAssocTypeUri||i._defaultInstanceLevelAssocTypeUri();var o=i.childs["dmx.core.cardinality"];if(!o)throw Error("Assoc def "+i.assocDefUri+" has no cardinality child (parent type: "+i.parentTypeUri+")");i.childCardinalityUri=o.uri;var r=i.childs["dmx.core.identity_attr"];i.isIdentityAttr=!!r&&r.value;var s=i.childs["dmx.core.include_in_label"];return i.includeInLabel=!!s&&s.value,i}return O(e,M),E(e,[{key:"getChildType",value:function(){return x.getTopicType(this.childTypeUri)}},{key:"getInstanceLevelAssocType",value:function(){return x.getAssocType(this.instanceLevelAssocTypeUri)}},{key:"getCustomAssocType",value:function(){return this.customAssocTypeUri&&x.getAssocType(this.customAssocTypeUri)}},{key:"isOne",value:function(){return"dmx.core.one"===this.childCardinalityUri}},{key:"isMany",value:function(){return"dmx.core.many"===this.childCardinalityUri}},{key:"getViewConfig",value:function(t){var e=this._getViewConfig(t);return e&&e.value}},{key:"_getViewConfig",value:function(t){var e=this.viewConfig["dmx.webclient.view_config"];if(e)return e.childs[t]}},{key:"_defaultInstanceLevelAssocTypeUri",value:function(){if("dmx.core.composition_def"===this.typeUri)return"dmx.core.composition";throw Error('Unexpected association type URI: "'+this.typeUri+'"')}},{key:"emptyChildInstance",value:function(){var t=this.getChildType().emptyInstance();return t.assoc=this.getInstanceLevelAssocType().emptyInstance(),new V(t)}}]),e}(),N=function(t){function e(t){C(this,e);var i=I(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t.info));return i.topics=u.mapById(u.instantiateMany(t.topics,Y)),i.assocs=u.mapById(u.instantiateMany(t.assocs,F)),i}return O(e,V),E(e,[{key:"getTopic",value:function(t){var e=this.getTopicIfExists(t);if(!e)throw Error("Topic "+t+" not found in topicmap "+this.id);return e}},{key:"getTopicIfExists",value:function(t){return this.topics[t]}},{key:"hasTopic",value:function(t){return this.getTopicIfExists(t)}},{key:"addTopic",value:function(t){if(!(t instanceof Y))throw Error("addTopic() expects a ViewTopic, got "+t.constructor.name);h.a.set(this.topics,t.id,t)}},{key:"revealTopic",value:function(t,e){var i={},n=this.getTopicIfExists(t.id);if(n)n.isVisible()||(n.setVisibility(!0),i.type="show");else{var o=U({},e?{"dmx.topicmaps.x":e.x,"dmx.topicmaps.y":e.y}:void 0,{"dmx.topicmaps.visibility":!0,"dmx.topicmaps.pinned":!1});this.addTopic(t.newViewTopic(o)),i.type="add",i.viewProps=o}return i}},{key:"removeTopic",value:function(t){h.a.delete(this.topics,t)}},{key:"forEachTopic",value:function(t){u.forEach(this.topics,t)}},{key:"visibleTopicIds",value:function(){return Object.values(this.topics).filter(function(t){return t.isVisible()}).map(function(t){return t.id})}},{key:"getAssoc",value:function(t){var e=this.getAssocIfExists(t);if(!e)throw Error("Assoc "+t+" not found in topicmap "+this.id);return e}},{key:"getAssocs",value:function(t){var e=[];return this.forEachAssoc(function(i){i.isTopicPlayer(t)&&e.push(i)}),e}},{key:"getAssocIfExists",value:function(t){return this.assocs[t]}},{key:"hasAssoc",value:function(t){return this.getAssocIfExists(t)}},{key:"addAssoc",value:function(t){if(!(t instanceof F))throw Error("addAssoc() expects a ViewAssoc, got "+t.constructor.name);this.assocs[t.id]=t}},{key:"revealAssoc",value:function(t){var e={};if(!this.getAssocIfExists(t.id)){var i={"dmx.topicmaps.pinned":!1};this.addAssoc(t.newViewAssoc(i)),e.type="add",e.viewProps=i}return e}},{key:"removeAssoc",value:function(t){delete this.assocs[t]}},{key:"removeAssocs",value:function(t){var e=this;this.getAssocs(t).forEach(function(t){e.removeAssoc(t.id)})}},{key:"forEachAssoc",value:function(t){u.forEach(this.assocs,t)}},{key:"getObject",value:function(t){var e=this.getTopicIfExists(t)||this.getAssocIfExists(t);if(!e)throw Error("Topic/assoc "+t+" not found in topicmap "+this.id);return e}},{key:"getPosition",value:function(t){var e=this.getObject(t);if(e.isTopic())return e.getPosition();var i=this.getPosition(e.role1.getPlayerId()),n=this.getPosition(e.role2.getPlayerId());return{x:(i.x+n.x)/2,y:(i.y+n.y)/2}}}]),e}(),Y=function(t){function e(t){C(this,e);var i=I(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.viewProps=t.viewProps,i}return O(e,V),E(e,[{key:"getPosition",value:function(){return{x:this.getViewProp("dmx.topicmaps.x"),y:this.getViewProp("dmx.topicmaps.y")}}},{key:"isVisible",value:function(){return this.getViewProp("dmx.topicmaps.visibility")}},{key:"isPinned",value:function(){return this.getViewProp("dmx.topicmaps.pinned")}},{key:"setPosition",value:function(t){this.setViewProp("dmx.topicmaps.x",t.x),this.setViewProp("dmx.topicmaps.y",t.y)}},{key:"setVisibility",value:function(t){this.setViewProp("dmx.topicmaps.visibility",t)}},{key:"setPinned",value:function(t){this.setViewProp("dmx.topicmaps.pinned",t)}},{key:"getViewProp",value:function(t){return this.viewProps[t]}},{key:"setViewProp",value:function(t,e){h.a.set(this.viewProps,t,e)}},{key:"fetchObject",value:function(){return p.getTopic(this.id,!0,!0)}}]),e}(),F=function(t){function e(t){C(this,e);var i=I(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.viewProps=t.viewProps,i}return O(e,M),E(e,[{key:"isPinned",value:function(){return this.getViewProp("dmx.topicmaps.pinned")}},{key:"setPinned",value:function(t){this.setViewProp("dmx.topicmaps.pinned",t)}},{key:"getViewProp",value:function(t){return this.viewProps[t]}},{key:"setViewProp",value:function(t,e){h.a.set(this.viewProps,t,e)}},{key:"fetchObject",value:function(){return p.getAssoc(this.id,!0,!0)}}]),e}();console.log("[DMX] Client API 2018/10/05");e.default={DeepaMehtaObject:j,Topic:V,Assoc:M,AssocRole:D,RelatedTopic:R,Type:B,TopicType:S,AssocType:L,Topicmap:N,ViewTopic:Y,ViewAssoc:F,restClient:p,permCache:b,utils:u,init:function(t){return t.onHttpError&&p.setErrorHandler(t.onHttpError),x.init(t.store)}}}]);