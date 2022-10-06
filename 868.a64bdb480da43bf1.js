"use strict";(self.webpackChunkbook_monkey=self.webpackChunkbook_monkey||[]).push([[868],{9868:(w,u,_)=>{_.r(u),_.d(u,{BooksModule:()=>q});var s=_(6895),O=_(6158),o=_(8256),a=_(6384);let S=(()=>{class e{constructor(){this.confirm=new o.vpe}onClick(){window.confirm(this.confirmText)&&this.confirm.emit()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=o.lG2({type:e,selectors:[["","bmConfirm",""]],hostBindings:function(t,i){1&t&&o.NdJ("click",function(){return i.onClick()})},inputs:{confirmText:["bmConfirm","confirmText"]},outputs:{confirm:"confirm"}}),e})();var g=_(7579),f=_(4482),C=_(5403),d=_(8421),k=_(5032),A=_(8338);let L=(()=>{class e{constructor(t,i,l){this.template=t,this.viewContainer=i,this.authService=l,this.destroy$=new g.x,this.authService.isAuthenticated$.pipe(function I(e){return(0,f.e)((n,t)=>{(0,d.Xf)(e).subscribe((0,C.x)(t,()=>t.complete(),k.Z)),!t.closed&&n.subscribe(t)})}(this.destroy$)).subscribe(r=>{r?this.viewContainer.createEmbeddedView(this.template):this.viewContainer.clear()})}ngOnDestroy(){this.destroy$.next()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.Rgc),o.Y36(o.s_b),o.Y36(A.e))},e.\u0275dir=o.lG2({type:e,selectors:[["","bmLoggedinOnly",""]]}),e})(),m=(()=>{class e{transform(t){return t?`${t.substring(0,3)}-${t.substring(3)}`:""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o.Yjl({name:"isbn",type:e,pure:!0}),e})();function E(e,n){if(1&e&&(o.TgZ(0,"p",13),o._uU(1),o.qZA()),2&e){const t=o.oxw().ngIf;o.xp6(1),o.Oqu(t.subtitle)}}function b(e,n){if(1&e&&(o.TgZ(0,"li"),o._uU(1),o.qZA()),2&e){const t=n.$implicit;o.xp6(1),o.Oqu(t)}}function M(e,n){if(1&e&&(o.TgZ(0,"div")(1,"h2"),o.SDv(2,14),o.qZA(),o._uU(3),o.ALo(4,"date"),o.qZA()),2&e){const t=o.oxw().ngIf;o.xp6(3),o.hij(" ",o.xi3(4,1,t.published,"longDate")," ")}}function N(e,n){if(1&e&&o._UZ(0,"img",15),2&e){const t=o.oxw().ngIf;o.Q6J("src",t.thumbnailUrl,o.LSH)}}const v=function(e){return["/admin/edit",e]};function D(e,n){if(1&e){const t=o.EpF();o.ynx(0),o.TgZ(1,"button",16),o.NdJ("confirm",function(){o.CHM(t);const l=o.oxw().ngIf,r=o.oxw();return o.KtG(r.removeBook(l.isbn))}),o.SDv(2,17),o.qZA(),o.TgZ(3,"a",18),o.SDv(4,19),o.qZA(),o.BQk()}if(2&e){const t=o.oxw().ngIf;o.xp6(3),o.Q6J("routerLink",o.VKq(1,v,t.isbn))}}function h(e,n){if(1&e&&(o.TgZ(0,"div",1)(1,"h1"),o._uU(2),o.qZA(),o.YNc(3,E,2,1,"p",2),o.TgZ(4,"div",3)(5,"div")(6,"h2"),o.SDv(7,4),o.qZA(),o.TgZ(8,"ul"),o.YNc(9,b,2,1,"li",5),o.qZA()(),o.TgZ(10,"div")(11,"h2"),o.SDv(12,6),o.qZA(),o._uU(13),o.ALo(14,"isbn"),o.qZA(),o.YNc(15,M,5,4,"div",7),o.qZA(),o.TgZ(16,"h2"),o.SDv(17,8),o.qZA(),o.TgZ(18,"p"),o._uU(19),o.qZA(),o.YNc(20,N,1,1,"img",9),o.TgZ(21,"a",10),o.SDv(22,11),o.qZA(),o.YNc(23,D,5,3,"ng-container",12),o.qZA()),2&e){const t=n.ngIf;o.xp6(2),o.Oqu(t.title),o.xp6(1),o.Q6J("ngIf",t.subtitle),o.xp6(6),o.Q6J("ngForOf",t.authors),o.xp6(4),o.hij(" ",o.lcZ(14,7,t.isbn)," "),o.xp6(2),o.Q6J("ngIf",t.published),o.xp6(4),o.Oqu(t.description),o.xp6(1),o.Q6J("ngIf",t.thumbnailUrl)}}let P=(()=>{class e{constructor(t,i,l){this.service=t,this.route=i,this.router=l;const r=this.route.snapshot.paramMap.get("isbn");this.book$=this.service.getSingle(r)}removeBook(t){this.service.remove(t).subscribe(()=>{this.router.navigateByUrl("/books")})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(a.T),o.Y36(O.gz),o.Y36(O.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["bm-book-details"]],decls:2,vars:3,consts:function(){let n,t,i,l,r,T,p,B;return n=$localize`:headline authors|Headline for the authors@@BookDetailsComponentAuthors:Authors`,t=$localize`:headline ISBN|Headline for the ISBN@@BookDetailsComponentIsbn:ISBN`,i=$localize`:headline description|Headline for the description@@BookDetailsComponentDescription:Description`,l=$localize`:cover alt text|Alternative text when no cover is defined@@BookDetailsComponentAltCover:Cover`,r=$localize`:link back|Link for navigating back to the books list@@BookDetailsComponentBackToList:Back to list`,T=$localize`:headline published|Headline for the published date@@BookDetailsComponentPublished:Published`,p=$localize`:button remove|Button text to remove a book@@BookDetailsComponentRemove: Remove book `,B=$localize`:button edit|Button text to edit a book@@BookDetailsComponentEdit: Edit book `,[["class","details",4,"ngIf"],[1,"details"],["role","doc-subtitle",4,"ngIf"],[1,"header"],n,[4,"ngFor","ngForOf"],t,[4,"ngIf"],i,["alt",l,3,"src",4,"ngIf"],["routerLink","..",1,"button","arrow-left"],r,[4,"bmLoggedinOnly"],["role","doc-subtitle"],T,["alt",l,3,"src"],["bmConfirm","Remove book?",1,"red",3,"confirm"],p,[1,"button",3,"routerLink"],B]},template:function(t,i){1&t&&(o.YNc(0,h,24,9,"div",0),o.ALo(1,"async")),2&t&&o.Q6J("ngIf",o.lcZ(1,1,i.book$))},dependencies:[s.sg,s.O5,O.yS,S,L,s.Ov,s.uU,m]}),e})();function K(e,n){if(1&e&&o._UZ(0,"img",7),2&e){const t=o.oxw(2);o.Q6J("src",t.book.thumbnailUrl,o.LSH)}}function $(e,n){if(1&e&&(o.TgZ(0,"p",8),o._uU(1),o.qZA()),2&e){const t=o.oxw(2);o.xp6(1),o.hij(" ",t.book.subtitle," ")}}function x(e,n){if(1&e&&(o.TgZ(0,"li"),o._uU(1),o.qZA()),2&e){const t=n.$implicit;o.xp6(1),o.hij(" ",t," ")}}function R(e,n){if(1&e&&(o.TgZ(0,"a",1),o.YNc(1,K,1,1,"img",2),o.TgZ(2,"h2"),o._uU(3),o.qZA(),o.YNc(4,$,2,1,"p",3),o.TgZ(5,"ul",4),o.YNc(6,x,2,1,"li",5),o.qZA(),o.TgZ(7,"div"),o.ynx(8),o.SDv(9,6),o.BQk(),o._uU(10),o.ALo(11,"isbn"),o.qZA()()),2&e){const t=o.oxw();o.Q6J("routerLink",t.book.isbn),o.xp6(1),o.Q6J("ngIf",t.book.thumbnailUrl),o.xp6(2),o.Oqu(t.book.title),o.xp6(1),o.Q6J("ngIf",t.book.subtitle),o.xp6(2),o.Q6J("ngForOf",t.book.authors),o.xp6(4),o.hij(" ",o.lcZ(11,6,t.book.isbn),"")}}let Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:1,vars:1,consts:function(){let n,t;return n=$localize`:cover alt text|Alternative text when no cover is defined@@BookListItemComponentAltCover:Cover`,t=$localize`:book text before ISBN|Text for ISBN right before the number@@BookListItemComponentIsbn:ISBN`,[[3,"routerLink",4,"ngIf"],[3,"routerLink"],["alt",n,3,"src",4,"ngIf"],["role","doc-subtitle",4,"ngIf"],[1,"comma-list"],[4,"ngFor","ngForOf"],t,["alt",n,3,"src"],["role","doc-subtitle"]]},template:function(t,i){1&t&&o.YNc(0,R,12,8,"a",0),2&t&&o.Q6J("ngIf",i.book)},dependencies:[s.sg,s.O5,O.yS,m]}),e})();function y(e,n){if(1&e&&(o.TgZ(0,"li"),o._UZ(1,"bm-book-list-item",5),o.qZA()),2&e){const t=n.$implicit;o.xp6(1),o.Q6J("book",t)}}function X(e,n){1&e&&(o.TgZ(0,"li"),o.SDv(1,6),o.qZA())}function G(e,n){if(1&e&&(o.TgZ(0,"ul",2),o.YNc(1,y,2,1,"li",3),o.YNc(2,X,2,0,"li",4),o.qZA()),2&e){const t=n.ngIf;o.xp6(1),o.Q6J("ngForOf",t),o.xp6(1),o.Q6J("ngIf",!t.length)}}const J=[{path:"",component:(()=>{class e{constructor(t){this.service=t,this.books$=this.service.getAll()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(a.T))},e.\u0275cmp=o.Xpm({type:e,selectors:[["bm-book-list"]],decls:4,vars:3,consts:function(){let n,t;return n=$localize`:title books|Title for the books page@@BookListComponentTitle:Books`,t=$localize`:text no books|Text displayed when no books are available@@BookListComponentNoBooks: No books available. `,[n,["class","book-list",4,"ngIf"],[1,"book-list"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"book"],t]},template:function(t,i){1&t&&(o.TgZ(0,"h1"),o.SDv(1,0),o.qZA(),o.YNc(2,G,3,2,"ul",1),o.ALo(3,"async")),2&t&&(o.xp6(2),o.Q6J("ngIf",o.lcZ(3,1,i.books$)))},dependencies:[s.sg,s.O5,Z,s.Ov]}),e})()},{path:":isbn",component:P}];let Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[O.Bz.forChild(J),O.Bz]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[s.ez,Y]}),e})()}}]);