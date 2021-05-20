(function(e){function t(t){for(var n,o,r=t[0],c=t[1],l=t[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0134":function(e,t){},"0418":function(e,t,i){"use strict";var n=i("5b97"),a=i("ad21"),s=i("2877"),o=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=o.exports},"2fc4":function(e,t,i){},"34e7":function(e,t,i){},"40d4":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("app-header"),i("router-view")],1)},s=[],o=i("0418"),r={name:"App",components:{AppHeader:o["default"]}},c=r,l=i("2877"),u=Object(l["a"])(c,a,s,!1,null,null,null),d=u.exports,p=i("8c4f"),m=i("57da"),_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("section",{staticClass:"hero is-primary"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container has-text-centered"},[i("h2",{staticClass:"title"},[e._v("The Fridge "),i("b-button",{attrs:{"icon-right":"plus-thick",type:"is-success",rounded:""},on:{click:e.addItem}})],1)])])]),i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("b-table",{attrs:{data:e.items,loading:e.loading}},[i("b-table-column",{attrs:{field:"id",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.id)+" ")]}}])}),i("b-table-column",{attrs:{field:"item_name",label:"Item Name"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.item_name)+" "),t.row.item_type&&t.row.item_type.length>0?i("div",[i("b-tag",{attrs:{type:"is-success"}},[e._v(" "+e._s(t.row.item_type)+" ")])],1):e._e()]}}])}),i("b-table-column",{attrs:{field:"quantity_unit",label:"Quantity"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.quantity)+" "+e._s(t.row.unit)+" ")]}}])}),i("b-table-column",{attrs:{field:"item_action",label:"Action"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("item-action",{attrs:{item:t.row},on:{"update:isItemModalActive":function(t){e.isItemModalActive=t},"update:itemFormProps":function(t){e.itemFormProps=t},"update:hasItemsChanged":function(t){return e.getItems()}}})]}}])})],1)],1),i("b-modal",{attrs:{"on-cancel":e.resetItemModal},model:{value:e.isItemModalActive,callback:function(t){e.isItemModalActive=t},expression:"isItemModalActive"}},[i("item-modal",e._b({on:{"update:isItemModalActive":function(t){e.isItemModalActive=t},"update:hasItemsChanged":function(t){return e.getItems()}}},"item-modal",e.itemFormProps,!1))],1)],1)])},f=[],h=i("bc3a"),b=i.n(h),g="https://the-kitchen-bruh.herokuapp.com/api";function v(){return b.a.get("".concat(g,"/items/"))}function y(e){return b.a.put("".concat(g,"/items/").concat(e.id,"/"),e)}function k(e){return b.a.post("".concat(g,"/items/"),e)}function I(e){return b.a.delete("".concat(g,"/items/").concat(e,"/"))}function R(){return b.a.get("".concat(g,"/recipes/"))}function M(e){return b.a.put("".concat(g,"/recipes/").concat(e.id,"/"),e)}function C(e){return b.a.post("".concat(g,"/recipes/"),e)}function A(e){return b.a.delete("".concat(g,"/recipes/").concat(e,"/"))}var w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"buttons"},[i("b-button",{attrs:{"icon-left":"lead-pencil",type:"is-info"},on:{click:function(t){return e.editItem(e.item)}}},[e._v("Edit")]),i("b-button",{attrs:{"icon-left":"minus-thick",type:"is-warning"},on:{click:function(t){return e.adjustItem(e.item,-1)}}},[e._v("Use 1")]),i("b-button",{attrs:{"icon-left":"plus-thick",type:"is-success"},on:{click:function(t){return e.adjustItem(e.item,1)}}},[e._v("Add 1")]),i("b-button",{attrs:{"icon-left":"delete",type:"is-danger"},on:{click:function(t){return e.removeItem(e.item)}}},[e._v("Remove")])],1)},x=[],j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[i("header",{staticClass:"modal-card-head"},[i("p",{staticClass:"modal-card-title"},[e._v("Edit Item")]),i("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(t){return e.$emit("update:isItemModalActive",!1)}}})]),i("section",{staticClass:"modal-card-body"},[i("b-field",{attrs:{label:"Item Name"}},[i("b-input",{attrs:{value:e.l_item_name,placeholder:"Item name",required:""},model:{value:e.l_item_name,callback:function(t){e.l_item_name=t},expression:"l_item_name"}})],1),i("b-field",{attrs:{label:"Item Type"}},[i("b-input",{attrs:{value:e.l_item_type,placeholder:"Item type"},model:{value:e.l_item_type,callback:function(t){e.l_item_type=t},expression:"l_item_type"}})],1),i("b-field",{attrs:{label:"Quantity"}},[i("b-input",{attrs:{value:e.l_quantity,placeholder:"Quantity",type:"number",required:""},model:{value:e.l_quantity,callback:function(t){e.l_quantity=t},expression:"l_quantity"}})],1),i("b-field",{attrs:{label:"Unit"}},[i("b-input",{attrs:{value:e.l_unit,placeholder:"Unit",required:""},model:{value:e.l_unit,callback:function(t){e.l_unit=t},expression:"l_unit"}})],1)],1),i("footer",{staticClass:"modal-card-foot"},[i("b-button",{attrs:{label:"Close"},on:{click:this.closeModal}}),e.updating?i("b-button",{attrs:{label:"Update Item",type:"is-primary"},on:{click:this.updateItem}}):i("b-button",{attrs:{label:"Add Item",type:"is-primary"},on:{click:this.addItem}})],1)])},q=[],O={props:["item_id","item_name","item_type","quantity","unit","updating"],data:function(){return{l_item_id:this.item_id,l_item_name:this.item_name,l_item_type:this.item_type,l_quantity:this.quantity,l_unit:this.unit,l_updating:this.updating}},methods:{addItem:function(){var e={item_name:this.l_item_name,item_type:this.l_item_type,quantity:this.l_quantity,unit:this.l_unit};k(e),this.$emit("update:hasItemsChanged",!0),this.closeModal()},updateItem:function(){var e={id:this.l_item_id,item_name:this.l_item_name,item_type:this.l_item_type,quantity:this.l_quantity,unit:this.l_unit};y(e),this.$emit("update:hasItemsChanged",!0),this.closeModal()},closeModal:function(){var e={item_id:-1,item_name:"",item_type:"",quantity:0,unit:"",updating:!1};this.$emit("update:itemFormProps",e),this.$emit("update:isItemModalActive",!1)}}},$=O,P=Object(l["a"])($,j,q,!1,null,null,null),S=P.exports,F={methods:{editItem:function(e){var t={item_id:e.id,item_name:e.item_name,item_type:e.item_type,quantity:e.quantity,unit:e.unit,updating:!0};this.$emit("update:isItemModalActive",!0),this.$emit("update:itemFormProps",t)},adjustItem:function(e,t){e.quantity+=t,y(e),this.$emit("update:hasItemsChanged",!0)},removeItem:function(e){I(e.id),this.$emit("update:hasItemsChanged",!0)}},props:["item"],components:{ItemModal:S}},T=F,E=Object(l["a"])(T,w,x,!1,null,null,null),N=E.exports,U={name:"Fridge",data:function(){return{items:[],isItemModalActive:!1,loading:!1,itemFormProps:{item_id:-1,item_name:"",item_type:"",quantity:0,unit:"",updating:!1}}},beforeMount:function(){this.getItems()},components:{ItemAction:N,ItemModal:S},methods:{addItem:function(){this.resetItemModal(),this.isItemModalActive=!0},resetItemModal:function(){this.itemFormProps={item_id:-1,item_name:"",item_type:"",quantity:0,unit:"",updating:!1}},getItems:function(){var e=this;this.loading=!0,setTimeout((function(){v().then((function(t){e.items=t.data,e.loading=!1}))}),500)}}},z=U,H=(i("f1b4"),Object(l["a"])(z,_,f,!1,null,"afd08f36",null)),Q=H.exports,D=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("section",{staticClass:"hero is-primary"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container has-text-centered"},[i("h2",{staticClass:"title"},[e._v("Recipes "),i("b-button",{attrs:{"icon-right":"plus-thick",type:"is-success",rounded:""},on:{click:e.addRecipe}}),i("b-button",{attrs:{"icon-right":"bowl-mix",type:"is-info",rounded:""},on:{click:e.pickRecipe}})],1)])])]),i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("b-message",e._b({attrs:{title:"Pick a recipe","aria-close-label":"Close message"},model:{value:e.isMessageActive,callback:function(t){e.isMessageActive=t},expression:"isMessageActive"}},"b-message",e.chosenRecipe,!1),[e.chosenRecipe?i("div",[e._v(" You can make "+e._s(e.chosenRecipe.recipe_name)+" today! ")]):i("div",[e._v(" There is nothing you can make today ")])]),i("b-table",{attrs:{data:e.recipes,loading:e.loading,"row-class":function(t,i){return e.cookable(t)&&"is-success"}}},[i("b-table-column",{attrs:{field:"id",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.id)+" ")]}}])}),i("b-table-column",{attrs:{field:"recipe_name",label:"Recipe Name"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.recipe_name)+" ")]}}])}),i("b-table-column",{attrs:{field:"recipe_ingredients",label:"Required Ingredients"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("b-taglist",[e._l(t.row.ingredients,(function(t){return e.hasItem(t)?i("b-tag",{key:t,attrs:{size:"is-small",type:"is-success"}},[e._v(e._s(t))]):e._e()})),e._l(t.row.ingredients,(function(t){return e.hasItem(t)?e._e():i("b-tag",{key:t,attrs:{size:"is-small",type:"is-danger"}},[e._v(e._s(t))])}))],2)]}}])}),i("b-table-column",{attrs:{field:"recipe_optional_ingredients",label:"Optional Ingredients"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("b-taglist",[e._l(t.row.optional_ingredients,(function(t){return e.hasItem(t)?i("b-tag",{key:t,attrs:{size:"is-small",type:"is-success"}},[e._v(e._s(t))]):e._e()})),e._l(t.row.optional_ingredients,(function(t){return e.hasItem(t)?e._e():i("b-tag",{key:t,attrs:{size:"is-small",type:"is-danger"}},[e._v(e._s(t))])}))],2)]}}])}),i("b-table-column",{attrs:{field:"cooking_time",label:"Cooking Time"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.cooking_time)+" minutes ")]}}])}),i("b-table-column",{attrs:{field:"tags",label:"Tags"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.tags.join(", "))+" ")]}}])}),i("b-table-column",{attrs:{field:"recipe_action",label:"Action"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("recipe-action",{attrs:{recipe:t.row},on:{"update:isRecipeModalActive":function(t){e.isRecipeModalActive=t},"update:recipeFormProps":function(t){e.recipeFormProps=t},"update:hasRecipesChanged":function(t){return e.getRecipes()}}})]}}])})],1)],1),i("b-modal",{attrs:{"on-cancel":e.resetRecipeModal},model:{value:e.isRecipeModalActive,callback:function(t){e.isRecipeModalActive=t},expression:"isRecipeModalActive"}},[i("recipe-modal",e._b({on:{"update:isRecipeModalActive":function(t){e.isRecipeModalActive=t},"update:hasRecipesChanged":function(t){return e.getRecipes()}}},"recipe-modal",e.recipeFormProps,!1))],1)],1)])},J=[],K=i("b85c"),L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"buttons"},[i("b-button",{attrs:{"icon-left":"lead-pencil",type:"is-info"},on:{click:function(t){return e.editRecipe(e.recipe)}}},[e._v("Edit")]),i("b-button",{attrs:{"icon-left":"plus-thick",type:"is-success"}},[e._v("Cook and add to Fridge")]),i("b-button",{attrs:{"icon-left":"delete",type:"is-danger"},on:{click:function(t){return e.removeRecipe(e.recipe)}}},[e._v("Remove")])],1)},W=[],Y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[i("header",{staticClass:"modal-card-head"},[i("p",{staticClass:"modal-card-title"},[e._v("Edit Recipe")]),i("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(t){return e.$emit("update:isRecipeModalActive",!1)}}})]),i("section",{staticClass:"modal-card-body"},[i("b-field",{attrs:{label:"Recipe Name"}},[i("b-input",{attrs:{value:e.l_recipe_name,placeholder:"Recipe name",required:""},model:{value:e.l_recipe_name,callback:function(t){e.l_recipe_name=t},expression:"l_recipe_name"}})],1),i("b-field",{attrs:{label:"Required Ingredients"}},[i("b-input",{attrs:{value:e.l_recipe_ingredients,placeholder:"Requried Ingredients"},model:{value:e.l_recipe_ingredients,callback:function(t){e.l_recipe_ingredients=t},expression:"l_recipe_ingredients"}})],1),i("b-field",{attrs:{label:"Optional Ingredients"}},[i("b-input",{attrs:{value:e.l_recipe_optional_ingredients,placeholder:"Optional Ingredients"},model:{value:e.l_recipe_optional_ingredients,callback:function(t){e.l_recipe_optional_ingredients=t},expression:"l_recipe_optional_ingredients"}})],1),i("b-field",{attrs:{label:"Cooking Time (minutes)"}},[i("b-input",{attrs:{value:e.l_cooking_time,placeholder:"Cooking Time",type:"number",required:""},model:{value:e.l_cooking_time,callback:function(t){e.l_cooking_time=t},expression:"l_cooking_time"}})],1),i("b-field",{attrs:{label:"Tags"}},[i("b-input",{attrs:{value:e.l_tags,placeholder:"Tags",required:""},model:{value:e.l_tags,callback:function(t){e.l_tags=t},expression:"l_tags"}})],1)],1),i("footer",{staticClass:"modal-card-foot"},[i("b-button",{attrs:{label:"Close"},on:{click:this.closeModal}}),e.updating?i("b-button",{attrs:{label:"Update Recipe",type:"is-primary"},on:{click:this.updateRecipe}}):i("b-button",{attrs:{label:"Add Recipe",type:"is-primary"},on:{click:this.addRecipe}})],1)])},B=[];i("a15b"),i("ac1f"),i("1276"),i("498a");function G(e){var t,i=e.split(","),n=[],a=Object(K["a"])(i);try{for(a.s();!(t=a.n()).done;){var s=t.value,o=s.trim();0!=o.length&&n.push(s.trim())}}catch(r){a.e(r)}finally{a.f()}return n}function V(e){return e[Math.floor(Math.random()*e.length)]}var X={props:["recipe_id","recipe_name","recipe_ingredients","recipe_optional_ingredients","cooking_time","tags","updating"],data:function(){return{l_recipe_id:this.recipe_id,l_recipe_name:this.recipe_name,l_recipe_ingredients:this.recipe_ingredients.join(", "),l_recipe_optional_ingredients:this.recipe_optional_ingredients.join(", "),l_cooking_time:this.cooking_time,l_tags:this.tags.join(", "),l_updating:this.updating}},methods:{addRecipe:function(){var e={id:this.l_recipe_id,recipe_name:this.l_recipe_name,ingredients:G(this.l_recipe_ingredients),optional_ingredients:G(this.l_recipe_optional_ingredients),cooking_time:this.l_cooking_time,tags:G(this.l_tags)};C(e),this.$emit("update:hasRecipesChanged",!0),this.closeModal()},updateRecipe:function(){var e={id:this.l_recipe_id,recipe_name:this.l_recipe_name,ingredients:G(this.l_recipe_ingredients),optional_ingredients:G(this.l_recipe_optional_ingredients),cooking_time:this.l_cooking_time,tags:G(this.l_tags)};M(e),this.$emit("update:hasRecipesChanged",!0),this.closeModal()},closeModal:function(){var e={recipe_id:-1,recipe_name:"",recipe_ingredients:[],recipe_optional_ingredients:[],cooking_time:-1,tags:[],updating:!1};this.$emit("update:recipeFormProps",e),this.$emit("update:isRecipeModalActive",!1)}}},Z=X,ee=Object(l["a"])(Z,Y,B,!1,null,null,null),te=ee.exports,ie={methods:{editRecipe:function(e){var t={recipe_id:e.id,recipe_name:e.recipe_name,recipe_ingredients:e.ingredients,recipe_optional_ingredients:e.optional_ingredients,cooking_time:e.cooking_time,tags:e.tags,updating:!0};this.$emit("update:isRecipeModalActive",!0),this.$emit("update:recipeFormProps",t)},removeRecipe:function(e){A(e.id),this.$emit("update:hasRecipesChanged",!0)}},props:["recipe"],components:{RecipeModal:te}},ne=ie,ae=Object(l["a"])(ne,L,W,!1,null,null,null),se=ae.exports,oe={name:"Recipe",data:function(){return{recipes:[],items:[],isRecipeModalActive:!1,loading:!1,isMessageActive:!1,recipeFormProps:{recipe_id:-1,recipe_name:"",recipe_ingredients:[],recipe_optional_ingredients:[],cooking_time:-1,tags:[],updating:!1},chosenRecipe:void 0}},computed:{},beforeMount:function(){this.getRecipes(),this.getItems()},components:{RecipeAction:se,RecipeModal:te},methods:{addRecipe:function(){this.resetRecipeModal(),this.isRecipeModalActive=!0},resetRecipeModal:function(){this.recipeFormProps={recipe_id:-1,recipe_name:"",recipe_ingredients:[],recipe_optional_ingredients:[],cooking_time:-1,tags:[],updating:!1}},getRecipes:function(){var e=this;this.loading=!0,setTimeout((function(){R().then((function(t){e.recipes=t.data,e.loading=!1}))}),500)},pickRecipe:function(){var e,t=[],i=Object(K["a"])(this.recipes);try{for(i.s();!(e=i.n()).done;){var n=e.value;this.cookable(n)&&t.push(n)}}catch(a){i.e(a)}finally{i.f()}this.isMessageActive=!0,this.chosenRecipe=V(t)},getItems:function(){var e=this;setTimeout((function(){v().then((function(t){e.items=t.data}))}),500)},hasItem:function(e){var t,i=Object(K["a"])(this.items);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(e.toLowerCase()===n.item_name.toLowerCase())return!0}}catch(a){i.e(a)}finally{i.f()}return!1},hasAllItems:function(e){var t,i=Object(K["a"])(e);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(!this.hasItem(n))return!1}}catch(a){i.e(a)}finally{i.f()}return!0},hasNoItem:function(e){var t,i=Object(K["a"])(e);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(this.hasItem(n))return!1}}catch(a){i.e(a)}finally{i.f()}return!0},cookable:function(e){return this.hasAllItems(e.ingredients)}}},re=oe,ce=(i("c6cb"),i("fd36"),Object(l["a"])(re,D,J,!1,null,"9dbd7230",null)),le=ce.exports;n["a"].use(p["a"]);var ue=new p["a"]({routes:[{path:"/",name:"Home",component:m["default"]},{path:"/fridge",name:"Fridge",component:Q},{path:"/recipes",name:"Recipe",component:le}]}),de=ue,pe=i("2f62");n["a"].use(pe["a"]);var me=new pe["a"].Store({state:{},mutations:{},actions:{},modules:{}}),_e=i("289d");i("2fc4");n["a"].use(_e["a"]),n["a"].config.productionTip=!1,new n["a"]({router:de,store:me,render:function(e){return e(d)}}).$mount("#app")},"57da":function(e,t,i){"use strict";var n=i("6f10"),a=i("e732"),s=(i("cf57"),i("2877")),o=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"48020ea0",null);t["default"]=o.exports},"5b97":function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-navbar",{scopedSlots:e._u([{key:"brand",fn:function(){return[i("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[i("img",{attrs:{src:"https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"}})])]},proxy:!0},{key:"start",fn:function(){return[i("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[e._v(" Home ")]),i("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/fridge"}}},[e._v(" The Fridge ")]),i("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/recipes"}}},[e._v(" Recipes ")]),i("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/inventory"}}},[e._v(" Inventory ")])]},proxy:!0}])})},a=[]},"6f10":function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._m(0),i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("b-message",[e._v(" Welcome to the Kitchen, boss! ")]),i("b-message",[e._v(" You have 10 items in the fridge ")])],1)])])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"hero is-primary"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container has-text-centered"},[i("h2",{staticClass:"title"},[e._v("Welcome to The Kitchen")])])])])}]},ad21:function(e,t,i){"use strict";var n=i("e504"),a=i.n(n);t["default"]=a.a},b6e3:function(e,t,i){},c6cb:function(e,t,i){"use strict";i("34e7")},cf57:function(e,t,i){"use strict";i("b6e3")},d32d:function(e,t,i){},e504:function(e,t){},e732:function(e,t,i){"use strict";var n=i("0134"),a=i.n(n);t["default"]=a.a},f1b4:function(e,t,i){"use strict";i("40d4")},fd36:function(e,t,i){"use strict";i("d32d")}});
//# sourceMappingURL=app.73d25b99.js.map