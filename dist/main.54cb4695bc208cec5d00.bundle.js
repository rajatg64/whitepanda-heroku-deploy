webpackJsonp([1],{"+h1B":function(l,n,u){"use strict";var t=u("/oeL"),i=u("aR8+"),e=u("wQAS"),r=u("NHwj"),s=u("Tn9N"),o=u("q4dy"),a=u("qbdv"),c=u("fc+i"),_=u("bm2B"),d=u("CPp0"),g=u("BkNc"),f=u("N/0P"),p=u("tbRa"),m=u("UbAT"),v=u("vNSz");u.d(n,"a",function(){return h});var h=t.b(i.a,[e.a],function(l){return t.c([t.d(512,t.e,t.f,[[8,[r.a,s.a,o.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,a.a,a.b,[t.h]),t.d(5120,t.j,t.k,[]),t.d(5120,t.l,t.m,[]),t.d(5120,t.n,t.o,[]),t.d(4608,c.b,c.c,[c.d]),t.d(6144,t.p,null,[c.b]),t.d(4608,c.e,c.f,[]),t.d(5120,c.g,function(l,n,u,t){return[new c.h(l),new c.i(n),new c.j(u,t)]},[c.d,c.d,c.d,c.e]),t.d(4608,c.k,c.k,[c.g,t.q]),t.d(135680,c.l,c.l,[c.d]),t.d(4608,c.m,c.m,[c.k,c.l]),t.d(6144,t.r,null,[c.m]),t.d(6144,c.n,null,[c.l]),t.d(4608,t.s,t.s,[t.q]),t.d(4608,c.o,c.o,[c.d]),t.d(4608,c.p,c.p,[c.d]),t.d(4608,_.a,_.a,[]),t.d(4608,_.b,_.b,[]),t.d(4608,d.a,d.a,[]),t.d(4608,d.b,d.c,[]),t.d(5120,d.d,d.e,[]),t.d(4608,d.f,d.f,[d.a,d.b,d.d]),t.d(4608,d.g,d.h,[]),t.d(5120,d.i,d.j,[d.f,d.g]),t.d(5120,g.a,g.b,[g.c]),t.d(4608,g.d,g.d,[]),t.d(6144,g.e,null,[g.d]),t.d(135680,g.f,g.f,[g.c,t.t,t.u,t.v,g.e]),t.d(4608,g.g,g.g,[]),t.d(5120,g.h,g.i,[g.j]),t.d(5120,t.w,function(l){return[l]},[g.h]),t.d(4608,f.a,f.a,[d.i]),t.d(512,a.c,a.c,[]),t.d(1024,t.x,c.q,[]),t.d(1024,t.y,function(){return[g.k()]},[]),t.d(512,g.j,g.j,[t.v]),t.d(1024,t.z,function(l,n,u){return[c.r(l,n),g.l(u)]},[[2,c.s],[2,t.y],g.j]),t.d(512,t.A,t.A,[[2,t.z]]),t.d(131584,t.B,t.B,[t.q,t.C,t.v,t.x,t.e,t.A]),t.d(2048,t.D,null,[t.B]),t.d(512,t.E,t.E,[t.D]),t.d(512,c.t,c.t,[[3,c.t]]),t.d(512,_.c,_.c,[]),t.d(512,_.d,_.d,[]),t.d(512,_.e,_.e,[]),t.d(512,d.k,d.k,[]),t.d(1024,g.m,g.n,[[3,g.c]]),t.d(512,g.o,g.p,[]),t.d(512,g.q,g.q,[]),t.d(256,g.r,{},[]),t.d(1024,a.d,g.s,[a.e,[2,a.f],g.r]),t.d(512,a.g,a.g,[a.d]),t.d(512,t.u,t.u,[]),t.d(512,t.t,t.F,[t.u,[2,t.G]]),t.d(1024,g.t,function(){return[[{path:"",redirectTo:"/login",pathMatch:"full"},{path:"register",component:p.a},{path:"login",component:m.a}]]},[]),t.d(1024,g.c,g.u,[t.D,g.o,g.q,a.g,t.v,t.t,t.u,g.t,g.r,[2,g.v],[2,g.w]]),t.d(512,g.x,g.x,[[2,g.m],[2,g.c]]),t.d(512,v.a,v.a,[]),t.d(512,i.a,i.a,[])])})},0:function(l,n,u){l.exports=u("cDNt")},"N/0P":function(l,n,u){"use strict";var t=u("CPp0"),i=u("bKpL"),e=(u.n(i),u("xpf9")),r=(u.n(e),u("5v8a")),s=(u.n(r),u("S7im")),o=(u.n(s),u("82j9"));u.n(o);u.d(n,"a",function(){return a});var a=function(){function l(l){this.http=l,this.api_base="https://reqres.in/api"}return l.prototype.register=function(l){var n=this.api_base+"/register";return this.http.post(n,l).map(this.verify).catch(function(l){if(400===l.status)return i.Observable.throw(JSON.parse(l._body));i.Observable.throw({})})},l.prototype.login=function(l){var n=this.api_base+"/login";return this.http.post(n,l).map(this.verify).catch(function(l){if(400===l.status)return i.Observable.throw(JSON.parse(l._body));i.Observable.throw({})})},l.prototype.verify=function(l){var n=l.json();return n.body?n.body:n},l.ctorParameters=function(){return[{type:t.i}]},l}()},NHwj:function(l,n,u){"use strict";function t(l){return c._25(0,[(l()(),c._27(0,null,null,0,"div",[],null,null,null,null,null))],null,null)}function i(l){return c._25(0,[(l()(),c._27(0,null,null,1,"div",[["class","overlay"]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==i.toggleOverlay()&&t}return t},null,null)),(l()(),c._26(null,["\n    Register Successful\n  "]))],null,null)}function e(l){return c._25(0,[(l()(),c._26(null,["\n  "])),(l()(),c._30(16777216,null,null,1,null,i)),c._28(16384,null,0,_.l,[c.W,c._7],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),c._26(null,["\n"]))],function(l,n){l(n,2,0,n.component.success,c._31(n.parent,92))},null)}function r(l){return c._25(0,[(l()(),c._26(null,["\n  "])),(l()(),c._27(0,null,null,1,"div",[["class","overlay"]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==i.toggleOverlay()&&t}return t},null,null)),(l()(),c._26(null,["\n    Register Failed\n  "])),(l()(),c._26(null,["\n"]))],null,null)}function s(l){return c._25(0,[(l()(),c._27(0,null,null,84,"div",[["class","row"]],null,null,null,null,null)),(l()(),c._26(null,["\n  "])),(l()(),c._27(0,null,null,81,"div",[["class","register col-md-4"]],null,null,null,null,null)),(l()(),c._26(null,["\n      "])),(l()(),c._27(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),c._26(null,["Register"])),(l()(),c._26(null,["\n      "])),(l()(),c._27(0,null,null,75,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,i=l.component;if("submit"===n){t=!1!==c._31(l,9).onSubmit(u)&&t}if("reset"===n){t=!1!==c._31(l,9).onReset()&&t}if("ngSubmit"===n){t=!1!==i.registerUser(i.form.value)&&t}return t},null,null)),c._28(16384,null,0,g.g,[],null,null),c._28(540672,null,0,g.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),c._32(2048,null,g.i,null,[g.h]),c._28(16384,null,0,g.j,[g.i],null,null),(l()(),c._26(null,["\n\n\n        "])),(l()(),c._27(0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),c._26(null,["\n          "])),(l()(),c._27(0,null,null,1,"label",[["for","firstName"]],null,null,null,null,null)),(l()(),c._26(null,["First Name"])),(l()(),c._26(null,["\n          "])),(l()(),c._27(0,null,null,5,"input",[["class","form-control"],["formControlName","firstName"],["id","firstName"],["name","firstName"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;if("input"===n){t=!1!==c._31(l,19)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==c._31(l,19).onTouched()&&t}if("compositionstart"===n){t=!1!==c._31(l,19)._compositionStart()&&t}if("compositionend"===n){t=!1!==c._31(l,19)._compositionEnd(u.target.value)&&t}return t},null,null)),c._28(16384,null,0,g.k,[c.O,c.P,[2,g.l]],null,null),c._32(1024,null,g.p,function(l){return[l]},[g.k]),c._28(671744,null,0,g.q,[[3,g.i],[8,null],[8,null],[2,g.p]],{name:[0,"name"]},null),c._32(2048,null,g.r,null,[g.q]),c._28(16384,null,0,g.s,[g.r],null,null),(l()(),c._26(null,["\n          "])),(l()(),c._27(0,null,null,1,"small",[],[[8,"hidden",0]],null,null,null,null)),(l()(),c._26(null,["\n            First Name required\n          "])),(l()(),c._26(null,["\n        "])),(l()(),c._26(null,["\n\n        "])),(l()(),c._27(0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),c._26(null,["\n          "])),(l()(),c._27(0,null,null,1,"label",[["for","lastName"]],null,null,null,null,null)),(l()(),c._26(null,["Last Name"])),(l()(),c._26(null,["\n          "])),(l()(),c._27(0,null,null,5,"input",[["class","form-control"],["formControlName","lastName"],["id","lastName"],["name","lastName"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;if("input"===n){t=!1!==c._31(l,35)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==c._31(l,35).onTouched()&&t}if("compositionstart"===n){t=!1!==c._31(l,35)._compositionStart()&&t}if("compositionend"===n){t=!1!==c._31(l,35)._compositionEnd(u.target.value)&&t}return t},null,null)),c._28(16384,null,0,g.k,[c.O,c.P,[2,g.l]],null,null),c._32(1024,null,g.p,function(l){return[l]},[g.k]),c._28(671744,null,0,g.q,[[3,g.i],[8,null],[8,null],[2,g.p]],{name:[0,"name"]},null),c._32(2048,null,g.r,null,[g.q]),c._28(16384,null,0,g.s,[g.r],null,null),(l()(),c._26(null,["\n          "])),(l()(),c._27(0,null,null,1,"small",[],[[8,"hidden",0]],null,null,null,null)),(l()(),c._26(null,["\n            Last Name required\n          "])),(l()(),c._26(null,["\n        "])),(l()(),c._26(null,["\n\n        "])),(l()(),c._27(0,null,null,17,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),c._26(null,["\n          "])),(l()(),c._27(0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),c._26(null,["Email"])),(l()(),c._26(null,["\n          "])),(l()(),c._27(0,null,null,8,"input",[["class","form-control"],["formControlName","email"],["id","email"],["name","email"],["pattern","^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"],["required",""],["type","text"]],[[1,"required",0],[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;if("input"===n){t=!1!==c._31(l,51)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==c._31(l,51).onTouched()&&t}if("compositionstart"===n){t=!1!==c._31(l,51)._compositionStart()&&t}if("compositionend"===n){t=!1!==c._31(l,51)._compositionEnd(u.target.value)&&t}return t},null,null)),c._28(16384,null,0,g.k,[c.O,c.P,[2,g.l]],null,null),c._28(16384,null,0,g.m,[],{required:[0,"required"]},null),c._28(540672,null,0,g.n,[],{pattern:[0,"pattern"]},null),c._32(1024,null,g.o,function(l,n){return[l,n]},[g.m,g.n]),c._32(1024,null,g.p,function(l){return[l]},[g.k]),c._28(671744,null,0,g.q,[[3,g.i],[2,g.o],[8,null],[2,g.p]],{name:[0,"name"]},null),c._32(2048,null,g.r,null,[g.q]),c._28(16384,null,0,g.s,[g.r],null,null),(l()(),c._26(null,["\n          "])),(l()(),c._27(0,null,null,1,"small",[],[[8,"hidden",0]],null,null,null,null)),(l()(),c._26(null,["\n            Invalid Email address\n          "])),(l()(),c._26(null,["\n        "])),(l()(),c._26(null,["\n\n        "])),(l()(),c._27(0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),c._26(null,["\n          "])),(l()(),c._27(0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(l()(),c._26(null,["Password"])),(l()(),c._26(null,["\n          "])),(l()(),c._27(0,null,null,5,"input",[["class","form-control"],["formControlName","password"],["id","password"],["name","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;if("input"===n){t=!1!==c._31(l,70)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==c._31(l,70).onTouched()&&t}if("compositionstart"===n){t=!1!==c._31(l,70)._compositionStart()&&t}if("compositionend"===n){t=!1!==c._31(l,70)._compositionEnd(u.target.value)&&t}return t},null,null)),c._28(16384,null,0,g.k,[c.O,c.P,[2,g.l]],null,null),c._32(1024,null,g.p,function(l){return[l]},[g.k]),c._28(671744,null,0,g.q,[[3,g.i],[8,null],[8,null],[2,g.p]],{name:[0,"name"]},null),c._32(2048,null,g.r,null,[g.q]),c._28(16384,null,0,g.s,[g.r],null,null),(l()(),c._26(null,["\n          "])),(l()(),c._27(0,null,null,1,"small",[],[[8,"hidden",0]],null,null,null,null)),(l()(),c._26(null,["\n            Password required\n          "])),(l()(),c._26(null,["\n        "])),(l()(),c._26(null,["\n\n        "])),(l()(),c._27(0,null,null,1,"button",[["class","btn btn-success"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),c._26(null,["Submit"])),(l()(),c._26(null,["\n\n      "])),(l()(),c._26(null,["\n  "])),(l()(),c._26(null,["\n"])),(l()(),c._26(null,["\n\n\n"])),(l()(),c._30(16777216,null,null,1,null,t)),c._28(16384,null,0,_.l,[c.W,c._7],{ngIf:[0,"ngIf"],ngIfThen:[1,"ngIfThen"]},null),(l()(),c._26(null,["\n"])),(l()(),c._26(null,["\n"])),(l()(),c._30(0,[["thenBlock",2]],null,0,null,e)),(l()(),c._26(null,["\n"])),(l()(),c._30(0,[["failure",2]],null,0,null,r)),(l()(),c._26(null,["\n"]))],function(l,n){var u=n.component;l(n,9,0,u.form);l(n,21,0,"firstName");l(n,37,0,"lastName");l(n,52,0,"");l(n,53,0,"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$");l(n,56,0,"email");l(n,72,0,"password"),l(n,87,0,u.message.length>0,c._31(n,90))},function(l,n){var u=n.component;l(n,7,0,c._31(n,11).ngClassUntouched,c._31(n,11).ngClassTouched,c._31(n,11).ngClassPristine,c._31(n,11).ngClassDirty,c._31(n,11).ngClassValid,c._31(n,11).ngClassInvalid,c._31(n,11).ngClassPending),l(n,18,0,c._31(n,23).ngClassUntouched,c._31(n,23).ngClassTouched,c._31(n,23).ngClassPristine,c._31(n,23).ngClassDirty,c._31(n,23).ngClassValid,c._31(n,23).ngClassInvalid,c._31(n,23).ngClassPending),l(n,25,0,u.form.controls.firstName.valid||u.form.controls.firstName.pristine),l(n,34,0,c._31(n,39).ngClassUntouched,c._31(n,39).ngClassTouched,c._31(n,39).ngClassPristine,c._31(n,39).ngClassDirty,c._31(n,39).ngClassValid,c._31(n,39).ngClassInvalid,c._31(n,39).ngClassPending),l(n,41,0,u.form.controls.lastName.valid||u.form.controls.lastName.pristine),l(n,50,0,c._31(n,52).required?"":null,c._31(n,53).pattern?c._31(n,53).pattern:null,c._31(n,58).ngClassUntouched,c._31(n,58).ngClassTouched,c._31(n,58).ngClassPristine,c._31(n,58).ngClassDirty,c._31(n,58).ngClassValid,c._31(n,58).ngClassInvalid,c._31(n,58).ngClassPending),l(n,60,0,u.form.controls.email.valid||u.form.controls.email.pristine),l(n,69,0,c._31(n,74).ngClassUntouched,c._31(n,74).ngClassTouched,c._31(n,74).ngClassPristine,c._31(n,74).ngClassDirty,c._31(n,74).ngClassValid,c._31(n,74).ngClassInvalid,c._31(n,74).ngClassPending),l(n,76,0,u.form.controls.password.valid||u.form.controls.password.pristine),l(n,80,0,!u.form.valid)})}function o(l){return c._25(0,[(l()(),c._27(0,null,null,1,"app-register",[],null,null,null,s,m)),c._28(114688,null,0,d.a,[f.a,g.b],null,null)],function(l,n){l(n,1,0)},null)}var a=u("q74L"),c=u("/oeL"),_=u("qbdv"),d=u("tbRa"),g=u("bm2B"),f=u("N/0P");u.d(n,"a",function(){return v});var p=[a.a],m=c._24({encapsulation:0,styles:p,data:{}}),v=c._29("app-register",d.a,o,{},{},[])},NhKt:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["nav.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}nav.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:rgba(0,0,0,.5);color:#fff}.navbar-brand[_ngcontent-%COMP%]{background-color:rgba(127,94,67,.7)!important;color:#bbb!important}"]},Tn9N:function(l,n,u){"use strict";function t(l){return c._25(0,[(l()(),c._27(0,null,null,0,"div",[],null,null,null,null,null))],null,null)}function i(l){return c._25(0,[(l()(),c._27(0,null,null,1,"div",[["class","overlay"]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==i.toggleOverlay()&&t}return t},null,null)),(l()(),c._26(null,["\n    Login Successful\n  "]))],null,null)}function e(l){return c._25(0,[(l()(),c._26(null,["\n  "])),(l()(),c._30(16777216,null,null,1,null,i)),c._28(16384,null,0,_.l,[c.W,c._7],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),c._26(null,["\n"]))],function(l,n){l(n,2,0,n.component.success,c._31(n.parent,60))},null)}function r(l){return c._25(0,[(l()(),c._26(null,["\n  "])),(l()(),c._27(0,null,null,1,"div",[["class","overlay"]],null,[[null,"click"]],function(l,n,u){var t=!0,i=l.component;if("click"===n){t=!1!==i.toggleOverlay()&&t}return t},null,null)),(l()(),c._26(null,["\n    Login Failed\n  "])),(l()(),c._26(null,["\n"]))],null,null)}function s(l){return c._25(0,[(l()(),c._27(0,null,null,52,"div",[["class","row"]],null,null,null,null,null)),(l()(),c._26(null,["\n  "])),(l()(),c._27(0,null,null,49,"div",[["class","login col-md-4"]],null,null,null,null,null)),(l()(),c._26(null,["\n    "])),(l()(),c._27(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),c._26(null,["Login"])),(l()(),c._26(null,["\n    "])),(l()(),c._27(0,null,null,43,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,i=l.component;if("submit"===n){t=!1!==c._31(l,9).onSubmit(u)&&t}if("reset"===n){t=!1!==c._31(l,9).onReset()&&t}if("ngSubmit"===n){t=!1!==i.loginUser(i.form.value)&&t}return t},null,null)),c._28(16384,null,0,g.g,[],null,null),c._28(540672,null,0,g.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),c._32(2048,null,g.i,null,[g.h]),c._28(16384,null,0,g.j,[g.i],null,null),(l()(),c._26(null,["\n      "])),(l()(),c._27(0,null,null,17,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),c._26(null,["\n        "])),(l()(),c._27(0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),c._26(null,["Email"])),(l()(),c._26(null,["\n        "])),(l()(),c._27(0,null,null,8,"input",[["class","form-control"],["formControlName","email"],["id","email"],["name","email"],["pattern","^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"],["required",""],["type","text"]],[[1,"required",0],[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;if("input"===n){t=!1!==c._31(l,19)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==c._31(l,19).onTouched()&&t}if("compositionstart"===n){t=!1!==c._31(l,19)._compositionStart()&&t}if("compositionend"===n){t=!1!==c._31(l,19)._compositionEnd(u.target.value)&&t}return t},null,null)),c._28(16384,null,0,g.k,[c.O,c.P,[2,g.l]],null,null),c._28(16384,null,0,g.m,[],{required:[0,"required"]},null),c._28(540672,null,0,g.n,[],{pattern:[0,"pattern"]},null),c._32(1024,null,g.o,function(l,n){return[l,n]},[g.m,g.n]),c._32(1024,null,g.p,function(l){return[l]},[g.k]),c._28(671744,null,0,g.q,[[3,g.i],[2,g.o],[8,null],[2,g.p]],{name:[0,"name"]},null),c._32(2048,null,g.r,null,[g.q]),c._28(16384,null,0,g.s,[g.r],null,null),(l()(),c._26(null,["\n        "])),(l()(),c._27(0,null,null,1,"small",[],[[8,"hidden",0]],null,null,null,null)),(l()(),c._26(null,["\n          Invalid Email address\n        "])),(l()(),c._26(null,["\n      "])),(l()(),c._26(null,["\n\n      "])),(l()(),c._27(0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),c._26(null,["\n        "])),(l()(),c._27(0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(l()(),c._26(null,["Password"])),(l()(),c._26(null,["\n        "])),(l()(),c._27(0,null,null,5,"input",[["class","form-control"],["formControlName","password"],["id","password"],["name","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;if("input"===n){t=!1!==c._31(l,38)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==c._31(l,38).onTouched()&&t}if("compositionstart"===n){t=!1!==c._31(l,38)._compositionStart()&&t}if("compositionend"===n){t=!1!==c._31(l,38)._compositionEnd(u.target.value)&&t}return t},null,null)),c._28(16384,null,0,g.k,[c.O,c.P,[2,g.l]],null,null),c._32(1024,null,g.p,function(l){return[l]},[g.k]),c._28(671744,null,0,g.q,[[3,g.i],[8,null],[8,null],[2,g.p]],{name:[0,"name"]},null),c._32(2048,null,g.r,null,[g.q]),c._28(16384,null,0,g.s,[g.r],null,null),(l()(),c._26(null,["\n        "])),(l()(),c._27(0,null,null,1,"small",[],[[8,"hidden",0]],null,null,null,null)),(l()(),c._26(null,["\n          Password required\n        "])),(l()(),c._26(null,["\n      "])),(l()(),c._26(null,["\n\n      "])),(l()(),c._27(0,null,null,1,"button",[["class","btn btn-success"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),c._26(null,["Submit"])),(l()(),c._26(null,["\n\n    "])),(l()(),c._26(null,["\n  "])),(l()(),c._26(null,["\n"])),(l()(),c._26(null,["\n"])),(l()(),c._30(16777216,null,null,1,null,t)),c._28(16384,null,0,_.l,[c.W,c._7],{ngIf:[0,"ngIf"],ngIfThen:[1,"ngIfThen"]},null),(l()(),c._26(null,["\n"])),(l()(),c._26(null,["\n"])),(l()(),c._30(0,[["thenBlock",2]],null,0,null,e)),(l()(),c._26(null,["\n"])),(l()(),c._30(0,[["failure",2]],null,0,null,r)),(l()(),c._26(null,["\n"]))],function(l,n){var u=n.component;l(n,9,0,u.form);l(n,20,0,"");l(n,21,0,"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$");l(n,24,0,"email");l(n,40,0,"password"),l(n,55,0,u.message.length>0,c._31(n,58))},function(l,n){var u=n.component;l(n,7,0,c._31(n,11).ngClassUntouched,c._31(n,11).ngClassTouched,c._31(n,11).ngClassPristine,c._31(n,11).ngClassDirty,c._31(n,11).ngClassValid,c._31(n,11).ngClassInvalid,c._31(n,11).ngClassPending),l(n,18,0,c._31(n,20).required?"":null,c._31(n,21).pattern?c._31(n,21).pattern:null,c._31(n,26).ngClassUntouched,c._31(n,26).ngClassTouched,c._31(n,26).ngClassPristine,c._31(n,26).ngClassDirty,c._31(n,26).ngClassValid,c._31(n,26).ngClassInvalid,c._31(n,26).ngClassPending),l(n,28,0,u.form.controls.email.valid||u.form.controls.email.pristine),l(n,37,0,c._31(n,42).ngClassUntouched,c._31(n,42).ngClassTouched,c._31(n,42).ngClassPristine,c._31(n,42).ngClassDirty,c._31(n,42).ngClassValid,c._31(n,42).ngClassInvalid,c._31(n,42).ngClassPending),l(n,44,0,u.form.controls.password.valid||u.form.controls.password.pristine),l(n,48,0,!u.form.valid)})}function o(l){return c._25(0,[(l()(),c._27(0,null,null,1,"login-register",[],null,null,null,s,m)),c._28(114688,null,0,d.a,[f.a,g.b],null,null)],function(l,n){l(n,1,0)},null)}var a=u("w0Su"),c=u("/oeL"),_=u("qbdv"),d=u("UbAT"),g=u("bm2B"),f=u("N/0P");u.d(n,"a",function(){return v});var p=[a.a],m=c._24({encapsulation:0,styles:p,data:{}}),v=c._29("login-register",d.a,o,{},{},[])},UbAT:function(l,n,u){"use strict";var t=u("bm2B"),i=u("N/0P");u.d(n,"a",function(){return e});var e=function(){function l(l,n){this.service=l,this._fb=n,this.success=!1,this.message=""}return l.prototype.registerUser=function(l){this.service.register(l).subscribe(this.isSuccess.bind(this),this.isSuccess.bind(this))},l.prototype.loginUser=function(l){this.service.login(l).subscribe(this.isSuccess.bind(this),this.isSuccess.bind(this))},l.prototype.isSuccess=function(l){console.log("res: ",l),l.token?(this.success=!0,this.message="Login successful"):(this.success=!1,console.log(this.message),this.message="Login unsuccessful",console.log(this.message))},l.prototype.toggleOverlay=function(){this.message=""},l.prototype.ngOnInit=function(){this.form=this._fb.group({email:["",[t.f.required]],password:["",[t.f.required]]})},l.ctorParameters=function(){return[{type:i.a},{type:t.b}]},l}()},"aR8+":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},cDNt:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("/oeL"),i=u("p5Ee"),e=u("+h1B"),r=u("fc+i");i.a.production&&u.i(t.a)(),u.i(r.a)().bootstrapModuleFactory(e.a)},p5Ee:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t={production:!0}},q4dy:function(l,n,u){"use strict";function t(l){return r._25(0,[(l()(),r._26(null,["\n"])),(l()(),r._27(0,null,null,21,"nav",[["class","navbar .navbar-inverse"]],null,null,null,null,null)),(l()(),r._26(null,["\n  "])),(l()(),r._27(0,null,null,18,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),r._26(null,["\n    "])),(l()(),r._27(0,null,null,4,"div",[["class","navbar-header"]],null,null,null,null,null)),(l()(),r._26(null,["\n      "])),(l()(),r._27(0,null,null,1,"a",[["class","navbar-brand"],["href","http://www.whitepanda.in/"],["target","_blank"]],null,null,null,null,null)),(l()(),r._26(null,["WhitePanda"])),(l()(),r._26(null,["\n    "])),(l()(),r._26(null,["\n    "])),(l()(),r._27(0,null,null,9,"ul",[["class","nav navbar-nav"]],null,null,null,null,null)),(l()(),r._26(null,["\n      "])),(l()(),r._27(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),r._27(0,null,null,1,"a",[["href","/login"]],null,null,null,null,null)),(l()(),r._26(null,["Login"])),(l()(),r._26(null,["\n      "])),(l()(),r._27(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),r._27(0,null,null,1,"a",[["href","/register"]],null,null,null,null,null)),(l()(),r._26(null,["Register"])),(l()(),r._26(null,["\n    "])),(l()(),r._26(null,["\n  "])),(l()(),r._26(null,["\n"])),(l()(),r._26(null,["\n\n"])),(l()(),r._27(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r._28(212992,null,0,s.y,[s.q,r.W,r.e,[8,null],r.T],null,null),(l()(),r._26(null,["\n"]))],function(l,n){l(n,25,0)},null)}function i(l){return r._25(0,[(l()(),r._27(0,null,null,1,"app-root",[],null,null,null,t,c)),r._28(49152,null,0,o.a,[],null,null)],null,null)}var e=u("NhKt"),r=u("/oeL"),s=u("BkNc"),o=u("wQAS");u.d(n,"a",function(){return _});var a=[e.a],c=r._24({encapsulation:0,styles:a,data:{}}),_=r._29("app-root",o.a,i,{},{},[])},q74L:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[".register[_ngcontent-%COMP%]{background-color:hsla(0,0%,100%,.2);border-radius:25px;padding:25px}"]},qtrl:function(l,n){function u(l){throw new Error("Cannot find module '"+l+"'.")}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="qtrl"},tbRa:function(l,n,u){"use strict";var t=u("bm2B"),i=u("N/0P");u.d(n,"a",function(){return e});var e=function(){function l(l,n){this.service=l,this._fb=n,this.success=!1,this.message=""}return l.prototype.registerUser=function(l){this.service.register(l).subscribe(this.isSuccess.bind(this),this.isSuccess.bind(this))},l.prototype.isSuccess=function(l){console.log("res: ",l),l.token?(this.success=!0,this.message="Registered successfully"):(this.success=!1,console.log(this.message),this.message="Registration unsuccessful",console.log(this.message))},l.prototype.toggleOverlay=function(){this.message=""},l.prototype.ngOnInit=function(){this.form=this._fb.group({firstName:["",[t.f.required]],lastName:["",[t.f.required]],email:["",[t.f.required]],password:["",[t.f.required]]})},l.ctorParameters=function(){return[{type:i.a},{type:t.b}]},l}()},vNSz:function(l,n,u){"use strict";var t=u("tbRa"),i=u("UbAT");u.d(n,"a",function(){return e});var e=(t.a,i.a,function(){function l(){}return l}())},w0Su:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[".login[_ngcontent-%COMP%]{background-color:hsla(0,0%,100%,.2);border-radius:25px;padding:25px}"]},wQAS:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()}},[0]);