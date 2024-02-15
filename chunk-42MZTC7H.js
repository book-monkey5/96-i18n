import{a as ne}from"./chunk-4B4TZKMO.js";import{$ as c,Aa as x,G as h,H as s,I as f,J,L as Q,N as m,P as a,R as _,S as r,T as E,U as A,V as N,W,X as p,Y as D,Z as d,aa as C,ba as B,d as F,da as Y,ea as S,fa as I,ga as Z,la as k,m as z,ma as b,na as P,oa as ee,p as j,pa as te,q as H,r as g,s as L,t as v,u as U,ua as oe,v as V,w as q,wa as ie,xa as $,z as M,za as y}from"./chunk-XRIHGHCS.js";var re=(()=>{let e=class e{constructor(){this.confirm=new j}onClick(){window.confirm(this.confirmText)&&this.confirm.emit()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=v({type:e,selectors:[["","bmConfirm",""]],hostBindings:function(o,l){o&1&&D("click",function(){return l.onClick()})},inputs:{confirmText:[H.None,"bmConfirm","confirmText"]},outputs:{confirm:"confirm"}});let t=e;return t})();var se=(()=>{let e=class e{constructor(n,o,l){this.template=n,this.viewContainer=o,this.authService=l,this.destroy$=new F,this.authService.isAuthenticated$.pipe(z(this.destroy$)).subscribe(O=>{O?this.viewContainer.createEmbeddedView(this.template):this.viewContainer.clear()})}ngOnDestroy(){this.destroy$.next()}};e.\u0275fac=function(o){return new(o||e)(f(J),f(Q),f(ne))},e.\u0275dir=v({type:e,selectors:[["","bmLoggedinOnly",""]]});let t=e;return t})();var K=(()=>{let e=class e{transform(n){return n?`${n.substring(0,3)}-${n.substring(3)}`:""}};e.\u0275fac=function(o){return new(o||e)},e.\u0275pipe=U({name:"isbn",type:e,pure:!0});let t=e;return t})();function ue(t,e){if(t&1&&(_(0,"p",13),c(1),r()),t&2){let i=d().ngIf;s(),C(i.subtitle)}}function Ce(t,e){if(t&1&&(_(0,"li"),c(1),r()),t&2){let i=e.$implicit;s(),C(i)}}function Be(t,e){if(t&1&&(_(0,"div")(1,"h2"),p(2,14),r(),c(3),S(4,"date"),r()),t&2){let i=d().ngIf;s(3),B(" ",Z(4,1,i.published,"longDate")," ")}}function Ie(t,e){if(t&1&&E(0,"img",15),t&2){let i=d().ngIf;a("src",i.thumbnailUrl,h)}}var Te=t=>["/admin/edit",t];function ge(t,e){if(t&1){let i=W();A(0),_(1,"button",16),D("confirm",function(){V(i);let o=d().ngIf,l=d();return q(l.removeBook(o.isbn))}),p(2,17),r(),_(3,"a",18),p(4,19),r(),N()}if(t&2){let i=d().ngIf;s(3),a("routerLink",Y(1,Te,i.isbn))}}function Ee(t,e){if(t&1&&(_(0,"div",1)(1,"h1"),c(2),r(),m(3,ue,2,1,"p",2),_(4,"div",3)(5,"div")(6,"h2"),p(7,4),r(),_(8,"ul"),m(9,Ce,2,1,"li",5),r()(),_(10,"div")(11,"h2"),p(12,6),r(),c(13),S(14,"isbn"),r(),m(15,Be,5,4,"div",7),r(),_(16,"h2"),p(17,8),r(),_(18,"p"),c(19),r(),m(20,Ie,1,1,"img",9),_(21,"a",10),p(22,11),r(),m(23,ge,5,3,"ng-container",12),r()),t&2){let i=e.ngIf;s(2),C(i.title),s(),a("ngIf",i.subtitle),s(6),a("ngForOf",i.authors),s(4),B(" ",I(14,7,i.isbn)," "),s(2),a("ngIf",i.published),s(4),C(i.description),s(),a("ngIf",i.thumbnailUrl)}}var ae=(()=>{let e=class e{constructor(n,o,l){this.service=n,this.route=o,this.router=l;let O=this.route.snapshot.paramMap.get("isbn");this.book$=this.service.getSingle(O)}removeBook(n){this.service.remove(n).subscribe(()=>{this.router.navigateByUrl("/books")})}};e.\u0275fac=function(o){return new(o||e)(f(x),f(oe),f(ie))},e.\u0275cmp=g({type:e,selectors:[["bm-book-details"]],decls:2,vars:3,consts:()=>{let n;n=$localize`:headline authors|Headline for the authors@@BookDetailsComponentAuthors:Authors`;let o;o=$localize`:headline ISBN|Headline for the ISBN@@BookDetailsComponentIsbn:ISBN`;let l;l=$localize`:headline description|Headline for the description@@BookDetailsComponentDescription:Description`;let O;O=$localize`:cover alt text|Alternative text when no cover is defined@@BookDetailsComponentAltCover:Cover`;let R;R=$localize`:link back|Link for navigating back to the books list@@BookDetailsComponentBackToList:Back to list`;let w;w=$localize`:headline published|Headline for the published date@@BookDetailsComponentPublished:Published`;let G;G=$localize`:button remove|Button text to remove a book@@BookDetailsComponentRemove: Remove book `;let X;return X=$localize`:button edit|Button text to edit a book@@BookDetailsComponentEdit: Edit book `,[["class","details",4,"ngIf"],[1,"details"],["role","doc-subtitle",4,"ngIf"],[1,"header"],n,[4,"ngFor","ngForOf"],o,[4,"ngIf"],l,["alt",O,3,"src",4,"ngIf"],["routerLink","..",1,"button","arrow-left"],R,[4,"bmLoggedinOnly"],["role","doc-subtitle"],w,["alt",O,3,"src"],["bmConfirm","Remove book?",1,"red",3,"confirm"],G,[1,"button",3,"routerLink"],X]},template:function(o,l){o&1&&(m(0,Ee,24,9,"div",0),S(1,"async")),o&2&&a("ngIf",I(1,1,l.book$))},dependencies:[k,b,$,re,se,P,ee,K]});let t=e;return t})();function ke(t,e){if(t&1&&E(0,"img",7),t&2){let i=d(2);a("src",i.book.thumbnailUrl,h)}}function be(t,e){if(t&1&&(_(0,"p",8),c(1),r()),t&2){let i=d(2);s(),B(" ",i.book.subtitle," ")}}function Le(t,e){if(t&1&&(_(0,"li"),c(1),r()),t&2){let i=e.$implicit;s(),B(" ",i," ")}}function ve(t,e){if(t&1&&(_(0,"a",1),m(1,ke,1,1,"img",2),_(2,"h2"),c(3),r(),m(4,be,2,1,"p",3),_(5,"ul",4),m(6,Le,2,1,"li",5),r(),_(7,"div"),A(8),p(9,6),N(),c(10),S(11,"isbn"),r()()),t&2){let i=d();a("routerLink",i.book.isbn),s(),a("ngIf",i.book.thumbnailUrl),s(2),C(i.book.title),s(),a("ngIf",i.book.subtitle),s(2),a("ngForOf",i.book.authors),s(4),B(" ",I(11,6,i.book.isbn),"")}}var me=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=g({type:e,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:1,vars:1,consts:()=>{let n;n=$localize`:cover alt text|Alternative text when no cover is defined@@BookListItemComponentAltCover:Cover`;let o;return o=$localize`:book text before ISBN|Text for ISBN right before the number@@BookListItemComponentIsbn:ISBN`,[["class","list-item",3,"routerLink",4,"ngIf"],[1,"list-item",3,"routerLink"],["alt",n,3,"src",4,"ngIf"],["role","doc-subtitle",4,"ngIf"],[1,"comma-list"],[4,"ngFor","ngForOf"],o,["alt",n,3,"src"],["role","doc-subtitle"]]},template:function(o,l){o&1&&m(0,ve,12,8,"a",0),o&2&&a("ngIf",l.book)},dependencies:[k,b,$,K]});let t=e;return t})();function he(t,e){if(t&1&&(_(0,"li"),E(1,"bm-book-list-item",5),r()),t&2){let i=e.$implicit;s(),a("book",i)}}function Ae(t,e){t&1&&(_(0,"li"),p(1,6),r())}function Ne(t,e){if(t&1&&(_(0,"ul",2),m(1,he,2,1,"li",3)(2,Ae,2,0,"li",4),r()),t&2){let i=e.ngIf;s(),a("ngForOf",i),s(),a("ngIf",!i.length)}}var pe=(()=>{let e=class e{constructor(n){this.service=n,this.books$=this.service.getAll()}};e.\u0275fac=function(o){return new(o||e)(f(x))},e.\u0275cmp=g({type:e,selectors:[["bm-book-list"]],decls:4,vars:3,consts:()=>{let n;n=$localize`:title books|Title for the books page@@BookListComponentTitle:Books`;let o;return o=$localize`:text no books|Text displayed when no books are available@@BookListComponentNoBooks: No books available. `,[n,["class","book-list",4,"ngIf"],[1,"book-list"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"book"],o]},template:function(o,l){o&1&&(_(0,"h1"),p(1,0),r(),m(2,Ne,3,2,"ul",1),S(3,"async")),o&2&&(s(2),a("ngIf",I(3,1,l.books$)))},dependencies:[k,b,me,P]});let t=e;return t})();var De=[{path:"",component:pe},{path:":isbn",component:ae}],ce=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=L({type:e}),e.\u0275inj=M({imports:[y.forChild(De),y]});let t=e;return t})();var st=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=L({type:e}),e.\u0275inj=M({imports:[te,ce]});let t=e;return t})();export{st as BooksModule};
