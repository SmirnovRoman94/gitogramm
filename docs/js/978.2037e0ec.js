"use strict";(self["webpackChunkgitogram"]=self["webpackChunkgitogram"]||[]).push([[978],{9978:function(t,e,a){a.r(e),a.d(e,{default:function(){return ct}});a(7658);var n=a(3396),i=a(7139);const s={class:"back"},r={class:"header"},o={class:"logo",href:"#"},d={class:"close"},c={class:"stories"},l={key:0,class:"controls"};function m(t,e,a,m,u,h){const v=(0,n.up)("icon"),g=(0,n.up)("userSliderItem");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",r,[(0,n._)("a",o,[(0,n.Wm)(v,{name:"logo"})]),(0,n._)("div",d,[(0,n.Wm)(v,{name:"close",onClick:e[0]||(e[0]=e=>t.$router.push("/"))})])]),(0,n._)("div",c,[(0,n._)("div",{class:"content-stories",style:(0,i.j5)({transform:"translateX("+this.turnData+"px)"})},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.dataItemsRepo,((a,s)=>((0,n.wg)(),(0,n.iD)("div",{key:s,class:(0,i.C_)(["content-item",{active:t.activeIndex==s}])},[(0,n.Wm)(g,{data:a,active:"",loading:a.loading},null,8,["data","loading"]),t.activeIndex==s?((0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",{class:(0,i.C_)(["controls-item",h.regularClass])},[t.activeIndex>0?((0,n.wg)(),(0,n.j4)(v,{key:0,class:"icon",onClick:h.prev,name:"arrowLeft"},null,8,["onClick"])):(0,n.kq)("",!0),t.activeIndex<t.dataItemsRepo.length-1?((0,n.wg)(),(0,n.j4)(v,{key:1,class:"icon",onClick:e[1]||(e[1]=t=>h.next(null)),name:"arrowRight"})):(0,n.kq)("",!0)],2)])):(0,n.kq)("",!0)],2)))),128))],4)])])}var u=a(4959);const h={class:"wrapper"},v={class:"content"},g={key:0,class:"spiner"},p={key:1},I=["innerHTML"],f={key:2,class:"placeholder"},_={class:"footer"};function w(t,e,a,i,s,r){const o=(0,n.up)("progressLine"),d=(0,n.up)("avatar"),c=(0,n.up)("spiner"),l=(0,n.up)("placeholder"),m=(0,n.up)("itembutton");return(0,n.wg)(),(0,n.iD)("div",h,[(0,n.Wm)(o,{activeItem:a.active},null,8,["activeItem"]),(0,n.Wm)(d,{src:a.data.avatar,alt:a.data.login,title:a.data.name,class:"avatar-item"},null,8,["src","alt","title"]),(0,n._)("div",v,[1==a.loading?((0,n.wg)(),(0,n.iD)("div",g,[(0,n.Wm)(c)])):(0,n.kq)("",!0),a.data.data?((0,n.wg)(),(0,n.iD)("div",p,[(0,n._)("div",{class:"content-item",innerHTML:a.data.data},null,8,I)])):((0,n.wg)(),(0,n.iD)("div",f,[(0,n.Wm)(l,{count:3})]))]),(0,n._)("div",_,[(0,n.Wm)(m,{nameBtn:"Follow",changeTitle:"Unfollow"})])])}const D={ref:"indicator",class:"indicator"};function k(t,e,a,s,r,o){return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)(["c-progress",{active:t.active}])},[(0,n._)("div",D,null,512)],2)}var x={name:"progressLine",data:()=>({active:!1}),props:{activeItem:{type:Boolean,default:!1}},emits:["onFinish"],methods:{emitOnFinish(){this.$emit("onFinish")}},mounted(){setTimeout((()=>{this.active=this.activeItem}),500),this.$refs.indicator.addEventListener("transitionend",this.emitOnFinish)},beforeUnmount(){this.$refs.indicator.removeEventListener("transitionend",this.emitOnFinish)}},y=a(89);const T=(0,y.Z)(x,[["render",k],["__scopeId","data-v-563365d7"]]);var C=T;const b={class:"avatar-component"},F={class:"title"};function R(t,e,a,s,r,o){return(0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("img",(0,i.vs)((0,n.F4)(t.$attrs)),null,16),(0,n._)("p",F,(0,i.zw)(a.title),1)])}var $={name:"avatar",props:{title:{type:String}}};const q=(0,y.Z)($,[["render",R],["__scopeId","data-v-0d96edc3"]]);var L=q;function W(t,e,a,s,r,o){return(0,n.wg)(),(0,n.iD)("button",{class:(0,i.C_)(["btn",t.itemFollow]),onClick:e[0]||(e[0]=(...t)=>o.following&&o.following(...t))},(0,i.zw)("default"===this.itemFollow?a.nameBtn:a.changeTitle),3)}var Z={name:"button",data:()=>({itemFollow:"default"}),props:{nameBtn:{type:String},changeTitle:{type:String}},emits:["clicked"],methods:{following(){this.itemFollow="default"===this.itemFollow?"active":"default",this.$emit("clicked")}}};const S=(0,y.Z)(Z,[["render",W],["__scopeId","data-v-c984a658"]]);var B=S;const j={class:"spinner"};function H(t,e,a,i,s,r){return(0,n.wg)(),(0,n.iD)("div",j)}var O={name:"spiner"};const E=(0,y.Z)(O,[["render",H],["__scopeId","data-v-0b1e3dd0"]]);var z=E;const K=t=>((0,n.dD)("data-v-40fc381a"),t=t(),(0,n.Cn)(),t),M={class:"cards"},U={class:"card is-loading"},Y={class:"content"},N=K((()=>(0,n._)("h1",null,null,-1))),X={class:"items",ref:"items"},A=K((()=>(0,n._)("p",{class:"first"},null,-1))),G=K((()=>(0,n._)("p",{class:"second"},null,-1))),J=K((()=>(0,n._)("p",{class:"third"},null,-1))),P=K((()=>(0,n._)("p",{class:"firth"},null,-1))),Q=[A,G,J,P];function V(t,e,a,i,s,r){return(0,n.wg)(),(0,n.iD)("div",M,[(0,n._)("div",U,[(0,n._)("div",Y,[N,(0,n._)("div",X,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.arr,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"item",key:t},Q)))),128))],512)])])])}var tt={name:"placeholder_item",data:()=>({arr:[]}),props:{count:{type:Number,default:()=>1}},methods:{counItem(){for(let t=0;t<=this.count-1;t++)this.arr.push(t)}},mounted(){this.counItem()}};const et=(0,y.Z)(tt,[["render",V],["__scopeId","data-v-40fc381a"]]);var at=et,nt={name:"userSliderItem",components:{progressLine:C,avatar:L,itembutton:B,spiner:z,placeholder:at},props:{active:Boolean,loading:{type:Boolean,default:()=>!1},data:{type:Object,required:!0,default:()=>({})}}};const it=(0,y.Z)(nt,[["render",w],["__scopeId","data-v-7753f734"]]);var st=it,rt=a(65),ot={name:"stories_page",components:{icon:u.Z,userSliderItem:st},data:()=>({dataItemsRepo:[],activeIndex:0,turnData:0}),computed:{...(0,rt.Se)({dataItems:"trandings/getDataTrandings"}),...(0,rt.rn)({trendingsData:t=>t.trandings.data}),regularClass(){let t="";return t=this.activeIndex<=0?"end":"start",t}},methods:{...(0,rt.nv)({fetchTrandings:"trandings/fetchTrandings",fetchTrandingsItem:"trandings/fetchTrandingsItem"}),prev(){this.activeIndex--,this.turnData=this.turnData+475},next(t){t?(this.dataItemsRepo[this.activeIndex].loading=!0,this.fetchTrandingsItem(this.dataItemsRepo[this.activeIndex]),this.turnData=-475*t):(this.activeIndex++,this.dataItemsRepo[this.activeIndex].loading=!0,this.fetchTrandingsItem(this.dataItemsRepo[this.activeIndex]),this.turnData=this.turnData-475)}},watch:{dataItems:function(){if(this.dataItems.forEach((t=>{let e={login:t.owner.login,name:t.name,avatar:t.owner.avatar_url,loading:!1};this.dataItemsRepo.push(e)})),this.$route.query.id){let t=this.dataItems.findIndex((t=>t.id==this.$route.query.id)),e={login:this.dataItems[t].owner.login,name:this.dataItems[t].name,avatar:this.dataItems[t].owner.avatar_url,loading:!1};-1!==t&&(this.fetchTrandingsItem(e),this.activeIndex=t,0!==t&&this.next(t))}else this.fetchTrandingsItem(this.dataItems[0])},activeIndex:function(){console.log(this.activeIndex)},trendingsData:function(){this.dataItemsRepo.splice(this.activeIndex,1,this.trendingsData)}},async created(){console.log(this.$route.query),await this.fetchTrandings()}};const dt=(0,y.Z)(ot,[["render",m],["__scopeId","data-v-b399266c"]]);var ct=dt}}]);
//# sourceMappingURL=978.2037e0ec.js.map