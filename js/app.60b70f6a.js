(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0134":function(t,e){},"2fc4":function(t,e,i){},"4c47":function(t,e,i){"use strict";i("d29f")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("app-header"),i("router-view")],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-navbar",{scopedSlots:t._u([{key:"brand",fn:function(){return[i("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[i("img",{attrs:{src:"logo.png"}})])]},proxy:!0},{key:"start",fn:function(){return[i("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[t._v(" Home ")]),i("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/fridge"}}},[t._v(" The Fridge ")]),i("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/recipes"}}},[t._v(" Recipes ")]),i("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/inventory"}}},[t._v(" Inventory ")]),t.isAuthenticated?i("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/logout"}}},[t._v(" Logout ")]):i("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/login"}}},[t._v(" Login / Register ")])]},proxy:!0}])})},r=[],c={computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}},l=c,u=i("2877"),d=Object(u["a"])(l,o,r,!1,null,null,null),p=d.exports,m={name:"App",components:{AppHeader:p}},f=m,_=Object(u["a"])(f,a,s,!1,null,null,null),h=_.exports,g=i("8c4f"),b=i("57da"),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",{staticClass:"hero is-primary"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container has-text-centered"},[i("h2",{staticClass:"title"},[t._v("The Fridge "),i("b-button",{attrs:{"icon-right":"plus-thick",type:"is-success",rounded:""},on:{click:t.addItem}})],1)])])]),i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("b-table",{attrs:{data:t.items,loading:t.loading}},[i("b-table-column",{attrs:{field:"id",label:"ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.id)+" ")]}}])}),i("b-table-column",{attrs:{field:"item_name",label:"Item Name"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.item_name)+" "),e.row.item_type&&e.row.item_type.length>0?i("div",[i("b-tag",{attrs:{type:"is-success"}},[t._v(" "+t._s(e.row.item_type)+" ")])],1):t._e()]}}])}),i("b-table-column",{attrs:{field:"quantity_unit",label:"Quantity"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.quantity)+" "+t._s(e.row.unit)+" ")]}}])}),i("b-table-column",{attrs:{field:"item_action",label:"Action"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("item-action",{attrs:{item:e.row},on:{"update:isItemModalActive":function(e){t.isItemModalActive=e},"update:itemFormProps":function(e){t.itemFormProps=e},"update:hasItemsChanged":function(e){return t.getItems()}}})]}}])})],1)],1),i("b-modal",{attrs:{"on-cancel":t.resetItemModal},model:{value:t.isItemModalActive,callback:function(e){t.isItemModalActive=e},expression:"isItemModalActive"}},[i("item-modal",t._b({on:{"update:isItemModalActive":function(e){t.isItemModalActive=e},"update:hasItemsChanged":function(e){return t.getItems()}}},"item-modal",t.itemFormProps,!1))],1)],1)])},y=[],k=i("2f62"),I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"buttons"},[i("b-button",{attrs:{"icon-left":"lead-pencil",type:"is-info"},on:{click:function(e){return t.editItem(t.item)}}},[t._v("Edit")]),i("b-button",{attrs:{"icon-left":"minus-thick",type:"is-warning"},on:{click:function(e){return t.adjustItem(t.item,-1)}}},[t._v("Use 1")]),i("b-button",{attrs:{"icon-left":"plus-thick",type:"is-success"},on:{click:function(e){return t.adjustItem(t.item,1)}}},[t._v("Add 1")]),i("b-button",{attrs:{"icon-left":"delete",type:"is-danger"},on:{click:function(e){return t.removeItem(t.item)}}},[t._v("Remove")])],1)},R=[],w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[i("header",{staticClass:"modal-card-head"},[i("p",{staticClass:"modal-card-title"},[t._v("Edit Item")]),i("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){return t.$emit("update:isItemModalActive",!1)}}})]),i("section",{staticClass:"modal-card-body"},[i("b-field",{attrs:{label:"Item Name"}},[i("b-input",{attrs:{value:t.l_item_name,placeholder:"Item name",required:""},model:{value:t.l_item_name,callback:function(e){t.l_item_name=e},expression:"l_item_name"}})],1),i("b-field",{attrs:{label:"Item Type"}},[i("b-input",{attrs:{value:t.l_item_type,placeholder:"Item type"},model:{value:t.l_item_type,callback:function(e){t.l_item_type=e},expression:"l_item_type"}})],1),i("b-field",{attrs:{label:"Quantity"}},[i("b-input",{attrs:{value:t.l_quantity,placeholder:"Quantity",type:"number",required:""},model:{value:t.l_quantity,callback:function(e){t.l_quantity=e},expression:"l_quantity"}})],1),i("b-field",{attrs:{label:"Unit"}},[i("b-input",{attrs:{value:t.l_unit,placeholder:"Unit",required:""},model:{value:t.l_unit,callback:function(e){t.l_unit=e},expression:"l_unit"}})],1)],1),i("footer",{staticClass:"modal-card-foot"},[i("b-button",{attrs:{label:"Close"},on:{click:this.closeModal}}),t.updating?i("b-button",{attrs:{label:"Update Item",type:"is-primary"},on:{click:this.updateItem}}):i("b-button",{attrs:{label:"Add Item",type:"is-primary"},on:{click:this.addItem}})],1)])},C=[],A=(i("99af"),i("bc3a")),M=i.n(A),j="https://the-kitchen-bruh.herokuapp.com/api";function $(t){return M.a.get("".concat(j,"/items/"),{headers:{Authorization:"Bearer: ".concat(t)}})}function x(t,e){return M.a.get("".concat(j,"/items/").concat(t,"/"),{headers:{Authorization:"Bearer: ".concat(e)}})}function S(t,e){return M.a.put("".concat(j,"/items/").concat(t.id,"/"),t,{headers:{Authorization:"Bearer: ".concat(e)}})}function O(t,e){return M.a.post("".concat(j,"/items/"),t,{headers:{Authorization:"Bearer: ".concat(e)}})}function q(t,e){return M.a.delete("".concat(j,"/items/").concat(t,"/"),{headers:{Authorization:"Bearer: ".concat(e)}})}function P(t){return M.a.get("".concat(j,"/recipes/"),{headers:{Authorization:"Bearer: ".concat(t)}})}function E(t,e){return M.a.get("".concat(j,"/recipes/").concat(t,"/"),{headers:{Authorization:"Bearer: ".concat(e)}})}function T(t,e){return M.a.put("".concat(j,"/recipes/").concat(t.id,"/"),t,{headers:{Authorization:"Bearer: ".concat(e)}})}function z(t,e){return M.a.post("".concat(j,"/recipes/"),t,{headers:{Authorization:"Bearer: ".concat(e)}})}function F(t,e){return M.a.delete("".concat(j,"/recipes/").concat(t,"/"),{headers:{Authorization:"Bearer: ".concat(e)}})}function D(t){return M.a.post("".concat(j,"/login/"),t)}function B(t){return M.a.post("".concat(j,"/register/"),t)}var L={props:["item_id","item_name","item_type","quantity","unit","updating"],data:function(){return{l_item_id:this.item_id,l_item_name:this.item_name,l_item_type:this.item_type,l_quantity:this.quantity,l_unit:this.unit,l_updating:this.updating}},methods:{addItem:function(){var t={item_name:this.l_item_name,item_type:this.l_item_type,quantity:this.l_quantity,unit:this.l_unit};this.$store.dispatch("addItem",{item:t}),this.$emit("update:hasItemsChanged",!0),this.closeModal()},updateItem:function(){var t={id:this.l_item_id,item_name:this.l_item_name,item_type:this.l_item_type,quantity:this.l_quantity,unit:this.l_unit};this.$store.dispatch("updateItem",{item:t}),this.$emit("update:hasItemsChanged",!0),this.closeModal()},closeModal:function(){var t={item_id:-1,item_name:"",item_type:"",quantity:0,unit:"",updating:!1};this.$emit("update:itemFormProps",t),this.$emit("update:isItemModalActive",!1)}}},U=L,N=Object(u["a"])(U,w,C,!1,null,null,null),J=N.exports,H={methods:{editItem:function(t){var e={item_id:t.id,item_name:t.item_name,item_type:t.item_type,quantity:t.quantity,unit:t.unit,updating:!0};this.$emit("update:isItemModalActive",!0),this.$emit("update:itemFormProps",e)},adjustItem:function(t,e){t.quantity+=e,this.$store.dispatch("updateItem",{item:t}),this.$emit("update:hasItemsChanged",!0)},removeItem:function(t){this.$store.dispatch("removeItem",{id:t.id}),this.$emit("update:hasItemsChanged",!0)}},props:["item"],components:{ItemModal:J}},Q=H,K=Object(u["a"])(Q,I,R,!1,null,null,null),W=K.exports,Y={name:"Fridge",computed:Object(k["b"])({items:function(t){return t.items},loading:function(t){return t.loading}}),data:function(){return{isItemModalActive:!1,itemFormProps:{item_id:-1,item_name:"",item_type:"",quantity:0,unit:"",updating:!1}}},beforeMount:function(){this.getItems()},components:{ItemAction:W,ItemModal:J},methods:{addItem:function(){this.resetItemModal(),this.isItemModalActive=!0},resetItemModal:function(){this.itemFormProps={item_id:-1,item_name:"",item_type:"",quantity:0,unit:"",updating:!1}},getItems:function(){this.$store.dispatch("loadItems")}}},G=Y,V=(i("9b44"),Object(u["a"])(G,v,y,!1,null,"039a5084",null)),X=V.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",{staticClass:"hero is-primary"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container has-text-centered"},[i("h2",{staticClass:"title"},[t._v("Recipes "),i("b-button",{attrs:{"icon-right":"plus-thick",type:"is-success",rounded:""},on:{click:t.addRecipe}}),i("b-button",{attrs:{"icon-right":"bowl-mix",type:"is-info",rounded:""},on:{click:t.pickRecipe}})],1)])])]),i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("b-message",t._b({attrs:{title:"Pick a recipe","aria-close-label":"Close message"},model:{value:t.isMessageActive,callback:function(e){t.isMessageActive=e},expression:"isMessageActive"}},"b-message",t.chosenRecipe,!1),[t.chosenRecipe?i("div",[t._v(" You can make "+t._s(t.chosenRecipe.recipe_name)+" today! ")]):i("div",[t._v(" There is nothing you can make today ")])]),i("b-table",{attrs:{data:t.recipes,loading:t.loading,"row-class":function(e,i){return t.cookable(e)&&"is-success"}}},[i("b-table-column",{attrs:{field:"id",label:"ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.id)+" ")]}}])}),i("b-table-column",{attrs:{field:"recipe_name",label:"Recipe Name"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.recipe_name)+" ")]}}])}),i("b-table-column",{attrs:{field:"recipe_ingredients",label:"Required Ingredients"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("b-taglist",[t._l(e.row.ingredients,(function(e){return t.hasItem(e)?i("b-tag",{key:e,attrs:{size:"is-small",type:"is-success"}},[t._v(t._s(e))]):t._e()})),t._l(e.row.ingredients,(function(e){return t.hasItem(e)?t._e():i("b-tag",{key:e,attrs:{size:"is-small",type:"is-danger"}},[t._v(t._s(e))])}))],2)]}}])}),i("b-table-column",{attrs:{field:"recipe_optional_ingredients",label:"Optional Ingredients"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("b-taglist",[t._l(e.row.optional_ingredients,(function(e){return t.hasItem(e)?i("b-tag",{key:e,attrs:{size:"is-small",type:"is-success"}},[t._v(t._s(e))]):t._e()})),t._l(e.row.optional_ingredients,(function(e){return t.hasItem(e)?t._e():i("b-tag",{key:e,attrs:{size:"is-small",type:"is-danger"}},[t._v(t._s(e))])}))],2)]}}])}),i("b-table-column",{attrs:{field:"cooking_time",label:"Cooking Time"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.cooking_time)+" minutes ")]}}])}),i("b-table-column",{attrs:{field:"tags",label:"Tags"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.tags.join(", "))+" ")]}}])}),i("b-table-column",{attrs:{field:"recipe_action",label:"Action"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("recipe-action",{attrs:{recipe:e.row},on:{"update:isRecipeModalActive":function(e){t.isRecipeModalActive=e},"update:recipeFormProps":function(e){t.recipeFormProps=e},"update:hasRecipesChanged":function(e){return t.getRecipes()}}})]}}])})],1)],1),i("b-modal",{attrs:{"on-cancel":t.resetRecipeModal},model:{value:t.isRecipeModalActive,callback:function(e){t.isRecipeModalActive=e},expression:"isRecipeModalActive"}},[i("recipe-modal",t._b({on:{"update:isRecipeModalActive":function(e){t.isRecipeModalActive=e},"update:hasRecipesChanged":function(e){return t.getRecipes()}}},"recipe-modal",t.recipeFormProps,!1))],1)],1)])},tt=[],et=i("b85c"),it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"buttons"},[i("b-button",{attrs:{"icon-left":"lead-pencil",type:"is-info"},on:{click:function(e){return t.editRecipe(t.recipe)}}},[t._v("Edit")]),i("b-button",{attrs:{"icon-left":"plus-thick",type:"is-success"}},[t._v("Cook and add to Fridge")]),i("b-button",{attrs:{"icon-left":"delete",type:"is-danger"},on:{click:function(e){return t.removeRecipe(t.recipe)}}},[t._v("Remove")])],1)},nt=[],at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[i("header",{staticClass:"modal-card-head"},[i("p",{staticClass:"modal-card-title"},[t._v("Edit Recipe")]),i("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){return t.$emit("update:isRecipeModalActive",!1)}}})]),i("section",{staticClass:"modal-card-body"},[i("b-field",{attrs:{label:"Recipe Name"}},[i("b-input",{attrs:{value:t.l_recipe_name,placeholder:"Recipe name",required:""},model:{value:t.l_recipe_name,callback:function(e){t.l_recipe_name=e},expression:"l_recipe_name"}})],1),i("b-field",{attrs:{label:"Required Ingredients"}},[i("b-input",{attrs:{value:t.l_recipe_ingredients,placeholder:"Requried Ingredients"},model:{value:t.l_recipe_ingredients,callback:function(e){t.l_recipe_ingredients=e},expression:"l_recipe_ingredients"}})],1),i("b-field",{attrs:{label:"Optional Ingredients"}},[i("b-input",{attrs:{value:t.l_recipe_optional_ingredients,placeholder:"Optional Ingredients"},model:{value:t.l_recipe_optional_ingredients,callback:function(e){t.l_recipe_optional_ingredients=e},expression:"l_recipe_optional_ingredients"}})],1),i("b-field",{attrs:{label:"Cooking Time (minutes)"}},[i("b-input",{attrs:{value:t.l_cooking_time,placeholder:"Cooking Time",type:"number",required:""},model:{value:t.l_cooking_time,callback:function(e){t.l_cooking_time=e},expression:"l_cooking_time"}})],1),i("b-field",{attrs:{label:"Tags"}},[i("b-input",{attrs:{value:t.l_tags,placeholder:"Tags",required:""},model:{value:t.l_tags,callback:function(e){t.l_tags=e},expression:"l_tags"}})],1)],1),i("footer",{staticClass:"modal-card-foot"},[i("b-button",{attrs:{label:"Close"},on:{click:this.closeModal}}),t.updating?i("b-button",{attrs:{label:"Update Recipe",type:"is-primary"},on:{click:this.updateRecipe}}):i("b-button",{attrs:{label:"Add Recipe",type:"is-primary"},on:{click:this.addRecipe}})],1)])},st=[],ot=(i("a15b"),i("ac1f"),i("1276"),i("498a"),new n["a"]);function rt(t){if(!t||t.split(".").length<3)return!1;var e=JSON.parse(atob(t.split(".")[1])),i=new Date(1e3*e.exp),n=new Date;return n<i}function ct(t){var e,i=t.split(","),n=[],a=Object(et["a"])(i);try{for(a.s();!(e=a.n()).done;){var s=e.value,o=s.trim();0!=o.length&&n.push(s.trim())}}catch(r){a.e(r)}finally{a.f()}return n}function lt(t){return t[Math.floor(Math.random()*t.length)]}var ut={props:["recipe_id","recipe_name","recipe_ingredients","recipe_optional_ingredients","cooking_time","tags","updating"],data:function(){return{l_recipe_id:this.recipe_id,l_recipe_name:this.recipe_name,l_recipe_ingredients:this.recipe_ingredients.join(", "),l_recipe_optional_ingredients:this.recipe_optional_ingredients.join(", "),l_cooking_time:this.cooking_time,l_tags:this.tags.join(", "),l_updating:this.updating}},methods:{addRecipe:function(){var t={id:this.l_recipe_id,recipe_name:this.l_recipe_name,ingredients:ct(this.l_recipe_ingredients),optional_ingredients:ct(this.l_recipe_optional_ingredients),cooking_time:this.l_cooking_time,tags:ct(this.l_tags)};this.$store.dispatch("addRecipe",{recipe:t}),this.$emit("update:hasRecipesChanged",!0),this.closeModal()},updateRecipe:function(){var t={id:this.l_recipe_id,recipe_name:this.l_recipe_name,ingredients:ct(this.l_recipe_ingredients),optional_ingredients:ct(this.l_recipe_optional_ingredients),cooking_time:this.l_cooking_time,tags:ct(this.l_tags)};this.$store.dispatch("updateRecipe",{recipe:t}),this.$emit("update:hasRecipesChanged",!0),this.closeModal()},closeModal:function(){var t={recipe_id:-1,recipe_name:"",recipe_ingredients:[],recipe_optional_ingredients:[],cooking_time:-1,tags:[],updating:!1};this.$emit("update:recipeFormProps",t),this.$emit("update:isRecipeModalActive",!1)}}},dt=ut,pt=Object(u["a"])(dt,at,st,!1,null,null,null),mt=pt.exports,ft={methods:{editRecipe:function(t){var e={recipe_id:t.id,recipe_name:t.recipe_name,recipe_ingredients:t.ingredients,recipe_optional_ingredients:t.optional_ingredients,cooking_time:t.cooking_time,tags:t.tags,updating:!0};this.$emit("update:isRecipeModalActive",!0),this.$emit("update:recipeFormProps",e)},removeRecipe:function(t){this.$store.dispatch("removeRecipe",{recipe:t}),this.$emit("update:hasRecipesChanged",!0)}},props:["recipe"],components:{RecipeModal:mt}},_t=ft,ht=Object(u["a"])(_t,it,nt,!1,null,null,null),gt=ht.exports,bt={name:"Recipe",data:function(){return{isRecipeModalActive:!1,isMessageActive:!1,recipeFormProps:{recipe_id:-1,recipe_name:"",recipe_ingredients:[],recipe_optional_ingredients:[],cooking_time:-1,tags:[],updating:!1},chosenRecipe:void 0}},computed:Object(k["b"])({recipes:function(t){return t.recipes},loading:function(t){return t.loading},items:function(t){return t.items}}),beforeMount:function(){this.getItems(),this.getRecipes()},components:{RecipeAction:gt,RecipeModal:mt},methods:{addRecipe:function(){this.resetRecipeModal(),this.isRecipeModalActive=!0},resetRecipeModal:function(){this.recipeFormProps={recipe_id:-1,recipe_name:"",recipe_ingredients:[],recipe_optional_ingredients:[],cooking_time:-1,tags:[],updating:!1}},getRecipes:function(){this.$store.dispatch("loadRecipes")},pickRecipe:function(){var t,e=[],i=Object(et["a"])(this.recipes);try{for(i.s();!(t=i.n()).done;){var n=t.value;this.cookable(n)&&e.push(n)}}catch(a){i.e(a)}finally{i.f()}this.isMessageActive=!0,this.chosenRecipe=lt(e)},getItems:function(){this.$store.dispatch("loadItems")},hasItem:function(t){var e,i=Object(et["a"])(this.items);try{for(i.s();!(e=i.n()).done;){var n=e.value;if(t.toLowerCase()===n.item_name.toLowerCase())return!0}}catch(a){i.e(a)}finally{i.f()}return!1},hasAllItems:function(t){var e,i=Object(et["a"])(t);try{for(i.s();!(e=i.n()).done;){var n=e.value;if(!this.hasItem(n))return!1}}catch(a){i.e(a)}finally{i.f()}return!0},hasNoItem:function(t){var e,i=Object(et["a"])(t);try{for(i.s();!(e=i.n()).done;){var n=e.value;if(this.hasItem(n))return!1}}catch(a){i.e(a)}finally{i.f()}return!0},cookable:function(t){return this.hasAllItems(t.ingredients)}}},vt=bt,yt=(i("4c47"),i("fd36"),Object(u["a"])(vt,Z,tt,!1,null,"4d96552a",null)),kt=yt.exports,It=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",{staticClass:"hero is-primary"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container has-text-centered"},[i("h2",{staticClass:"title"},[t._v("Login or Register")]),i("p",{staticClass:"subtitle error-msg"},[t._v(t._s(t.errorMsg))])])])]),i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"field"},[i("label",{staticClass:"label is-large",attrs:{for:"username"}},[t._v("Username:")]),i("div",{staticClass:"control"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input is-large",attrs:{type:"username",id:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),i("div",{staticClass:"field"},[i("label",{staticClass:"label is-large",attrs:{for:"password"}},[t._v("Password:")]),i("div",{staticClass:"control"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input is-large",attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),i("div",{staticClass:"control"},[i("a",{staticClass:"button is-large is-primary",on:{click:t.authenticate}},[t._v("Login")]),i("a",{staticClass:"button is-large is-success",on:{click:t.register}},[t._v("Register")])])])])])},Rt=[],wt={data:function(){return{username:"",password:"",errorMsg:""}},methods:{authenticate:function(){var t=this;this.$store.dispatch("login",{username:this.username,password:this.password}).then(setTimeout((function(){return t.$router.push("/")}),500))},register:function(){var t=this;this.$store.dispatch("register",{username:this.username,password:this.password}).then(setTimeout((function(){return t.$router.push("/")}),500))}},mounted:function(){var t=this;ot.$on("failedRegistering",(function(e){t.errorMsg=e})),ot.$on("failedAuthentication",(function(e){t.errorMsg=e}))},beforeDestroy:function(){ot.$off("failedRegistering"),ot.$off("failedAuthentication")}},Ct=wt,At=Object(u["a"])(Ct,It,Rt,!1,null,null,null),Mt=At.exports,jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",{staticClass:"hero is-primary"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container has-text-centered"},[i("h2",{staticClass:"title"},[t._v("Inventory "),i("b-button",{attrs:{"icon-right":"plus-thick",type:"is-success",rounded:""}})],1)])])]),i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("b-message",[t._v(" Nothing here for now. Bruh. ")])],1)])])},$t=[],xt={},St=Object(u["a"])(xt,jt,$t,!1,null,null,null),Ot=St.exports;n["a"].use(k["a"]);var qt={items:[],currentItem:{},recipes:[],currentRecipe:{},loading:!1,user:{},jwt:""},Pt={initializeStore:function(t){localStorage.getItem("token")&&(t.jwt={token:localStorage.getItem("token")})},clearStore:function(t){localStorage.clear(),t.jwt=""},setUserData:function(t,e){console.log("setUserData payload = ",e),t.userData=e.userData},setJwtToken:function(t,e){console.log("setJwtToken payload = ",e),localStorage.token=e.jwt.token,t.jwt=e.jwt},setItems:function(t,e){t.items=e.items,t.loading=!1},setItem:function(t,e){t.currentItem=e.item},setRecipes:function(t,e){t.recipes=e.recipes,t.loading=!1},setRecipe:function(t,e){t.currentRecipe=e.recipe},setLoading:function(t,e){t.loading=e.loading}},Et={initializeStore:function(t){t.commit("initializeStore")},clearStore:function(t){t.commit("clearStore")},login:function(t,e){return t.commit("setUserData",{userData:e}),D(e).then((function(e){return t.commit("setJwtToken",{jwt:e.data})})).catch((function(t){console.log("Error Authenticating: ",t),ot.$emit("failedAuthentication",t)}))},register:function(t,e){return t.commit("setUserData",{userData:e}),B(e).then(t.dispatch("login",e)).catch((function(t){console.log("Error Registering: ",t),ot.$emit("failedRegistering: ",t)}))},loadItems:function(t){return t.commit("setLoading",{loading:!0}),setTimeout((function(){$(t.state.jwt.token).then((function(e){return t.commit("setItems",{items:e.data})}))}),500)},loadItem:function(t,e){var i=e.id;return x(i,t.state.jwt.token).then((function(e){return t.commit("setItem",{item:e.data})}))},addItem:function(t,e){var i=e.item;return O(i,t.state.jwt.token)},updateItem:function(t,e){var i=e.item;return S(i,t.state.jwt.token)},removeItem:function(t,e){var i=e.id;return q(i,t.state.jwt.token)},loadRecipes:function(t){return t.commit("setLoading",{loading:!0}),setTimeout((function(){P(t.state.jwt.token).then((function(e){return t.commit("setRecipes",{recipes:e.data})}))}),500)},loadRecipe:function(t,e){var i=e.id;return E(i,t.state.jwt.token).then((function(e){return t.commit("setRecipe",{recipe:e.data})}))},addRecipe:function(t,e){var i=e.recipe;return z(i,t.state.jwt.token)},updateRecipe:function(t,e){var i=e.recipe;return T(i,t.state.jwt.token)},removeRecipe:function(t,e){var i=e.id;return F(i,t.state.jwt.token)}},Tt={},zt={isAuthenticated:function(t){return rt(t.jwt.token)}},Ft=new k["a"].Store({state:qt,getters:zt,mutations:Pt,actions:Et,modules:Tt}),Dt=Ft;n["a"].use(g["a"]);var Bt=new g["a"]({routes:[{path:"/",name:"Home",component:b["default"]},{path:"/fridge",name:"Fridge",component:X,beforeEnter:function(t,e,i){Dt.dispatch("initializeStore"),Dt.getters.isAuthenticated?i():i("/login")}},{path:"/recipes",name:"Recipe",component:kt,beforeEnter:function(t,e,i){Dt.dispatch("initializeStore"),Dt.getters.isAuthenticated?i():i("/login")}},{path:"/login",name:"Login",component:Mt},{path:"/logout",name:"Logout",beforeEnter:function(t,e,i){Dt.dispatch("clearStore"),i("/")}},{path:"/inventory",name:"Inventory",component:Ot}]}),Lt=Bt,Ut=i("289d");i("2fc4");n["a"].use(Ut["a"]),n["a"].config.productionTip=!1,new n["a"]({router:Lt,store:Dt,render:function(t){return t(h)},beforeCreate:function(){this.$store.dispatch("initializeStore")}}).$mount("#app")},"57da":function(t,e,i){"use strict";var n=i("6f10"),a=i("e732"),s=(i("cf57"),i("2877")),o=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"48020ea0",null);e["default"]=o.exports},"6f10":function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),i("section",{staticClass:"section"},[i("div",{staticClass:"container"},[i("b-message",[t._v(" Welcome to the Kitchen, boss! ")]),i("b-message",[t._v(" You have 10 items in the fridge ")])],1)])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"hero is-primary"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container has-text-centered"},[i("h2",{staticClass:"title"},[t._v("Welcome to The Kitchen")])])])])}]},"9b44":function(t,e,i){"use strict";i("cf02")},b6e3:function(t,e,i){},cf02:function(t,e,i){},cf57:function(t,e,i){"use strict";i("b6e3")},d29f:function(t,e,i){},d32d:function(t,e,i){},e732:function(t,e,i){"use strict";var n=i("0134"),a=i.n(n);e["default"]=a.a},fd36:function(t,e,i){"use strict";i("d32d")}});
//# sourceMappingURL=app.60b70f6a.js.map