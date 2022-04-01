"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1820],{1820:(Y,m,c)=>{c.r(m),c.d(m,{ContactsPageModule:()=>y});var u=c(9808),a=c(4182),r=c(9537),l=c(7201),g=c(655),p=c(3209),t=c(2096),d=c(6027),_=c(2963);function h(o,e){1&o&&(t.TgZ(0,"span"),t._uU(1,"Preencha este campo."),t.qZA())}function Z(o,e){1&o&&(t.TgZ(0,"span"),t._uU(1,"Pelo menos 3 caracteres."),t.qZA())}function x(o,e){if(1&o&&(t.TgZ(0,"ion-text",13),t.YNc(1,h,2,0,"span",14),t.YNc(2,Z,2,0,"span",14),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",null==n.contactForm.controls.name.errors?null:n.contactForm.controls.name.errors.required),t.xp6(1),t.Q6J("ngIf",null==n.contactForm.controls.name.errors?null:n.contactForm.controls.name.errors.minlength)}}function F(o,e){1&o&&(t.TgZ(0,"span"),t._uU(1,"Preencha este campo."),t.qZA())}function P(o,e){1&o&&(t.TgZ(0,"span"),t._uU(1,"Deve ser um e-mail."),t.qZA())}function T(o,e){if(1&o&&(t.TgZ(0,"ion-text",13),t.YNc(1,F,2,0,"span",14),t.YNc(2,P,2,0,"span",14),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",null==n.contactForm.controls.email.errors?null:n.contactForm.controls.email.errors.required),t.xp6(1),t.Q6J("ngIf",null==n.contactForm.controls.email.errors?null:n.contactForm.controls.email.errors.email)}}function C(o,e){1&o&&(t.TgZ(0,"span"),t._uU(1,"Preencha este campo."),t.qZA())}function b(o,e){1&o&&(t.TgZ(0,"span"),t._uU(1,"Pelo menos 5 caracteres."),t.qZA())}function v(o,e){if(1&o&&(t.TgZ(0,"ion-text",13),t.YNc(1,C,2,0,"span",14),t.YNc(2,b,2,0,"span",14),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",null==n.contactForm.controls.subject.errors?null:n.contactForm.controls.subject.errors.required),t.xp6(1),t.Q6J("ngIf",null==n.contactForm.controls.subject.errors?null:n.contactForm.controls.subject.errors.minlength)}}function A(o,e){1&o&&(t.TgZ(0,"span"),t._uU(1,"Preencha este campo."),t.qZA())}function q(o,e){1&o&&(t.TgZ(0,"span"),t._uU(1,"Pelo menos 5 caracteres."),t.qZA())}function I(o,e){if(1&o&&(t.TgZ(0,"ion-text",13),t.YNc(1,A,2,0,"span",14),t.YNc(2,q,2,0,"span",14),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",null==n.contactForm.controls.message.errors?null:n.contactForm.controls.message.errors.required),t.xp6(1),t.Q6J("ngIf",null==n.contactForm.controls.message.errors?null:n.contactForm.controls.message.errors.minlength)}}const U=[{path:"",component:(()=>{class o{constructor(n,s,i,f,N){this.fb=n,this.alertController=s,this.router=i,this.afs=f,this.date=N}ngOnInit(){this.createForm()}createForm(){this.contactForm=this.fb.group({name:["",[a.kI.required,a.kI.minLength(3)]],email:["",[a.kI.required,a.kI.email]],subject:["",[a.kI.required,a.kI.minLength(5)]],message:["",[a.kI.required,a.kI.minLength(5)]]})}submitForm(){return(0,g.mG)(this,void 0,void 0,function*(){this.contactForm.invalid?this.presentAlert("Ooooops!","Preencha todos os campos antes de enviar...",!1):(this.contactData=this.contactForm.value,this.contactData.date=this.date.brNow(),this.contactData.status="recebido",yield(0,p.ET)((0,p.hJ)(this.afs,"contact"),this.contactData).then(()=>{const n=this.contactForm.value.name.split(" ")[0];this.presentAlert(`Ol\xe1 ${n}!`,"Seu contato foi enviado com sucesso.<br><br>Obrigado...",!0)}).catch(()=>{this.presentAlert("Ooooops!","ocorreu um erro ao enviar seu contato.<br><br>Por favor, tente mais tarde...",!1)}))})}presentAlert(n,s,i){return(0,g.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:n,message:s,buttons:[{text:"OK",handler:()=>{if(!i)return!0;this.contactForm.markAsPristine(),this.contactForm.reset({name:this.contactForm.value.name,email:this.contactForm.value.email}),this.router.navigate(["/inicio"])}}]})).present()})}goSocial(n){let s=""}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(a.qu),t.Y36(r.Br),t.Y36(l.F0),t.Y36(d.gg),t.Y36(_.R))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-contacts"]],decls:36,vars:6,consts:[["slot","start"],[1,"ion-padding"],[1,"ion-text-center"],["name","chatbubbles","color","warning"],["novalidate","",3,"formGroup","ngSubmit"],["lines","full",1,"ion-no-margin"],["position","floating"],["type","text","formControlName","name","required",""],["color","danger",4,"ngIf"],["type","email","formControlName","email","required",""],["type","subject","formControlName","subject","required",""],["formControlName","message","required","","autoGrow",""],["type","submit","size","default","color","primary",3,"disabled"],["color","danger"],[4,"ngIf"]],template:function(n,s){1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Fa\xe7a contato"),t.qZA()()(),t.TgZ(6,"ion-content",1)(7,"div",2),t._UZ(8,"ion-icon",3),t.qZA(),t.TgZ(9,"p"),t._uU(10,"Preencha todos os campos para enviar um contato para a equipe do aplicativo."),t.qZA(),t.TgZ(11,"form",4),t.NdJ("ngSubmit",function(){return s.submitForm()}),t.TgZ(12,"ion-list",5)(13,"ion-item")(14,"ion-label",6),t._uU(15,"Nome:"),t.qZA(),t._UZ(16,"ion-input",7),t.YNc(17,x,3,2,"ion-text",8),t.qZA(),t.TgZ(18,"ion-item")(19,"ion-label",6),t._uU(20,"E-mail:"),t.qZA(),t._UZ(21,"ion-input",9),t.YNc(22,T,3,2,"ion-text",8),t.qZA(),t.TgZ(23,"ion-item")(24,"ion-label",6),t._uU(25,"Assunto:"),t.qZA(),t._UZ(26,"ion-input",10),t.YNc(27,v,3,2,"ion-text",8),t.qZA(),t.TgZ(28,"ion-item")(29,"ion-label",6),t._uU(30,"Mensagem:"),t.qZA(),t._UZ(31,"ion-textarea",11),t.YNc(32,I,3,2,"ion-text",8),t.qZA(),t.TgZ(33,"ion-item")(34,"ion-button",12),t._uU(35,"Enviar"),t.qZA()()()()()),2&n&&(t.xp6(11),t.Q6J("formGroup",s.contactForm),t.xp6(6),t.Q6J("ngIf",s.contactForm.controls.name.dirty&&s.contactForm.controls.name.errors),t.xp6(5),t.Q6J("ngIf",s.contactForm.controls.email.dirty&&s.contactForm.controls.email.errors),t.xp6(5),t.Q6J("ngIf",s.contactForm.controls.subject.dirty&&s.contactForm.controls.subject.errors),t.xp6(5),t.Q6J("ngIf",s.contactForm.controls.message.dirty&&s.contactForm.controls.message.errors),t.xp6(2),t.Q6J("disabled",s.contactForm.invalid))},directives:[r.Gu,r.sr,r.Sm,r.fG,r.wd,r.W2,r.gu,a._Y,a.JL,a.sg,r.q_,r.Ie,r.Q$,r.pK,r.j9,a.JJ,a.u,a.Q7,u.O5,r.yW,r.g2,r.YG],styles:["div[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:8rem}"]}),o})()}];let J=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.Bz.forChild(U)],l.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,a.u5,r.Pc,J,a.UX]]}),o})()}}]);